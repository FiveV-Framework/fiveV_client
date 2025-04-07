import {
    fiveMVehicle,
    NEONINDEX,
    SEATPOSITION,
    VEHICLECLASS,
    VEHICLELOCKSTATE,
    VEHICLEPLATETYPE
} from "../@types/vehicle";

export class FiveMVehicle {
    private vehicle: fiveMVehicle;

    constructor(vehicle: fiveMVehicle) {
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
    get speedkmh() {
        return GetEntitySpeed(this.vehicle) * 3.6;
    }

    /**
     * Gibt die aktuelle Geschwindigkeit des Fahrzeugs in km/h zurück.
     * @returns Die aktuelle Geschwindigkeit des Fahrzeugs in mph.
     * @see [GetEntitySpeed](https://docs.fivem.net/natives/?_0xD5037BA82E12416F) für weitere Informationen.
     */
    get speedmph() {
        return GetEntitySpeed(this.vehicle) * 2.236936;
    }

    /**
     * Gibt den Motorstatus des Fahrzeugs zurück
     * @returns state Ein Boolean-Wert, der angibt, ob der Motor ein- (true) oder ausgeschaltet (false) ist.
     * @see [GetIsVehicleEngineRunning](https://docs.fivem.net/natives/?_0x7DC6D022) für weitere Informationen.
     */
    get engineOn(): boolean {
        return GetIsVehicleEngineRunning(this.vehicle);
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

    /**
     * Gibt zurück, ob die Neons des Fahrzeugs aktiv sind
     * @returns true - alle Neons aktiviert // false - nicht alle Neons aktiviert
     * @see [IsVehicleNeonLightEnabled](https://docs.fivem.net/natives/?_0x8C4B92553E4766A5) für weitere Informationen.
     */
    get neons():boolean {
        return IsVehicleNeonLightEnabled(this.vehicle, NEONINDEX.NEON_BACK) &&
            IsVehicleNeonLightEnabled(this.vehicle, NEONINDEX.NEON_FRONT) &&
            IsVehicleNeonLightEnabled(this.vehicle, NEONINDEX.NEON_LEFT) &&
            IsVehicleNeonLightEnabled(this.vehicle, NEONINDEX.NEON_RIGHT);
    }

    /**
     * Setzt den NeonActive Status des Fahrzeugs.
     * @param state Ob alle Neons aktiviert werden sollen
     * @see [SetVehicleNeonLightEnabled](https://docs.fivem.net/natives/?_0x2AA720E4287BF269) für weitere Informationen.
     */
    set neons(state: boolean) {
        SetVehicleNeonLightEnabled(this.vehicle, NEONINDEX.NEON_BACK, state);
        SetVehicleNeonLightEnabled(this.vehicle, NEONINDEX.NEON_FRONT, state);
        SetVehicleNeonLightEnabled(this.vehicle, NEONINDEX.NEON_LEFT, state);
        SetVehicleNeonLightEnabled(this.vehicle, NEONINDEX.NEON_RIGHT, state);
    }

    /**
     * Gibt alle am Fahrzeug befindlichen Neons zurück, die aktiv sind
     * @returns Number-Array oder {@link NEONINDEX}-Array welcher alle aktiven Neons beinhaltet
     * @see [IsVehicleNeonLightEnabled](https://docs.fivem.net/natives/?_0x8C4B92553E4766A5) für weitere Informationen.
     */
    public getAllActiveNeons() : number[] | NEONINDEX[]{
        let activeNeonList : NEONINDEX[] = [];
        for (let i= 0; i < Object.keys(NEONINDEX).filter(key => isNaN(Number(key))).length; i++) {
            if (IsVehicleNeonLightEnabled(this.vehicle, i)) {
                activeNeonList.push(i);
            }
        }
        return activeNeonList;
    }

    /**
     * Aktiviert alle spezifizierten Neons
     * @param state Ob alle Neons aktiviert werden sollen
     * @param neonsToActivate Number-Array oder {@link NEONINDEX}-Array welcher alle Neons beinhaltet, die aktiviert werden sollen
     * @see [SetVehicleNeonLightEnabled](https://docs.fivem.net/natives/?_0x2AA720E4287BF269) für weitere Informationen.
     */
    public activateSpecificNeons(state: boolean, neonsToActivate: number[] | NEONINDEX[]) {
        for (let i= 0; i < neonsToActivate.length -1; i++) {
            SetVehicleNeonLightEnabled(this.vehicle, i, true);
        }
    }

    /**
     * Gibt die Maximalgeschwindigkeit des Fahrzeugs zurück
     * @returns die Maximalgeschwindigkeit als float
     * @see [GetVehicleMaxSpeed](https://docs.fivem.net/natives/?_0x53AF99BAA671CA47) für weitere Informationen.
     */
    get maxSpeed(): number {
        return GetVehicleEstimatedMaxSpeed(this.vehicle);
    }

    /**
     * Setzt die Maximalgeschwindigkeit des Fahrzeugs.
     * @param newMaxSpeed Maximalgeschwindigkeit als float
     * @see [SetVehicleMaxSpeed](https://docs.fivem.net/natives/?_0xBAA045B4E42F3C06) für weitere Informationen.
     */
    set maxSpeed(newMaxSpeed: number) {
        SetVehicleMaxSpeed(this.vehicle, newMaxSpeed);
    }

    /**
     * Gibt die Lightsmodifier zurück
     * @returns die Lightsmodifier
     * @see [GetVehicleLightMultiplier](https://docs.fivem.net/natives/?_0x7E6E219C) für weitere Informationen.
     */
    get lightsModifier(): number {
        return GetVehicleLightMultiplier(this.vehicle);
    }

    /**
     * Gibt das Plate zurück
     * @returns das Plate
     * @see [GetVehicleNumberPlateText](https://docs.fivem.net/natives/?_0xE8522D58) für weitere Informationen.
     */
    get numberPlateText(): string {
        return GetVehicleNumberPlateText(this.vehicle);
    }

    /**
     * Gibt zurück ob das Fahrzeug ein Elektrofahrzeug ist
     * @returns true, wenn Fahrzeug ein Elektrofahrzeug ist - false, wenn nicht
     * @see [GetIsVehicleElectric](https://docs.fivem.net/natives/?_0x1FCB07FE230B6639) für weitere Informationen.
     */
    get electric():boolean {
        return GetIsVehicleElectric(this.vehicle);
    }

    /**
     * Gibt den Ped im DriverSeat zurück
     * @returns Ped im DriverSeat - 0 wenn keiner drinne sitzt
     * @see [GetPedInVehicleSeat](https://docs.fivem.net/natives/?_0xBB40DD2270B65366) für weitere Informationen.
     */
    get playerInDriverSeat(): number {
        return GetPedInVehicleSeat(this.vehicle, SEATPOSITION.SF_FrontDriverSide);
    }

    /**
     * Alle im Fahrzeug sitzenden Personen zurück
     * @returns numberArray[], sortiert nach {@link SEATPOSITION}
     * @see [GetPedInVehicleSeat](https://docs.fivem.net/natives/?_0xBB40DD2270B65366) für weitere Informationen.
     */
    get allPlayersSortedBySeatInVehicle(): number[] {
        let playersInVehicle : number[] = [];
        playersInVehicle.push(GetPedInVehicleSeat(this.vehicle, SEATPOSITION.SF_FrontDriverSide));
        playersInVehicle.push(GetPedInVehicleSeat(this.vehicle, SEATPOSITION.SF_FrontPassengerSide));
        playersInVehicle.push(GetPedInVehicleSeat(this.vehicle, SEATPOSITION.SF_BackDriverSide));
        playersInVehicle.push(GetPedInVehicleSeat(this.vehicle, SEATPOSITION.SF_BackPassengerSide));
        playersInVehicle.push(GetPedInVehicleSeat(this.vehicle, SEATPOSITION.SF_AltFrontDriverSide));
        playersInVehicle.push(GetPedInVehicleSeat(this.vehicle, SEATPOSITION.SF_AltFrontPassengerSide));
        playersInVehicle.push(GetPedInVehicleSeat(this.vehicle, SEATPOSITION.SF_AltBackDriverSide));
        playersInVehicle.push(GetPedInVehicleSeat(this.vehicle, SEATPOSITION.SF_AltBackPassengerSide));
        return playersInVehicle;
    }

    /**
     * Gibt die Beschleunigung eines Fahrzeugs zurück
     * @returns number als Beschleunigung
     * @see [GetVehicleAcceleration](https://docs.fivem.net/natives/?_0x5DD35C8D074E57AE) für weitere Informationen.
     */
    get acceleration(): number {
        return GetVehicleAcceleration(this.vehicle);
    }

    /**
     * Gibt die Klasse des Fahrzeugs zurück
     * @returns {@link VEHICLECLASS}
     * @see [GetVehicleClass](https://docs.fivem.net/natives/?_0x29439776AAA00A62) für weitere Informationen.
     */
    get class(): VEHICLECLASS {
        return GetVehicleClass(this.vehicle) as VEHICLECLASS;
    }

    /**
     * Gibt den Dirtlevel des Fahrzeugs zurück
     * @returns Dirtlevel als Zahl
     * @see [GetVehicleDirtLevel](https://docs.fivem.net/natives/?_0x8F17BC8BA08DA62B) für weitere Informationen.
     */
    get dirtLevel(): number {
        return GetVehicleDirtLevel(this.vehicle);
    }

    /**
     * Setzt den Dirtlevel des Fahrzeugs
     * @param dirtLevel als Zahl
     * @see [SetVehicleDirtLevel](https://docs.fivem.net/natives/?_0x79D3B596FE44EE8B) für weitere Informationen.
     */
    set dirtLevel(dirtLevel: number) {
        SetVehicleDirtLevel(this.vehicle, dirtLevel);
    }

    /**
     * Gibt den Zustand des Fahrzeugs zurück
     * @returns 1000 wenn er das Fahrzeug nicht bekommt oder das Leben nicht abfragen kann -
     * Minimum -4000 : Motor kaputt || < 0 : Motor fängt Feuer und bekommt schnell Schaden ||
     * < 300 : Motor ist am Rauchen und verliert Funktionalität || ca. 650 : Verliert Gas || < Maximum 1000 : Normalzustand
     * @see [GetVehicleEngineHealth](https://docs.fivem.net/natives/?_0xC45D23BAF168AAB8) für weitere Informationen.
     */
    get engineHealth(): number {
        return GetVehicleEngineHealth(this.vehicle);
    }

    /**
     * Gibt den Zustand des Fahrzeugs zurück
     * @param engineHealth Minimum -4000 : Motor kaputt || < 0 : Motor fängt Feuer und bekommt schnell Schaden ||
     * < 300 : Motor ist am Rauchen und verliert Funktionalität || ca. 650 : Verliert Gas || < Maximum 1000 : Normalzustand
     * @see [SetVehicleEngineHealth](https://docs.fivem.net/natives/?_0x45F6D8EEF34ABEF1) für weitere Informationen.
     */
    set engineHealth(engineHealth: number) {
        SetVehicleEngineHealth(this.vehicle, engineHealth);
    }

    /**
     * Gibt die maximale Bremsung des Fahrzeugs zurück
     * @returns die maximale Bremsung als Number
     * @see [GetVehicleMaxBraking](https://docs.fivem.net/natives/?_0xAD7E85FC227197C4) für weitere Informationen.
     */
    get maxBrake(): number {
        return GetVehicleMaxBraking(this.vehicle);
    }

    /**
     * Gibt die maximale Anzahl an Passengers zurück
     * @returns die maximale Anzahl an Passengers
     * @see [GetVehicleMaxNumberOfPassengers](https://docs.fivem.net/natives/?_0xA7C4F2C6E744A550) für weitere Informationen.
     */
    get maxPassengers(): number {
        return GetVehicleMaxNumberOfPassengers(this.vehicle);
    }

    /**
     * Gibt den PlateType zurück
     * @returns das Fahrzeug Plate Typ als {@link VEHICLEPLATETYPE}
     * @see [GetVehiclePlateType](https://docs.fivem.net/natives/?_0x9CCC9525BF2408E0) für weitere Informationen.
     */
    get plateTyp(): VEHICLEPLATETYPE {
        return GetVehiclePlateType(this.vehicle) as VEHICLEPLATETYPE;
    }
}