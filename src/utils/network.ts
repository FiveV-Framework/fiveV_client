export function GetNetIdFromBagName(bagName: string): number {
    const parts = bagName.split(":");
    return parts.length > 1 ? Number(parts[1]) || -1 : -1;
}

export function GetVehFromBagName(bagName: string): number {
    if(!bagName.startsWith("entity:")) return -1;
    const netId = parseInt(bagName.split(":")[1]);
    return GetVehFromNetworkId(netId);
}

export function GetVehFromNetworkId(netId: number): number {
    if(!netId || !NetworkDoesEntityExistWithNetworkId(netId)) return -1;
    const entityId = NetToVeh(netId);
    if(entityId == 0 || !DoesEntityExist(entityId)) return -1;
    if(!IsEntityAVehicle(entityId)) return -1;
    return entityId;
}

export function GetPedFromBagName(bagName: string): number {
    if(!bagName.startsWith("entity:")) return -1;
    const netId = parseInt(bagName.split(":")[1]);
    return GetVehFromNetworkId(netId);
}

export function GetPedFromNetworkId(netId: number): number {
    if(!netId || !NetworkDoesEntityExistWithNetworkId(netId)) return -1;
    const entityId = NetToPed(netId);
    if(entityId == 0 || !DoesEntityExist(entityId)) return -1;
    if(!IsEntityAPed(entityId)) return -1;
    return entityId;
}

export function GetObjectFromBagName(bagName: string): number {
    if(!bagName.startsWith("entity:")) return -1;
    const netId = parseInt(bagName.split(":")[1]);
    return GetVehFromNetworkId(netId);
}

export function GetObjectFromNetworkid(netId: number): number {
    if(!netId || !NetworkDoesEntityExistWithNetworkId(netId)) return -1;
    const entityId = NetToObj(netId);
    if(entityId == 0 || !DoesEntityExist(entityId)) return -1;
    if(!IsEntityAnObject(entityId)) return -1;
    return entityId;
}

export function GetEntityFromBagName(bagName: string): number {
    if (!bagName.startsWith("entity:")) return -1;
    const netId = parseInt(bagName.split(":")[1]);
    return GetVehFromNetworkId(netId);
}

export function GetEntityFromNetworkid(netId: number): number {
    if(!netId || !NetworkDoesEntityExistWithNetworkId(netId)) return -1;
    const entityId = NetToObj(netId);
    if(entityId == 0 || !DoesEntityExist(entityId)) return -1;
    return entityId;
}