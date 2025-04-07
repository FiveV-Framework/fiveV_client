/**
 * Das FiveM Vehicle (in einer Number)
 */
export type fiveMVehicle = number;

export enum VEHICLELOCKSTATE {
    // No specific lock state, vehicle behaves according to the game's default settings.
    VEHICLELOCK_NONE = 0,
    // Vehicle is fully unlocked, allowing free entry by players and NPCs.
    VEHICLELOCK_UNLOCKED = 1,
    // Vehicle is locked, preventing entry by players and NPCs.
    VEHICLELOCK_LOCKED = 2,
    // Vehicle locks out only players, allowing NPCs to enter.
    VEHICLELOCK_LOCKOUT_PLAYER_ONLY = 3,
    // Vehicle is locked once a player enters, preventing others from entering.
    VEHICLELOCK_LOCKED_PLAYER_INSIDE = 4,
    // Vehicle starts in a locked state, but may be unlocked through game events.
    VEHICLELOCK_LOCKED_INITIALLY = 5,
    // Forces the vehicle's doors to shut and lock.
    VEHICLELOCK_FORCE_SHUT_DOORS = 6,
    // Vehicle is locked but can still be damaged.
    VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED = 7,
    // Vehicle is locked, but its trunk/boot remains unlocked.
    VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED = 8,
    // Vehicle is locked and does not allow passengers, except for the driver.
    VEHICLELOCK_LOCKED_NO_PASSENGERS = 9,
    // Vehicle is completely locked, preventing entry entirely, even if previously inside.
    VEHICLELOCK_CANNOT_ENTER = 10
}

export enum VEHINDICATORLIGHTS {
    None = 0,
    BlinkLeft = 1,
    BlinkRight = 2,
    BlinkPermBoth = 4,
    StaticBoth = 8,
    Interior = 64,
}

export enum NEONINDEX {
    NEON_BACK = 0,
    NEON_RIGHT = 1,
    NEON_LEFT = 2,
    NEON_FRONT = 3
}

export enum SEATPOSITION
{
    SF_FrontDriverSide = -1,
    SF_FrontPassengerSide = 0,
    SF_BackDriverSide = 1,
    SF_BackPassengerSide = 2,
    SF_AltFrontDriverSide = 3,
    SF_AltFrontPassengerSide = 4,
    SF_AltBackDriverSide = 5,
    SF_AltBackPassengerSide = 6,
}

export enum VEHICLECLASS {
    Compacts,
    Sedans,
    SUVs,
    Coupes,
    Muscle,
    Sports_Classics,
    Sports,
    Super,
    Motorcycles,
    Off_road,
    Industrial,
    Utility,
    Vans,
    Cycles,
    Boats,
    Helicopters,
    Planes,
    Service,
    Emergency,
    Military,
    Commercial,
    Trains,
    Open_Wheel,
}

export enum VEHICLEPLATETYPE
{
    VPT_FRONT_AND_BACK_PLATES = 0,
    VPT_FRONT_PLATES = 1,
    VPT_BACK_PLATES = 2,
    VPT_NONE = 3,
}