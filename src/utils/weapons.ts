import {fiveVWeapon, WEAPONTYPE} from "../@types/weapon";
import {GTADLC} from "./ungrouped";

/*async function fetchWeapons(): Promise<FiveVWeapon[]> {
    const res:string = await fetch('https://docs.fivem.net/_next/data/IvuYNvthisdS29Cwtxg0B/docs/game-references/weapon-models.json');
    const data = await res.json();
    const weapons FiveVWeapon[] = data.weapons;

    return weapons;
}*/


export const FiveVWeaponList : fiveVWeapon[] = [
    {name: "Unarmed", type: WEAPONTYPE.UNARMED, Hash: "WEAPON_UNARMED", Model_Hash_Key: "", Description: "", Components: []},
    {name: "Knuckle Duster", type: WEAPONTYPE.UNARMED, Hash: "WEAPON_KNUCKLE", Model_Hash_Key: "", Description: "Perfect for knocking out gold teeth, or as a gift to the trophy partner who has everything. Part of The Ill-Gotten Gains Update Part 2.",
        Components: [
            { name: "Base Model", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_BASE", Hash: "0xF3462F33" },
            { name: "The Pimp", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_PIMP", Hash: "0xC613F685" },
            { name: "The Ballas", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_BALLAS", Hash: "0xEED9FD63" },
            { name: "The Hustler", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_DOLLAR", Hash: "0x50910C31" },
            { name: "The Rock", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_DIAMOND", Hash: "0x9761D9DC" },
            { name: "The Hater", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_HATE", Hash: "0x7DECFE30" },
            { name: "The Lover", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_LOVE", Hash: "0x3F4E8AA6" },
            { name: "The Player", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_PLAYER", Hash: "0x8B808BB" },
            { name: "The King", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_KING", Hash: "0xE28BABEF" },
            { name: "The Vagos", Hash_Key: "COMPONENT_KNUCKLE_VARMOD_VAGOS", Hash: "0x7AF3F785" },
        ]},
    // MACHINE GUN MG
    {name: "MG", type: WEAPONTYPE.MACHINEGUN, Hash: "WEAPON_MG", Model_Hash_Key: "w_mg_mg", Description: "General purpose machine gun that combines rugged design with dependable performance. Long range penetrative power. Very effective against large groups.",
        Components: [// MG
            { name: "Default Clip", Hash_Key: "COMPONENT_MG_CLIP_01", Hash: "0xF434EF84" },
            { name: "Extended Clip", Hash_Key: "COMPONENT_MG_CLIP_02", Hash: "0x82158B47" },
            { name: "Scope", Hash_Key: "COMPONENT_AT_SCOPE_SMALL_02", Hash: "0x3C00AFED" },
            { name: "Yusuf Amir Luxury Finish", Hash_Key: "COMPONENT_MG_VARMOD_LOWRIDER", Hash: "0xD6DABABE" },
        ]},
    {name: "Combat MG", type: WEAPONTYPE.MACHINEGUN, Hash: "WEAPON_COMBATMG", Model_Hash_Key: "w_mg_combatmg", Description: "Lightweight, compact machine gun that combines excellent maneuverability with a high rate of fire to devastating effect.",
        Components: [// Combat MG
            { name: "Default Clip", Hash_Key: "COMPONENT_COMBATMG_CLIP_01", Hash: "0xE1FFB34A" },
            { name: "Extended Clip", Hash_Key: "COMPONENT_COMBATMG_CLIP_02", Hash: "0xD6C59CD6" },
            { name: "Scope", Hash_Key: "COMPONENT_AT_SCOPE_MEDIUM", Hash: "0xA0D89C42" },
            { name: "Grip", Hash_Key: "COMPONENT_AT_AR_AFGRIP", Hash: "0x3C00AFED" },
            { name: "Yusuf Amir Luxury Finish", Hash_Key: "COMPONENT_COMBATMG_VARMOD_LOWRIDER", Hash: "0x92FECCDD" },
        ]}
    ];

