import { Vector3 } from "../utils/Vector3";
import { TransformNumberArrayInVector3 } from "../utils/Transformer";
import { FiveVEntity } from "./FiveVEntity";

/**
 * Blip color enum for common blip colors
 */
export enum BlipColor {
    White = 0,
    Red = 1,
    Green = 2,
    Blue = 3,
    Yellow = 5,
    LightRed = 6,
    Violet = 7,
    Pink = 8,
    LightOrange = 9,
    LightBrown = 10,
    LightGreen = 11,
    LightBlue = 12,
    LightPurple = 13,
    DarkPurple = 14,
    Cyan = 15,
    LightYellow = 16,
    Orange = 17,
    LightBlue2 = 18,
    DarkPink = 19,
    DarkYellow = 20,
    DarkOrange = 21,
    LightGray = 22,
    LightPink = 23,
    LemonGreen = 24,
    ForestGreen = 25,
    ElectricBlue = 26,
    BrightPurple = 27,
    DarkYellow2 = 28,
    DarkBlue = 29,
    DarkCyan = 30,
    LightBrown2 = 31,
    LightBlue3 = 32,
    LightYellow2 = 33,
    LightPink2 = 34,
    LightRed2 = 35,
    Beige = 36,
    White2 = 37,
    Blue2 = 38,
    LightGray2 = 39,
    DarkGray = 40,
    PinkRed = 41,
    Gold = 43,
    Orange2 = 44,
    BrilliantRose = 45,
    MediumPurple = 46,
    Salmon = 47,
    DarkGreen = 48,
    BlizzardBlue = 49,
    OracleBlue = 50,
    Silver = 51,
    Brown = 52,
    Blue3 = 53,
    EastBay = 54,
    Red2 = 59,
    Beige2 = 60,
    Green2 = 61,
    Red3 = 62,
    Blue4 = 63,
    LightBlue4 = 64,
    LightPurple2 = 65,
    LightPink3 = 66,
    LightOrange2 = 67,
    LightBrown3 = 68,
    Franklin = 69,
    Trevor = 70,
    Michael = 71,
    Freemode = 72,
    FriendlyBlue = 75,
    EnemyRed = 76,
    MissionObjective = 66,
    MissionGreen = 2
}

/**
 * Common blip sprite IDs
 */
export enum BlipSprite {
    Standard = 1,
    BigBlip = 2,
    PoliceOfficer = 3,
    PoliceArea = 4,
    Square = 5,
    Player = 6,
    North = 7,
    Waypoint = 8,
    BigCircle = 9,
    BigCircleOutline = 10,
    ArrowUpOutlined = 11,
    ArrowDownOutlined = 12,
    ArrowUp = 13,
    ArrowDown = 14,
    PoliceHelicopter = 15,
    Jet = 16,
    Number1 = 17,
    Number2 = 18,
    Number3 = 19,
    Number4 = 20,
    Number5 = 21,
    Number6 = 22,
    Number7 = 23,
    Number8 = 24,
    Number9 = 25,
    Number10 = 26,
    GTAOCrew = 27,
    GTAOFriend = 28,
    CableCar = 36,
    RaceFinish = 38,
    Safehouse = 40,
    PoliceOfficer2 = 41,
    PoliceCarDot = 42,
    PoliceHelicopter2 = 43,
    ChatBubble = 47,
    Garage2 = 50,
    Drugs = 51,
    Store = 52,
    PoliceCar = 56,
    Hospital = 61,
    Helicopter = 64,
    StrangersAndFreaks = 66,
    ArmoredTruck = 67,
    TowTruck = 68,
    Barber = 71,
    LosSantosCustoms = 72,
    Clothes = 73,
    TattooParlor = 75,
    Simeon = 76,
    Lester = 77,
    Michael = 78,
    Trevor = 79,
    Rampage = 84,
    VinewoodTours = 85,
    Lamar = 86,
    Franklin = 88,
    ChinaOrb = 89,
    Airport = 90,
    Bar = 93,
    BaseJump = 94,
    CarWash = 100,
    Comedy = 102,
    Dart = 103,
    FIB = 106,
    GarageForSale = 108,
    Golf = 109,
    AmmuNation = 110,
    Exile = 112,
    ShootingRange = 119,
    Solomon = 120,
    StripClub = 121,
    Tennis = 122,
    Triathlon = 126,
    OffRoadRacing = 127,
    GangAttack = 133,
    CriminalMischief = 134,
    Cab = 198,
    Warehouse = 473,
    WarehouseForSale = 474,
    Hangar = 569,
    HangarForSale = 570,
    Business = 475,
    Motorcycle = 522,
    Bunker = 557,
    Nightclub = 614,
    Arena = 681,
    Casino = 679
}

export class FiveVBlip {
    private blipHandle: number;

    constructor(handle: number) {
        this.blipHandle = handle;
    }

    /**
     * Returns the blip handle
     * @returns The blip handle as a number
     */
    get handle(): number {
        return this.blipHandle;
    }

    /**
     * Checks if the blip exists
     * @returns true if the blip exists, false otherwise
     * @see [DoesBlipExist](https://docs.fivem.net/natives/?_0xA6DB27D19ECBB7DA) for more information.
     */
    get exists(): boolean {
        return DoesBlipExist(this.blipHandle);
    }

    // ==================== APPEARANCE ====================

    /**
     * Returns the blip sprite
     * @returns The sprite ID
     * @see [GetBlipSprite](https://docs.fivem.net/natives/?_0x1FC877464A04FC4F) for more information.
     */
    get sprite(): number {
        return GetBlipSprite(this.blipHandle);
    }

    /**
     * Sets the blip sprite
     * @param spriteId The sprite ID as {@link BlipSprite} or number
     * @see [SetBlipSprite](https://docs.fivem.net/natives/?_0xDF735600A4696DAF) for more information.
     */
    set sprite(spriteId: BlipSprite | number) {
        SetBlipSprite(this.blipHandle, spriteId);
    }

    /**
     * Returns the blip color
     * @returns The color ID
     * @see [GetBlipColour](https://docs.fivem.net/natives/?_0xDF729E8D20CF7327) for more information.
     */
    get color(): number {
        return GetBlipColour(this.blipHandle);
    }

    /**
     * Sets the blip color
     * @param colorId The color ID as {@link BlipColor} or number
     * @see [SetBlipColour](https://docs.fivem.net/natives/?_0x03D7FB09E75D6B7E) for more information.
     */
    set color(colorId: BlipColor | number) {
        SetBlipColour(this.blipHandle, colorId);
    }

    /**
     * Returns the blip scale
     * @returns The scale value
     * @see [GetBlipScale](https://docs.fivem.net/natives/?_0xD38744167B2FA257) for more information.
     */
    get scale(): number {
        return GetBlipHudColour(this.blipHandle);
    }

    /**
     * Sets the blip scale
     * @param scale The scale value (default 1.0)
     * @see [SetBlipScale](https://docs.fivem.net/natives/?_0xD38744167B2FA257) for more information.
     */
    set scale(scale: number) {
        SetBlipScale(this.blipHandle, scale);
    }

    /**
     * Returns the blip alpha (opacity)
     * @returns The alpha value (0-255)
     * @see [GetBlipAlpha](https://docs.fivem.net/natives/?_0x970F608F0EE6C885) for more information.
     */
    get alpha(): number {
        return GetBlipAlpha(this.blipHandle);
    }

    /**
     * Sets the blip alpha (opacity)
     * @param alpha The alpha value (0-255)
     * @see [SetBlipAlpha](https://docs.fivem.net/natives/?_0x45FF974EEE1C8734) for more information.
     */
    set alpha(alpha: number) {
        SetBlipAlpha(this.blipHandle, alpha);
    }

    /**
     * Returns the blip rotation
     * @returns The rotation in degrees
     * @see [GetBlipRotation](https://docs.fivem.net/natives/?_0xF66B2B04B0FF7088) for more information.
     */
    get rotation(): number {
        return GetBlipRotation(this.blipHandle);
    }

    /**
     * Sets the blip rotation
     * @param rotation The rotation in degrees
     * @see [SetBlipRotation](https://docs.fivem.net/natives/?_0xF87683CDF73C3F6E) for more information.
     */
    set rotation(rotation: number) {
        SetBlipRotation(this.blipHandle, rotation);
    }

    // ==================== DISPLAY OPTIONS ====================

    /**
     * Sets whether the blip should display a route (GPS line)
     * @param enabled true to show route, false to hide
     * @see [SetBlipRoute](https://docs.fivem.net/natives/?_0x4F7D8A9BFB0B43E9) for more information.
     */
    set route(enabled: boolean) {
        SetBlipRoute(this.blipHandle, enabled);
    }

    /**
     * Sets the route color for the blip
     * @param color The color ID
     * @see [SetBlipRouteColour](https://docs.fivem.net/natives/?_0x837155CD2F63DA09) for more information.
     */
    set routeColor(color: BlipColor | number) {
        SetBlipRouteColour(this.blipHandle, color);
    }

    /**
     * Sets whether the blip should flash
     * @param flash true to flash, false to stop
     * @see [SetBlipFlashes](https://docs.fivem.net/natives/?_0xB14552383D39CE3E) for more information.
     */
    set flashing(flash: boolean) {
        SetBlipFlashes(this.blipHandle, flash);
    }

    /**
     * Sets whether the blip should show on minimap only when nearby
     * @param shortRange true for short range, false for always visible
     * @see [SetBlipAsShortRange](https://docs.fivem.net/natives/?_0xBE8BE4FE60E27B72) for more information.
     */
    set shortRange(shortRange: boolean) {
        SetBlipAsShortRange(this.blipHandle, shortRange);
    }

    /**
     * Sets the blip display mode
     * @param displayId Display mode (2 = normal, 4 = both maps, 5 = minimap only, 8 = pause menu only)
     * @see [SetBlipDisplay](https://docs.fivem.net/natives/?_0x9029B2F3DA924928) for more information.
     */
    set display(displayId: number) {
        SetBlipDisplay(this.blipHandle, displayId);
    }

    /**
     * Sets the blip priority (higher = drawn on top)
     * @param priority The priority value
     * @see [SetBlipPriority](https://docs.fivem.net/natives/?_0xAE9FC9EF6A9FAC79) for more information.
     */
    set priority(priority: number) {
        SetBlipPriority(this.blipHandle, priority);
    }

    // ==================== NAME & CATEGORY ====================

    /**
     * Sets the blip name (shown in legend)
     * @param name The name to display
     */
    set name(name: string) {
        BeginTextCommandSetBlipName("STRING");
        AddTextComponentString(name);
        EndTextCommandSetBlipName(this.blipHandle);
    }

    /**
     * Sets the blip category
     * @param category The category ID (1-10, determines position in legend)
     * @see [SetBlipCategory](https://docs.fivem.net/natives/?_0x234CDD44D996FD9A) for more information.
     */
    set category(category: number) {
        SetBlipCategory(this.blipHandle, category);
    }

    /**
     * Sets whether the blip should show a heading indicator
     * @param show true to show, false to hide
     * @see [ShowHeadingIndicatorOnBlip](https://docs.fivem.net/natives/?_0x5FBCA48327B914DF) for more information.
     */
    public showHeadingIndicator(show: boolean): void {
        ShowHeadingIndicatorOnBlip(this.blipHandle, show);
    }

    /**
     * Sets whether the blip should show an outline indicator
     * @param show true to show, false to hide
     * @see [ShowOutlineIndicatorOnBlip](https://docs.fivem.net/natives/?_0x75A16C3DA34F1245) for more information.
     */
    public showOutlineIndicator(show: boolean): void {
        ShowOutlineIndicatorOnBlip(this.blipHandle, show);
    }

    /**
     * Sets whether the blip should show a tick (checkmark)
     * @param show true to show, false to hide
     * @see [ShowTickOnBlip](https://docs.fivem.net/natives/?_0x74513EA3E505181E) for more information.
     */
    public showTick(show: boolean): void {
        ShowTickOnBlip(this.blipHandle, show);
    }

    /**
     * Sets whether the blip is a crew blip
     * @param toggle true if crew blip, false otherwise
     * @see [SetBlipCrew](https://docs.fivem.net/natives/?_0xDCFB5D4DB8BF367E) for more information.
     */
    public setAsCrew(toggle: boolean): void {
        SetBlipCrew(this.blipHandle, toggle);
    }

    /**
     * Sets whether the blip is a friendly blip
     * @param toggle true if friendly, false otherwise
     * @see [SetBlipAsFriendly](https://docs.fivem.net/natives/?_0x6F6F290102C02AB4) for more information.
     */
    public setAsFriendly(toggle: boolean): void {
        SetBlipAsFriendly(this.blipHandle, toggle);
    }

    /**
     * Sets whether the blip is a mission creator blip
     * @param toggle true if mission creator, false otherwise
     * @see [SetBlipAsMissionCreatorBlip](https://docs.fivem.net/natives/?_0x24AC0137444F9FD5) for more information.
     */
    public setAsMissionCreator(toggle: boolean): void {
        SetBlipAsMissionCreatorBlip(this.blipHandle, toggle);
    }

    // ==================== POSITION ====================

    /**
     * Returns the position of the blip
     * @returns The position as a {@link Vector3}
     * @see [GetBlipCoords](https://docs.fivem.net/natives/?_0x586AFE3FF72D996E) for more information.
     */
    get position(): Vector3 {
        return TransformNumberArrayInVector3(GetBlipCoords(this.blipHandle));
    }

    /**
     * Sets the position of the blip
     * @param coords The new position
     * @see [SetBlipCoords](https://docs.fivem.net/natives/?_0xAE2AF67E9D9AF65D) for more information.
     */
    set position(coords: Vector3) {
        SetBlipCoords(this.blipHandle, coords.x, coords.y, coords.z);
    }

    // ==================== DELETION ====================

    /**
     * Removes the blip from the map
     * @see [RemoveBlip](https://docs.fivem.net/natives/?_0x86A652570E5F25DD) for more information.
     */
    public remove(): void {
        RemoveBlip(this.blipHandle);
    }

    // ==================== STATIC FACTORY METHODS ====================

    /**
     * Creates a blip at a specific coordinate
     * @param coords The position for the blip
     * @returns A new FiveVBlip instance
     * @see [AddBlipForCoord](https://docs.fivem.net/natives/?_0x5A039BB0BCA604B6) for more information.
     */
    public static createForCoord(coords: Vector3): FiveVBlip {
        const handle = AddBlipForCoord(coords.x, coords.y, coords.z);
        return new FiveVBlip(handle);
    }

    /**
     * Creates a blip attached to an entity
     * @param entity The entity to attach to
     * @returns A new FiveVBlip instance
     * @see [AddBlipForEntity](https://docs.fivem.net/natives/?_0x5CDE92C702A8FCE7) for more information.
     */
    public static createForEntity(entity: FiveVEntity | number): FiveVBlip {
        const handle = entity instanceof FiveVEntity ? entity.handle : entity;
        const blipHandle = AddBlipForEntity(handle);
        return new FiveVBlip(blipHandle);
    }

    /**
     * Creates a blip for a radius/area
     * @param coords The center position
     * @param radius The radius of the area
     * @returns A new FiveVBlip instance
     * @see [AddBlipForRadius](https://docs.fivem.net/natives/?_0x46818D79B1F7499A) for more information.
     */
    public static createForRadius(coords: Vector3, radius: number): FiveVBlip {
        const handle = AddBlipForRadius(coords.x, coords.y, coords.z, radius);
        return new FiveVBlip(handle);
    }

    /**
     * Creates a blip for a pickup
     * @param pickup The pickup handle
     * @returns A new FiveVBlip instance
     * @see [AddBlipForPickup](https://docs.fivem.net/natives/?_0xBE339365C863BD36) for more information.
     */
    public static createForPickup(pickup: number): FiveVBlip {
        const handle = AddBlipForPickup(pickup);
        return new FiveVBlip(handle);
    }

    /**
     * Gets the waypoint blip (if set by player)
     * @returns A FiveVBlip instance for the waypoint, or null if not set
     * @see [GetFirstBlipInfoId](https://docs.fivem.net/natives/?_0x1BEDE233E6CD2A1F) for more information.
     */
    public static getWaypoint(): FiveVBlip | null {
        const waypointBlip = GetFirstBlipInfoId(BlipSprite.Waypoint);
        if (!DoesBlipExist(waypointBlip)) return null;
        return new FiveVBlip(waypointBlip);
    }

    /**
     * Checks if a waypoint is currently set
     * @returns true if a waypoint is set, false otherwise
     * @see [IsWaypointActive](https://docs.fivem.net/natives/?_0x1DD1F58F493F1DA5) for more information.
     */
    public static isWaypointSet(): boolean {
        return IsWaypointActive();
    }

    /**
     * Gets the waypoint coordinates
     * @returns The waypoint position as Vector3, or null if not set
     * @see [GetBlipInfoIdCoord](https://docs.fivem.net/natives/?_0xFA7C7F0AADF25D09) for more information.
     */
    public static getWaypointCoords(): Vector3 | null {
        if (!IsWaypointActive()) return null;
        const waypointBlip = GetFirstBlipInfoId(8); // 8 = Waypoint sprite
        if (!DoesBlipExist(waypointBlip)) return null;
        const coords = GetBlipInfoIdCoord(waypointBlip);
        return new Vector3(coords[0], coords[1], coords[2]);
    }

    /**
     * Clears the player's waypoint
     * @see [SetWaypointOff](https://docs.fivem.net/natives/?_0xA7E4E2D361C2627F) for more information.
     */
    public static clearWaypoint(): void {
        SetWaypointOff();
    }
}
