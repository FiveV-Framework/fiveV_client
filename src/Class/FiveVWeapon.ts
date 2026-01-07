import { FiveVWeaponList } from "../utils/weapons";
import { FiveVWeaponData, FiveVWeaponComponentData, WEAPONTYPE } from "../@types/weapon";

/**
 * Static class for weapon utilities and management
 * Provides methods for weapon lookup, player weapon management, and component handling
 */
export class FiveVWeapon {
    // Cache for faster lookups
    private static weaponsByName: Map<string, FiveVWeaponData> | null = null;
    private static weaponsByHash: Map<string, FiveVWeaponData> | null = null;

    /**
     * Initializes the weapon cache for faster lookups
     */
    private static initCache(): void {
        if (this.weaponsByName === null) {
            this.weaponsByName = new Map();
            this.weaponsByHash = new Map();
            for (const weapon of FiveVWeaponList) {
                this.weaponsByName.set(weapon.name.toLowerCase(), weapon);
                this.weaponsByHash.set(weapon.Hash.toLowerCase(), weapon);
            }
        }
    }

    // ==================== STATIC WEAPON DATA ====================

    /**
     * Returns a list of all GTA default weapons
     * @returns The weapons as {@link FiveVWeaponData} array
     */
    static get allGTAWeapons(): FiveVWeaponData[] {
        return FiveVWeaponList;
    }

    /**
     * Returns all weapon hashes
     * @returns An array of weapon hashes (e.g., "WEAPON_PISTOL")
     */
    static getAllWeaponHashes(): string[] {
        return FiveVWeaponList.map(weapon => weapon.Hash);
    }

    /**
     * Returns all weapon model hash keys
     * @returns An array of weapon model hash keys
     */
    static getAllWeaponModelHashKeys(): string[] {
        return FiveVWeaponList.map(weapon => weapon.Model_Hash_Key);
    }

    /**
     * Returns all weapon descriptions
     * @returns An array of weapon descriptions
     */
    static getAllWeaponDescriptions(): string[] {
        return FiveVWeaponList.map(weapon => weapon.Description);
    }

    /**
     * Returns all weapon components
     * @returns An array of component arrays
     */
    static getAllWeaponComponents(): FiveVWeaponComponentData[][] {
        return FiveVWeaponList.map(weapon => weapon.Components);
    }

    /**
     * Gets weapons filtered by type
     * @param type The weapon type to filter by
     * @returns Array of weapons matching the type
     */
    static getWeaponsByType(type: WEAPONTYPE): FiveVWeaponData[] {
        return FiveVWeaponList.filter(w => w.type === type);
    }

    // ==================== WEAPON LOOKUP ====================

    /**
     * Gets weapon data by name
     * @param weaponName The weapon name (e.g., "Pistol", "Combat MG")
     * @returns The weapon data or null if not found
     */
    static getByName(weaponName: string): FiveVWeaponData | null {
        this.initCache();
        return this.weaponsByName!.get(weaponName.toLowerCase()) ?? null;
    }

    /**
     * Gets weapon data by hash
     * @param hash The weapon hash (e.g., "WEAPON_PISTOL")
     * @returns The weapon data or null if not found
     */
    static getByHash(hash: string): FiveVWeaponData | null {
        this.initCache();
        return this.weaponsByHash!.get(hash.toLowerCase()) ?? null;
    }

    /**
     * Returns the hash of the weapon by name
     * @param weaponName The weapon name (e.g., "Unarmed", "Combat MG")
     * @returns The weapon hash (e.g., "WEAPON_UNARMED") or null
     */
    static weaponHash(weaponName: string): string | null {
        const weapon = this.getByName(weaponName);
        return weapon ? weapon.Hash : null;
    }

    /**
     * Returns the model hash key of the weapon by name
     * @param weaponName The weapon name
     * @returns The weapon model hash key or null
     */
    static weaponModelHashKey(weaponName: string): string | null {
        const weapon = this.getByName(weaponName);
        return weapon ? weapon.Model_Hash_Key : null;
    }

    /**
     * Returns the description of the weapon by name
     * @param weaponName The weapon name
     * @returns The weapon description or null
     */
    static weaponDescription(weaponName: string): string | null {
        const weapon = this.getByName(weaponName);
        return weapon ? weapon.Description : null;
    }

    /**
     * Returns the components of the weapon by name
     * @param weaponName The weapon name
     * @returns An array of components or null
     */
    static weaponComponents(weaponName: string): FiveVWeaponComponentData[] | null {
        const weapon = this.getByName(weaponName);
        return weapon ? weapon.Components : null;
    }

    // ==================== PLAYER WEAPON MANAGEMENT ====================

    /**
     * Gives a weapon to the local player
     * @param weaponHash The weapon hash string (e.g., "WEAPON_PISTOL") or hash number
     * @param ammo Amount of ammo to give (default: 100)
     * @param equipNow Whether to equip the weapon immediately (default: false)
     * @param isAmmoLoaded Whether ammo is loaded in the weapon (default: true)
     * @see [GiveWeaponToPed](https://docs.fivem.net/natives/?_0xBF0FD6E56C964FCB) for more information.
     */
    static giveToPlayer(weaponHash: string | number, ammo: number = 100, equipNow: boolean = false, isAmmoLoaded: boolean = true): void {
        const hash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        GiveWeaponToPed(PlayerPedId(), hash, ammo, false, equipNow);
    }

    /**
     * Removes a weapon from the local player
     * @param weaponHash The weapon hash string or hash number
     * @see [RemoveWeaponFromPed](https://docs.fivem.net/natives/?_0x4899CB088EDF59B8) for more information.
     */
    static removeFromPlayer(weaponHash: string | number): void {
        const hash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        RemoveWeaponFromPed(PlayerPedId(), hash);
    }

    /**
     * Removes all weapons from the local player
     * @see [RemoveAllPedWeapons](https://docs.fivem.net/natives/?_0xF25DF915FA38C5F3) for more information.
     */
    static removeAllFromPlayer(): void {
        RemoveAllPedWeapons(PlayerPedId(), true);
    }

    /**
     * Checks if the local player has a specific weapon
     * @param weaponHash The weapon hash string or hash number
     * @returns true if the player has the weapon
     * @see [HasPedGotWeapon](https://docs.fivem.net/natives/?_0x8DECB02F88F428BC) for more information.
     */
    static playerHasWeapon(weaponHash: string | number): boolean {
        const hash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        return HasPedGotWeapon(PlayerPedId(), hash, false);
    }

    /**
     * Gets the current weapon hash of the local player
     * @returns The current weapon hash number
     * @see [GetCurrentPedWeapon](https://docs.fivem.net/natives/?_0x3A87E44BB9A01D54) for more information.
     */
    static getPlayerCurrentWeapon(): number {
        const [, weapon] = GetCurrentPedWeapon(PlayerPedId(), true);
        return weapon;
    }

    /**
     * Gets the current weapon hash of the local player as a string
     * @returns The weapon data if found, null otherwise
     */
    static getPlayerCurrentWeaponData(): FiveVWeaponData | null {
        const hash = this.getPlayerCurrentWeapon();
        for (const weapon of FiveVWeaponList) {
            if (GetHashKey(weapon.Hash) === hash) {
                return weapon;
            }
        }
        return null;
    }

    /**
     * Sets the local player's current weapon
     * @param weaponHash The weapon hash string or hash number
     * @see [SetCurrentPedWeapon](https://docs.fivem.net/natives/?_0xADF692B254977C0C) for more information.
     */
    static setPlayerCurrentWeapon(weaponHash: string | number): void {
        const hash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        SetCurrentPedWeapon(PlayerPedId(), hash, true);
    }

    // ==================== AMMO MANAGEMENT ====================

    /**
     * Gets the ammo count for a weapon in the local player's inventory
     * @param weaponHash The weapon hash string or hash number
     * @returns The ammo count
     * @see [GetAmmoInPedWeapon](https://docs.fivem.net/natives/?_0x015A522136D7F951) for more information.
     */
    static getPlayerAmmo(weaponHash: string | number): number {
        const hash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        return GetAmmoInPedWeapon(PlayerPedId(), hash);
    }

    /**
     * Sets the ammo count for a weapon in the local player's inventory
     * @param weaponHash The weapon hash string or hash number
     * @param ammo The ammo count to set
     * @see [SetPedAmmo](https://docs.fivem.net/natives/?_0x14E56BC5B5DB6A19) for more information.
     */
    static setPlayerAmmo(weaponHash: string | number, ammo: number): void {
        const hash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        SetPedAmmo(PlayerPedId(), hash, ammo);
    }

    /**
     * Adds ammo to a weapon in the local player's inventory
     * @param weaponHash The weapon hash string or hash number
     * @param ammo The ammo count to add
     * @see [AddAmmoToPed](https://docs.fivem.net/natives/?_0x78F0424C34306220) for more information.
     */
    static addPlayerAmmo(weaponHash: string | number, ammo: number): void {
        const hash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        AddAmmoToPed(PlayerPedId(), hash, ammo);
    }

    /**
     * Gets the max ammo for a weapon type
     * @param weaponHash The weapon hash string or hash number
     * @returns The max ammo count
     * @see [GetMaxAmmoInClip](https://docs.fivem.net/natives/?_0xA38DCFFCEA8962FA) for more information.
     */
    static getMaxAmmoInClip(weaponHash: string | number): number {
        const hash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        return GetMaxAmmoInClip(PlayerPedId(), hash, true);
    }

    // ==================== COMPONENT MANAGEMENT ====================

    /**
     * Gives a weapon component to the local player
     * @param weaponHash The weapon hash string or hash number
     * @param componentHash The component hash string or hash number
     * @see [GiveWeaponComponentToPed](https://docs.fivem.net/natives/?_0xD966D51AA5B28BB9) for more information.
     */
    static giveComponentToPlayer(weaponHash: string | number, componentHash: string | number): void {
        const wHash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        const cHash = typeof componentHash === "string" ? GetHashKey(componentHash) : componentHash;
        GiveWeaponComponentToPed(PlayerPedId(), wHash, cHash);
    }

    /**
     * Removes a weapon component from the local player
     * @param weaponHash The weapon hash string or hash number
     * @param componentHash The component hash string or hash number
     * @see [RemoveWeaponComponentFromPed](https://docs.fivem.net/natives/?_0x1E8BE90C74FB4C09) for more information.
     */
    static removeComponentFromPlayer(weaponHash: string | number, componentHash: string | number): void {
        const wHash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        const cHash = typeof componentHash === "string" ? GetHashKey(componentHash) : componentHash;
        RemoveWeaponComponentFromPed(PlayerPedId(), wHash, cHash);
    }

    /**
     * Checks if the local player has a weapon component
     * @param weaponHash The weapon hash string or hash number
     * @param componentHash The component hash string or hash number
     * @returns true if the player has the component
     * @see [HasPedGotWeaponComponent](https://docs.fivem.net/natives/?_0xC593212475FAE340) for more information.
     */
    static playerHasComponent(weaponHash: string | number, componentHash: string | number): boolean {
        const wHash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        const cHash = typeof componentHash === "string" ? GetHashKey(componentHash) : componentHash;
        return HasPedGotWeaponComponent(PlayerPedId(), wHash, cHash);
    }

    // ==================== TINT MANAGEMENT ====================

    /**
     * Gets the tint index of a weapon in the local player's inventory
     * @param weaponHash The weapon hash string or hash number
     * @returns The tint index (0-7)
     * @see [GetPedWeaponTintIndex](https://docs.fivem.net/natives/?_0x2B9EEDC07BD06B9F) for more information.
     */
    static getPlayerWeaponTint(weaponHash: string | number): number {
        const hash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        return GetPedWeaponTintIndex(PlayerPedId(), hash);
    }

    /**
     * Sets the tint index of a weapon in the local player's inventory
     * @param weaponHash The weapon hash string or hash number
     * @param tintIndex The tint index (0-7)
     * @see [SetPedWeaponTintIndex](https://docs.fivem.net/natives/?_0x50969B9B89ED5738) for more information.
     */
    static setPlayerWeaponTint(weaponHash: string | number, tintIndex: number): void {
        const hash = typeof weaponHash === "string" ? GetHashKey(weaponHash) : weaponHash;
        SetPedWeaponTintIndex(PlayerPedId(), hash, tintIndex);
    }
}
