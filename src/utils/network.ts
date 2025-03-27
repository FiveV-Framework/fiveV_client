
export class Utils {
    /**
     * Gets the network ID from a bag name.
     * @param bagName - The bag name in the format "entity:<netId>".
     * @returns The network ID or -1 if not found.
     */
    public static GetNetIdFromBagName(bagName: string): number {
        const parts = bagName.split(":");
        return parts.length > 1 ? Number(parts[1]) || -1 : -1;
    }

    /**
     * Gets the vehicle entity from a bag name.
     * @param bagName - The bag name in the format "entity:<netId>".
     * @returns The vehicle entity ID or -1 if not found.
     */
    public static GetVehFromBagName(bagName: string): number {
        if(!bagName.startsWith("entity:")) return -1;
        const netId = parseInt(bagName.split(":")[1]);
        return Utils.GetVehFromNetworkId(netId);
    }

    /**
     * Gets the vehicle entity from a network ID.
     * @param netId - The network ID of the vehicle.
     * @returns The vehicle entity ID or -1 if not found.
     */
    public static GetVehFromNetworkId(netId: number): number {
        if(!netId || !NetworkDoesEntityExistWithNetworkId(netId)) return -1;
        const entityId = NetToVeh(netId);
        if(entityId == 0 || !DoesEntityExist(entityId)) return -1;
        if(!IsEntityAVehicle(entityId)) return -1;
        return entityId;
    }

    /**
     * Gets the pedestrian entity from a bag name.
     * @param bagName - The bag name in the format "entity:<netId>".
     * @returns The pedestrian entity ID or -1 if not found.
     */
    public static GetPedFromBagName(bagName: string): number {
        if(!bagName.startsWith("entity:")) return -1;
        const netId = parseInt(bagName.split(":")[1]);
        return Utils.GetPedFromNetworkId(netId);
    }

    /**
     * Gets the pedestrian entity from a network ID.
     * @param netId - The network ID of the pedestrian.
     * @returns The pedestrian entity ID or -1 if not found.
     */
    public static GetPedFromNetworkId(netId: number): number {
        if(!netId || !NetworkDoesEntityExistWithNetworkId(netId)) return -1;
        const entityId = NetToPed(netId);
        if(entityId == 0 || !DoesEntityExist(entityId)) return -1;
        if(!IsEntityAPed(entityId)) return -1;
        return entityId;
    }

    /**
     * Gets the object entity from a bag name.
     * @param bagName - The bag name in the format "entity:<netId>".
     * @returns The object entity ID or -1 if not found.
     */
    public static GetObjectFromBagName(bagName: string): number {
        if(!bagName.startsWith("entity:")) return -1;
        const netId = parseInt(bagName.split(":")[1]);
        return Utils.GetObjectFromNetworkid(netId);
    }

    /**
     * Gets the object entity from a network ID.
     * @param netId - The network ID of the object.
     * @returns The object entity ID or -1 if not found.
     */
    public static GetObjectFromNetworkid(netId: number): number {
        if(!netId || !NetworkDoesEntityExistWithNetworkId(netId)) return -1;
        const entityId = NetToObj(netId);
        if(entityId == 0 || !DoesEntityExist(entityId)) return -1;
        if(!IsEntityAnObject(entityId)) return -1;
        return entityId;
    }

    /**
     * Gets a generic entity from a bag name.
     * @param bagName - The bag name in the format "entity:<netId>".
     * @returns The entity ID or -1 if not found.
     */
    public static GetEntityFromBagName(bagName: string): number {
        if (!bagName.startsWith("entity:")) return -1;
        const netId = parseInt(bagName.split(":")[1]);
        return Utils.GetEntityFromNetworkid(netId);
    }

    /**
     * Gets a generic entity from a network ID.
     * @param netId - The network ID of the entity.
     * @returns The entity ID or -1 if not found.
     */
    public static GetEntityFromNetworkid(netId: number): number {
        if(!netId || !NetworkDoesEntityExistWithNetworkId(netId)) return -1;
        const entityId = NetToObj(netId);
        if(entityId == 0 || !DoesEntityExist(entityId)) return -1;
        return entityId;
    }
}