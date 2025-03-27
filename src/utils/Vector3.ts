export class Vector3 {
    public x: number;
    public y: number;
    public z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public add(v1: Vector3, v2: number | Vector3): Vector3 {
        return typeof v2 === 'number'
            ? new Vector3(v1.x + v2, v1.y + v2, v1.z + v2)
            : new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }

    public addition(v: number | Vector3): Vector3 {
        return this.add(this, v);
    }

    public sub(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }

    public subtract(v: Vector3): Vector3 {
        return this.sub(this, v);
    }

    public mul(v1: Vector3, v2: number | Vector3): Vector3 {
        return typeof v2 === 'number'
            ? new Vector3(v1.x * v2, v1.y * v2, v1.z * v2)
            : new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
    }

    public multiply(v: number | Vector3): Vector3 {
        return this.mul(this, v);
    }

    public div(v1: Vector3, v2: number | Vector3): Vector3 {
        return typeof v2 === 'number'
            ? new Vector3(v1.x / v2, v1.y / v2, v1.z / v2)
            : new Vector3(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
    }

    public divide(v: number | Vector3): Vector3 {
        return this.div(this, v);
    }

    public productDot(v1: Vector3, v2: Vector3): number {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }

    public dot(v: Vector3): number {
        return this.productDot(this, v);
    }

    public productCross(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(
            v1.y * v2.z - v1.z * v2.y,
            v1.z * v2.x - v1.x * v2.z,
            v1.x * v2.y - v1.y * v2.x
        );
    }

    public cross(v: Vector3): Vector3 {
        return this.productCross(this, v);
    }

    public normalizeVector(): Vector3 {
        const length = this.Length;
        return length === 0 ? new Vector3(0, 0, 0) : this.divide(length);
    }

    public get normalize(): Vector3 {
        return this.normalizeVector();
    }

    public clone(): Vector3 {
        return new Vector3(this.x, this.y, this.z);
    }

    public distanceTo(v: Vector3): number {
        return Math.sqrt(this.distanceSquared(v));
    }

    public distance(v: Vector3): number {
        return this.distanceTo(v);
    }

    public distanceSquared(v: Vector3): number {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        const dz = this.z - v.z;
        return dx * dx + dy * dy + dz * dz;
    }

    public get Length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    public toRadians(): Vector3 {
        return new Vector3(
            (this.x * Math.PI) / 180,
            (this.y * Math.PI) / 180,
            (this.z * Math.PI) / 180
        );
    }
}