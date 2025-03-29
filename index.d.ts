import {HUDCOMPONENT, PEDCONFIGFLAGS, CONTROL_INPUTS_ACTION} from "./src/@types/player";
import {VEHICLELOCKSTATE} from "./src/@types/vehicle";
import { WEAPONTYPE } from "./src/@types/weapon";


export { HUDCOMPONENT, PEDCONFIGFLAGS, CONTROL_INPUTS_ACTION, VEHICLELOCKSTATE, WEAPONTYPE };

export declare class FiveMPlayer {
    static get position(): Vector3;
    static set position(newPosition: Vector3 | [x: number, y: number, z: number]): void;
    static get rotation(): Vector3;
    static set rotation(newRotation: Vector3 | [x: number, y: number, z: number]): void;
    static get heading(): number;
    static set heading(newheading: number): void;
    static get camHeading(): number;
    static get collision(): boolean;
    static set collision(enable: boolean): void;
    static get frozen(): boolean;
    static set frozen(enable: boolean): void;
    static get invincible(): boolean;
    static set invincible(enable: boolean): void;
    static get invisible(): boolean;
    static set invisible(enable: boolean): void;
    public static disableKey(padIndex?: number, key?: number | CONTROL_INPUTS_ACTION): void;
    public static enableKey(padIndex?: number, key?: number | CONTROL_INPUTS_ACTION): void;
    public static disableKeys(padIndex?: number, keys?: number[] | CONTROL_INPUTS_ACTION[]): void;
    public static enableKeys(padIndex?: number, keys?: number[] | CONTROL_INPUTS_ACTION[]): void;
    static get currentWeapon(): number;
    static get vehicle(): FiveMVehicle;
    public static enableConfigFlag(flagId: number | PEDCONFIGFLAGS): void;
    public static disableConfigFlag(flagId: number | PEDCONFIGFLAGS): void;
    public static enableConfigFlags(flagIds: number[] | PEDCONFIGFLAGS[]): void;
    public static disableConfigFlags(flagIds: number[] | PEDCONFIGFLAGS[]): void;
    static get activeConfigFlags(): PEDCONFIGFLAGS[];
    public static disableAttack(padIndex?: number): void;
    public static enableAttack(padIndex?: number): void;
    public static disableFiring(): void;
    public static enableFiring(): void;
    public static hideHUD(hub: number[] | HUDCOMPONENT[] | number | HUDCOMPONENT): void;
    public static showHUD(hub: number[] | HUDCOMPONENT[] | number | HUDCOMPONENT): void;

    // WHERE IS PLAYER

    static get isFalling(): boolean;
    static get isInWater(): boolean;
    static get isUnderWater(): boolean;
    static get isInVehicle(): boolean;
    static get isArmed(): boolean;
}
export declare class FiveMVehicle {
    private vehicle: fiveMVehicle;
    constructor(vehicle: fiveMVehicle);
    get rpm(): number;
    set rpm(rpm: number): void;
    get speed(): number;
    set engineOn(state: boolean): void;

    get lockstate(): number;
    set lockstate(state: number | VEHICLELOCKSTATE): void;
}
export declare class Vector3 {
    public x: number;
    public y: number;
    public z: number;
    constructor(x: number, y: number, z: number);
    public add(v1: Vector3, v2: number | Vector3): Vector3;
    public addition(v: number | Vector3): Vector3;
    public sub(v1: Vector3, v2: Vector3): Vector3;
    public subtract(v: Vector3): Vector3;
    public mul(v1: Vector3, v2: number | Vector3): Vector3;
    public multiply(v: number | Vector3): Vector3;
    public div(v1: Vector3, v2: number | Vector3): Vector3;
    public productDot(v1: Vector3, v2: Vector3): number;
    public dot(v: Vector3): number;
    public productCross(v1: Vector3, v2: Vector3): Vector3;
    public cross(v: Vector3): Vector3;
    public normalizeVector(): Vector3;
    public get normalize(): Vector3;
    public clone(): Vector3;
    public distanceTo(v: Vector3): number;
    public distance(v: Vector3): number;
    public distanceSquared(v: Vector3): number;
    public get Length(): number;
    public toRadians(): Vector3;
    public replace(v: Vector3): void;
}
export declare class Utils {
    public static GetNetIdFromBagName(bagName: string): number;
    public static GetVehFromBagName(bagName: string): number;
    public static GetVehFromNetworkId(netId: number): number;
    public static GetPedFromBagName(bagName: string): number;
    public static GetPedFromNetworkId(netId: number): number;
    public static GetObjectFromBagName(bagName: string): number;
    public static GetObjectFromNetworkid(netId: number): number;
    public static GetEntityFromBagName(bagName: string): number;
    public static GetEntityFromNetworkid(netId: number): number;
}
