import {GTADLC} from "./ungrouped";
import {FiveVWeapon, FiveVWeaponComponent, FiveVWeaponType} from "../@types/weapon";

export const FiveVWeapons : FiveVWeapon[] = [
    {name: "Unarmed", type: FiveVWeaponType.UNARMED, Hash: "WEAPON_UNARMED", Model_Hash_Key: "", DLC: GTADLC.CORE, Description: "", Components: [], Tints: []},
    {name: "Knuckle Duster", type: FiveVWeaponType.UNARMED, Hash: "WEAPON_KNUCKLE", Model_Hash_Key: "", DLC: GTADLC.MPLUXE2, Description: "Perfect for knocking out gold teeth, or as a gift to the trophy partner who has everything. Part of The Ill-Gotten Gains Update Part 2.", Components: ["COMPONENT_KNUCKLE_VARMOD_PLAYER", "COMPONENT_KNUCKLE_VARMOD_LOVE"], Tints: []},

]

export const FiveVWeaponComponents : FiveVWeaponComponent[] = [
    {name: "Base Model", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_BASE", Hash: "0xF3462F33"},
    {name: "The Pimp", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_PIMP", Hash: "0xC613F685"},
]