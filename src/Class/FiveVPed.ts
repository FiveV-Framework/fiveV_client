import { FiveVEntity } from "./FiveVEntity";
import { FiveVVehicle } from "./FiveVVehicle";
import { Vector3 } from "../utils/Vector3";
import { TransformNumberArrayInVector3 } from "../utils/Transformer";
import { PEDCONFIGFLAGS } from "../@types/player";
import { SEATPOSITION } from "../@types/vehicle";

export class FiveVPed extends FiveVEntity {

    constructor(ped: number) {
        super(ped);
    }

    /**
     * Returns the ped handle (alias for compatibility)
     * @returns The ped entity handle
     */
    get ped(): number {
        return this.entityHandle;
    }

    // ==================== HEALTH & ARMOR ====================

    /**
     * Returns the armor value of the ped
     * @returns The armor value (0-100)
     * @see [GetPedArmour](https://docs.fivem.net/natives/?_0x9483AF821605B1D8) for more information.
     */
    get armor(): number {
        return GetPedArmour(this.entityHandle);
    }

    /**
     * Sets the armor value of the ped
     * @param value The armor value (0-100)
     * @see [SetPedArmour](https://docs.fivem.net/natives/?_0xCEA04D83135264CC) for more information.
     */
    set armor(value: number) {
        SetPedArmour(this.entityHandle, value);
    }

    /**
     * Sets the maximum health of the ped
     * @param value The maximum health value
     * @see [SetPedMaxHealth](https://docs.fivem.net/natives/?_0xF5F6378C4F3419D3) for more information.
     */
    set maxHealth(value: number) {
        SetPedMaxHealth(this.entityHandle, value);
    }

    // ==================== STATE CHECKS ====================

    /**
     * Returns whether the ped is falling
     * @returns true if falling, false otherwise
     * @see [IsPedFalling](https://docs.fivem.net/natives/?_0xFB92A102F1C4DFA3) for more information.
     */
    get isFalling(): boolean {
        return IsPedFalling(this.entityHandle);
    }

    /**
     * Returns whether the ped is swimming underwater
     * @returns true if swimming underwater, false otherwise
     * @see [IsPedSwimmingUnderWater](https://docs.fivem.net/natives/?_0x9DE327631295B4C2) for more information.
     */
    get isSwimmingUnderWater(): boolean {
        return IsPedSwimmingUnderWater(this.entityHandle);
    }

    /**
     * Returns whether the ped is swimming
     * @returns true if swimming, false otherwise
     * @see [IsPedSwimming](https://docs.fivem.net/natives/?_0x9DE327631295B4C2) for more information.
     */
    get isSwimming(): boolean {
        return IsPedSwimming(this.entityHandle);
    }

    /**
     * Returns whether the ped is in any vehicle
     * @returns true if in a vehicle, false otherwise
     * @see [IsPedInAnyVehicle](https://docs.fivem.net/natives/?_0x997ABD671D25CA0B) for more information.
     */
    get isInVehicle(): boolean {
        return IsPedInAnyVehicle(this.entityHandle, false);
    }

    /**
     * Returns whether the ped is in a specific vehicle
     * @param vehicle The vehicle to check
     * @returns true if in the vehicle, false otherwise
     * @see [IsPedInVehicle](https://docs.fivem.net/natives/?_0xA3EE4A07279BB9DB) for more information.
     */
    public isInSpecificVehicle(vehicle: FiveVVehicle | number): boolean {
        const vehHandle = vehicle instanceof FiveVVehicle ? vehicle.handle : vehicle;
        return IsPedInVehicle(this.entityHandle, vehHandle, false);
    }

    /**
     * Returns whether the ped is armed (has a weapon, excluding melee and fists)
     * @returns true if armed, false otherwise
     * @see [IsPedArmed](https://docs.fivem.net/natives/?_0x475768A975D5AD17) for more information.
     */
    get isArmed(): boolean {
        return IsPedArmed(this.entityHandle, 4 | 2);
    }

    /**
     * Returns whether the ped is in combat
     * @returns true if in combat, false otherwise
     * @see [IsPedInCombat](https://docs.fivem.net/natives/?_0x4859F1FC66A6278E) for more information.
     */
    get isInCombat(): boolean {
        return IsPedInCombat(this.entityHandle, 0);
    }

    /**
     * Returns whether the ped is running
     * @returns true if running, false otherwise
     * @see [IsPedRunning](https://docs.fivem.net/natives/?_0xC5286FFC176F28A2) for more information.
     */
    get isRunning(): boolean {
        return IsPedRunning(this.entityHandle);
    }

    /**
     * Returns whether the ped is sprinting
     * @returns true if sprinting, false otherwise
     * @see [IsPedSprinting](https://docs.fivem.net/natives/?_0x57E457CD2C0FC168) for more information.
     */
    get isSprinting(): boolean {
        return IsPedSprinting(this.entityHandle);
    }

    /**
     * Returns whether the ped is walking
     * @returns true if walking, false otherwise
     * @see [IsPedWalking](https://docs.fivem.net/natives/?_0xDE4C184B2B9B071A) for more information.
     */
    get isWalking(): boolean {
        return IsPedWalking(this.entityHandle);
    }

    /**
     * Returns whether the ped is stopped/standing still
     * @returns true if stopped, false otherwise
     * @see [IsPedStopped](https://docs.fivem.net/natives/?_0x530944F6F4B8A214) for more information.
     */
    get isStopped(): boolean {
        return IsPedStopped(this.entityHandle);
    }

    /**
     * Returns whether the ped is on foot (not in a vehicle)
     * @returns true if on foot, false otherwise
     * @see [IsPedOnFoot](https://docs.fivem.net/natives/?_0x01FEE67DB37F59B2) for more information.
     */
    get isOnFoot(): boolean {
        return IsPedOnFoot(this.entityHandle);
    }

    /**
     * Returns whether the ped is ragdolling
     * @returns true if ragdolling, false otherwise
     * @see [IsPedRagdoll](https://docs.fivem.net/natives/?_0x47E4E977581C5B55) for more information.
     */
    get isRagdoll(): boolean {
        return IsPedRagdoll(this.entityHandle);
    }

    /**
     * Returns whether the ped is injured
     * @returns true if injured, false otherwise
     * @see [IsPedInjured](https://docs.fivem.net/natives/?_0x84A2DD9AC37C35C1) for more information.
     */
    get isInjured(): boolean {
        return IsPedInjured(this.entityHandle);
    }

    /**
     * Returns whether the ped is a player
     * @returns true if a player, false otherwise
     * @see [IsPedAPlayer](https://docs.fivem.net/natives/?_0x12534C348C6CB68B) for more information.
     */
    get isPlayer(): boolean {
        return IsPedAPlayer(this.entityHandle);
    }

    /**
     * Returns whether the ped is human (not an animal)
     * @returns true if human, false otherwise
     * @see [IsPedHuman](https://docs.fivem.net/natives/?_0xB980061DA992779D) for more information.
     */
    get isHuman(): boolean {
        return IsPedHuman(this.entityHandle);
    }

    // ==================== WEAPONS ====================

    /**
     * Returns the hash of the current weapon
     * @returns The weapon hash
     * @see [GetCurrentPedWeapon](https://docs.fivem.net/natives/?_0x3A87E44BB9A01D54) for more information.
     */
    get currentWeaponHash(): number {
        const [, weapon] = GetCurrentPedWeapon(this.entityHandle, true);
        return weapon;
    }

    /**
     * Gives a weapon to the ped
     * @param weaponHash The weapon hash
     * @param ammo The amount of ammo
     * @param isHidden Whether to hide the weapon
     * @param forceInHand Whether to force the weapon in hand
     * @see [GiveWeaponToPed](https://docs.fivem.net/natives/?_0xBF0FD6E56C964FCB) for more information.
     */
    public giveWeapon(weaponHash: number, ammo: number, isHidden: boolean = false, forceInHand: boolean = true): void {
        GiveWeaponToPed(this.entityHandle, weaponHash, ammo, isHidden, forceInHand);
    }

    /**
     * Removes a specific weapon from the ped
     * @param weaponHash The weapon hash to remove
     * @see [RemoveWeaponFromPed](https://docs.fivem.net/natives/?_0x4899CB088EDF59B8) for more information.
     */
    public removeWeapon(weaponHash: number): void {
        RemoveWeaponFromPed(this.entityHandle, weaponHash);
    }

    /**
     * Removes all weapons from the ped
     * @see [RemoveAllPedWeapons](https://docs.fivem.net/natives/?_0xF25DF915FA38C5F3) for more information.
     */
    public removeAllWeapons(): void {
        RemoveAllPedWeapons(this.entityHandle, true);
    }

    /**
     * Checks if the ped has a specific weapon
     * @param weaponHash The weapon hash to check
     * @returns true if the ped has the weapon, false otherwise
     * @see [HasPedGotWeapon](https://docs.fivem.net/natives/?_0x8DECB02F88F428BC) for more information.
     */
    public hasWeapon(weaponHash: number): boolean {
        return HasPedGotWeapon(this.entityHandle, weaponHash, false);
    }

    /**
     * Sets the ammo for a specific weapon
     * @param weaponHash The weapon hash
     * @param ammo The amount of ammo
     * @see [SetPedAmmo](https://docs.fivem.net/natives/?_0x14E56BC5B5DB6A19) for more information.
     */
    public setAmmo(weaponHash: number, ammo: number): void {
        SetPedAmmo(this.entityHandle, weaponHash, ammo);
    }

    /**
     * Gets the ammo for a specific weapon
     * @param weaponHash The weapon hash
     * @returns The amount of ammo
     * @see [GetAmmoInPedWeapon](https://docs.fivem.net/natives/?_0x015A522136D7F951) for more information.
     */
    public getAmmo(weaponHash: number): number {
        return GetAmmoInPedWeapon(this.entityHandle, weaponHash);
    }

    // ==================== VEHICLE ====================

    /**
     * Returns the vehicle the ped is currently in
     * @returns A FiveVVehicle instance, or null if not in a vehicle
     * @see [GetVehiclePedIsIn](https://docs.fivem.net/natives/?_0x9A9112A0FE9A4713) for more information.
     */
    get vehicle(): FiveVVehicle | null {
        if (!this.isInVehicle) return null;
        const veh = GetVehiclePedIsIn(this.entityHandle, false);
        return veh !== 0 ? new FiveVVehicle(veh) : null;
    }

    /**
     * Returns the last vehicle the ped was in
     * @returns A FiveVVehicle instance, or null if never in a vehicle
     * @see [GetVehiclePedIsIn](https://docs.fivem.net/natives/?_0x9A9112A0FE9A4713) for more information.
     */
    get lastVehicle(): FiveVVehicle | null {
        const veh = GetVehiclePedIsIn(this.entityHandle, true);
        return veh !== 0 ? new FiveVVehicle(veh) : null;
    }

    /**
     * Returns the seat index the ped is sitting in
     * @returns The seat index, or -2 if not in a vehicle
     */
    get seatIndex(): number {
        if (!this.isInVehicle) return -2;
        const vehicle = GetVehiclePedIsIn(this.entityHandle, false);
        for (let i = -1; i < GetVehicleMaxNumberOfPassengers(vehicle); i++) {
            if (GetPedInVehicleSeat(vehicle, i) === this.entityHandle) {
                return i;
            }
        }
        return -2;
    }

    /**
     * Returns whether the ped is in the driver seat
     * @returns true if in driver seat, false otherwise
     */
    get isDriver(): boolean {
        return this.seatIndex === SEATPOSITION.SF_FrontDriverSide;
    }

    // ==================== TASKS ====================

    /**
     * Makes the ped go to a specific coordinate
     * @param coords The target coordinates
     * @param speed The movement speed (1.0 = walk, 2.0 = run)
     * @param timeout The timeout in milliseconds (-1 for infinite)
     * @see [TaskGoToCoordAnyMeans](https://docs.fivem.net/natives/?_0x5BC448CB78FA3E88) for more information.
     */
    public taskGoToCoord(coords: Vector3, speed: number = 1.0, timeout: number = -1): void {
        TaskGoToCoordAnyMeans(this.entityHandle, coords.x, coords.y, coords.z, speed, 0, false, 786603, 0.0);
    }

    /**
     * Makes the ped wander around
     * @see [TaskWanderStandard](https://docs.fivem.net/natives/?_0xBB9CE077274F6A1B) for more information.
     */
    public taskWander(): void {
        TaskWanderStandard(this.entityHandle, 10.0, 10);
    }

    /**
     * Makes the ped enter a vehicle
     * @param vehicle The vehicle to enter
     * @param seat The seat position
     * @param timeout The timeout in milliseconds
     * @param speed The movement speed
     * @see [TaskEnterVehicle](https://docs.fivem.net/natives/?_0xC20E50AA46D09CA8) for more information.
     */
    public taskEnterVehicle(vehicle: FiveVVehicle | number, seat: SEATPOSITION = SEATPOSITION.SF_FrontDriverSide, timeout: number = 5000, speed: number = 2.0): void {
        const vehHandle = vehicle instanceof FiveVVehicle ? vehicle.handle : vehicle;
        TaskEnterVehicle(this.entityHandle, vehHandle, timeout, seat, speed, 1, 0);
    }

    /**
     * Makes the ped leave their current vehicle
     * @param flags Leave flags (0 = normal, 16 = jump out, 64 = warp out, 256 = don't close door)
     * @see [TaskLeaveVehicle](https://docs.fivem.net/natives/?_0xD3DBCE61A490BE02) for more information.
     */
    public taskLeaveVehicle(flags: number = 0): void {
        const vehicle = GetVehiclePedIsIn(this.entityHandle, false);
        if (vehicle !== 0) {
            TaskLeaveVehicle(this.entityHandle, vehicle, flags);
        }
    }

    /**
     * Makes the ped drive to a coordinate
     * @param vehicle The vehicle to drive
     * @param coords The target coordinates
     * @param speed The driving speed
     * @param drivingStyle The driving style flags
     * @see [TaskVehicleDriveToCoord](https://docs.fivem.net/natives/?_0xE2A2AA2F659D77A7) for more information.
     */
    public taskDriveToCoord(vehicle: FiveVVehicle | number, coords: Vector3, speed: number = 20.0, drivingStyle: number = 786603): void {
        const vehHandle = vehicle instanceof FiveVVehicle ? vehicle.handle : vehicle;
        TaskVehicleDriveToCoord(this.entityHandle, vehHandle, coords.x, coords.y, coords.z, speed, 0, GetEntityModel(vehHandle), drivingStyle, 5.0, 1.0);
    }

    /**
     * Makes the ped play an animation
     * @param animDict The animation dictionary
     * @param animName The animation name
     * @param blendInSpeed Blend in speed (default 8.0)
     * @param blendOutSpeed Blend out speed (default -8.0)
     * @param duration Duration in ms (-1 for animation length)
     * @param flag Animation flags
     * @param playbackRate Playback rate (0-1)
     * @see [TaskPlayAnim](https://docs.fivem.net/natives/?_0xEA47FE3719165B94) for more information.
     */
    public taskPlayAnim(animDict: string, animName: string, blendInSpeed: number = 8.0, blendOutSpeed: number = -8.0, duration: number = -1, flag: number = 0, playbackRate: number = 0.0): void {
        TaskPlayAnim(this.entityHandle, animDict, animName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, false, false, false);
    }

    /**
     * Makes the ped look at a coordinate
     * @param coords The coordinates to look at
     * @param duration The duration in milliseconds (-1 for infinite)
     * @see [TaskLookAtCoord](https://docs.fivem.net/natives/?_0x6FA46612594F7973) for more information.
     */
    public taskLookAtCoord(coords: Vector3, duration: number = -1): void {
        TaskLookAtCoord(this.entityHandle, coords.x, coords.y, coords.z, duration, 0, 2);
    }

    /**
     * Makes the ped look at an entity
     * @param entity The entity to look at
     * @param duration The duration in milliseconds (-1 for infinite)
     * @see [TaskLookAtEntity](https://docs.fivem.net/natives/?_0x69F4BE8C8CC4796C) for more information.
     */
    public taskLookAtEntity(entity: FiveVEntity | number, duration: number = -1): void {
        const entHandle = entity instanceof FiveVEntity ? entity.handle : entity;
        TaskLookAtEntity(this.entityHandle, entHandle, duration, 2048, 3);
    }

    /**
     * Clears all tasks from the ped
     * @see [ClearPedTasks](https://docs.fivem.net/natives/?_0xE1EF3C1216AFF2CD) for more information.
     */
    public clearTasks(): void {
        ClearPedTasks(this.entityHandle);
    }

    /**
     * Clears all tasks immediately from the ped
     * @see [ClearPedTasksImmediately](https://docs.fivem.net/natives/?_0xAAA34F8A7CB32098) for more information.
     */
    public clearTasksImmediately(): void {
        ClearPedTasksImmediately(this.entityHandle);
    }

    // ==================== CONFIG FLAGS ====================

    /**
     * Enables a ped config flag
     * @param flagId The flag ID as {@link PEDCONFIGFLAGS} or number
     * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) for more information.
     */
    public enableConfigFlag(flagId: PEDCONFIGFLAGS | number): void {
        SetPedConfigFlag(this.entityHandle, flagId, true);
    }

    /**
     * Disables a ped config flag
     * @param flagId The flag ID as {@link PEDCONFIGFLAGS} or number
     * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) for more information.
     */
    public disableConfigFlag(flagId: PEDCONFIGFLAGS | number): void {
        SetPedConfigFlag(this.entityHandle, flagId, false);
    }

    /**
     * Enables multiple ped config flags
     * @param flagIds Array of flag IDs
     * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) for more information.
     */
    public enableConfigFlags(flagIds: (PEDCONFIGFLAGS | number)[]): void {
        for (const flag of flagIds) {
            SetPedConfigFlag(this.entityHandle, flag, true);
        }
    }

    /**
     * Disables multiple ped config flags
     * @param flagIds Array of flag IDs
     * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) for more information.
     */
    public disableConfigFlags(flagIds: (PEDCONFIGFLAGS | number)[]): void {
        for (const flag of flagIds) {
            SetPedConfigFlag(this.entityHandle, flag, false);
        }
    }

    /**
     * Gets the value of a ped config flag
     * @param flagId The flag ID
     * @returns true if the flag is set, false otherwise
     * @see [GetPedConfigFlag](https://docs.fivem.net/natives/?_0x7EE53118C892B513) for more information.
     */
    public getConfigFlag(flagId: PEDCONFIGFLAGS | number): boolean {
        return GetPedConfigFlag(this.entityHandle, flagId, true);
    }

    /**
     * Returns all active config flags
     * @returns Array of active {@link PEDCONFIGFLAGS}
     */
    get activeConfigFlags(): PEDCONFIGFLAGS[] {
        const activeFlags: PEDCONFIGFLAGS[] = [];
        for (const flag in PEDCONFIGFLAGS) {
            const flagValue = Number(flag);
            if (!isNaN(flagValue)) {
                if (GetPedConfigFlag(this.entityHandle, flagValue, true)) {
                    activeFlags.push(flagValue as PEDCONFIGFLAGS);
                }
            }
        }
        return activeFlags;
    }

    // ==================== APPEARANCE ====================

    /**
     * Sets the ped's component variation (clothing, etc.)
     * @param componentId The component ID (0-11)
     * @param drawableId The drawable ID
     * @param textureId The texture ID
     * @param paletteId The palette ID (default 0)
     * @see [SetPedComponentVariation](https://docs.fivem.net/natives/?_0x262B14F48D29DE80) for more information.
     */
    public setComponentVariation(componentId: number, drawableId: number, textureId: number, paletteId: number = 0): void {
        SetPedComponentVariation(this.entityHandle, componentId, drawableId, textureId, paletteId);
    }

    /**
     * Sets the ped's prop (hats, glasses, etc.)
     * @param propId The prop ID (0 = hats, 1 = glasses, 2 = ears)
     * @param drawableId The drawable ID (-1 to remove)
     * @param textureId The texture ID
     * @param attach Whether to attach the prop
     * @see [SetPedPropIndex](https://docs.fivem.net/natives/?_0x93376B65A266EB5F) for more information.
     */
    public setPropIndex(propId: number, drawableId: number, textureId: number, attach: boolean = true): void {
        SetPedPropIndex(this.entityHandle, propId, drawableId, textureId, attach);
    }

    /**
     * Clears a prop from the ped
     * @param propId The prop ID to clear
     * @see [ClearPedProp](https://docs.fivem.net/natives/?_0x0943E5B8E078E76E) for more information.
     */
    public clearProp(propId: number): void {
        ClearPedProp(this.entityHandle, propId);
    }

    /**
     * Sets the ped's default component variation
     * @see [SetPedDefaultComponentVariation](https://docs.fivem.net/natives/?_0x45EEE61580806D63) for more information.
     */
    public setDefaultComponentVariation(): void {
        SetPedDefaultComponentVariation(this.entityHandle);
    }

    /**
     * Sets the ped to a random component variation
     * @see [SetPedRandomComponentVariation](https://docs.fivem.net/natives/?_0xC8A9481A01E63C28) for more information.
     */
    public setRandomComponentVariation(): void {
        SetPedRandomComponentVariation(this.entityHandle, 0);
    }

    // ==================== RAGDOLL ====================

    /**
     * Sets the ped to ragdoll
     * @param duration Duration in milliseconds
     * @param ragdollType The ragdoll type (0 = normal, 1 = fall, 2 = NM)
     * @see [SetPedToRagdoll](https://docs.fivem.net/natives/?_0xAE99FB955581844A) for more information.
     */
    public setToRagdoll(duration: number = 1000, ragdollType: number = 0): void {
        SetPedToRagdoll(this.entityHandle, duration, duration, ragdollType, false, false, false);
    }

    /**
     * Cancels the ragdoll on the ped
     * @see [SetPedCanRagdoll](https://docs.fivem.net/natives/?_0xB128377056A54E2A) for more information.
     */
    public cancelRagdoll(): void {
        SetPedCanRagdoll(this.entityHandle, false);
        SetPedCanRagdoll(this.entityHandle, true);
    }

    // ==================== RELATIONSHIPS ====================

    /**
     * Sets the ped's relationship group
     * @param groupHash The relationship group hash
     * @see [SetPedRelationshipGroupHash](https://docs.fivem.net/natives/?_0xC80A74AC829DDD92) for more information.
     */
    public setRelationshipGroup(groupHash: number): void {
        SetPedRelationshipGroupHash(this.entityHandle, groupHash);
    }

    /**
     * Returns the ped's relationship group hash
     * @returns The relationship group hash
     * @see [GetPedRelationshipGroupHash](https://docs.fivem.net/natives/?_0x7DBDD04862D95F04) for more information.
     */
    get relationshipGroup(): number {
        return GetPedRelationshipGroupHash(this.entityHandle);
    }

    // ==================== STATIC METHODS ====================

    /**
     * Creates a FiveVPed from a network ID
     * @param netId The network ID
     * @returns A new FiveVPed instance, or null if not found
     */
    public static fromNetworkId(netId: number): FiveVPed | null {
        if (!NetworkDoesEntityExistWithNetworkId(netId)) return null;
        const entityId = NetToPed(netId);
        if (entityId === 0 || !DoesEntityExist(entityId)) return null;
        return new FiveVPed(entityId);
    }

    /**
     * Gets the closest ped to a position
     * @param position The position to search from
     * @param radius The search radius
     * @returns A FiveVPed instance, or null if none found
     */
    public static getClosest(position: Vector3, radius: number = 25.0): FiveVPed | null {
        const [found, ped] = GetClosestPed(position.x, position.y, position.z, radius, true, true, false, false, -1);
        if (!found || ped === 0) return null;
        return new FiveVPed(ped);
    }
}
