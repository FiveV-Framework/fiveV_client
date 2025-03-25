import {fiveMPlayer} from "../@types/player";
import {Vector3} from "../utils/Vector3";
import {TransformNumberArrayInVector3} from "../utils/Transformer";

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
            SetEntityCoords(this.player, x, y, z, false, false, false, false);
        } else {
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

}