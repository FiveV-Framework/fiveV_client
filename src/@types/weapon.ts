import {GTADLC} from "../utils/ungrouped";

export interface FiveVWeapon {
    name: string;
    type: FiveVWeaponType;
    Hash: string;
    Model_Hash_Key: string;
    DLC: GTADLC;
    Description: string;
    Tints: string[];
    Components: string[];
}

export interface FiveVWeaponComponent {
    name: string;
    Hash_Key: string;
    Hash: string;
}

export enum FiveVWeaponType {
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