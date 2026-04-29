import { FiveVEntity } from "./FiveVEntity";
import { Vector3 } from "../utils/Vector3";

export class FiveVObject extends FiveVEntity {

    constructor(object: number) {
        super(object);
    }

    /**
     * Returns the object handle (alias for compatibility)
     * @returns The object entity handle
     */
    get object(): number {
        return this.entityHandle;
    }

    // ==================== PLACEMENT ====================

    /**
     * Places the object on the ground properly
     * @see [PlaceObjectOnGroundProperly](https://docs.fivem.net/natives/?_0x58A850EAEE20FAA3) for more information.
     */
    public placeOnGround(): void {
        PlaceObjectOnGroundProperly(this.entityHandle);
    }

    /**
     * Places the object on the ground with offset
     * @param offset The vertical offset after placement
     */
    public placeOnGroundWithOffset(offset: number): void {
        PlaceObjectOnGroundProperly(this.entityHandle);
        const pos = this.position;
        this.position = new Vector3(pos.x, pos.y, pos.z + offset);
    }

    // ==================== PHYSICS ====================

    /**
     * Sets whether the object has gravity
     * @param hasGravity true to enable gravity, false to disable
     * @see [SetEntityHasGravity](https://docs.fivem.net/natives/?_0x4A4722448F18EEF5) for more information.
     */
    public setHasGravity(hasGravity: boolean): void {
        SetEntityHasGravity(this.entityHandle, hasGravity);
    }

    /**
     * Activates physics on the object
     * @see [ActivatePhysics](https://docs.fivem.net/natives/?_0x7F4B6B4D0E7A9886) for more information.
     */
    public activatePhysics(): void {
        ActivatePhysics(this.entityHandle);
    }

    /**
     * Sets the object as dynamic (can be moved by physics)
     * @param dynamic true for dynamic, false for static
     * @see [SetEntityDynamic](https://docs.fivem.net/natives/?_0x1718DE8E3F2823CA) for more information.
     */
    public setDynamic(dynamic: boolean): void {
        SetEntityDynamic(this.entityHandle, dynamic);
    }

    // ==================== INTERACTION ====================

    /**
     * Returns whether the object has been damaged
     * @returns true if damaged, false otherwise
     * @see [HasEntityBeenDamagedByAnyObject](https://docs.fivem.net/natives/?_0x95EB9964FF5C5C65) for more information.
     */
    get hasBeenDamaged(): boolean {
        return HasEntityBeenDamagedByAnyObject(this.entityHandle);
    }

    /**
     * Sets whether the object can be targeted
     * @param targetable true to allow targeting, false to prevent
     * @see [SetObjectTargettable](https://docs.fivem.net/natives/?_0x8A7391690F5AFD81) for more information.
     */
    public setTargetable(targetable: boolean): void {
        SetObjectTargettable(this.entityHandle, targetable);
    }

    // ==================== STATE FLAGS ====================

    /**
     * Returns whether this entity is an object
     * @returns true if it's an object, false otherwise
     * @see [IsEntityAnObject](https://docs.fivem.net/natives/?_0x8D68C8FD0FACA94E) for more information.
     */
    get isObject(): boolean {
        return IsEntityAnObject(this.entityHandle);
    }

    // ==================== STATIC METHODS ====================

    /**
     * Creates a FiveVObject from a network ID
     * @param netId The network ID
     * @returns A new FiveVObject instance, or null if not found
     */
    public static fromNetworkId(netId: number): FiveVObject | null {
        if (!NetworkDoesEntityExistWithNetworkId(netId)) return null;
        const entityId = NetToObj(netId);
        if (entityId === 0 || !DoesEntityExist(entityId)) return null;
        if (!IsEntityAnObject(entityId)) return null;
        return new FiveVObject(entityId);
    }

    /**
     * Gets the closest object to a position
     * @param position The position to search from
     * @param radius The search radius
     * @param modelHash Optional model hash to filter by
     * @returns A FiveVObject instance, or null if none found
     */
    public static getClosest(position: Vector3, radius: number = 25.0, modelHash: number = 0): FiveVObject | null {
        const object = GetClosestObjectOfType(position.x, position.y, position.z, radius, modelHash, false, false, false);
        if (object === 0) return null;
        return new FiveVObject(object);
    }
}
