/**
 * Weapon type categories
 */
export enum WEAPONTYPE {
    UNARMED,
    FIREEXTINGUISHER,
    PETROLCAN,
    THROWN,
    MELEE,
    STUNGUN,
    PISTOL,
    SMG,
    MACHINEGUN,
    SHOTGUN,
    RIFLE,
    SNIPER,
    HEAVY,
    METALLDETECTOR,
    HACKING,
}

/**
 * Weapon data structure
 */
export interface FiveVWeaponData {
    /** Display name of the weapon */
    name: string;
    /** Weapon type category */
    type: WEAPONTYPE;
    /** Weapon hash string (e.g., "WEAPON_PISTOL") */
    Hash: string;
    /** Model hash key for the weapon model */
    Model_Hash_Key: string;
    /** Description text of the weapon */
    Description: string;
    /** Available components for this weapon */
    Components: FiveVWeaponComponentData[];
}

/**
 * Weapon component data structure
 */
export interface FiveVWeaponComponentData {
    /** Display name of the component */
    name: string;
    /** Component hash key string */
    Hash_Key: string;
    /** Component hash value */
    Hash: string;
}

// Legacy aliases for backwards compatibility
/** @deprecated Use FiveVWeaponData instead */
export type fiveVWeapon = FiveVWeaponData;
/** @deprecated Use FiveVWeaponComponentData instead */
export type fiveVWeaponComponent = FiveVWeaponComponentData;
