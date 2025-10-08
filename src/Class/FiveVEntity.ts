import {fiveVVehicle} from "../@types/vehicle";
import {fiveVEntity} from "../@types/entity";
import {Vector3} from "../utils/Vector3";
import {TransformNumberArrayInVector3} from "../utils/Transformer";


export class FiveVEntity {
    private classEntity: fiveVEntity;

    constructor(entity: fiveVEntity) {
        this.classEntity = entity;
    }

    /**
     * Gibt die Entity zurück
     * @returns Die Entity als number
     */
    get entity(): fiveVEntity {
        return this.classEntity;
    }

    /**
     * Gibt die Position der Entity zurück
     * @returns Die Position in einem {@link Vector3}.
     * @see [GetntityCoords](https://docs.fivem.net/natives/?_0x3FEF770D40960D5A) für weitere Informationen.
     */
    get position(): Vector3 {
        return TransformNumberArrayInVector3(GetEntityCoords(this.classEntity, true));
    }

    /**
     * Setzt Position der Entity.
     * @param newPosition Die Position in einem {@link Vector3} oder einem NumberArray.
     * @see [SetEntityCoords](https://docs.fivem.net/natives/?_0xDF70B41B) für weitere Informationen.
     */
    set position(newPosition: Vector3 | [x: number, y: number, z: number]) {
        if (Array.isArray(newPosition)) {
            const [x, y, z] = newPosition;
            RequestCollisionAtCoord(x, y, z);
            SetEntityCoords(this.classEntity, x, y, z, false, false, false, false);
        } else {
            RequestCollisionAtCoord(newPosition.x, newPosition.y, newPosition.z);
            SetEntityCoords(this.classEntity, newPosition.x, newPosition.y, newPosition.z, false, false, false, false);
        }
    }

    /**
     * Gibt die Rotation der Entity zurück
     * @returns Die Rotation in einem {@link Vector3}.
     * @see [GetEntityRotation](https://docs.fivem.net/natives/?_0x8FF45B04) für weitere Informationen.
     */
    get rotation(): Vector3 {
        return TransformNumberArrayInVector3(GetEntityRotation(this.classEntity,2));
    }

    /**
     * Setzt die Rotation der Entity.
     * @param newRotation Die Rotation in einem {@link Vector3} oder einem NumberArray.
     * @see [SetEntityRotation](https://docs.fivem.net/natives/?_0xA345EFE) und [RequestCollisionAtCoord](https://docs.fivem.net/natives/?_0x07503F7948F491A7) für weitere Informationen.
     */
    set rotation(newRotation: Vector3 | [x: number, y: number, z: number]) {
        if (Array.isArray(newRotation)) {
            const [x, y, z] = newRotation;
            RequestCollisionAtCoord(x, y, z);
            SetEntityRotation(this.classEntity, x, y, z, 2, false);
        } else {
            RequestCollisionAtCoord(newRotation.x, newRotation.y, newRotation.z);
            SetEntityRotation(this.classEntity, newRotation.x, newRotation.y, newRotation.z, 2, false);
        }
    }

    /**
     * Gibt das Heading der Entity zurück
     * @returns Das Heading als number
     * @see [GetEntityHeading](https://docs.fivem.net/natives/?_0x972CC383) für weitere Informationen.
     */
    get heading() : number {
        return GetEntityHeading(this.classEntity);
    }

    /**
     * Setzt das Heading der Entity
     * @param newheading
     * @see [SetEntityHeading](https://docs.fivem.net/natives/?_0xE0FF064D) für weitere Informationen.
     */
    set heading(newheading: number) {
        SetEntityHeading(this.classEntity, newheading);
    }

    /**
     * Gibt zurück, ob die Collision der Entity disabled ist
     * @returns true wenn die Collision aktiviert ist - false wenn deaktiviert
     * @see [GetEntityCollisionDisabled](https://docs.fivem.net/natives/?_0xCCF1E97BEFDAE480) / {@link TransformNumberArrayInVector3} für weitere Informationen.
     */
    get collision(): boolean {
        return !GetEntityCollisionDisabled(this.classEntity);
    }

    /**
     * Ändert den Collision Status der Entity
     * @param enable true, wenn man die Collision aktivieren möchte, false wenn man die disablen möchte
     * @see [SetEntityCollision](https://docs.fivem.net/natives/?_0x1A9205C1B9EE827F) für weitere Informationen.
     */
    set collision(enable: boolean) {
        SetEntityCollision(this.classEntity, enable, true);
    }

    /**
     * Gibt zurück, ob die Entity gefreezed ist
     * @returns true wenn die Entity gefreezed ist - false wenn deaktiviert
     * @see [IsEntityPositionFrozen](https://docs.fivem.net/natives/?_0xEDBE6ADD) für weitere Informationen.
     */
    get frozen(): boolean {
        return IsEntityPositionFrozen(this.classEntity);
    }

    /**
     * Ändert den Freeze Status der Entity
     * @param enable true, wenn man die Entity freezen möchte, false, wenn man den freeze disablen möchte
     * @see [FreezeEntityPosition](https://docs.fivem.net/natives/?_0x65C16D57) für weitere Informationen.
     */
    set frozen(enable: boolean) {
        FreezeEntityPosition(this.classEntity, enable);
    }
}