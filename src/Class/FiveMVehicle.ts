import {vehicleHandler} from "../@types/vehicle";

export class FiveMVehicle {
    private vehicle: vehicleHandler;

    constructor(vehicle: vehicleHandler) {
        this.vehicle = vehicle;
    }

    /**
     * Gibt die aktuelle Drehzahl (RPM) des Fahrzeugs zurück.
     * @returns Die aktuelle Drehzahl des Fahrzeugs.
     * @see [GetVehicleCurrentRpm](https://docs.fivem.net/natives/?_0xE7B12B54) für weitere Informationen.
     */
    get rpm() {
        return GetVehicleCurrentRpm(this.vehicle);
    }

    /**
     * Setzt die Drehzahl (RPM) des Fahrzeugs.
     * @param rpm Die gewünschte Drehzahl, die gesetzt werden soll.
     * @see [SetVehicleCurrentRpm](https://docs.fivem.net/natives/?_0x2A01A8FC) für weitere Informationen.
     */
    set rpm(rpm: number) {
        SetVehicleCurrentRpm(this.vehicle, rpm);
        return;
    }

    /**
     * Gibt die aktuelle Geschwindigkeit des Fahrzeugs in km/h zurück.
     * @returns Die aktuelle Geschwindigkeit des Fahrzeugs in km/h.
     * @see [GetEntitySpeed](https://docs.fivem.net/natives/?_0xD5037BA82E12416F) für weitere Informationen.
     */
    get speed() {
        return GetEntitySpeed(this.vehicle) * 3.6;
    }

    /**
     * Setzt den Motorstatus des Fahrzeugs.
     * @param state Ein Boolean-Wert, der angibt, ob der Motor ein- (true) oder ausgeschaltet (false) werden soll.
     * @see [SetVehicleEngineOn](https://docs.fivem.net/natives/?_0x2497C4717C8B881E) für weitere Informationen.
     */
    set engineOn(state: boolean) {
        SetVehicleEngineOn(this.vehicle, state, true, true);
    }

    /**
     * Gibt den aktuellen Verriegelungsstatus des Fahrzeugs zurück.
     * @returns Der Verriegelungsstatus des Fahrzeugs, der einem Wert aus der {@link eVehicleLockState} Enum entspricht.
     * @see [GetVehicleDoorLockStatus](https://docs.fivem.net/natives/?_0x25BC98A59C2EA962) für weitere Informationen.
     */
    get lockstate() {
        return GetVehicleDoorLockStatus(this.vehicle);
    }

    /**
     * Setzt den Verriegelungsstatus des Fahrzeugs.
     * @param state Der Verriegelungsstatus, der einem Wert aus der {@link eVehicleLockState} Enum entsprechen sollte.
     *               - 0: VEHICLELOCK_NONE
     *               - 1: VEHICLELOCK_UNLOCKED
     *               - 2: VEHICLELOCK_LOCKED
     *               - 3: VEHICLELOCK_LOCKOUT_PLAYER_ONLY
     *               - 4: VEHICLELOCK_LOCKED_PLAYER_INSIDE
     *               - 5: VEHICLELOCK_LOCKED_INITIALLY
     *               - 6: VEHICLELOCK_FORCE_SHUT_DOORS
     *               - 7: VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED
     *               - 8: VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED
     *               - 9: VEHICLELOCK_LOCKED_NO_PASSENGERS
     *               - 10: VEHICLELOCK_CANNOT_ENTER
     * @see [SetVehicleDoorsLocked](https://docs.fivem.net/natives/?_0xB664292EAECF7FA6) für weitere Informationen.
     */
    set lockstate(state: number) {
        SetVehicleDoorsLocked(this.vehicle, state);
    }
}