import { CONTROL_INPUTS_ACTION, HUDCOMPONENT, PEDCONFIGFLAGS } from "../@types/player";
import { Vector3 } from "../utils/Vector3";
import { TransformNumberArrayInVector3 } from "../utils/Transformer";
import { FiveVVehicle } from "./FiveVVehicle";
import { FiveVPed } from "./FiveVPed";
import { SEATPOSITION } from "../@types/vehicle";

/**
 * Static class for local player operations.
 * For operations on the player's ped, use `FiveVPlayer.ped` to get a FiveVPed instance.
 */
export class FiveVPlayer {

    // ==================== PED REFERENCE ====================

    /**
     * Returns the player's ped as a FiveVPed instance for full ped operations
     * @returns A FiveVPed instance representing the player's ped
     */
    static get ped(): FiveVPed {
        return new FiveVPed(PlayerPedId());
    }

    /**
     * Returns the player ped handle
     * @returns The player ped as a number
     */
    static get handle(): number {
        return PlayerPedId();
    }

    /**
     * Returns the player ID
     * @returns The player ID
     * @see [PlayerId](https://docs.fivem.net/natives/?_0x4F8644AF03D0E0D6) for more information.
     */
    static get playerId(): number {
        return PlayerId();
    }

    /**
     * Returns the server ID of the local player
     * @returns The server ID
     * @see [GetPlayerServerId](https://docs.fivem.net/natives/?_0x4D9CEEE02FEF) for more information.
     */
    static get serverId(): number {
        return GetPlayerServerId(PlayerId());
    }

    // ==================== POSITION & ROTATION ====================

    /**
     * Returns the position of the player
     * @returns The position as a {@link Vector3}.
     * @see [GetEntityCoords](https://docs.fivem.net/natives/?_0x3FEF770D40960D5A) for more information.
     */
    static get position(): Vector3 {
        return TransformNumberArrayInVector3(GetEntityCoords(PlayerPedId(), true));
    }

    /**
     * Sets the position of the player
     * @param newPosition The position as a {@link Vector3} or a number array.
     * @see [SetEntityCoords](https://docs.fivem.net/natives/?_0xDF70B41B) for more information.
     */
    static set position(newPosition: Vector3 | [x: number, y: number, z: number]) {
        if (Array.isArray(newPosition)) {
            const [x, y, z] = newPosition;
            RequestCollisionAtCoord(x, y, z);
            SetEntityCoords(PlayerPedId(), x, y, z, false, false, false, false);
        } else {
            RequestCollisionAtCoord(newPosition.x, newPosition.y, newPosition.z);
            SetEntityCoords(PlayerPedId(), newPosition.x, newPosition.y, newPosition.z, false, false, false, false);
        }
    }

    /**
     * Returns the rotation of the player
     * @returns The rotation as a {@link Vector3}.
     * @see [GetEntityRotation](https://docs.fivem.net/natives/?_0x8FF45B04) for more information.
     */
    static get rotation(): Vector3 {
        return TransformNumberArrayInVector3(GetEntityRotation(PlayerPedId(), 2));
    }

    /**
     * Sets the rotation of the player
     * @param newRotation The rotation as a {@link Vector3} or a number array.
     * @see [SetEntityRotation](https://docs.fivem.net/natives/?_0xA345EFE) for more information.
     */
    static set rotation(newRotation: Vector3 | [x: number, y: number, z: number]) {
        if (Array.isArray(newRotation)) {
            const [x, y, z] = newRotation;
            SetEntityRotation(PlayerPedId(), x, y, z, 2, false);
        } else {
            SetEntityRotation(PlayerPedId(), newRotation.x, newRotation.y, newRotation.z, 2, false);
        }
    }

    /**
     * Returns the heading of the player
     * @returns The heading as a number (0-360 degrees)
     * @see [GetEntityHeading](https://docs.fivem.net/natives/?_0x972CC383) for more information.
     */
    static get heading(): number {
        return GetEntityHeading(PlayerPedId());
    }

    /**
     * Sets the heading of the player
     * @param newHeading The heading (0-360 degrees)
     * @see [SetEntityHeading](https://docs.fivem.net/natives/?_0xE0FF064D) for more information.
     */
    static set heading(newHeading: number) {
        SetEntityHeading(PlayerPedId(), newHeading);
    }

    /**
     * Returns the camera heading relative to the player
     * @returns The camera heading as a number
     * @see [GetGameplayCamRelativeHeading](https://docs.fivem.net/natives/?_0x743607648ADD4587) for more information.
     */
    static get camHeading(): number {
        return GetGameplayCamRelativeHeading();
    }

    // ==================== ENTITY PROPERTIES ====================

    /**
     * Returns whether collision is enabled for the player
     * @returns true if collision is enabled, false if disabled
     * @see [GetEntityCollisionDisabled](https://docs.fivem.net/natives/?_0xCCF1E97BEFDAE480) for more information.
     */
    static get collision(): boolean {
        return !GetEntityCollisionDisabled(PlayerPedId());
    }

    /**
     * Sets the collision state of the player
     * @param enable true to enable collision, false to disable
     * @see [SetEntityCollision](https://docs.fivem.net/natives/?_0x1A9205C1B9EE827F) for more information.
     */
    static set collision(enable: boolean) {
        SetEntityCollision(PlayerPedId(), enable, true);
    }

    /**
     * Returns whether the player is frozen
     * @returns true if frozen, false otherwise
     * @see [IsEntityPositionFrozen](https://docs.fivem.net/natives/?_0xEDBE6ADD) for more information.
     */
    static get frozen(): boolean {
        return IsEntityPositionFrozen(PlayerPedId());
    }

    /**
     * Sets the freeze state of the player
     * @param enable true to freeze, false to unfreeze
     * @see [FreezeEntityPosition](https://docs.fivem.net/natives/?_0x65C16D57) for more information.
     */
    static set frozen(enable: boolean) {
        FreezeEntityPosition(PlayerPedId(), enable);
    }

    /**
     * Returns whether the player is invincible
     * @returns true if invincible, false otherwise
     * @see [GetPlayerInvincible](https://docs.fivem.net/natives/?_0x680C90EE) for more information.
     */
    static get invincible(): boolean {
        return GetPlayerInvincible(PlayerId());
    }

    /**
     * Sets the invincibility state of the player
     * @param enable true for invincible, false for vulnerable
     * @see [SetPlayerInvincible](https://docs.fivem.net/natives/?_0x239528EACDC3E7DE) for more information.
     */
    static set invincible(enable: boolean) {
        SetPlayerInvincible(PlayerId(), enable);
    }

    /**
     * Returns whether the player is visible
     * @returns true if visible, false if invisible
     * @see [IsEntityVisible](https://docs.fivem.net/natives/?_0x47D6F43D77935C75) for more information.
     */
    static get visible(): boolean {
        return IsEntityVisible(PlayerPedId());
    }

    /**
     * Sets the visibility of the player
     * @param enable true to make visible, false to hide
     * @see [SetEntityVisible](https://docs.fivem.net/natives/?_0xEA1C610A04DB6BBB) for more information.
     */
    static set visible(enable: boolean) {
        SetEntityVisible(PlayerPedId(), enable, false);
    }

    // ==================== HEALTH & ARMOR ====================

    /**
     * Returns the health of the player
     * @returns The health value
     * @see [GetEntityHealth](https://docs.fivem.net/natives/?_0xEEF059FAD016D209) for more information.
     */
    static get health(): number {
        return GetEntityHealth(PlayerPedId());
    }

    /**
     * Sets the health of the player
     * @param value The health value
     * @see [SetEntityHealth](https://docs.fivem.net/natives/?_0x6B76DC1F) for more information.
     */
    static set health(value: number) {
        SetEntityHealth(PlayerPedId(), value);
    }

    /**
     * Returns the maximum health of the player
     * @returns The maximum health value
     * @see [GetEntityMaxHealth](https://docs.fivem.net/natives/?_0x15D757606D170C3C) for more information.
     */
    static get maxHealth(): number {
        return GetEntityMaxHealth(PlayerPedId());
    }

    /**
     * Returns the armor of the player
     * @returns The armor value
     * @see [GetPedArmour](https://docs.fivem.net/natives/?_0x9483AF821605B1D8) for more information.
     */
    static get armor(): number {
        return GetPedArmour(PlayerPedId());
    }

    /**
     * Sets the armor of the player
     * @param value The armor value (0-100)
     * @see [SetPedArmour](https://docs.fivem.net/natives/?_0xCEA04D83135264CC) for more information.
     */
    static set armor(value: number) {
        SetPedArmour(PlayerPedId(), value);
    }

    // ==================== CONTROLS ====================

    /**
     * Disables a specific control key
     * @param padIndex Control group (0 = default)
     * @param key The key as {@link CONTROL_INPUTS_ACTION} or number
     * @see [DisableControlAction](https://docs.fivem.net/natives/?_0xFE99B66D079CF6BC) for more information.
     */
    public static disableKey(padIndex: number = 0, key: CONTROL_INPUTS_ACTION | number): void {
        DisableControlAction(padIndex, key, true);
    }

    /**
     * Enables a specific control key
     * @param padIndex Control group (0 = default)
     * @param key The key as {@link CONTROL_INPUTS_ACTION} or number
     * @see [EnableControlAction](https://docs.fivem.net/natives/?_0x351220255D64C155) for more information.
     */
    public static enableKey(padIndex: number = 0, key: CONTROL_INPUTS_ACTION | number): void {
        EnableControlAction(padIndex, key, true);
    }

    /**
     * Disables multiple control keys
     * @param padIndex Control group (0 = default)
     * @param keys Array of keys as {@link CONTROL_INPUTS_ACTION} or numbers
     * @see [DisableControlAction](https://docs.fivem.net/natives/?_0xFE99B66D079CF6BC) for more information.
     */
    public static disableKeys(padIndex: number = 0, keys: (CONTROL_INPUTS_ACTION | number)[]): void {
        for (const key of keys) {
            DisableControlAction(padIndex, key, true);
        }
    }

    /**
     * Enables multiple control keys
     * @param padIndex Control group (0 = default)
     * @param keys Array of keys as {@link CONTROL_INPUTS_ACTION} or numbers
     * @see [EnableControlAction](https://docs.fivem.net/natives/?_0x351220255D64C155) for more information.
     */
    public static enableKeys(padIndex: number = 0, keys: (CONTROL_INPUTS_ACTION | number)[]): void {
        for (const key of keys) {
            EnableControlAction(padIndex, key, true);
        }
    }

    /**
     * Checks if a control is currently pressed
     * @param padIndex Control group (0 = default)
     * @param key The key to check
     * @returns true if pressed, false otherwise
     * @see [IsControlPressed](https://docs.fivem.net/natives/?_0xF3A21BCD95725A4A) for more information.
     */
    public static isControlPressed(padIndex: number = 0, key: CONTROL_INPUTS_ACTION | number): boolean {
        return IsControlPressed(padIndex, key);
    }

    /**
     * Checks if a control was just pressed this frame
     * @param padIndex Control group (0 = default)
     * @param key The key to check
     * @returns true if just pressed, false otherwise
     * @see [IsControlJustPressed](https://docs.fivem.net/natives/?_0x580417101DDB492F) for more information.
     */
    public static isControlJustPressed(padIndex: number = 0, key: CONTROL_INPUTS_ACTION | number): boolean {
        return IsControlJustPressed(padIndex, key);
    }

    /**
     * Checks if a control was just released this frame
     * @param padIndex Control group (0 = default)
     * @param key The key to check
     * @returns true if just released, false otherwise
     * @see [IsControlJustReleased](https://docs.fivem.net/natives/?_0x50F940259D3841E6) for more information.
     */
    public static isControlJustReleased(padIndex: number = 0, key: CONTROL_INPUTS_ACTION | number): boolean {
        return IsControlJustReleased(padIndex, key);
    }

    /**
     * Disables all attack-related controls
     * @param padIndex Control group (0 = default)
     */
    public static disableAttack(padIndex: number = 0): void {
        const attackKeys = [
            CONTROL_INPUTS_ACTION.INPUT_ATTACK,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON,
            CONTROL_INPUTS_ACTION.INPUT_VEH_ATTACK,
            CONTROL_INPUTS_ACTION.INPUT_VEH_ATTACK2,
            CONTROL_INPUTS_ACTION.INPUT_VEH_PASSENGER_ATTACK,
            CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK_LIGHT,
            CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK_HEAVY,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_MELEE,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_HANDGUN,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SHOTGUN,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_HEAVY,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SMG,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_AUTO_RIFLE,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SNIPER,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SPECIAL,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_UNARMED,
            CONTROL_INPUTS_ACTION.INPUT_PREV_WEAPON,
            CONTROL_INPUTS_ACTION.INPUT_NEXT_WEAPON,
            CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK1,
            CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK2
        ];
        this.disableKeys(padIndex, attackKeys);
    }

    /**
     * Enables all attack-related controls
     * @param padIndex Control group (0 = default)
     */
    public static enableAttack(padIndex: number = 0): void {
        const attackKeys = [
            CONTROL_INPUTS_ACTION.INPUT_ATTACK,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON,
            CONTROL_INPUTS_ACTION.INPUT_VEH_ATTACK,
            CONTROL_INPUTS_ACTION.INPUT_VEH_ATTACK2,
            CONTROL_INPUTS_ACTION.INPUT_VEH_PASSENGER_ATTACK,
            CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK_LIGHT,
            CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK_HEAVY,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_MELEE,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_HANDGUN,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SHOTGUN,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_HEAVY,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SMG,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_AUTO_RIFLE,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SNIPER,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SPECIAL,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_UNARMED,
            CONTROL_INPUTS_ACTION.INPUT_PREV_WEAPON,
            CONTROL_INPUTS_ACTION.INPUT_NEXT_WEAPON,
            CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK1,
            CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK2
        ];
        this.enableKeys(padIndex, attackKeys);
    }

    /**
     * Disables player firing for this frame
     * @see [DisablePlayerFiring](https://docs.fivem.net/natives/?_0xC6654015BDA42AD0) for more information.
     */
    public static disableFiring(): void {
        DisablePlayerFiring(PlayerId(), true);
    }

    /**
     * Enables player firing for this frame
     * @see [DisablePlayerFiring](https://docs.fivem.net/natives/?_0xC6654015BDA42AD0) for more information.
     */
    public static enableFiring(): void {
        DisablePlayerFiring(PlayerId(), false);
    }

    // ==================== WEAPONS ====================

    /**
     * Returns the hash of the current weapon
     * @returns The weapon hash
     * @see [GetCurrentPedWeapon](https://docs.fivem.net/natives/?_0x3A87E44BB9A01D54) for more information.
     */
    static get currentWeaponHash(): number {
        const [, weapon] = GetCurrentPedWeapon(PlayerPedId(), true);
        return weapon;
    }

    /**
     * Gives a weapon to the player
     * @param weaponHash The weapon hash
     * @param ammo The amount of ammo
     * @param isHidden Whether to hide the weapon
     * @param forceInHand Whether to force the weapon in hand
     */
    public static giveWeapon(weaponHash: number, ammo: number, isHidden: boolean = false, forceInHand: boolean = true): void {
        GiveWeaponToPed(PlayerPedId(), weaponHash, ammo, isHidden, forceInHand);
    }

    /**
     * Removes a weapon from the player
     * @param weaponHash The weapon hash to remove
     */
    public static removeWeapon(weaponHash: number): void {
        RemoveWeaponFromPed(PlayerPedId(), weaponHash);
    }

    /**
     * Removes all weapons from the player
     */
    public static removeAllWeapons(): void {
        RemoveAllPedWeapons(PlayerPedId(), true);
    }

    // ==================== VEHICLE ====================

    /**
     * Returns the vehicle the player is currently in
     * @returns A FiveVVehicle instance, or null if not in a vehicle
     * @see [GetVehiclePedIsIn](https://docs.fivem.net/natives/?_0x9A9112A0FE9A4713) for more information.
     */
    static get vehicle(): FiveVVehicle | null {
        if (!IsPedInAnyVehicle(PlayerPedId(), false)) return null;
        const veh = GetVehiclePedIsIn(PlayerPedId(), false);
        return veh !== 0 ? new FiveVVehicle(veh) : null;
    }

    /**
     * Returns the last vehicle the player was in
     * @returns A FiveVVehicle instance, or null if never in a vehicle
     */
    static get lastVehicle(): FiveVVehicle | null {
        const veh = GetVehiclePedIsIn(PlayerPedId(), true);
        return veh !== 0 ? new FiveVVehicle(veh) : null;
    }

    /**
     * Returns whether the player is in the driver seat
     * @returns true if in driver seat, false otherwise
     */
    static get isDriver(): boolean {
        if (!this.isInVehicle) return false;
        const vehicle = GetVehiclePedIsIn(PlayerPedId(), false);
        return GetPedInVehicleSeat(vehicle, SEATPOSITION.SF_FrontDriverSide) === PlayerPedId();
    }

    // ==================== CONFIG FLAGS ====================

    /**
     * Enables a ped config flag
     * @param flagId The flag ID as {@link PEDCONFIGFLAGS} or number
     * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) for more information.
     */
    public static enableConfigFlag(flagId: PEDCONFIGFLAGS | number): void {
        SetPedConfigFlag(PlayerPedId(), flagId, true);
    }

    /**
     * Disables a ped config flag
     * @param flagId The flag ID as {@link PEDCONFIGFLAGS} or number
     * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) for more information.
     */
    public static disableConfigFlag(flagId: PEDCONFIGFLAGS | number): void {
        SetPedConfigFlag(PlayerPedId(), flagId, false);
    }

    /**
     * Enables multiple ped config flags
     * @param flagIds Array of flag IDs
     */
    public static enableConfigFlags(flagIds: (PEDCONFIGFLAGS | number)[]): void {
        for (const flag of flagIds) {
            SetPedConfigFlag(PlayerPedId(), flag, true);
        }
    }

    /**
     * Disables multiple ped config flags
     * @param flagIds Array of flag IDs
     */
    public static disableConfigFlags(flagIds: (PEDCONFIGFLAGS | number)[]): void {
        for (const flag of flagIds) {
            SetPedConfigFlag(PlayerPedId(), flag, false);
        }
    }

    /**
     * Returns all active config flags
     * @returns Array of active {@link PEDCONFIGFLAGS}
     */
    static get activeConfigFlags(): PEDCONFIGFLAGS[] {
        const activeFlags: PEDCONFIGFLAGS[] = [];
        for (const flag in PEDCONFIGFLAGS) {
            const flagValue = Number(flag);
            if (!isNaN(flagValue)) {
                if (GetPedConfigFlag(PlayerPedId(), flagValue, true)) {
                    activeFlags.push(flagValue as PEDCONFIGFLAGS);
                }
            }
        }
        return activeFlags;
    }

    // ==================== HUD ====================

    /**
     * Hides HUD components for this frame
     * @param components HUD component(s) to hide
     * @see [HideHudComponentThisFrame](https://docs.fivem.net/natives/?_0x6806C51AD12B83B8) for more information.
     */
    public static hideHUD(components: HUDCOMPONENT | number | (HUDCOMPONENT | number)[]): void {
        if (Array.isArray(components)) {
            for (const component of components) {
                HideHudComponentThisFrame(component);
            }
        } else {
            HideHudComponentThisFrame(components);
        }
    }

    /**
     * Shows HUD components for this frame
     * @param components HUD component(s) to show
     * @see [ShowHudComponentThisFrame](https://docs.fivem.net/natives/?_0x0B4DF1FA60C0E664) for more information.
     */
    public static showHUD(components: HUDCOMPONENT | number | (HUDCOMPONENT | number)[]): void {
        if (Array.isArray(components)) {
            for (const component of components) {
                ShowHudComponentThisFrame(component);
            }
        } else {
            ShowHudComponentThisFrame(components);
        }
    }

    // ==================== STATE CHECKS ====================

    /**
     * Returns whether the player is falling
     * @returns true if falling, false otherwise
     * @see [IsPedFalling](https://docs.fivem.net/natives/?_0xFB92A102F1C4DFA3) for more information.
     */
    static get isFalling(): boolean {
        return IsPedFalling(PlayerPedId());
    }

    /**
     * Returns whether the player is in water
     * @returns true if in water, false otherwise
     * @see [IsEntityInWater](https://docs.fivem.net/natives/?_0xCFB0A0D8) for more information.
     */
    static get isInWater(): boolean {
        return IsEntityInWater(PlayerPedId());
    }

    /**
     * Returns whether the player is swimming underwater
     * @returns true if underwater, false otherwise
     * @see [IsPedSwimmingUnderWater](https://docs.fivem.net/natives/?_0x9DE327631295B4C2) for more information.
     */
    static get isUnderWater(): boolean {
        return IsPedSwimmingUnderWater(PlayerPedId());
    }

    /**
     * Returns whether the player is in any vehicle
     * @returns true if in a vehicle, false otherwise
     * @see [IsPedInAnyVehicle](https://docs.fivem.net/natives/?_0x997ABD671D25CA0B) for more information.
     */
    static get isInVehicle(): boolean {
        return IsPedInAnyVehicle(PlayerPedId(), false);
    }

    /**
     * Returns whether the player is armed (excluding melee and fists)
     * @returns true if armed, false otherwise
     * @see [IsPedArmed](https://docs.fivem.net/natives/?_0x475768A975D5AD17) for more information.
     */
    static get isArmed(): boolean {
        return IsPedArmed(PlayerPedId(), 4 | 2);
    }

    /**
     * Returns whether the player is dead
     * @returns true if dead, false otherwise
     * @see [IsEntityDead](https://docs.fivem.net/natives/?_0x5F9532F3) for more information.
     */
    static get isDead(): boolean {
        return IsEntityDead(PlayerPedId());
    }

    /**
     * Returns whether the player is aiming
     * @returns true if aiming, false otherwise
     * @see [IsPlayerFreeAiming](https://docs.fivem.net/natives/?_0x2E397FD2ECD37C87) for more information.
     */
    static get isAiming(): boolean {
        return IsPlayerFreeAiming(PlayerId());
    }

    /**
     * Returns whether the player is running
     * @returns true if running, false otherwise
     * @see [IsPedRunning](https://docs.fivem.net/natives/?_0xC5286FFC176F28A2) for more information.
     */
    static get isRunning(): boolean {
        return IsPedRunning(PlayerPedId());
    }

    /**
     * Returns whether the player is sprinting
     * @returns true if sprinting, false otherwise
     * @see [IsPedSprinting](https://docs.fivem.net/natives/?_0x57E457CD2C0FC168) for more information.
     */
    static get isSprinting(): boolean {
        return IsPedSprinting(PlayerPedId());
    }

    // ==================== WANTED LEVEL ====================

    /**
     * Returns the wanted level of the player
     * @returns The wanted level (0-5)
     * @see [GetPlayerWantedLevel](https://docs.fivem.net/natives/?_0xE28E54788CE8F12D) for more information.
     */
    static get wantedLevel(): number {
        return GetPlayerWantedLevel(PlayerId());
    }

    /**
     * Sets the wanted level of the player
     * @param level The wanted level (0-5)
     * @see [SetPlayerWantedLevel](https://docs.fivem.net/natives/?_0x39FF19C64EF7DA5B) for more information.
     */
    static set wantedLevel(level: number) {
        SetPlayerWantedLevel(PlayerId(), level, false);
        SetPlayerWantedLevelNow(PlayerId(), false);
    }

    /**
     * Clears the wanted level
     */
    public static clearWantedLevel(): void {
        ClearPlayerWantedLevel(PlayerId());
    }

    /**
     * Sets the maximum wanted level
     * @param maxLevel The maximum wanted level (0-5)
     * @see [SetMaxWantedLevel](https://docs.fivem.net/natives/?_0xAA5F02DB48D704B9) for more information.
     */
    public static setMaxWantedLevel(maxLevel: number): void {
        SetMaxWantedLevel(maxLevel);
    }
}
