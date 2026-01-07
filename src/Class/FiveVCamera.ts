import { Vector3 } from "../utils/Vector3";
import { TransformNumberArrayInVector3 } from "../utils/Transformer";
import { FiveVEntity } from "./FiveVEntity";

export class FiveVCamera {
    private cameraHandle: number;

    constructor(handle: number) {
        this.cameraHandle = handle;
    }

    /**
     * Returns the camera handle
     * @returns The camera handle as a number
     */
    get handle(): number {
        return this.cameraHandle;
    }

    /**
     * Checks if the camera exists
     * @returns true if the camera exists, false otherwise
     * @see [DoesCamExist](https://docs.fivem.net/natives/?_0xA7A932170592B50E) for more information.
     */
    get exists(): boolean {
        return DoesCamExist(this.cameraHandle);
    }

    // ==================== POSITION & ROTATION ====================

    /**
     * Returns the position of the camera
     * @returns The position as a {@link Vector3}
     * @see [GetCamCoord](https://docs.fivem.net/natives/?_0xBAC038F7459AE5AE) for more information.
     */
    get position(): Vector3 {
        return TransformNumberArrayInVector3(GetCamCoord(this.cameraHandle));
    }

    /**
     * Sets the position of the camera
     * @param coords The new position as {@link Vector3}
     * @see [SetCamCoord](https://docs.fivem.net/natives/?_0x4D41783FB745E42E) for more information.
     */
    set position(coords: Vector3) {
        SetCamCoord(this.cameraHandle, coords.x, coords.y, coords.z);
    }

    /**
     * Returns the rotation of the camera
     * @returns The rotation as a {@link Vector3}
     * @see [GetCamRot](https://docs.fivem.net/natives/?_0x7D304C1C955E3E12) for more information.
     */
    get rotation(): Vector3 {
        return TransformNumberArrayInVector3(GetCamRot(this.cameraHandle, 2));
    }

    /**
     * Sets the rotation of the camera
     * @param rot The new rotation as {@link Vector3}
     * @see [SetCamRot](https://docs.fivem.net/natives/?_0x85973643155D0B07) for more information.
     */
    set rotation(rot: Vector3) {
        SetCamRot(this.cameraHandle, rot.x, rot.y, rot.z, 2);
    }

    // ==================== FIELD OF VIEW ====================

    /**
     * Returns the field of view of the camera
     * @returns The FOV in degrees
     * @see [GetCamFov](https://docs.fivem.net/natives/?_0xC3330A45CCCDB26A) for more information.
     */
    get fov(): number {
        return GetCamFov(this.cameraHandle);
    }

    /**
     * Sets the field of view of the camera
     * @param fov The FOV in degrees
     * @see [SetCamFov](https://docs.fivem.net/natives/?_0xB13C14F66A00D047) for more information.
     */
    set fov(fov: number) {
        SetCamFov(this.cameraHandle, fov);
    }

    // ==================== ACTIVATION ====================

    /**
     * Returns whether the camera is active
     * @returns true if active, false otherwise
     * @see [IsCamActive](https://docs.fivem.net/natives/?_0xDFB2B516207D3534) for more information.
     */
    get isActive(): boolean {
        return IsCamActive(this.cameraHandle);
    }

    /**
     * Sets whether the camera is active
     * @param active true to activate, false to deactivate
     * @see [SetCamActive](https://docs.fivem.net/natives/?_0x026FB97D0A425F84) for more information.
     */
    set active(active: boolean) {
        SetCamActive(this.cameraHandle, active);
    }

    // ==================== TARGETING ====================

    /**
     * Points the camera at a specific coordinate
     * @param coords The coordinates to point at
     * @see [PointCamAtCoord](https://docs.fivem.net/natives/?_0xF75497BB865F0803) for more information.
     */
    public pointAtCoord(coords: Vector3): void {
        PointCamAtCoord(this.cameraHandle, coords.x, coords.y, coords.z);
    }

    /**
     * Points the camera at a specific entity
     * @param entity The entity to point at
     * @param offsetX X offset from entity center
     * @param offsetY Y offset from entity center
     * @param offsetZ Z offset from entity center
     * @param relative Whether to use relative coordinates
     * @see [PointCamAtEntity](https://docs.fivem.net/natives/?_0x5640BFF86B16E8DC) for more information.
     */
    public pointAtEntity(entity: FiveVEntity | number, offsetX: number = 0, offsetY: number = 0, offsetZ: number = 0, relative: boolean = true): void {
        const handle = entity instanceof FiveVEntity ? entity.handle : entity;
        PointCamAtEntity(this.cameraHandle, handle, offsetX, offsetY, offsetZ, relative);
    }

    /**
     * Points the camera at a ped bone
     * @param ped The ped entity
     * @param boneId The bone ID
     * @param offsetX X offset from bone
     * @param offsetY Y offset from bone
     * @param offsetZ Z offset from bone
     * @param relative Whether to use relative coordinates
     * @see [PointCamAtPedBone](https://docs.fivem.net/natives/?_0x68B2B5F33BA63C41) for more information.
     */
    public pointAtPedBone(ped: FiveVEntity | number, boneId: number, offsetX: number = 0, offsetY: number = 0, offsetZ: number = 0, relative: boolean = true): void {
        const handle = ped instanceof FiveVEntity ? ped.handle : ped;
        PointCamAtPedBone(this.cameraHandle, handle, boneId, offsetX, offsetY, offsetZ, relative);
    }

    /**
     * Stops pointing the camera at anything
     * @see [StopCamPointing](https://docs.fivem.net/natives/?_0xF33AB75780BA57DE) for more information.
     */
    public stopPointing(): void {
        StopCamPointing(this.cameraHandle);
    }

    // ==================== ATTACHMENT ====================

    /**
     * Attaches the camera to an entity
     * @param entity The entity to attach to
     * @param offset The offset from the entity
     * @param relative Whether to use relative coordinates
     * @see [AttachCamToEntity](https://docs.fivem.net/natives/?_0xFEDB7D269E8C60E3) for more information.
     */
    public attachToEntity(entity: FiveVEntity | number, offset: Vector3 = new Vector3(0, 0, 0), relative: boolean = true): void {
        const handle = entity instanceof FiveVEntity ? entity.handle : entity;
        AttachCamToEntity(this.cameraHandle, handle, offset.x, offset.y, offset.z, relative);
    }

    /**
     * Attaches the camera to a ped bone
     * @param ped The ped entity
     * @param boneId The bone ID
     * @param offset The offset from the bone
     * @param relative Whether to use relative coordinates
     * @see [AttachCamToPedBone](https://docs.fivem.net/natives/?_0x61A3DBA14AB7F411) for more information.
     */
    public attachToPedBone(ped: FiveVEntity | number, boneId: number, offset: Vector3 = new Vector3(0, 0, 0), relative: boolean = true): void {
        const handle = ped instanceof FiveVEntity ? ped.handle : ped;
        AttachCamToPedBone(this.cameraHandle, handle, boneId, offset.x, offset.y, offset.z, relative);
    }

    /**
     * Detaches the camera from any entity
     * @see [DetachCam](https://docs.fivem.net/natives/?_0xA2FABBE87F4BAD82) for more information.
     */
    public detach(): void {
        DetachCam(this.cameraHandle);
    }

    // ==================== SHAKE ====================

    /**
     * Shakes the camera
     * @param shakeType The shake type name
     * @param amplitude The shake amplitude (0-1)
     * @see [ShakeCam](https://docs.fivem.net/natives/?_0x6A25241C340D3822) for more information.
     */
    public shake(shakeType: string, amplitude: number): void {
        ShakeCam(this.cameraHandle, shakeType, amplitude);
    }

    /**
     * Stops the camera shake
     * @param instant Whether to stop instantly
     * @see [StopCamShaking](https://docs.fivem.net/natives/?_0xBDECF64367884AC3) for more information.
     */
    public stopShaking(instant: boolean = true): void {
        StopCamShaking(this.cameraHandle, instant);
    }

    /**
     * Returns whether the camera is shaking
     * @returns true if shaking, false otherwise
     * @see [IsCamShaking](https://docs.fivem.net/natives/?_0x6B24BFE83A2BE47B) for more information.
     */
    get isShaking(): boolean {
        return IsCamShaking(this.cameraHandle);
    }

    /**
     * Sets the shake amplitude
     * @param amplitude The amplitude (0-1)
     * @see [SetCamShakeAmplitude](https://docs.fivem.net/natives/?_0xD93DB43B82BC0D00) for more information.
     */
    set shakeAmplitude(amplitude: number) {
        SetCamShakeAmplitude(this.cameraHandle, amplitude);
    }

    // ==================== INTERPOLATION ====================

    /**
     * Interpolates this camera to another camera
     * @param toCamera The target camera
     * @param duration The duration in milliseconds
     * @param easePosition The position easing type
     * @param easeRotation The rotation easing type
     * @see [SetCamActiveWithInterp](https://docs.fivem.net/natives/?_0x9FBDA379383A52A4) for more information.
     */
    public interpolateTo(toCamera: FiveVCamera, duration: number, easePosition: number = 1, easeRotation: number = 1): void {
        SetCamActiveWithInterp(toCamera.handle, this.cameraHandle, duration, easePosition, easeRotation);
    }

    /**
     * Returns whether the camera is interpolating
     * @returns true if interpolating, false otherwise
     * @see [IsCamInterpolating](https://docs.fivem.net/natives/?_0x036F97C908C2B52C) for more information.
     */
    get isInterpolating(): boolean {
        return IsCamInterpolating(this.cameraHandle);
    }

    // ==================== DEPTH OF FIELD ====================

    /**
     * Sets the depth of field settings
     * @param nearBlurMin Near blur minimum distance
     * @param nearBlurMax Near blur maximum distance
     * @param farBlurMin Far blur minimum distance
     * @param farBlurMax Far blur maximum distance
     * @param blurStrength The blur strength (0-1)
     * @see [SetCamDofFnumberOfLens](https://docs.fivem.net/natives/?_0x5EE29B121F52C882) for more information.
     */
    public setDepthOfField(nearBlurMin: number, nearBlurMax: number, farBlurMin: number, farBlurMax: number, blurStrength: number): void {
        SetCamNearDof(this.cameraHandle, nearBlurMin);
        SetCamFarDof(this.cameraHandle, farBlurMax);
        SetCamDofStrength(this.cameraHandle, blurStrength);
    }

    /**
     * Sets the near depth of field distance
     * @param distance The near DOF distance
     * @see [SetCamNearDof](https://docs.fivem.net/natives/?_0x3FA4BF0A7AB7DE2C) for more information.
     */
    set nearDof(distance: number) {
        SetCamNearDof(this.cameraHandle, distance);
    }

    /**
     * Sets the far depth of field distance
     * @param distance The far DOF distance
     * @see [SetCamFarDof](https://docs.fivem.net/natives/?_0xEDD91296CD01AEE0) for more information.
     */
    set farDof(distance: number) {
        SetCamFarDof(this.cameraHandle, distance);
    }

    /**
     * Sets the depth of field strength
     * @param strength The DOF strength (0-1)
     * @see [SetCamDofStrength](https://docs.fivem.net/natives/?_0x5EE29B121F52C882) for more information.
     */
    set dofStrength(strength: number) {
        SetCamDofStrength(this.cameraHandle, strength);
    }

    /**
     * Enables/disables depth of field
     * @param enabled true to enable, false to disable
     * @see [SetCamUseShallowDofMode](https://docs.fivem.net/natives/?_0x16A96863A17552BB) for more information.
     */
    set dofEnabled(enabled: boolean) {
        SetCamUseShallowDofMode(this.cameraHandle, enabled);
    }

    // ==================== MOTION BLUR ====================

    /**
     * Sets the motion blur strength
     * @param strength The motion blur strength (0-1)
     * @see [SetCamMotionBlurStrength](https://docs.fivem.net/natives/?_0x6F0F77FBA9A8F2E6) for more information.
     */
    set motionBlurStrength(strength: number) {
        SetCamMotionBlurStrength(this.cameraHandle, strength);
    }

    // ==================== DESTRUCTION ====================

    /**
     * Destroys the camera
     * @param destroyGameplayDirector Whether to destroy the gameplay director
     * @see [DestroyCam](https://docs.fivem.net/natives/?_0x865908C81A2C22E9) for more information.
     */
    public destroy(destroyGameplayDirector: boolean = false): void {
        DestroyCam(this.cameraHandle, destroyGameplayDirector);
    }

    // ==================== STATIC FACTORY METHODS ====================

    /**
     * Creates a new camera
     * @param cameraName The camera type name (default: "DEFAULT_SCRIPTED_CAMERA")
     * @param position The initial position
     * @param rotation The initial rotation
     * @param fov The field of view
     * @returns A new FiveVCamera instance
     * @see [CreateCam](https://docs.fivem.net/natives/?_0xC3981DCE61D9E13F) for more information.
     */
    public static create(cameraName: string = "DEFAULT_SCRIPTED_CAMERA", position?: Vector3, rotation?: Vector3, fov: number = 50.0): FiveVCamera {
        let handle: number;
        if (position && rotation) {
            handle = CreateCamWithParams(cameraName, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, fov, false, 2);
        } else {
            handle = CreateCam(cameraName, false);
            if (fov !== 50.0) {
                SetCamFov(handle, fov);
            }
        }
        return new FiveVCamera(handle);
    }

    /**
     * Creates a camera with parameters
     * @param position The camera position
     * @param rotation The camera rotation
     * @param fov The field of view
     * @returns A new FiveVCamera instance
     * @see [CreateCamWithParams](https://docs.fivem.net/natives/?_0xB51194800B257161) for more information.
     */
    public static createWithParams(position: Vector3, rotation: Vector3, fov: number = 50.0): FiveVCamera {
        const handle = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, fov, false, 2);
        return new FiveVCamera(handle);
    }

    // ==================== STATIC RENDER CONTROL ====================

    /**
     * Renders script cameras (required to see custom cameras)
     * @param render true to render script cams, false to return to gameplay cam
     * @param ease Whether to ease the transition
     * @param easeTime The ease duration in milliseconds
     * @see [RenderScriptCams](https://docs.fivem.net/natives/?_0x07E5B515DB0636FC) for more information.
     */
    public static renderScriptCams(render: boolean, ease: boolean = false, easeTime: number = 0): void {
        RenderScriptCams(render, ease, easeTime, true, false);
    }

    /**
     * Destroys all script cameras
     * @param destroyGameplayDirector Whether to destroy the gameplay director
     * @see [DestroyAllCams](https://docs.fivem.net/natives/?_0x8E5FB15663F79120) for more information.
     */
    public static destroyAll(destroyGameplayDirector: boolean = false): void {
        DestroyAllCams(destroyGameplayDirector);
    }

    // ==================== STATIC GAMEPLAY CAMERA ====================

    /**
     * Returns the position of the gameplay camera
     * @returns The position as a {@link Vector3}
     * @see [GetGameplayCamCoord](https://docs.fivem.net/natives/?_0x14D6F5678D8F1B37) for more information.
     */
    public static getGameplayCamPosition(): Vector3 {
        return TransformNumberArrayInVector3(GetGameplayCamCoord());
    }

    /**
     * Returns the rotation of the gameplay camera
     * @returns The rotation as a {@link Vector3}
     * @see [GetGameplayCamRot](https://docs.fivem.net/natives/?_0x837765A25378F0BB) for more information.
     */
    public static getGameplayCamRotation(): Vector3 {
        return TransformNumberArrayInVector3(GetGameplayCamRot(2));
    }

    /**
     * Returns the FOV of the gameplay camera
     * @returns The FOV in degrees
     * @see [GetGameplayCamFov](https://docs.fivem.net/natives/?_0x65019750A0324133) for more information.
     */
    public static getGameplayCamFov(): number {
        return GetGameplayCamFov();
    }

    /**
     * Returns the relative heading of the gameplay camera
     * @returns The relative heading in degrees
     * @see [GetGameplayCamRelativeHeading](https://docs.fivem.net/natives/?_0x743607648ADD4587) for more information.
     */
    public static getGameplayCamRelativeHeading(): number {
        return GetGameplayCamRelativeHeading();
    }

    /**
     * Returns the relative pitch of the gameplay camera
     * @returns The relative pitch in degrees
     * @see [GetGameplayCamRelativePitch](https://docs.fivem.net/natives/?_0x3A6867B4845BEDA2) for more information.
     */
    public static getGameplayCamRelativePitch(): number {
        return GetGameplayCamRelativePitch();
    }

    /**
     * Sets the relative heading of the gameplay camera
     * @param heading The heading in degrees
     * @see [SetGameplayCamRelativeHeading](https://docs.fivem.net/natives/?_0xB4EC2312F4E5B1F1) for more information.
     */
    public static setGameplayCamRelativeHeading(heading: number): void {
        SetGameplayCamRelativeHeading(heading);
    }

    /**
     * Sets the relative pitch of the gameplay camera
     * @param pitch The pitch in degrees
     * @param scalingFactor The scaling factor
     * @see [SetGameplayCamRelativePitch](https://docs.fivem.net/natives/?_0x6D0858B8EDFA2B7D) for more information.
     */
    public static setGameplayCamRelativePitch(pitch: number, scalingFactor: number = 1.0): void {
        SetGameplayCamRelativePitch(pitch, scalingFactor);
    }

    /**
     * Shakes the gameplay camera
     * @param shakeType The shake type name
     * @param amplitude The shake amplitude
     * @see [ShakeGameplayCam](https://docs.fivem.net/natives/?_0xFD55E49555E017CF) for more information.
     */
    public static shakeGameplayCam(shakeType: string, amplitude: number): void {
        ShakeGameplayCam(shakeType, amplitude);
    }

    /**
     * Stops shaking the gameplay camera
     * @param instant Whether to stop instantly
     * @see [StopGameplayCamShaking](https://docs.fivem.net/natives/?_0x0EF93E9F3D08C178) for more information.
     */
    public static stopGameplayCamShaking(instant: boolean = true): void {
        StopGameplayCamShaking(instant);
    }

    /**
     * Returns whether the gameplay camera is shaking
     * @returns true if shaking, false otherwise
     * @see [IsGameplayCamShaking](https://docs.fivem.net/natives/?_0x016C090630f06F28) for more information.
     */
    public static isGameplayCamShaking(): boolean {
        return IsGameplayCamShaking();
    }
}
