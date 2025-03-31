import { CONTROL_INPUTS_ACTION, PEDCONFIGFLAGS, HUDCOMPONENT} from "./src/@types/player";
import { VEHICLELOCKSTATE, VEHINDICATORLIGHTS } from "./src/@types/vehicle";
import { LOCALE } from "./src/utils/ungrouped";

declare module "five-client" {

    export {HUDCOMPONENT, PEDCONFIGFLAGS, CONTROL_INPUTS_ACTION, VEHICLELOCKSTATE, LOCALE, VEHINDICATORLIGHTS};

    export interface FiveMPlayer {
        /**
         * Gibt die Position des Players zurück
         * @returns Die Position in einem {@link Vector3}.
         * @see [GetEntityCoords](https://docs.fivem.net/natives/?_0x3FEF770D40960D5A) für weitere Informationen.
         */
        get position(): Vector3;
        /**
         * Setzt die Position des Players.
         * @param newPosition Die Position in einem {@link Vector3} oder einem NumberArray.
         * @see [SetEntityCoords](https://docs.fivem.net/natives/?_0xDF70B41B) für weitere Informationen.
         */
        set position(newPosition: Vector3 | [x: number, y: number, z: number]);

        /**
         * Gibt die Rotation des Players zurück
         * @returns Die Rotation in einem {@link Vector3}.
         * @see [GetEntityRotation](https://docs.fivem.net/natives/?_0x8FF45B04) für weitere Informationen.
         */
        get rotation(): Vector3;
        /**
         * Setzt die Rotation des Players.
         * @param newRotation Die Rotation in einem {@link Vector3} oder einem NumberArray.
         * @see [SetEntityRotation](https://docs.fivem.net/natives/?_0xA345EFE) und [RequestCollisionAtCoord](https://docs.fivem.net/natives/?_0x07503F7948F491A7) für weitere Informationen.
         */
        set rotation(newRotation: Vector3 | [x: number, y: number, z: number]);

        /**
         * Gibt das Heading des Players zurück
         * @returns Das Heading als number
         * @see [GetEntityHeading](https://docs.fivem.net/natives/?_0x972CC383) für weitere Informationen.
         */
        get heading(): number;
        /**
         * Setzt das Heading des Players
         * @param newheading
         * @see [SetEntityHeading](https://docs.fivem.net/natives/?_0xE0FF064D) für weitere Informationen.
         */
        set heading(newheading: number);

        /**
         * Gibt das Kamera Heading des Players zurück
         * @returns Das Heading als number
         * @see [GetGameplayCamRelativeHeading](https://docs.fivem.net/natives/?_0x743607648ADD4587) für weitere Informationen.
         */
        get camHeading(): number;

        /**
         * Gibt zurück, ob die Collision des Players disabled ist
         * @returns true wenn die Collision aktiviert ist - false wenn deaktiviert
         * @see [GetEntityCollisionDisabled](https://docs.fivem.net/natives/?_0xCCF1E97BEFDAE480) / {@link TransformNumberArrayInVector3} für weitere Informationen.
         */
        get collision(): boolean;
        /**
         * Ändert den Collision Status des Players
         * @param enable true, wenn man die Collision aktivieren möchte, false wenn man die disablen möchte
         * @see [SetEntityCollision](https://docs.fivem.net/natives/?_0x1A9205C1B9EE827F) für weitere Informationen.
         */
        set collision(enable: boolean);

        /**
         * Gibt zurück, ob der Players gefreezed ist
         * @returns true wenn der Players gefreezed ist - false wenn deaktiviert
         * @see [IsEntityPositionFrozen](https://docs.fivem.net/natives/?_0xEDBE6ADD) für weitere Informationen.
         */
        get frozen(): boolean;
        /**
         * Ändert den Freeze Status des Players
         * @param enable true, wenn man den Player freezen möchte, false, wenn man den freeze disablen möchte
         * @see [FreezeEntityPosition](https://docs.fivem.net/natives/?_0x65C16D57) für weitere Informationen.
         */
        set frozen(enable: boolean);

        /**
         * Gibt zurück, ob der Players Invincible (Unverwundbar) ist
         * @returns true wenn der Players Invincible ist - false wenn nicht
         * @see [GetPlayerInvincible](https://docs.fivem.net/natives/?_0x680C90EE) für weitere Informationen.
         */
        get invincible(): boolean;
        /**
         * Ändert den Invincible (Unverwundbar) Status des Players
         * @param enable true, wenn man den Player invincible (Unverwundbar) machen möchte, false, wenn man den Spieler wieder verwundbar machen möchte
         * @see [SetEntityInvincible](https://docs.fivem.net/natives/?_0x3882114BDE571AD4) für weitere Informationen.
         */
        set invincible(enable: boolean);

        /**
         * Gibt zurück, ob der Players Invisible (Unsichtbar) ist
         * @returns true wenn der Players gefreezed ist - false wenn deaktiviert
         * @see [IsEntityVisible](https://docs.fivem.net/natives/?_0x47D6F43D77935C75) für weitere Informationen.
         */
        get invisible(): boolean;
        /**
         * Ändert den Invisible (Unsichtbar) Status des Players
         * @param enable true, wenn man den Player invisible (Unsichtbar) machen möchte, false, wenn man den Spieler wieder visible machen möchte
         * @see [SetEntityVisible](https://docs.fivem.net/natives/?_0xEA1C610A04DB6BBB) für weitere Informationen.
         */
        set invisible(enable: boolean);

        /**
         * Disabled einen bestimmten Key aus der Control_Action Liste
         * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
         * @param key Nummer aus der Liste {@link CONTROL_INPUTS_ACTION} oder eine Nummer
         * @see [Controls](https://docs.fivem.net/docs/game-references/controls/) für weitere Informationen.
         */
        disableKey(padIndex?: number, key?: number | CONTROL_INPUTS_ACTION): void;

        /**
         * Enabled einen bestimmten Key aus der Control_Action Liste
         * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
         * @param key Nummer aus der Liste {@link CONTROL_INPUTS_ACTION} oder eine Nummer
         * @see [Controls](https://docs.fivem.net/docs/game-references/controls/) für weitere Informationen.
         */
        enableKey(padIndex?: number, key?: number | CONTROL_INPUTS_ACTION): void;

        /**
         * Disabled bestimmte Keys aus der Control_Action Liste
         * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
         * @param keys Nummer aus der Liste {@link CONTROL_INPUTS_ACTION} oder eine Nummer
         * @see [Controls](https://docs.fivem.net/docs/game-references/controls/) für weitere Informationen.
         */
        disableKeys(padIndex?: number, keys?: number[] | CONTROL_INPUTS_ACTION[]): void;

        /**
         * Enabled bestimmte Keys aus der Control_Action Liste
         * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
         * @param keys Array aus der Liste {@link CONTROL_INPUTS_ACTION} oder aus Nummern
         * @see [Controls](https://docs.fivem.net/docs/game-references/controls/) für weitere Informationen.
         */
        enableKeys(padIndex?: number, keys?: number[] | CONTROL_INPUTS_ACTION[]): void;

        /**
         * Prüft, ob der Player eine Waffe in der Hand hält und wenn, dann gibt er die jeweilige {@link FiveVWeapon} zurück
         * @returns die Nummer des Hashkeys (Der Link zur Waffe kommt später{@link FiveVWeapon}) der jeweiligen Waffe, welche der Spieler in der Hand hat. Sollte der Spieler keine Waffe in der Hand haben,
         * gibt es einen leeren String
         */
        get currentWeapon(): number;

        /**
         * Gibt das Fahrzeug, in welchem ein Spieler sich gerade befindet, zurück
         * @returns {@link FiveMVehicle}
         */
        get vehicle(): FiveMVehicle;

        /**
         * Enabled eine bestimmte PED Config Flag
         * @param flagId Nummer der Config Flag oder {@link PEDCONFIGFLAGS}
         * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) für weitere Informationen.
         */
        enableConfigFlag(flagId: number | PEDCONFIGFLAGS): void;

        /**
         * Disabled eine bestimmte PED Config Flag
         * @param flagId Nummer der Config Flag oder {@link PEDCONFIGFLAGS}
         * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) für weitere Informationen.
         */
        disableConfigFlag(flagId: number | PEDCONFIGFLAGS): void;

        /**
         * Enabled bestimmte PED Config Flags
         * @param flagIds Nummer Array  der Config Flag oder {@link PEDCONFIGFLAGS} Array
         * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) für weitere Informationen.
         */
        enableConfigFlags(flagIds: number[] | PEDCONFIGFLAGS[]): void;

        /**
         * Disabled bestimmte PED Config Flags
         * @param flagIds Nummer Array der Config Flag oder {@link PEDCONFIGFLAGS} Array
         * @see [SetPedConfigFlag](https://docs.fivem.net/natives/?_0x9CFBE10D) für weitere Informationen.
         */
        disableConfigFlags(flagIds: number[] | PEDCONFIGFLAGS[]): void;

        /**
         * Prüft die aktiven Config Flags einer Person und gibt alle aktiven dann in Form eines Arrays zurück
         * @returns Ein Array mit den aktiven {@link PEDCONFIGFLAGS} des Spielers
         */
        get activeConfigFlags(): PEDCONFIGFLAGS[];

        /**
         * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
         * Disabled die nötigen {@link CONTROL_INPUT_ACTION}, dass der Spieler nicht mehr attacken kann
         */
        disableAttack(padIndex?: number): void;

        /**
         * @param padIndex "Needs to be executed each frame. Control group 1 and 0 gives the same results as 2. Same results for all players" Standart = 0
         * Enabled die nötigen {@link CONTROL_INPUT_ACTION}, dass der Spieler wieder attacken kann
         */
        enableAttack(padIndex?: number): void;

        /**
         * Disabled das Abfeuern oder Schlagen für einen Frame
         */
        disableFiring(): void;

        /**
         * Enabled das Abfeuern oder Schlagen für einen Frame
         */
        enableFiring(): void;

        /**
         * Hided HUDs for den Frame
         * @param hub als number/{@link HUDCOMPONENT} oder als numberArray/{@link HUDCOMPONENT}Array
         */
        hideHUD(hub: number[] | HUDCOMPONENT[] | number | HUDCOMPONENT): void;

        /**
         * Zeigt HUDs for den Frame
         * @param hub als number/{@link HUDCOMPONENT} oder als numberArray/{@link HUDCOMPONENT}Array
         */
        showHUD(hub: number[] | HUDCOMPONENT[] | number | HUDCOMPONENT): void;

        /**
         * Prüft ob der Spieler gerade fällt
         * @returns true - der Spieler fällt, false - der Spieler fällt nicht
         */
        get isFalling(): boolean;

        /**
         * Prüft ob der Spieler gerade im Wasser ist
         * @returns true - der Spieler ist im Wasser, false - der Spieler ist nicht im Wasser
         */
        get isInWater(): boolean;

        /**
         * Prüft ob der Spieler unter Wasser schwimmt
         * @returns true - der Spieler schwimmt unter Wasser, false - der Spieler schwimmt nicht unter Wasser
         */
        get isUnderWater(): boolean;

        /**
         * Prüft ob der Spieler im Fahrzeug sitzt
         * @returns true - der Spieler ist im Fahrzeug, false - der Spieler ist nicht im Fahrzeug
         */
        get isInVehicle(): boolean;

        /**
         * Prüft ob der Spieler im Armed ist (Melee und Fists ausgenommen)
         * @returns true - der Spieler hat keine Waffe, false - der Spieler hat keine Waffe
         */
        get isArmed(): boolean;
    }

    export class Vector3 {
        public x: number;
        public y: number;
        public z: number;

        constructor(x: number, y: number, z: number);

        public add(v2: number | Vector3): Vector3;

        public addition(v: number | Vector3): Vector3;

        public sub(v2: Vector3): Vector3;

        public subtract(v: Vector3): Vector3;

        public mul(v2: number | Vector3): Vector3;

        public multiply(v: number | Vector3): Vector3;

        public div(v2: number | Vector3): Vector3;

        public divide(v: number | Vector3): Vector3;

        public productDot(v2: Vector3): number;

        public dot(v: Vector3): number;

        public productCross(v2: Vector3): Vector3;

        public cross(v: Vector3): Vector3;

        public normalizeVector(): Vector3;

        public get normalize(): Vector3;

        public clone(): Vector3;

        public distanceTo(v: Vector3): number;

        public distance(v: Vector3): number;

        public distanceSquared(v: Vector3): number;

        public get Length(): number;

        public toRadians(): Vector3;
    }
}