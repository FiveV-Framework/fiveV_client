/**
 * Das FiveM Vehicle (in einer Number)
 */
export type fiveMVehicle = number;

export enum eVehicleLockState {
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