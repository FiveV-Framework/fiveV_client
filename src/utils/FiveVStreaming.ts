/**
 * Utility class for model and asset streaming
 */
export class FiveVStreaming {

    // ==================== MODELS ====================

    /**
     * Requests a model to be loaded
     * @param model The model name or hash
     * @returns Promise that resolves when the model is loaded
     * @see [RequestModel](https://docs.fivem.net/natives/?_0x963D27A58DF860AC) for more information.
     */
    public static async requestModel(model: string | number): Promise<void> {
        const hash = typeof model === "string" ? GetHashKey(model) : model;

        if (!IsModelInCdimage(hash)) {
            throw new Error(`Model ${model} does not exist in the game files`);
        }

        RequestModel(hash);

        return new Promise((resolve, reject) => {
            const timeout = 10000;
            const startTime = GetGameTimer();

            const checkLoaded = () => {
                if (HasModelLoaded(hash)) {
                    resolve();
                } else if (GetGameTimer() - startTime > timeout) {
                    reject(new Error(`Timeout loading model: ${model}`));
                } else {
                    setTimeout(checkLoaded, 10);
                }
            };

            checkLoaded();
        });
    }

    /**
     * Checks if a model has been loaded
     * @param model The model name or hash
     * @returns true if loaded, false otherwise
     * @see [HasModelLoaded](https://docs.fivem.net/natives/?_0x98A4EB5D89A0C952) for more information.
     */
    public static hasModelLoaded(model: string | number): boolean {
        const hash = typeof model === "string" ? GetHashKey(model) : model;
        return HasModelLoaded(hash);
    }

    /**
     * Marks a model as no longer needed
     * @param model The model name or hash
     * @see [SetModelAsNoLongerNeeded](https://docs.fivem.net/natives/?_0xE532F5D78798DAAB) for more information.
     */
    public static setModelAsNoLongerNeeded(model: string | number): void {
        const hash = typeof model === "string" ? GetHashKey(model) : model;
        SetModelAsNoLongerNeeded(hash);
    }

    /**
     * Checks if a model exists in the game files
     * @param model The model name or hash
     * @returns true if the model exists, false otherwise
     * @see [IsModelInCdimage](https://docs.fivem.net/natives/?_0x35B9E0803292B641) for more information.
     */
    public static isModelValid(model: string | number): boolean {
        const hash = typeof model === "string" ? GetHashKey(model) : model;
        return IsModelInCdimage(hash);
    }

    /**
     * Checks if a model is a vehicle
     * @param model The model name or hash
     * @returns true if it's a vehicle model, false otherwise
     * @see [IsModelAVehicle](https://docs.fivem.net/natives/?_0x5D53D6D2ADAC1E1F) for more information.
     */
    public static isModelAVehicle(model: string | number): boolean {
        const hash = typeof model === "string" ? GetHashKey(model) : model;
        return IsModelAVehicle(hash);
    }

    /**
     * Checks if a model is a ped
     * @param model The model name or hash
     * @returns true if it's a ped model, false otherwise
     * @see [IsModelAPed](https://docs.fivem.net/natives/?_0x5D53D6D2ADAC1E1F) for more information.
     */
    public static isModelAPed(model: string | number): boolean {
        const hash = typeof model === "string" ? GetHashKey(model) : model;
        return IsModelAPed(hash);
    }

    // ==================== ANIMATION DICTIONARIES ====================

    /**
     * Requests an animation dictionary to be loaded
     * @param animDict The animation dictionary name
     * @returns Promise that resolves when the dictionary is loaded
     * @see [RequestAnimDict](https://docs.fivem.net/natives/?_0xD3BD40951412FEF6) for more information.
     */
    public static async requestAnimDict(animDict: string): Promise<void> {
        RequestAnimDict(animDict);

        return new Promise((resolve, reject) => {
            const timeout = 10000;
            const startTime = GetGameTimer();

            const checkLoaded = () => {
                if (HasAnimDictLoaded(animDict)) {
                    resolve();
                } else if (GetGameTimer() - startTime > timeout) {
                    reject(new Error(`Timeout loading anim dict: ${animDict}`));
                } else {
                    setTimeout(checkLoaded, 10);
                }
            };

            checkLoaded();
        });
    }

    /**
     * Checks if an animation dictionary is loaded
     * @param animDict The animation dictionary name
     * @returns true if loaded, false otherwise
     * @see [HasAnimDictLoaded](https://docs.fivem.net/natives/?_0xD031A9162D01088C) for more information.
     */
    public static hasAnimDictLoaded(animDict: string): boolean {
        return HasAnimDictLoaded(animDict);
    }

    /**
     * Removes an animation dictionary from memory
     * @param animDict The animation dictionary name
     * @see [RemoveAnimDict](https://docs.fivem.net/natives/?_0xF66A602F829E2A06) for more information.
     */
    public static removeAnimDict(animDict: string): void {
        RemoveAnimDict(animDict);
    }

    // ==================== ANIMATION SETS ====================

    /**
     * Requests an animation set to be loaded
     * @param animSet The animation set name (clipset)
     * @returns Promise that resolves when the set is loaded
     * @see [RequestAnimSet](https://docs.fivem.net/natives/?_0x6EA47DAE7FAD0EED) for more information.
     */
    public static async requestAnimSet(animSet: string): Promise<void> {
        RequestAnimSet(animSet);

        return new Promise((resolve, reject) => {
            const timeout = 10000;
            const startTime = GetGameTimer();

            const checkLoaded = () => {
                if (HasAnimSetLoaded(animSet)) {
                    resolve();
                } else if (GetGameTimer() - startTime > timeout) {
                    reject(new Error(`Timeout loading anim set: ${animSet}`));
                } else {
                    setTimeout(checkLoaded, 10);
                }
            };

            checkLoaded();
        });
    }

    /**
     * Checks if an animation set is loaded
     * @param animSet The animation set name
     * @returns true if loaded, false otherwise
     * @see [HasAnimSetLoaded](https://docs.fivem.net/natives/?_0xC4EA073D86FB29B0) for more information.
     */
    public static hasAnimSetLoaded(animSet: string): boolean {
        return HasAnimSetLoaded(animSet);
    }

    /**
     * Removes an animation set from memory
     * @param animSet The animation set name
     * @see [RemoveAnimSet](https://docs.fivem.net/natives/?_0x16350528F93024B3) for more information.
     */
    public static removeAnimSet(animSet: string): void {
        RemoveAnimSet(animSet);
    }

    // ==================== PARTICLE EFFECTS ====================

    /**
     * Requests a particle effects asset to be loaded
     * @param ptfxAsset The particle effects asset name
     * @returns Promise that resolves when the asset is loaded
     * @see [RequestNamedPtfxAsset](https://docs.fivem.net/natives/?_0xB80D8756B4668AB6) for more information.
     */
    public static async requestPtfxAsset(ptfxAsset: string): Promise<void> {
        RequestNamedPtfxAsset(ptfxAsset);

        return new Promise((resolve, reject) => {
            const timeout = 10000;
            const startTime = GetGameTimer();

            const checkLoaded = () => {
                if (HasNamedPtfxAssetLoaded(ptfxAsset)) {
                    resolve();
                } else if (GetGameTimer() - startTime > timeout) {
                    reject(new Error(`Timeout loading ptfx asset: ${ptfxAsset}`));
                } else {
                    setTimeout(checkLoaded, 10);
                }
            };

            checkLoaded();
        });
    }

    /**
     * Checks if a particle effects asset is loaded
     * @param ptfxAsset The particle effects asset name
     * @returns true if loaded, false otherwise
     * @see [HasNamedPtfxAssetLoaded](https://docs.fivem.net/natives/?_0x8702416E512EC454) for more information.
     */
    public static hasPtfxAssetLoaded(ptfxAsset: string): boolean {
        return HasNamedPtfxAssetLoaded(ptfxAsset);
    }

    /**
     * Removes a particle effects asset from memory
     * @param ptfxAsset The particle effects asset name
     * @see [RemoveNamedPtfxAsset](https://docs.fivem.net/natives/?_0x5F61EBBE1A00F96D) for more information.
     */
    public static removePtfxAsset(ptfxAsset: string): void {
        RemoveNamedPtfxAsset(ptfxAsset);
    }

    // ==================== TEXTURE DICTIONARIES ====================

    /**
     * Requests a texture dictionary to be loaded
     * @param txdName The texture dictionary name
     * @returns Promise that resolves when the dictionary is loaded
     * @see [RequestStreamedTextureDict](https://docs.fivem.net/natives/?_0xDFA2EF8E04127DD5) for more information.
     */
    public static async requestTextureDict(txdName: string): Promise<void> {
        RequestStreamedTextureDict(txdName, false);

        return new Promise((resolve, reject) => {
            const timeout = 10000;
            const startTime = GetGameTimer();

            const checkLoaded = () => {
                if (HasStreamedTextureDictLoaded(txdName)) {
                    resolve();
                } else if (GetGameTimer() - startTime > timeout) {
                    reject(new Error(`Timeout loading texture dict: ${txdName}`));
                } else {
                    setTimeout(checkLoaded, 10);
                }
            };

            checkLoaded();
        });
    }

    /**
     * Checks if a texture dictionary is loaded
     * @param txdName The texture dictionary name
     * @returns true if loaded, false otherwise
     * @see [HasStreamedTextureDictLoaded](https://docs.fivem.net/natives/?_0x0145F696AAAAD2E4) for more information.
     */
    public static hasTextureDictLoaded(txdName: string): boolean {
        return HasStreamedTextureDictLoaded(txdName);
    }

    /**
     * Removes a texture dictionary from memory
     * @param txdName The texture dictionary name
     * @see [SetStreamedTextureDictAsNoLongerNeeded](https://docs.fivem.net/natives/?_0xBE2CACCF5A8AA805) for more information.
     */
    public static setTextureDictAsNoLongerNeeded(txdName: string): void {
        SetStreamedTextureDictAsNoLongerNeeded(txdName);
    }

    // ==================== COLLISION ====================

    /**
     * Requests collision at a coordinate
     * @param x X coordinate
     * @param y Y coordinate
     * @param z Z coordinate
     * @see [RequestCollisionAtCoord](https://docs.fivem.net/natives/?_0x07503F7948F491A7) for more information.
     */
    public static requestCollisionAtCoord(x: number, y: number, z: number): void {
        RequestCollisionAtCoord(x, y, z);
    }

    /**
     * Checks if collision has loaded at a coordinate
     * @param x X coordinate
     * @param y Y coordinate
     * @param z Z coordinate
     * @returns true if collision is loaded, false otherwise
     * @see [HasCollisionLoadedAroundEntity](https://docs.fivem.net/natives/?_0xE9676F61BC0B3321) for more information.
     */
    public static hasCollisionLoadedAtCoord(x: number, y: number, z: number): boolean {
        return HasCollisionLoadedAroundEntity(PlayerPedId());
    }

    // ==================== UTILITY ====================

    /**
     * Gets the hash key for a string
     * @param str The string to hash
     * @returns The hash key
     * @see [GetHashKey](https://docs.fivem.net/natives/?_0xD24D37CC275948CC) for more information.
     */
    public static getHashKey(str: string): number {
        return GetHashKey(str);
    }
}
