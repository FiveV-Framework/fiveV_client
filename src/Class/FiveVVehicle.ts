import {
    NEONINDEX,
    SEATPOSITION,
    VEHICLECLASS,
    VEHICLELOCKSTATE,
    VEHICLEPLATETYPE
} from "../@types/vehicle";
import { FiveVEntity } from "./FiveVEntity";
import { Vector3 } from "../utils/Vector3";

export class FiveVVehicle extends FiveVEntity {

    constructor(vehicle: number) {
        super(vehicle);
    }

    /**
     * Returns the vehicle handle (alias for compatibility)
     * @returns The vehicle entity handle
     */
    get vehicle(): number {
        return this.entityHandle;
    }

    // ==================== ENGINE & PERFORMANCE ====================

    /**
     * Returns the current RPM of the vehicle
     * @returns The current RPM as a number
     * @see [GetVehicleCurrentRpm](https://docs.fivem.net/natives/?_0xE7B12B54) for more information.
     */
    get rpm(): number {
        return GetVehicleCurrentRpm(this.entityHandle);
    }

    /**
     * Sets the RPM of the vehicle
     * @param rpm The desired RPM value
     * @see [SetVehicleCurrentRpm](https://docs.fivem.net/natives/?_0x2A01A8FC) for more information.
     */
    set rpm(rpm: number) {
        SetVehicleCurrentRpm(this.entityHandle, rpm);
    }

    /**
     * Returns the current speed of the vehicle in km/h
     * @returns The speed in km/h
     * @see [GetEntitySpeed](https://docs.fivem.net/natives/?_0xD5037BA82E12416F) for more information.
     */
    get speedKmh(): number {
        return GetEntitySpeed(this.entityHandle) * 3.6;
    }

    /**
     * Returns the current speed of the vehicle in mph
     * @returns The speed in mph
     * @see [GetEntitySpeed](https://docs.fivem.net/natives/?_0xD5037BA82E12416F) for more information.
     */
    get speedMph(): number {
        return GetEntitySpeed(this.entityHandle) * 2.236936;
    }

    /**
     * Returns whether the engine is running
     * @returns true if the engine is running, false otherwise
     * @see [GetIsVehicleEngineRunning](https://docs.fivem.net/natives/?_0x7DC6D022) for more information.
     */
    get engineOn(): boolean {
        return GetIsVehicleEngineRunning(this.entityHandle);
    }

    /**
     * Sets the engine state of the vehicle
     * @param state true to turn on, false to turn off
     * @see [SetVehicleEngineOn](https://docs.fivem.net/natives/?_0x2497C4717C8B881E) for more information.
     */
    set engineOn(state: boolean) {
        SetVehicleEngineOn(this.entityHandle, state, true, true);
    }

    /**
     * Returns the estimated maximum speed of the vehicle
     * @returns The maximum speed as a number
     * @see [GetVehicleEstimatedMaxSpeed](https://docs.fivem.net/natives/?_0x53AF99BAA671CA47) for more information.
     */
    get maxSpeed(): number {
        return GetVehicleEstimatedMaxSpeed(this.entityHandle);
    }

    /**
     * Sets the maximum speed of the vehicle
     * @param newMaxSpeed The maximum speed value
     * @see [SetVehicleMaxSpeed](https://docs.fivem.net/natives/?_0xBAA045B4E42F3C06) for more information.
     */
    set maxSpeed(newMaxSpeed: number) {
        SetVehicleMaxSpeed(this.entityHandle, newMaxSpeed);
    }

    /**
     * Returns the acceleration value of the vehicle
     * @returns The acceleration as a number
     * @see [GetVehicleAcceleration](https://docs.fivem.net/natives/?_0x5DD35C8D074E57AE) for more information.
     */
    get acceleration(): number {
        return GetVehicleAcceleration(this.entityHandle);
    }

    /**
     * Returns the maximum braking value of the vehicle
     * @returns The maximum braking as a number
     * @see [GetVehicleMaxBraking](https://docs.fivem.net/natives/?_0xAD7E85FC227197C4) for more information.
     */
    get maxBraking(): number {
        return GetVehicleMaxBraking(this.entityHandle);
    }

    /**
     * Returns the engine health of the vehicle
     * @returns Engine health value (-4000 to 1000)
     * - 1000: Normal state
     * - < 650: Loses gas
     * - < 300: Engine smoking, loses functionality
     * - < 0: Engine catches fire and takes rapid damage
     * - -4000: Engine destroyed
     * @see [GetVehicleEngineHealth](https://docs.fivem.net/natives/?_0xC45D23BAF168AAB8) for more information.
     */
    get engineHealth(): number {
        return GetVehicleEngineHealth(this.entityHandle);
    }

    /**
     * Sets the engine health of the vehicle
     * @param engineHealth The engine health value (-4000 to 1000)
     * @see [SetVehicleEngineHealth](https://docs.fivem.net/natives/?_0x45F6D8EEF34ABEF1) for more information.
     */
    set engineHealth(engineHealth: number) {
        SetVehicleEngineHealth(this.entityHandle, engineHealth);
    }

    /**
     * Returns the body health of the vehicle
     * @returns Body health value (0-1000)
     * @see [GetVehicleBodyHealth](https://docs.fivem.net/natives/?_0xF271147EB7B40F12) for more information.
     */
    get bodyHealth(): number {
        return GetVehicleBodyHealth(this.entityHandle);
    }

    /**
     * Sets the body health of the vehicle
     * @param value The body health value (0-1000)
     * @see [SetVehicleBodyHealth](https://docs.fivem.net/natives/?_0xB77D05AC8C78AADB) for more information.
     */
    set bodyHealth(value: number) {
        SetVehicleBodyHealth(this.entityHandle, value);
    }

    /**
     * Returns the petrol tank health of the vehicle
     * @returns Petrol tank health value (-999.9 to 1000)
     * @see [GetVehiclePetrolTankHealth](https://docs.fivem.net/natives/?_0x70DB57649FA8D0D8) for more information.
     */
    get petrolTankHealth(): number {
        return GetVehiclePetrolTankHealth(this.entityHandle);
    }

    /**
     * Sets the petrol tank health of the vehicle
     * @param value The petrol tank health value
     * @see [SetVehiclePetrolTankHealth](https://docs.fivem.net/natives/?_0x70DB57649FA8D0D8) for more information.
     */
    set petrolTankHealth(value: number) {
        SetVehiclePetrolTankHealth(this.entityHandle, value);
    }

    // ==================== LOCKING & DOORS ====================

    /**
     * Returns the current lock state of the vehicle
     * @returns The lock state as {@link VEHICLELOCKSTATE}
     * @see [GetVehicleDoorLockStatus](https://docs.fivem.net/natives/?_0x25BC98A59C2EA962) for more information.
     */
    get lockState(): VEHICLELOCKSTATE {
        return GetVehicleDoorLockStatus(this.entityHandle) as VEHICLELOCKSTATE;
    }

    /**
     * Sets the lock state of the vehicle
     * @param state The lock state as {@link VEHICLELOCKSTATE} or number
     * @see [SetVehicleDoorsLocked](https://docs.fivem.net/natives/?_0xB664292EAECF7FA6) for more information.
     */
    set lockState(state: VEHICLELOCKSTATE | number) {
        SetVehicleDoorsLocked(this.entityHandle, state);
    }

    /**
     * Opens a specific door on the vehicle
     * @param doorIndex The door index (0-5)
     * @param loose Whether the door should be loose
     * @param openInstantly Whether to open instantly
     * @see [SetVehicleDoorOpen](https://docs.fivem.net/natives/?_0x7C65DAC73C35C862) for more information.
     */
    public openDoor(doorIndex: number, loose: boolean = false, openInstantly: boolean = false): void {
        SetVehicleDoorOpen(this.entityHandle, doorIndex, loose, openInstantly);
    }

    /**
     * Closes a specific door on the vehicle
     * @param doorIndex The door index (0-5)
     * @param instantly Whether to close instantly
     * @see [SetVehicleDoorShut](https://docs.fivem.net/natives/?_0x93D9BD300D7789E5) for more information.
     */
    public closeDoor(doorIndex: number, instantly: boolean = false): void {
        SetVehicleDoorShut(this.entityHandle, doorIndex, instantly);
    }

    /**
     * Closes all doors on the vehicle
     * @see [SetVehicleDoorsShut](https://docs.fivem.net/natives/?_0xB664292EAECF7FA6) for more information.
     */
    public closeAllDoors(): void {
        for (let i = 0; i < 6; i++) {
            SetVehicleDoorShut(this.entityHandle, i, false);
        }
    }

    // ==================== LIGHTS & NEONS ====================

    /**
     * Returns the light multiplier of the vehicle
     * @returns The light multiplier value
     * @see [GetVehicleLightMultiplier](https://docs.fivem.net/natives/?_0x7E6E219C) for more information.
     */
    get lightsModifier(): number {
        return GetVehicleLightMultiplier(this.entityHandle);
    }

    /**
     * Sets the light multiplier of the vehicle
     * @param value The light multiplier value
     * @see [SetVehicleLightMultiplier](https://docs.fivem.net/natives/?_0x93D9BD300D7789E5) for more information.
     */
    set lightsModifier(value: number) {
        SetVehicleLightMultiplier(this.entityHandle, value);
    }

    /**
     * Returns whether all neon lights are enabled
     * @returns true if all neons are enabled, false otherwise
     * @see [IsVehicleNeonLightEnabled](https://docs.fivem.net/natives/?_0x8C4B92553E4766A5) for more information.
     */
    get neons(): boolean {
        return IsVehicleNeonLightEnabled(this.entityHandle, NEONINDEX.NEON_BACK) &&
            IsVehicleNeonLightEnabled(this.entityHandle, NEONINDEX.NEON_FRONT) &&
            IsVehicleNeonLightEnabled(this.entityHandle, NEONINDEX.NEON_LEFT) &&
            IsVehicleNeonLightEnabled(this.entityHandle, NEONINDEX.NEON_RIGHT);
    }

    /**
     * Enables or disables all neon lights
     * @param state true to enable, false to disable
     * @see [SetVehicleNeonLightEnabled](https://docs.fivem.net/natives/?_0x2AA720E4287BF269) for more information.
     */
    set neons(state: boolean) {
        SetVehicleNeonLightEnabled(this.entityHandle, NEONINDEX.NEON_BACK, state);
        SetVehicleNeonLightEnabled(this.entityHandle, NEONINDEX.NEON_FRONT, state);
        SetVehicleNeonLightEnabled(this.entityHandle, NEONINDEX.NEON_LEFT, state);
        SetVehicleNeonLightEnabled(this.entityHandle, NEONINDEX.NEON_RIGHT, state);
    }

    /**
     * Returns all currently active neon lights
     * @returns Array of active {@link NEONINDEX} values
     * @see [IsVehicleNeonLightEnabled](https://docs.fivem.net/natives/?_0x8C4B92553E4766A5) for more information.
     */
    public getActiveNeons(): NEONINDEX[] {
        const activeNeons: NEONINDEX[] = [];
        const neonIndices = [NEONINDEX.NEON_BACK, NEONINDEX.NEON_FRONT, NEONINDEX.NEON_LEFT, NEONINDEX.NEON_RIGHT];

        for (const neon of neonIndices) {
            if (IsVehicleNeonLightEnabled(this.entityHandle, neon)) {
                activeNeons.push(neon);
            }
        }
        return activeNeons;
    }

    /**
     * Activates or deactivates specific neon lights
     * @param state true to enable, false to disable
     * @param neonsToActivate Array of {@link NEONINDEX} values to modify
     * @see [SetVehicleNeonLightEnabled](https://docs.fivem.net/natives/?_0x2AA720E4287BF269) for more information.
     */
    public setSpecificNeons(state: boolean, neonsToActivate: NEONINDEX[]): void {
        for (const neon of neonsToActivate) {
            SetVehicleNeonLightEnabled(this.entityHandle, neon, state);
        }
    }

    /**
     * Sets the neon light color
     * @param r Red component (0-255)
     * @param g Green component (0-255)
     * @param b Blue component (0-255)
     * @see [SetVehicleNeonLightsColour](https://docs.fivem.net/natives/?_0x8E0A582209A62695) for more information.
     */
    public setNeonColor(r: number, g: number, b: number): void {
        SetVehicleNeonLightsColour(this.entityHandle, r, g, b);
    }

    /**
     * Returns the neon light color
     * @returns Object with r, g, b values
     * @see [GetVehicleNeonLightsColour](https://docs.fivem.net/natives/?_0x7619EEE8C886757F) for more information.
     */
    public getNeonColor(): { r: number; g: number; b: number } {
        const [r, g, b] = GetVehicleNeonLightsColour(this.entityHandle);
        return { r, g, b };
    }

    // ==================== VEHICLE INFO ====================

    /**
     * Returns the license plate text
     * @returns The plate text as a string
     * @see [GetVehicleNumberPlateText](https://docs.fivem.net/natives/?_0xE8522D58) for more information.
     */
    get numberPlateText(): string {
        return GetVehicleNumberPlateText(this.entityHandle);
    }

    /**
     * Sets the license plate text
     * @param text The plate text (max 8 characters)
     * @see [SetVehicleNumberPlateText](https://docs.fivem.net/natives/?_0x95A88F0B409CDA47) for more information.
     */
    set numberPlateText(text: string) {
        SetVehicleNumberPlateText(this.entityHandle, text);
    }

    /**
     * Returns the license plate type
     * @returns The plate type as {@link VEHICLEPLATETYPE}
     * @see [GetVehiclePlateType](https://docs.fivem.net/natives/?_0x9CCC9525BF2408E0) for more information.
     */
    get plateType(): VEHICLEPLATETYPE {
        return GetVehiclePlateType(this.entityHandle) as VEHICLEPLATETYPE;
    }

    /**
     * Returns the vehicle class
     * @returns The vehicle class as {@link VEHICLECLASS}
     * @see [GetVehicleClass](https://docs.fivem.net/natives/?_0x29439776AAA00A62) for more information.
     */
    get vehicleClass(): VEHICLECLASS {
        return GetVehicleClass(this.entityHandle) as VEHICLECLASS;
    }

    /**
     * Returns whether the vehicle is electric
     * @returns true if electric, false otherwise
     * @see [GetIsVehicleElectric](https://docs.fivem.net/natives/?_0x1FCB07FE230B6639) for more information.
     */
    get isElectric(): boolean {
        return GetIsVehicleElectric(this.entityHandle);
    }

    /**
     * Returns the dirt level of the vehicle
     * @returns The dirt level (0-15)
     * @see [GetVehicleDirtLevel](https://docs.fivem.net/natives/?_0x8F17BC8BA08DA62B) for more information.
     */
    get dirtLevel(): number {
        return GetVehicleDirtLevel(this.entityHandle);
    }

    /**
     * Sets the dirt level of the vehicle
     * @param dirtLevel The dirt level (0-15)
     * @see [SetVehicleDirtLevel](https://docs.fivem.net/natives/?_0x79D3B596FE44EE8B) for more information.
     */
    set dirtLevel(dirtLevel: number) {
        SetVehicleDirtLevel(this.entityHandle, dirtLevel);
    }

    /**
     * Washes the vehicle (sets dirt level to 0)
     */
    public wash(): void {
        SetVehicleDirtLevel(this.entityHandle, 0);
    }

    /**
     * Returns the maximum number of passengers (excluding driver)
     * @returns The maximum passenger count
     * @see [GetVehicleMaxNumberOfPassengers](https://docs.fivem.net/natives/?_0xA7C4F2C6E744A550) for more information.
     */
    get maxPassengers(): number {
        return GetVehicleMaxNumberOfPassengers(this.entityHandle);
    }

    // ==================== OCCUPANTS ====================

    /**
     * Returns the ped in the driver seat
     * @returns The ped entity handle, or 0 if empty
     * @see [GetPedInVehicleSeat](https://docs.fivem.net/natives/?_0xBB40DD2270B65366) for more information.
     */
    get driver(): number {
        return GetPedInVehicleSeat(this.entityHandle, SEATPOSITION.SF_FrontDriverSide);
    }

    /**
     * Returns the ped in a specific seat
     * @param seat The seat position as {@link SEATPOSITION}
     * @returns The ped entity handle, or 0 if empty
     * @see [GetPedInVehicleSeat](https://docs.fivem.net/natives/?_0xBB40DD2270B65366) for more information.
     */
    public getPedInSeat(seat: SEATPOSITION): number {
        return GetPedInVehicleSeat(this.entityHandle, seat);
    }

    /**
     * Returns whether a specific seat is free
     * @param seat The seat position as {@link SEATPOSITION}
     * @returns true if the seat is free, false otherwise
     * @see [IsVehicleSeatFree](https://docs.fivem.net/natives/?_0x22AC59A870E6A669) for more information.
     */
    public isSeatFree(seat: SEATPOSITION): boolean {
        return IsVehicleSeatFree(this.entityHandle, seat);
    }

    /**
     * Returns all occupants sorted by seat position
     * @returns Array of ped entity handles (0 if seat is empty)
     * @see [GetPedInVehicleSeat](https://docs.fivem.net/natives/?_0xBB40DD2270B65366) for more information.
     */
    get occupants(): number[] {
        const seats = [
            SEATPOSITION.SF_FrontDriverSide,
            SEATPOSITION.SF_FrontPassengerSide,
            SEATPOSITION.SF_BackDriverSide,
            SEATPOSITION.SF_BackPassengerSide,
            SEATPOSITION.SF_AltFrontDriverSide,
            SEATPOSITION.SF_AltFrontPassengerSide,
            SEATPOSITION.SF_AltBackDriverSide,
            SEATPOSITION.SF_AltBackPassengerSide
        ];

        return seats.map(seat => GetPedInVehicleSeat(this.entityHandle, seat));
    }

    /**
     * Returns the number of current passengers (including driver)
     * @returns The passenger count
     * @see [GetVehicleNumberOfPassengers](https://docs.fivem.net/natives/?_0x24CB2137731FFE89) for more information.
     */
    get passengerCount(): number {
        return GetVehicleNumberOfPassengers(this.entityHandle);
    }

    // ==================== VEHICLE STATE ====================

    /**
     * Returns whether the vehicle is stopped
     * @returns true if stopped, false otherwise
     * @see [IsVehicleStopped](https://docs.fivem.net/natives/?_0x5721B434AD84D57A) for more information.
     */
    get isStopped(): boolean {
        return IsVehicleStopped(this.entityHandle);
    }

    /**
     * Returns whether the vehicle is on all wheels
     * @returns true if on all wheels, false otherwise
     * @see [IsVehicleOnAllWheels](https://docs.fivem.net/natives/?_0xB104CD1BABF302A2) for more information.
     */
    get isOnAllWheels(): boolean {
        return IsVehicleOnAllWheels(this.entityHandle);
    }

    /**
     * Returns whether the vehicle is a car/automobile
     * @returns true if it's a car, false otherwise
     */
    get isCar(): boolean {
        return this.vehicleClass !== VEHICLECLASS.Boats &&
            this.vehicleClass !== VEHICLECLASS.Helicopters &&
            this.vehicleClass !== VEHICLECLASS.Planes &&
            this.vehicleClass !== VEHICLECLASS.Cycles &&
            this.vehicleClass !== VEHICLECLASS.Motorcycles &&
            this.vehicleClass !== VEHICLECLASS.Trains;
    }

    /**
     * Returns whether the vehicle is a bike/motorcycle
     * @returns true if it's a bike, false otherwise
     */
    get isBike(): boolean {
        return this.vehicleClass === VEHICLECLASS.Motorcycles ||
            this.vehicleClass === VEHICLECLASS.Cycles;
    }

    /**
     * Returns whether the vehicle is an aircraft
     * @returns true if it's an aircraft, false otherwise
     */
    get isAircraft(): boolean {
        return this.vehicleClass === VEHICLECLASS.Helicopters ||
            this.vehicleClass === VEHICLECLASS.Planes;
    }

    /**
     * Returns whether the vehicle is a boat
     * @returns true if it's a boat, false otherwise
     */
    get isBoat(): boolean {
        return this.vehicleClass === VEHICLECLASS.Boats;
    }

    // ==================== DAMAGE & REPAIR ====================

    /**
     * Repairs the vehicle completely
     * @see [SetVehicleFixed](https://docs.fivem.net/natives/?_0x115722B1) for more information.
     */
    public repair(): void {
        SetVehicleFixed(this.entityHandle);
    }

    /**
     * Sets the vehicle as undriveable
     * @param state true to make undriveable, false to make driveable
     * @see [SetVehicleUndriveable](https://docs.fivem.net/natives/?_0x8ABA6AF54B942B95) for more information.
     */
    public setUndriveable(state: boolean): void {
        SetVehicleUndriveable(this.entityHandle, state);
    }

    /**
     * Explodes the vehicle
     * @param isAudible Whether the explosion should be audible
     * @param isInvisible Whether the explosion should be invisible
     * @see [ExplodeVehicle](https://docs.fivem.net/natives/?_0xBA71116ADF5B514C) for more information.
     */
    public explode(isAudible: boolean = true, isInvisible: boolean = false): void {
        ExplodeVehicle(this.entityHandle, isAudible, isInvisible);
    }

    // ==================== STATIC METHODS ====================

    /**
     * Creates a FiveVVehicle from a network ID
     * @param netId The network ID
     * @returns A new FiveVVehicle instance, or null if not found
     */
    public static fromNetworkId(netId: number): FiveVVehicle | null {
        if (!NetworkDoesEntityExistWithNetworkId(netId)) return null;
        const entityId = NetToVeh(netId);
        if (entityId === 0 || !DoesEntityExist(entityId)) return null;
        return new FiveVVehicle(entityId);
    }

    /**
     * Gets the closest vehicle to a position
     * @param position The position to search from
     * @param radius The search radius
     * @returns A FiveVVehicle instance, or null if none found
     */
    public static getClosest(position: Vector3, radius: number = 25.0): FiveVVehicle | null {
        const vehicle = GetClosestVehicle(position.x, position.y, position.z, radius, 0, 70);
        if (vehicle === 0) return null;
        return new FiveVVehicle(vehicle);
    }
}
