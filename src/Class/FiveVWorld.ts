import { Vector3 } from "../utils/Vector3";
import { TransformNumberArrayInVector3 } from "../utils/Transformer";
import { FiveVVehicle } from "./FiveVVehicle";
import { FiveVPed } from "./FiveVPed";
import { FiveVObject } from "./FiveVObject";

/** Helper function for async delays */
const wait = (ms: number): Promise<void> => new Promise((resolve) => { setTimeout(resolve, ms); });

/**
 * Weather types available in GTA V
 */
export enum WeatherType {
    ExtraSunny = "EXTRASUNNY",
    Clear = "CLEAR",
    Clouds = "CLOUDS",
    Smog = "SMOG",
    Foggy = "FOGGY",
    Overcast = "OVERCAST",
    Rain = "RAIN",
    Thunder = "THUNDER",
    Clearing = "CLEARING",
    Neutral = "NEUTRAL",
    Snow = "SNOW",
    Blizzard = "BLIZZARD",
    Snowlight = "SNOWLIGHT",
    Christmas = "XMAS",
    Halloween = "HALLOWEEN"
}

/**
 * Raycast result interface
 */
export interface RaycastResult {
    hit: boolean;
    endCoords: Vector3;
    surfaceNormal: Vector3;
    entityHit: number;
    materialHash: number;
}

/**
 * Static class for world manipulation and spawning
 */
export class FiveVWorld {

    // ==================== TIME ====================

    /**
     * Returns the current game time
     * @returns Object with hour, minute, second
     * @see [GetClockHours](https://docs.fivem.net/natives/?_0x25223CA6B4D20B7F) for more information.
     */
    public static getTime(): { hour: number; minute: number; second: number } {
        return {
            hour: GetClockHours(),
            minute: GetClockMinutes(),
            second: GetClockSeconds()
        };
    }

    /**
     * Sets the game time
     * @param hour The hour (0-23)
     * @param minute The minute (0-59)
     * @param second The second (0-59)
     * @see [SetClockTime](https://docs.fivem.net/natives/?_0x47C3B5848C3E45D8) for more information.
     */
    public static setTime(hour: number, minute: number, second: number = 0): void {
        SetClockTime(hour, minute, second);
    }

    /**
     * Pauses or unpauses the game clock
     * @param paused true to pause, false to resume
     * @see [PauseClock](https://docs.fivem.net/natives/?_0x4055E40BD2DBEC1D) for more information.
     */
    public static pauseClock(paused: boolean): void {
        PauseClock(paused);
    }

    /**
     * Advances the game clock by a specified amount
     * @param hours Hours to advance
     * @param minutes Minutes to advance
     * @param seconds Seconds to advance
     * @see [AddToClockTime](https://docs.fivem.net/natives/?_0xD716F30D8C8980E2) for more information.
     */
    public static advanceClock(hours: number, minutes: number, seconds: number): void {
        AddToClockTime(hours, minutes, seconds);
    }

    // ==================== WEATHER ====================

    /**
     * Returns the current weather type hash
     * @returns The weather type hash
     * @see [GetPrevWeatherTypeHashName](https://docs.fivem.net/natives/?_0xF3BBE884A14BB413) for more information.
     */
    public static getCurrentWeather(): number {
        return GetPrevWeatherTypeHashName();
    }

    /**
     * Sets the weather type
     * @param weather The weather type as {@link WeatherType} or string
     * @see [SetWeatherTypeNow](https://docs.fivem.net/natives/?_0x29B487C359E19889) for more information.
     */
    public static setWeather(weather: WeatherType | string): void {
        SetWeatherTypeNow(weather);
    }

    /**
     * Sets the weather type to persist
     * @param weather The weather type as {@link WeatherType} or string
     * @see [SetWeatherTypePersist](https://docs.fivem.net/natives/?_0x704983DF) for more information.
     */
    public static setWeatherPersist(weather: WeatherType | string): void {
        SetWeatherTypePersist(weather);
    }

    /**
     * Transitions to a new weather type over time
     * @param weather The target weather type
     * @param transitionTime The transition time (0.0-1.0)
     * @see [SetWeatherTypeOvertimePersist](https://docs.fivem.net/natives/?_0xFB5045B7C42B75BF) for more information.
     */
    public static transitionToWeather(weather: WeatherType | string, transitionTime: number): void {
        SetWeatherTypeOvertimePersist(weather, transitionTime);
    }

    /**
     * Clears weather override
     * @see [ClearOverrideWeather](https://docs.fivem.net/natives/?_0x338D2E3477711050) for more information.
     */
    public static clearWeatherOverride(): void {
        ClearOverrideWeather();
    }

    /**
     * Sets the wind speed
     * @param speed The wind speed
     * @see [SetWind](https://docs.fivem.net/natives/?_0xAC3A74E8384A9919) for more information.
     */
    public static setWindSpeed(speed: number): void {
        SetWind(speed);
    }

    /**
     * Returns the current wind speed
     * @returns The wind speed
     * @see [GetWindSpeed](https://docs.fivem.net/natives/?_0xA8CF1CC0AFCD3F12) for more information.
     */
    public static getWindSpeed(): number {
        return GetWindSpeed();
    }

    /**
     * Sets the wind direction
     * @param direction The wind direction in degrees
     * @see [SetWindDirection](https://docs.fivem.net/natives/?_0xEB0F4468467B4528) for more information.
     */
    public static setWindDirection(direction: number): void {
        SetWindDirection(direction);
    }

    // ==================== GRAVITY ====================

    /**
     * Sets the gravity level
     * @param level The gravity level (default is 9.8)
     * @see [SetGravityLevel](https://docs.fivem.net/natives/?_0x740E14FAD5842351) for more information.
     */
    public static setGravityLevel(level: number): void {
        SetGravityLevel(level);
    }

    // ==================== SPAWNING ====================

    /**
     * Creates a vehicle at a specific position
     * @param model The model name or hash
     * @param position The spawn position
     * @param heading The spawn heading
     * @param isNetwork Whether the vehicle should be networked
     * @param netMissionEntity Whether it's a mission entity
     * @returns Promise that resolves to a FiveVVehicle instance
     */
    public static async createVehicle(
        model: string | number,
        position: Vector3,
        heading: number = 0.0,
        isNetwork: boolean = true,
        netMissionEntity: boolean = false
    ): Promise<FiveVVehicle> {
        const hash = typeof model === "string" ? GetHashKey(model) : model;

        if (!IsModelInCdimage(hash) || !IsModelAVehicle(hash)) {
            throw new Error(`Invalid vehicle model: ${model}`);
        }

        RequestModel(hash);
        while (!HasModelLoaded(hash)) {
            await wait(10);
        }

        const vehicle = CreateVehicle(hash, position.x, position.y, position.z, heading, isNetwork, netMissionEntity);
        SetModelAsNoLongerNeeded(hash);

        return new FiveVVehicle(vehicle);
    }

    /**
     * Creates a ped at a specific position
     * @param pedType The ped type (0-29)
     * @param model The model name or hash
     * @param position The spawn position
     * @param heading The spawn heading
     * @param isNetwork Whether the ped should be networked
     * @param netMissionEntity Whether it's a mission entity
     * @returns Promise that resolves to a FiveVPed instance
     */
    public static async createPed(
        pedType: number,
        model: string | number,
        position: Vector3,
        heading: number = 0.0,
        isNetwork: boolean = true,
        netMissionEntity: boolean = false
    ): Promise<FiveVPed> {
        const hash = typeof model === "string" ? GetHashKey(model) : model;

        if (!IsModelInCdimage(hash)) {
            throw new Error(`Invalid ped model: ${model}`);
        }

        RequestModel(hash);
        while (!HasModelLoaded(hash)) {
            await wait(10);
        }

        const ped = CreatePed(pedType, hash, position.x, position.y, position.z, heading, isNetwork, netMissionEntity);
        SetModelAsNoLongerNeeded(hash);

        return new FiveVPed(ped);
    }

    /**
     * Creates an object at a specific position
     * @param model The model name or hash
     * @param position The spawn position
     * @param isNetwork Whether the object should be networked
     * @param netMissionEntity Whether it's a mission entity
     * @param dynamic Whether the object should be dynamic
     * @returns Promise that resolves to a FiveVObject instance
     */
    public static async createObject(
        model: string | number,
        position: Vector3,
        isNetwork: boolean = true,
        netMissionEntity: boolean = false,
        dynamic: boolean = false
    ): Promise<FiveVObject> {
        const hash = typeof model === "string" ? GetHashKey(model) : model;

        if (!IsModelInCdimage(hash)) {
            throw new Error(`Invalid object model: ${model}`);
        }

        RequestModel(hash);
        while (!HasModelLoaded(hash)) {
            await wait(10);
        }

        const object = CreateObject(hash, position.x, position.y, position.z, isNetwork, netMissionEntity, dynamic);
        SetModelAsNoLongerNeeded(hash);

        return new FiveVObject(object);
    }

    // ==================== RAYCASTING ====================

    /**
     * Performs a raycast from one position to another
     * @param from The start position
     * @param to The end position
     * @param flags The raycast flags (1=world, 2=vehicles, 4=peds, 8=objects, 16=vegetation)
     * @param ignoreEntity Entity to ignore in the raycast
     * @returns The raycast result
     * @see [StartShapeTestRay](https://docs.fivem.net/natives/?_0x377906D8A31E5586) for more information.
     */
    public static raycast(from: Vector3, to: Vector3, flags: number = 1 | 2 | 4 | 8 | 16, ignoreEntity: number = 0): RaycastResult {
        const rayHandle = StartShapeTestRay(from.x, from.y, from.z, to.x, to.y, to.z, flags, ignoreEntity, 0);
        const [retval, hit, endCoords, surfaceNormal, entityHit] = GetShapeTestResult(rayHandle);

        return {
            hit: hit,
            endCoords: TransformNumberArrayInVector3(endCoords),
            surfaceNormal: TransformNumberArrayInVector3(surfaceNormal),
            entityHit: entityHit,
            materialHash: 0
        };
    }

    /**
     * Performs a raycast with material detection
     * @param from The start position
     * @param to The end position
     * @param flags The raycast flags
     * @param ignoreEntity Entity to ignore
     * @returns The raycast result with material hash
     * @see [StartShapeTestLosProbe](https://docs.fivem.net/natives/?_0x7EE9F5D83DD4F90E) for more information.
     */
    public static raycastWithMaterial(from: Vector3, to: Vector3, flags: number = 1 | 2 | 4 | 8 | 16, ignoreEntity: number = 0): RaycastResult {
        const rayHandle = StartShapeTestLosProbe(from.x, from.y, from.z, to.x, to.y, to.z, flags, ignoreEntity, 4);
        const [retval, hit, endCoords, surfaceNormal, materialHash, entityHit] = GetShapeTestResultIncludingMaterial(rayHandle);

        return {
            hit: hit,
            endCoords: TransformNumberArrayInVector3(endCoords),
            surfaceNormal: TransformNumberArrayInVector3(surfaceNormal),
            entityHit: entityHit,
            materialHash: materialHash
        };
    }

    /**
     * Converts screen coordinates to world coordinates via raycast
     * @param screenX Screen X coordinate (-1 to 1)
     * @param screenY Screen Y coordinate (-1 to 1)
     * @param flags Raycast flags
     * @param maxDistance Maximum raycast distance
     * @returns The raycast result
     * @see [GetWorldCoordFromScreenCoord](https://docs.fivem.net/natives/?_0xD5108BB3135A7C30) for more information.
     */
    public static screenToWorld(screenX: number, screenY: number, flags: number = 1 | 2 | 4 | 8 | 16, maxDistance: number = 1000.0): RaycastResult {
        const camPos = TransformNumberArrayInVector3(GetGameplayCamCoord());
        const camRot = TransformNumberArrayInVector3(GetGameplayCamRot(2));

        const tZ = camRot.z * 0.0174532924;
        const tX = camRot.x * 0.0174532924;
        const num = Math.abs(Math.cos(tX));

        const direction = new Vector3(
            -Math.sin(tZ) * num,
            Math.cos(tZ) * num,
            Math.sin(tX)
        );

        const endPos = new Vector3(
            camPos.x + direction.x * maxDistance,
            camPos.y + direction.y * maxDistance,
            camPos.z + direction.z * maxDistance
        );

        return this.raycast(camPos, endPos, flags);
    }

    // ==================== ENVIRONMENT ====================

    /**
     * Returns the ground Z coordinate at a position
     * @param position The position to check
     * @returns The ground Z coordinate, or the input Z if not found
     * @see [GetGroundZFor_3dCoord](https://docs.fivem.net/natives/?_0xC906A7DAB05C8D2B) for more information.
     */
    public static getGroundZ(position: Vector3): number {
        const [found, groundZ] = GetGroundZFor_3dCoord(position.x, position.y, position.z, false);
        return found ? groundZ : position.z;
    }

    /**
     * Returns the ground Z coordinate with offsets
     * @param position The position to check
     * @returns Promise that resolves to the ground Z
     */
    public static async getGroundZAsync(position: Vector3): Promise<number> {
        for (let i = 0; i < 10; i++) {
            RequestCollisionAtCoord(position.x, position.y, position.z);
            await wait(50);
            const [found, groundZ] = GetGroundZFor_3dCoord(position.x, position.y, 1000.0, false);
            if (found) return groundZ;
        }
        return position.z;
    }

    /**
     * Returns the water height at a position
     * @param position The position to check
     * @returns The water height, or -1 if no water
     * @see [GetWaterHeight](https://docs.fivem.net/natives/?_0xF6829842C06AE524) for more information.
     */
    public static getWaterHeight(position: Vector3): number {
        const [found, height] = GetWaterHeight(position.x, position.y, position.z);
        return found ? height : -1;
    }

    // ==================== BLACKOUT ====================

    /**
     * Sets whether the game is in blackout mode (no lights)
     * @param enabled true for blackout, false for normal
     * @see [SetBlackout](https://docs.fivem.net/natives/?_0x1268615ACE24D504) for more information.
     */
    public static setBlackout(enabled: boolean): void {
        SetBlackout(enabled);
    }

    // ==================== DISTANCE BLUR ====================

    /**
     * Enables or disables far distance blur
     * @param enabled true to enable, false to disable
     * @see [SetFarShadowsSuppressed](https://docs.fivem.net/natives/?_0x74D9B65B3C17EA2D) for more information.
     */
    public static setFarShadowsSuppressed(enabled: boolean): void {
        SetFarShadowsSuppressed(enabled);
    }

    // ==================== UTILITY ====================

    /**
     * Clears the area of entities
     * @param position The center position
     * @param radius The radius to clear
     * @param ignoreCopCars Whether to ignore cop cars
     * @param ignoreObjects Whether to ignore objects
     * @see [ClearAreaOfEverything](https://docs.fivem.net/natives/?_0x957838AAF91BD12D) for more information.
     */
    public static clearArea(position: Vector3, radius: number, ignoreCopCars: boolean = false, ignoreObjects: boolean = false): void {
        ClearAreaOfEverything(position.x, position.y, position.z, radius, ignoreCopCars, false, false, ignoreObjects);
    }

    /**
     * Clears the area of vehicles
     * @param position The center position
     * @param radius The radius to clear
     * @see [ClearAreaOfVehicles](https://docs.fivem.net/natives/?_0x01C7B9B38428AEB6) for more information.
     */
    public static clearAreaOfVehicles(position: Vector3, radius: number): void {
        ClearAreaOfVehicles(position.x, position.y, position.z, radius, false, false, false, false, false);
    }

    /**
     * Clears the area of peds
     * @param position The center position
     * @param radius The radius to clear
     * @see [ClearAreaOfPeds](https://docs.fivem.net/natives/?_0xBE31FD6CE464AC59) for more information.
     */
    public static clearAreaOfPeds(position: Vector3, radius: number): void {
        ClearAreaOfPeds(position.x, position.y, position.z, radius, false);
    }

    /**
     * Clears the area of objects
     * @param position The center position
     * @param radius The radius to clear
     * @see [ClearAreaOfObjects](https://docs.fivem.net/natives/?_0xDD9B9B385AAC7F5B) for more information.
     */
    public static clearAreaOfObjects(position: Vector3, radius: number): void {
        ClearAreaOfObjects(position.x, position.y, position.z, radius, 0);
    }
}
