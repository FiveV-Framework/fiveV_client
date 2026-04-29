import { Vector3 } from "../utils/Vector3";
import { TransformNumberArrayInVector3 } from "../utils/Transformer";

export class FiveVEntity {
    protected entityHandle: number;

    constructor(entity: number) {
        this.entityHandle = entity;
    }

    /**
     * Returns the entity handle
     * @returns The entity as a number
     */
    get handle(): number {
        return this.entityHandle;
    }

    /**
     * Returns the entity handle (alias for handle)
     * @returns The entity as a number
     */
    get entity(): number {
        return this.entityHandle;
    }

    /**
     * Checks if the entity exists in the game world
     * @returns true if the entity exists, false otherwise
     * @see [DoesEntityExist](https://docs.fivem.net/natives/?_0x7239B21F) for more information.
     */
    get exists(): boolean {
        return DoesEntityExist(this.entityHandle);
    }

    /**
     * Returns the position of the entity
     * @returns The position as a {@link Vector3}.
     * @see [GetEntityCoords](https://docs.fivem.net/natives/?_0x3FEF770D40960D5A) for more information.
     */
    get position(): Vector3 {
        return TransformNumberArrayInVector3(GetEntityCoords(this.entityHandle, true));
    }

    /**
     * Sets the position of the entity
     * @param newPosition The position as a {@link Vector3} or a number array.
     * @see [SetEntityCoords](https://docs.fivem.net/natives/?_0xDF70B41B) for more information.
     */
    set position(newPosition: Vector3 | [x: number, y: number, z: number]) {
        if (Array.isArray(newPosition)) {
            const [x, y, z] = newPosition;
            RequestCollisionAtCoord(x, y, z);
            SetEntityCoords(this.entityHandle, x, y, z, false, false, false, false);
        } else {
            RequestCollisionAtCoord(newPosition.x, newPosition.y, newPosition.z);
            SetEntityCoords(this.entityHandle, newPosition.x, newPosition.y, newPosition.z, false, false, false, false);
        }
    }

    /**
     * Returns the rotation of the entity
     * @returns The rotation as a {@link Vector3}.
     * @see [GetEntityRotation](https://docs.fivem.net/natives/?_0x8FF45B04) for more information.
     */
    get rotation(): Vector3 {
        return TransformNumberArrayInVector3(GetEntityRotation(this.entityHandle, 2));
    }

    /**
     * Sets the rotation of the entity
     * @param newRotation The rotation as a {@link Vector3} or a number array.
     * @see [SetEntityRotation](https://docs.fivem.net/natives/?_0xA345EFE) for more information.
     */
    set rotation(newRotation: Vector3 | [x: number, y: number, z: number]) {
        if (Array.isArray(newRotation)) {
            const [x, y, z] = newRotation;
            SetEntityRotation(this.entityHandle, x, y, z, 2, false);
        } else {
            SetEntityRotation(this.entityHandle, newRotation.x, newRotation.y, newRotation.z, 2, false);
        }
    }

    /**
     * Returns the heading of the entity
     * @returns The heading as a number (0-360 degrees)
     * @see [GetEntityHeading](https://docs.fivem.net/natives/?_0x972CC383) for more information.
     */
    get heading(): number {
        return GetEntityHeading(this.entityHandle);
    }

    /**
     * Sets the heading of the entity
     * @param newHeading The heading as a number (0-360 degrees)
     * @see [SetEntityHeading](https://docs.fivem.net/natives/?_0xE0FF064D) for more information.
     */
    set heading(newHeading: number) {
        SetEntityHeading(this.entityHandle, newHeading);
    }

    /**
     * Returns whether collision is enabled for the entity
     * @returns true if collision is enabled, false if disabled
     * @see [GetEntityCollisionDisabled](https://docs.fivem.net/natives/?_0xCCF1E97BEFDAE480) for more information.
     */
    get collision(): boolean {
        return !GetEntityCollisionDisabled(this.entityHandle);
    }

    /**
     * Sets the collision state of the entity
     * @param enable true to enable collision, false to disable
     * @see [SetEntityCollision](https://docs.fivem.net/natives/?_0x1A9205C1B9EE827F) for more information.
     */
    set collision(enable: boolean) {
        SetEntityCollision(this.entityHandle, enable, true);
    }

    /**
     * Returns whether the entity position is frozen
     * @returns true if the entity is frozen, false otherwise
     * @see [IsEntityPositionFrozen](https://docs.fivem.net/natives/?_0xEDBE6ADD) for more information.
     */
    get frozen(): boolean {
        return IsEntityPositionFrozen(this.entityHandle);
    }

    /**
     * Sets the freeze state of the entity
     * @param enable true to freeze the entity position, false to unfreeze
     * @see [FreezeEntityPosition](https://docs.fivem.net/natives/?_0x65C16D57) for more information.
     */
    set frozen(enable: boolean) {
        FreezeEntityPosition(this.entityHandle, enable);
    }

    /**
     * Returns whether the entity is visible
     * @returns true if the entity is visible, false otherwise
     * @see [IsEntityVisible](https://docs.fivem.net/natives/?_0x47D6F43D77935C75) for more information.
     */
    get visible(): boolean {
        return IsEntityVisible(this.entityHandle);
    }

    /**
     * Sets the visibility of the entity
     * @param enable true to make visible, false to hide
     * @see [SetEntityVisible](https://docs.fivem.net/natives/?_0xEA1C610A04DB6BBB) for more information.
     */
    set visible(enable: boolean) {
        SetEntityVisible(this.entityHandle, enable, false);
    }

    /**
     * Returns the current velocity of the entity
     * @returns The velocity as a {@link Vector3}
     * @see [GetEntityVelocity](https://docs.fivem.net/natives/?_0x4805D2B1) for more information.
     */
    get velocity(): Vector3 {
        return TransformNumberArrayInVector3(GetEntityVelocity(this.entityHandle));
    }

    /**
     * Sets the velocity of the entity
     * @param vel The velocity as a {@link Vector3}
     * @see [SetEntityVelocity](https://docs.fivem.net/natives/?_0x1C99BB7B6E96D16F) for more information.
     */
    set velocity(vel: Vector3) {
        SetEntityVelocity(this.entityHandle, vel.x, vel.y, vel.z);
    }

    /**
     * Returns the speed of the entity in m/s
     * @returns The speed as a number
     * @see [GetEntitySpeed](https://docs.fivem.net/natives/?_0xD5037BA82E12416F) for more information.
     */
    get speed(): number {
        return GetEntitySpeed(this.entityHandle);
    }

    /**
     * Returns the model hash of the entity
     * @returns The model hash as a number
     * @see [GetEntityModel](https://docs.fivem.net/natives/?_0xDA76A9F3) for more information.
     */
    get model(): number {
        return GetEntityModel(this.entityHandle);
    }

    /**
     * Returns the network ID of the entity
     * @returns The network ID as a number, or -1 if not networked
     * @see [NetworkGetNetworkIdFromEntity](https://docs.fivem.net/natives/?_0x9E35DAB6) for more information.
     */
    get networkId(): number {
        if (!NetworkGetEntityIsNetworked(this.entityHandle)) return -1;
        return NetworkGetNetworkIdFromEntity(this.entityHandle);
    }

    /**
     * Returns whether the entity is networked
     * @returns true if the entity is networked, false otherwise
     * @see [NetworkGetEntityIsNetworked](https://docs.fivem.net/natives/?_0xC14725FA) for more information.
     */
    get isNetworked(): boolean {
        return NetworkGetEntityIsNetworked(this.entityHandle);
    }

    /**
     * Returns the health of the entity
     * @returns The health as a number
     * @see [GetEntityHealth](https://docs.fivem.net/natives/?_0xEEF059FAD016D209) for more information.
     */
    get health(): number {
        return GetEntityHealth(this.entityHandle);
    }

    /**
     * Sets the health of the entity
     * @param value The health value
     * @see [SetEntityHealth](https://docs.fivem.net/natives/?_0x6B76DC1F) for more information.
     */
    set health(value: number) {
        SetEntityHealth(this.entityHandle, value);
    }

    /**
     * Returns the maximum health of the entity
     * @returns The maximum health as a number
     * @see [GetEntityMaxHealth](https://docs.fivem.net/natives/?_0x15D757606D170C3C) for more information.
     */
    get maxHealth(): number {
        return GetEntityMaxHealth(this.entityHandle);
    }

    /**
     * Returns whether the entity is dead
     * @returns true if the entity is dead, false otherwise
     * @see [IsEntityDead](https://docs.fivem.net/natives/?_0x5F9532F3) for more information.
     */
    get isDead(): boolean {
        return IsEntityDead(this.entityHandle);
    }

    /**
     * Returns whether the entity is in water
     * @returns true if the entity is in water, false otherwise
     * @see [IsEntityInWater](https://docs.fivem.net/natives/?_0xCFB0A0D8) for more information.
     */
    get isInWater(): boolean {
        return IsEntityInWater(this.entityHandle);
    }

    /**
     * Returns whether the entity is in the air
     * @returns true if the entity is in the air, false otherwise
     * @see [IsEntityInAir](https://docs.fivem.net/natives/?_0x886E37EC) for more information.
     */
    get isInAir(): boolean {
        return IsEntityInAir(this.entityHandle);
    }

    /**
     * Returns the alpha (opacity) of the entity
     * @returns The alpha value (0-255)
     * @see [GetEntityAlpha](https://docs.fivem.net/natives/?_0x5A47B3B5) for more information.
     */
    get alpha(): number {
        return GetEntityAlpha(this.entityHandle);
    }

    /**
     * Sets the alpha (opacity) of the entity
     * @param value The alpha value (0-255)
     * @see [SetEntityAlpha](https://docs.fivem.net/natives/?_0x44A0870B) for more information.
     */
    set alpha(value: number) {
        SetEntityAlpha(this.entityHandle, value, false);
    }

    /**
     * Resets the alpha to default (fully visible)
     * @see [ResetEntityAlpha](https://docs.fivem.net/natives/?_0x9B1E824F) for more information.
     */
    public resetAlpha(): void {
        ResetEntityAlpha(this.entityHandle);
    }

    /**
     * Deletes the entity from the game world
     * @see [DeleteEntity](https://docs.fivem.net/natives/?_0xFAA3D236) for more information.
     */
    public delete(): void {
        DeleteEntity(this.entityHandle);
    }

    /**
     * Calculates the distance from this entity to another position
     * @param target The target position as a {@link Vector3}
     * @returns The distance in game units
     */
    public distanceTo(target: Vector3): number {
        return this.position.distanceTo(target);
    }

    /**
     * Calculates the distance from this entity to another entity
     * @param target The target entity
     * @returns The distance in game units
     */
    public distanceToEntity(target: FiveVEntity): number {
        return this.position.distanceTo(target.position);
    }

    /**
     * Attaches this entity to another entity
     * @param target The target entity to attach to
     * @param boneIndex The bone index to attach to (default: 0)
     * @param offset Position offset as {@link Vector3}
     * @param rotation Rotation offset as {@link Vector3}
     * @see [AttachEntityToEntity](https://docs.fivem.net/natives/?_0x6B9BBD38) for more information.
     */
    public attachTo(
        target: FiveVEntity,
        boneIndex: number = 0,
        offset: Vector3 = new Vector3(0, 0, 0),
        rotation: Vector3 = new Vector3(0, 0, 0)
    ): void {
        AttachEntityToEntity(
            this.entityHandle,
            target.handle,
            boneIndex,
            offset.x, offset.y, offset.z,
            rotation.x, rotation.y, rotation.z,
            false, false, false, false, 2, true
        );
    }

    /**
     * Detaches this entity from any attached entity
     * @see [DetachEntity](https://docs.fivem.net/natives/?_0x961AC54BF0613F5D) for more information.
     */
    public detach(): void {
        DetachEntity(this.entityHandle, true, true);
    }

    /**
     * Returns whether this entity is attached to another entity
     * @returns true if attached, false otherwise
     * @see [IsEntityAttached](https://docs.fivem.net/natives/?_0xB346476EF1A64897) for more information.
     */
    get isAttached(): boolean {
        return IsEntityAttached(this.entityHandle);
    }
}
