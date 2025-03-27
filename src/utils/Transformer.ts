import {Vector3} from "./Vector3";

 /** Transforms a number Array often used by FiveM into a FiveV Vector3
 * @param numberArray das NumberArray welches man umgewandelt haben möchte
 * @returns Ein Vector3 mit welchem man arbeiten kann.
 */
export function TransformNumberArrayInVector3(numberArray: number[]): Vector3 {
    return new Vector3(
        numberArray[0], numberArray[1],numberArray[2]);
}