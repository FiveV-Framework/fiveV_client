import {FiveVWeaponList} from "../utils/weapons";
import {fiveVWeapon, fiveVWeaponComponent} from "../@types/weapon";

export class FiveVWeapon {

    /**
     * Gibt eine Liste aller GTA Standartwaffen zurück
     * @returns Die Waffen als {@link fiveVWeapon} Array
     */
    static get allGTAWeapons(): fiveVWeapon[] {
        return FiveVWeaponList;
    }

    /**
     * Gibt die Hashes aller Waffen in der Liste zurück
     * @returns Ein Array von Waffenhashes
     */
    static getAllWeaponHashes(): string[] {
        return FiveVWeaponList.map(weapon => weapon.Hash);
    }

    /**
     * Gibt die Hash-Keys aller Waffen in der Liste zurück
     * @returns Ein Array von Waffenhash-keys
     */
    static getAllWeaponHashKeys(): string[] {
        return FiveVWeaponList.map(weapon => weapon.Model_Hash_Key);
    }

    /**
     * Gibt die Beschreibungen aller Waffen in der Liste zurück
     * @returns Ein Array von Waffenbeschreibungen
     */
    static getAllWeaponDescriptions(): string[] {
        return FiveVWeaponList.map(weapon => weapon.Description);
    }

    /**
     * Gibt die Komponenten aller Waffen in der Liste zurück
     * @returns Ein Array von Komponentenarrays
     */
    static getAllWeaponComponents(): fiveVWeaponComponent[][] {
        return FiveVWeaponList.map(weapon => weapon.Components);
    }

    /**
     * Gibt den Hash der als parameter eingegebenen Waffe zurück
     * @param weaponName der Waffenname (bsp: Unarmed, Combat MG)
     * @returns Der Waffenhash(z.B.: WEAPON_UNARMED)
     */
    static weaponHash(weaponName: string): string | null {
        const weapon = FiveVWeaponList.find(w => w.name === weaponName);
        return weapon ? weapon.Hash : null;
    }

    /**
     * Gibt den Hash-Key der als Parameter eingegebenen Waffe zurück
     * @param weaponName der Waffenname
     * @returns Der Waffenhash-key oder null
     */
    static weaponHashKey(weaponName: string): string | null {
        const weapon = FiveVWeaponList.find(w => w.name === weaponName);
        return weapon ? weapon.Model_Hash_Key : null;
    }

    /**
     * Gibt die Beschreibung der als Parameter eingegebenen Waffe zurück
     * @param weaponName der Waffenname
     * @returns Die Waffenbeschreibung oder null
     */
    static weaponDescription(weaponName: string): string | null {
        const weapon = FiveVWeaponList.find(w => w.name === weaponName);
        return weapon ? weapon.Description : null;
    }

    /**
     * Gibt die Komponenten der als Parameter eingegebenen Waffe zurück
     * @param weaponName der Waffenname
     * @returns Ein Array von Komponenten oder null
     */
    static weaponComponents(weaponName: string): fiveVWeaponComponent[] | null {
        const weapon = FiveVWeaponList.find(w => w.name === weaponName);
        return weapon ? weapon.Components : null;
    }
}