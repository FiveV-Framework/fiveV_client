import { HUDCOMPONENT } from "../@types/player";

/**
 * Screen effect names
 */
export enum ScreenEffect {
    SwitchHudIn = "SwitchHUDIn",
    SwitchHudOut = "SwitchHUDOut",
    FocusIn = "FocusIn",
    FocusOut = "FocusOut",
    MinigameEndNeutral = "MinigameEndNeutral",
    MinigameEndTrevor = "MinigameEndTrevor",
    MinigameEndFranklin = "MinigameEndFranklin",
    MinigameEndMichael = "MinigameEndMichael",
    MinigameTransitionOut = "MinigameTransitionOut",
    MinigameTransitionIn = "MinigameTransitionIn",
    SwitchShortNeutralIn = "SwitchShortNeutralIn",
    SwitchShortFranklinIn = "SwitchShortFranklinIn",
    SwitchShortTrevorIn = "SwitchShortTrevorIn",
    SwitchShortMichaelIn = "SwitchShortMichaelIn",
    SwitchOpenMichaelIn = "SwitchOpenMichaelIn",
    SwitchOpenFranklinIn = "SwitchOpenFranklinIn",
    SwitchOpenTrevorIn = "SwitchOpenTrevorIn",
    SwitchHudMichaelOut = "SwitchHUDMichaelOut",
    SwitchHudFranklinOut = "SwitchHUDFranklinOut",
    SwitchHudTrevorOut = "SwitchHUDTrevorOut",
    SwitchShortFranklinMid = "SwitchShortFranklinMid",
    SwitchShortMichaelMid = "SwitchShortMichaelMid",
    SwitchShortTrevorMid = "SwitchShortTrevorMid",
    DeathFailOut = "DeathFailOut",
    CamPushInNeutral = "CamPushInNeutral",
    CamPushInFranklin = "CamPushInFranklin",
    CamPushInMichael = "CamPushInMichael",
    CamPushInTrevor = "CamPushInTrevor",
    SwitchSceneFranklin = "SwitchSceneFranklin",
    SwitchSceneTrevor = "SwitchSceneTrevor",
    SwitchSceneMichael = "SwitchSceneMichael",
    SwitchSceneNeutral = "SwitchSceneNeutral",
    MpCelebWin = "MP_Celeb_Win",
    MpCelebWinOut = "MP_Celeb_Win_Out",
    MpCelebLose = "MP_Celeb_Lose",
    MpCelebLoseOut = "MP_Celeb_Lose_Out",
    DeathFailNeutralIn = "DeathFailNeutralIn",
    DeathFailMpDark = "DeathFailMPDark",
    DeathFailMpIn = "DeathFailMPIn",
    MpCelebPreloadFade = "MP_Celeb_Preload_Fade",
    PeyoteEndOut = "PeyoteEndOut",
    PeyoteEndIn = "PeyoteEndIn",
    PeyoteIn = "PeyoteIn",
    PeyoteOut = "PeyoteOut",
    MpRaceCrash = "MP_race_crash",
    SuccessFranklin = "SuccessFranklin",
    SuccessTrevor = "SuccessTrevor",
    SuccessMichael = "SuccessMichael",
    DrugsMichaelAliensFightIn = "DrugsMichaelAliensFightIn",
    DrugsMichaelAliensFight = "DrugsMichaelAliensFight",
    DrugsMichaelAliensFightOut = "DrugsMichaelAliensFightOut",
    DrugsTrevorClownsFightIn = "DrugsTrevorClownsFightIn",
    DrugsTrevorClownsFight = "DrugsTrevorClownsFight",
    DrugsTrevorClownsFightOut = "DrugsTrevorClownsFightOut",
    HeistCelebPass = "HeistCelebPass",
    HeistCelebPassBw = "HeistCelebPassBW",
    HeistCelebEnd = "HeistCelebEnd",
    HeistCelebToast = "HeistCelebToast",
    MenuMgHeistIn = "MenuMGHeistIn",
    MenuMgTournamentIn = "MenuMGTournamentIn",
    MenuMgSelectionIn = "MenuMGSelectionIn",
    ChopVision = "ChopVision",
    DmtFlightIntro = "DMT_flight_intro",
    DmtFlight = "DMT_flight",
    DrugsDrivingIn = "DrugsDrivingIn",
    DrugsDrivingOut = "DrugsDrivingOut",
    SwitchOpenNeutralFib5 = "SwitchOpenNeutralFIB5",
    HeistLocate = "HeistLocate",
    MpJobLoad = "MP_job_load",
    RaceTurbo = "RaceTurbo",
    MpIntroLogo = "MP_intro_logo",
    HeistTripSkipFade = "HeistTripSkipFade",
    MenuMgHeistOut = "MenuMGHeistOut",
    MpCoronaSwitch = "MP_corona_switch",
    MenuMgSelectionTint = "MenuMGSelectionTint",
    SuccessNeutral = "SuccessNeutral",
    ExplosionJosh3 = "ExplosionJosh3",
    SniperOverlay = "SniperOverlay",
    RampageOut = "RampageOut",
    Rampage = "Rampage",
    DontTazemeBro = "Dont_tazeme_bro"
}

/**
 * Static class for UI-related functions
 */
export class FiveVUI {

    // ==================== NOTIFICATIONS ====================

    /**
     * Shows a basic notification
     * @param message The message to display
     * @param blink Whether the notification should blink
     * @see [SetNotificationTextEntry](https://docs.fivem.net/natives/?_0x202709F4C58A0424) for more information.
     */
    public static showNotification(message: string, blink: boolean = false): void {
        SetNotificationTextEntry("STRING");
        AddTextComponentString(message);
        DrawNotification(blink, false);
    }

    /**
     * Shows an advanced notification with title and subtitle
     * @param title The notification title
     * @param subtitle The notification subtitle
     * @param message The notification message
     * @param icon The notification icon texture dictionary
     * @param iconType The notification icon texture name
     * @param backgroundColor The background color (0-7)
     */
    public static showAdvancedNotification(
        title: string,
        subtitle: string,
        message: string,
        icon: string = "CHAR_DEFAULT",
        iconType: string = "CHAR_DEFAULT",
        backgroundColor: number = 0
    ): void {
        SetNotificationTextEntry("STRING");
        AddTextComponentString(message);
        SetNotificationBackgroundColor(backgroundColor);
        SetNotificationMessage(icon, iconType, false, 4, title, subtitle);
        DrawNotification(false, true);
    }

    // ==================== HELP TEXT ====================

    /**
     * Shows a help text message
     * @param message The help text message
     * @param duration The duration in milliseconds (-1 for one frame)
     * @see [BeginTextCommandDisplayHelp](https://docs.fivem.net/natives/?_0x8509B634FBE7DA11) for more information.
     */
    public static showHelpText(message: string, duration: number = -1): void {
        BeginTextCommandDisplayHelp("STRING");
        AddTextComponentString(message);
        EndTextCommandDisplayHelp(0, false, true, duration);
    }

    /**
     * Clears all help text
     * @see [ClearAllHelpMessages](https://docs.fivem.net/natives/?_0x6178F68A87A4D3A0) for more information.
     */
    public static clearHelpText(): void {
        ClearAllHelpMessages();
    }

    // ==================== SUBTITLE ====================

    /**
     * Shows a subtitle message
     * @param message The subtitle message
     * @param duration The duration in milliseconds
     * @see [BeginTextCommandPrint](https://docs.fivem.net/natives/?_0xB87A37EEB7FAA67D) for more information.
     */
    public static showSubtitle(message: string, duration: number = 2500): void {
        BeginTextCommandPrint("STRING");
        AddTextComponentString(message);
        EndTextCommandPrint(duration, true);
    }

    /**
     * Clears the current subtitle
     * @see [ClearPrints](https://docs.fivem.net/natives/?_0xCC33FA791322B9D9) for more information.
     */
    public static clearSubtitle(): void {
        ClearPrints();
    }

    // ==================== HUD ====================

    /**
     * Hides a HUD component for this frame
     * @param component The HUD component to hide
     * @see [HideHudComponentThisFrame](https://docs.fivem.net/natives/?_0x6806C51AD12B83B8) for more information.
     */
    public static hideHudComponent(component: HUDCOMPONENT | number): void {
        HideHudComponentThisFrame(component);
    }

    /**
     * Shows a HUD component for this frame
     * @param component The HUD component to show
     * @see [ShowHudComponentThisFrame](https://docs.fivem.net/natives/?_0x0B4DF1FA60C0E664) for more information.
     */
    public static showHudComponent(component: HUDCOMPONENT | number): void {
        ShowHudComponentThisFrame(component);
    }

    /**
     * Hides multiple HUD components for this frame
     * @param components The HUD components to hide
     */
    public static hideHudComponents(components: (HUDCOMPONENT | number)[]): void {
        for (const component of components) {
            HideHudComponentThisFrame(component);
        }
    }

    /**
     * Hides the entire HUD and radar
     * @see [DisplayHud](https://docs.fivem.net/natives/?_0xA6294919E56FF02A) for more information.
     */
    public static hideHud(): void {
        DisplayHud(false);
    }

    /**
     * Shows the entire HUD and radar
     * @see [DisplayHud](https://docs.fivem.net/natives/?_0xA6294919E56FF02A) for more information.
     */
    public static showHud(): void {
        DisplayHud(true);
    }

    /**
     * Returns whether the HUD is visible
     * @returns true if visible, false otherwise
     * @see [IsHudHidden](https://docs.fivem.net/natives/?_0xA86478C6958735C5) for more information.
     */
    public static isHudVisible(): boolean {
        return !IsHudHidden();
    }

    // ==================== RADAR/MINIMAP ====================

    /**
     * Hides the radar/minimap
     * @see [DisplayRadar](https://docs.fivem.net/natives/?_0xA0EBB943C300E693) for more information.
     */
    public static hideRadar(): void {
        DisplayRadar(false);
    }

    /**
     * Shows the radar/minimap
     * @see [DisplayRadar](https://docs.fivem.net/natives/?_0xA0EBB943C300E693) for more information.
     */
    public static showRadar(): void {
        DisplayRadar(true);
    }

    /**
     * Returns whether the radar is visible
     * @returns true if visible, false otherwise
     * @see [IsRadarHidden](https://docs.fivem.net/natives/?_0xAF754F20EB5CD51A) for more information.
     */
    public static isRadarVisible(): boolean {
        return !IsRadarHidden();
    }

    /**
     * Sets the radar to big map mode
     * @param bigMap true for big map, false for small
     * @param fullMap true for full map, false for normal
     * @see [SetBigmapActive](https://docs.fivem.net/natives/?_0x231C8F89D0539D8F) for more information.
     */
    public static setBigMap(bigMap: boolean, fullMap: boolean = false): void {
        SetBigmapActive(bigMap, fullMap);
    }

    /**
     * Sets the radar zoom level
     * @param zoom The zoom level (0-200)
     * @see [SetRadarZoom](https://docs.fivem.net/natives/?_0x096EF57A0C999BBA) for more information.
     */
    public static setRadarZoom(zoom: number): void {
        SetRadarZoom(zoom);
    }

    // ==================== SCREEN EFFECTS ====================

    /**
     * Starts a screen effect
     * @param effect The effect name as {@link ScreenEffect} or string
     * @param duration The duration in milliseconds (0 for looped)
     * @param looped Whether the effect should loop
     * @see [StartScreenEffect](https://docs.fivem.net/natives/?_0x2206BF9A37B7F724) for more information.
     */
    public static startScreenEffect(effect: ScreenEffect | string, duration: number = 0, looped: boolean = false): void {
        StartScreenEffect(effect, duration, looped);
    }

    /**
     * Stops a specific screen effect
     * @param effect The effect name to stop
     * @see [StopScreenEffect](https://docs.fivem.net/natives/?_0x068E835A1D0DC0E3) for more information.
     */
    public static stopScreenEffect(effect: ScreenEffect | string): void {
        StopScreenEffect(effect);
    }

    /**
     * Stops all screen effects
     * @see [StopAllScreenEffects](https://docs.fivem.net/natives/?_0xB4EDDC19532BFB85) for more information.
     */
    public static stopAllScreenEffects(): void {
        StopAllScreenEffects();
    }

    /**
     * Returns whether a screen effect is running
     * @param effect The effect name to check
     * @returns true if running, false otherwise
     * @see [GetScreenEffectIsActive](https://docs.fivem.net/natives/?_0x36AD3E690DA5ACEB) for more information.
     */
    public static isScreenEffectActive(effect: ScreenEffect | string): boolean {
        return GetScreenEffectIsActive(effect);
    }

    // ==================== LOADING SPINNER ====================

    /**
     * Shows a loading spinner
     * @param text The spinner text
     * @param spinnerType The spinner type (0-5)
     * @see [BeginTextCommandBusyspinnerOn](https://docs.fivem.net/natives/?_0xABA17D7CE615ADBF) for more information.
     */
    public static showLoadingSpinner(text: string, spinnerType: number = 0): void {
        BeginTextCommandBusyspinnerOn("STRING");
        AddTextComponentString(text);
        EndTextCommandBusyspinnerOn(spinnerType);
    }

    /**
     * Hides the loading spinner
     * @see [BusyspinnerOff](https://docs.fivem.net/natives/?_0x10D373323E5B9C0D) for more information.
     */
    public static hideLoadingSpinner(): void {
        BusyspinnerOff();
    }

    /**
     * Returns whether the loading spinner is visible
     * @returns true if visible, false otherwise
     * @see [BusyspinnerIsOn](https://docs.fivem.net/natives/?_0xD422FCC5F239A915) for more information.
     */
    public static isLoadingSpinnerVisible(): boolean {
        return BusyspinnerIsOn();
    }

    // ==================== SCREEN ====================

    /**
     * Returns the screen resolution
     * @returns Object with width and height
     * @see [GetActiveScreenResolution](https://docs.fivem.net/natives/?_0x873C9F3104101DD3) for more information.
     */
    public static getScreenResolution(): { width: number; height: number } {
        const [width, height] = GetActiveScreenResolution();
        return { width, height };
    }

    /**
     * Returns the screen aspect ratio
     * @returns The aspect ratio
     * @see [GetAspectRatio](https://docs.fivem.net/natives/?_0xF1307EF624A80D87) for more information.
     */
    public static getAspectRatio(): number {
        return GetAspectRatio(false);
    }

    /**
     * Returns whether the game window is focused
     * @returns true if focused, false otherwise
     * @see [GetIsHidef](https://docs.fivem.net/natives/?_0x84D498018A506C7A) for more information.
     */
    public static isWindowFocused(): boolean {
        return GetIsHidef();
    }

    // ==================== FADE ====================

    /**
     * Fades the screen in
     * @param duration The duration in milliseconds
     * @see [DoScreenFadeIn](https://docs.fivem.net/natives/?_0xD4E8E24955024033) for more information.
     */
    public static fadeIn(duration: number = 500): void {
        DoScreenFadeIn(duration);
    }

    /**
     * Fades the screen out
     * @param duration The duration in milliseconds
     * @see [DoScreenFadeOut](https://docs.fivem.net/natives/?_0x891B5B39AC6302AF) for more information.
     */
    public static fadeOut(duration: number = 500): void {
        DoScreenFadeOut(duration);
    }

    /**
     * Returns whether the screen is fading in
     * @returns true if fading in, false otherwise
     * @see [IsScreenFadingIn](https://docs.fivem.net/natives/?_0x5C544BC6C57AC575) for more information.
     */
    public static isFadingIn(): boolean {
        return IsScreenFadingIn();
    }

    /**
     * Returns whether the screen is fading out
     * @returns true if fading out, false otherwise
     * @see [IsScreenFadingOut](https://docs.fivem.net/natives/?_0x797AC7CB535BA28F) for more information.
     */
    public static isFadingOut(): boolean {
        return IsScreenFadingOut();
    }

    /**
     * Returns whether the screen is faded in
     * @returns true if faded in, false otherwise
     * @see [IsScreenFadedIn](https://docs.fivem.net/natives/?_0x5A859503B0C08678) for more information.
     */
    public static isFadedIn(): boolean {
        return IsScreenFadedIn();
    }

    /**
     * Returns whether the screen is faded out
     * @returns true if faded out, false otherwise
     * @see [IsScreenFadedOut](https://docs.fivem.net/natives/?_0xB16FCE9DDC7BA182) for more information.
     */
    public static isFadedOut(): boolean {
        return IsScreenFadedOut();
    }
}
