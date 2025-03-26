import {CONTROL_INPUTS_ACTION, fiveMPlayer, PEDCONFIGFLAGS} from "../@types/player";
import {Vector3} from "../utils/Vector3";
import {TransformNumberArrayInVector3} from "../utils/Transformer";
import {FiveVWeapon} from "../@types/weapon";

export class FiveMPlayer {
    private player: fiveMPlayer;

    constructor(player: fiveMPlayer) {
        this.player = player;
    }

    /**
     * Gibt die Position des Players zurück
     * @returns Die Position in einem {@link Vector3}.
     * @see [GetntityCoords](https://docs.fivem.net/natives/?_0x3FEF770D40960D5A) / {@link TransformNumberArrayInVector3} für weitere Informationen.
     */
    get position(): Vector3 {
        return TransformNumberArrayInVector3(GetEntityCoords(this.player, true));
    }

    /**
     * Setzt die Position des Players.
     * @param newPosition Die Position in einem {@link Vector3} oder einem NumberArray.
     * @see [SetEntityCoords](https://docs.fivem.net/natives/?_0xDF70B41B) für weitere Informationen.
     */
    set position(newPosition: Vector3 | [x: number, y: number, z: number]) {
        if (Array.isArray(newPosition)) {
            const [x, y, z] = newPosition;
            RequestCollisionAtCoord(x, y, z);
            SetEntityCoords(this.player, x, y, z, false, false, false, false);
        } else {
            RequestCollisionAtCoord(newPosition.x, newPosition.y, newPosition.z);
            SetEntityCoords(this.player, newPosition.x, newPosition.y, newPosition.z, false, false, false, false);
        }
    }

    /**
     * Gibt zurück, ob die Collision des Players disabled ist
     * @returns true wenn die Collision aktiviert ist - false wenn deaktiviert
     * @see [GetEntityCollisionDisabled](https://docs.fivem.net/natives/?_0xCCF1E97BEFDAE480) / {@link TransformNumberArrayInVector3} für weitere Informationen.
     */
    get collision(): boolean {
        return !GetEntityCollisionDisabled(this.player);
    }

    /**
     * Ändert den Collision Status des Players
     * @param enable true, wenn man die Collision aktivieren möchte, false wenn man die disablen möchte
     * @see [SetEntityCollision](https://docs.fivem.net/natives/?_0x1A9205C1B9EE827F) für weitere Informationen.
     */
    set collision(enable: boolean) {
        SetEntityCollision(this.player, enable, true);
    }

    /**
     * Gibt zurück, ob der Players gefreezed ist
     * @returns true wenn der Players gefreezed ist - false wenn deaktiviert
     * @see [IsEntityPositionFrozen](https://docs.fivem.net/natives/?_0xEDBE6ADD) für weitere Informationen.
     */
    get frozen(): boolean {
        return IsEntityPositionFrozen(this.player);
    }

    /**
     * Ändert den Freeze Status des Players
     * @param enable true, wenn man den Player freezen möchte, false, wenn man den freeze disablen möchte
     * @see [FreezeEntityPosition](https://docs.fivem.net/natives/?_0x65C16D57) für weitere Informationen.
     */
    set frozen(enable: boolean) {
        FreezeEntityPosition(this.player, enable);
    }

    /**
     * Gibt zurück, ob der Players Invincible (Unverwundbar) ist
     * @returns true wenn der Players Invincible ist - false wenn nicht
     * @see [GetPlayerInvincible](https://docs.fivem.net/natives/?_0x680C90EE) für weitere Informationen.
     */
    get invincible(): boolean {
        return GetPlayerInvincible(this.player);
    }

    /**
     * Ändert den Invincible (Unverwundbar) Status des Players
     * @param enable true, wenn man den Player invincible (Unverwundbar) machen möchte, false, wenn man den Spieler wieder verwundbar machen möchte
     * @see [SetEntityInvincible](https://docs.fivem.net/natives/?_0x3882114BDE571AD4) für weitere Informationen.
     */
    set invincible(enable: boolean) {
        SetEntityInvincible(this.player, enable);
    }

    /**
     * Gibt zurück, ob der Players Invisible (Unsichtbar) ist
     * @returns true wenn der Players gefreezed ist - false wenn deaktiviert
     * @see [IsEntityVisible](https://docs.fivem.net/natives/?_0x47D6F43D77935C75) für weitere Informationen.
     */
    get invisible(): boolean {
        return IsEntityVisible(this.player);
    }

    /**
     * Ändert den Invisible (Unsichtbar) Status des Players
     * @param enable true, wenn man den Player invisible (Unsichtbar) machen möchte, false, wenn man den Spieler wieder visible machen möchte
     * @see [SetEntityVisible](https://docs.fivem.net/natives/?_0xEA1C610A04DB6BBB) für weitere Informationen.
     */
    set invisible(enable: boolean) {
        SetEntityVisible(this.player, enable, false);
    }

    /**
     * Disabled einen bestimmten Key aus der Control_Action Liste
     * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
     * @param key Nummer aus der Liste {@link CONTROL_INPUTS_ACTION} oder eine Nummer
     * @see [Controls](https://docs.fivem.net/docs/game-references/controls/) für weitere Informationen.
     */
    public disableKey(padIndex: number = 0, key: number | CONTROL_INPUTS_ACTION) {
        DisableControlAction(padIndex, key, true);
    }

    /**
     * Enabled einen bestimmten Key aus der Control_Action Liste
     * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
     * @param key Nummer aus der Liste {@link CONTROL_INPUTS_ACTION} oder eine Nummer
     * @see [Controls](https://docs.fivem.net/docs/game-references/controls/) für weitere Informationen.
     */
    public enableKey(padIndex: number = 0, key: number | CONTROL_INPUTS_ACTION) {
        EnableControlAction(padIndex, key, true);
    }

    /**
     * Disabled bestimmte Keys aus der Control_Action Liste
     * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
     * @param keys Nummer aus der Liste {@link CONTROL_INPUTS_ACTION} oder eine Nummer
     * @see [Controls](https://docs.fivem.net/docs/game-references/controls/) für weitere Informationen.
     */
    public disableKeys(padIndex: number = 0, keys: number[] | CONTROL_INPUTS_ACTION[]) {
        for (let i = 0; i < keys.length - 1; i++) {
            DisableControlAction(padIndex, keys[i], true);
        }
    }

    /**
     * Enabled bestimmte Keys aus der Control_Action Liste
     * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
     * @param keys Array aus der Liste {@link CONTROL_INPUTS_ACTION} oder aus Nummern
     * @see [Controls](https://docs.fivem.net/docs/game-references/controls/) für weitere Informationen.
     */
    public enableKeys(padIndex: number = 0, keys: number[] | CONTROL_INPUTS_ACTION[]) {
        for (let i = 0; i < keys.length - 1; i++) {
            EnableControlAction(padIndex, keys[i], true);
        }
    }


    /**
     * Prüft, ob der Player eine Waffe in der Hand hält und wenn, dann gibt er die jeweilige {@link FiveVWeapon} zurück
     * @returns die Nummer des Hashkeys (Der Link zur Waffe kommt später{@link FiveVWeapon}) der jeweiligen Waffe, welche der Spieler in der Hand hat. Sollte der Spieler keine Waffe in der Hand haben,
     * gibt es einen leeren String
     */
    get currentWeapon(): number {
        const [_, weapon] = GetCurrentPedWeapon(this.player, true);
        /*for (let i = 0; i < FiveVWeapons.length -1; i++) {
            if (weapon === GetHashKey(FiveVWeapons[i].Hash)){
                return FiveVWeapons[i];
            }
        }*/
        return weapon;
    }

    /**
     * Enabled eine bestimmte PED Config Flag
     * @param flagId Nummer der Config Flag oder {@link PEDCONFIGFLAGS}
     * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) für weitere Informationen.
     */
    public enableConfigFlag(flagId: number | PEDCONFIGFLAGS) {
        SetPedConfigFlag(this.player, flagId, true);
    }

    /**
     * Disabled eine bestimmte PED Config Flag
     * @param flagId Nummer der Config Flag oder {@link PEDCONFIGFLAGS}
     * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) für weitere Informationen.
     */
    public disableConfigFlag(flagId: number | PEDCONFIGFLAGS) {
        SetPedConfigFlag(this.player, flagId, false);
    }

    /**
     * Enabled bestimmte PED Config Flags
     * @param flagIds Nummer Array  der Config Flag oder {@link PEDCONFIGFLAGS} Array
     * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) für weitere Informationen.
     */
    public enableConfigFlags(flagIds: number[] | PEDCONFIGFLAGS[]) {
        for (let i = 0; i < flagIds.length - 1; i++) {
            SetPedConfigFlag(this.player, flagIds[i], true);
        }
    }

    /**
     * Disabled bestimmte PED Config Flags
     * @param flagIds Nummer Array der Config Flag oder {@link PEDCONFIGFLAGS} Array
     * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) für weitere Informationen.
     */
    public disableConfigFlags(flagIds: number[] | PEDCONFIGFLAGS[]) {
        for (let i = 0; i < flagIds.length - 1; i++) {
            SetPedConfigFlag(this.player, flagIds[i], false);
        }
    }

    /**
     * Prüft die aktiven Config Flags einer Person und gibt alle aktiven dann in Form eines Arrays zurück
     * @returns Ein Array mit den aktiven {@link PEDCONFIGFLAGS} des Spielers
     */
    get activeConfigFlags(): PEDCONFIGFLAGS[] {
        const activeFlags: PEDCONFIGFLAGS[] = [];

        for (let flag in PEDCONFIGFLAGS) {
            const flagValue = Number(flag);
            if (!isNaN(flagValue)) {
                if (GetPedConfigFlag(this.player, flagValue, true)) {
                    activeFlags.push(flagValue as PEDCONFIGFLAGS);
                }
            }
        }
        return activeFlags;
    }

    /**
     * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
     * Disabled die nötigen {@link CONTROL_INPUT_ACTION}, dass der Spieler nicht mehr attacken kann
     */
    public disableAttack(padIndex: number = 0) {
        this.disableKeys(padIndex, [CONTROL_INPUTS_ACTION.INPUT_ATTACK, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON,
            CONTROL_INPUTS_ACTION.INPUT_VEH_ATTACK, CONTROL_INPUTS_ACTION.INPUT_VEH_ATTACK2, CONTROL_INPUTS_ACTION.INPUT_VEH_PASSENGER_ATTACK,
            CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK_LIGHT, CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK_HEAVY, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_MELEE,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_HANDGUN, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SHOTGUN, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_HEAVY,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SMG, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_AUTO_RIFLE, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SNIPER,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SPECIAL, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_UNARMED, CONTROL_INPUTS_ACTION.INPUT_PREV_WEAPON,
            CONTROL_INPUTS_ACTION.INPUT_NEXT_WEAPON, CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK1, CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK2
        ]);
    }

    /**
     * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
     * Enabled die nötigen {@link CONTROL_INPUT_ACTION}, dass der Spieler wieder attacken kann
     */
    public enableAttack(padIndex: number = 0) {
        this.enableKeys(padIndex, [CONTROL_INPUTS_ACTION.INPUT_ATTACK, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON,
            CONTROL_INPUTS_ACTION.INPUT_VEH_ATTACK, CONTROL_INPUTS_ACTION.INPUT_VEH_ATTACK2, CONTROL_INPUTS_ACTION.INPUT_VEH_PASSENGER_ATTACK,
            CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK_LIGHT, CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK_HEAVY, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_MELEE,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_HANDGUN, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SHOTGUN, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_HEAVY,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SMG, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_AUTO_RIFLE, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SNIPER,
            CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_SPECIAL, CONTROL_INPUTS_ACTION.INPUT_SELECT_WEAPON_UNARMED, CONTROL_INPUTS_ACTION.INPUT_PREV_WEAPON,
            CONTROL_INPUTS_ACTION.INPUT_NEXT_WEAPON, CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK1, CONTROL_INPUTS_ACTION.INPUT_MELEE_ATTACK2
        ]);
    }
}