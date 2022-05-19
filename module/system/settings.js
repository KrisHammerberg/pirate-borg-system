import { AllowedCharacterClassesDialog } from "../dialog/allowed-character-classes-dialog.js";

export const registerSystemSettings = () => {
  /**
   * Track the system version upon which point a migration was last applied.
   */
  game.settings.register("pirateborg", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: "",
  });

  /**
   * Track the last help dialog
   */
  game.settings.register("pirateborg", "systemHelpDialogVersion", {
    name: "System Help Dialog Version",
    scope: "client",
    config: false,
    type: String,
    default: "",
  });

  /** Whether to keep track of carrying capacity */
  game.settings.register("pirateborg", "trackCarryingCapacity", {
    name: "PB.SettingsApplyOvercapacityPenalty",
    hint: "PB.SettingsApplyOvercapacityPenaltyHint",
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  /** Whether to keep track of ranged weapon ammo */
  game.settings.register("pirateborg", "trackAmmo", {
    name: "PB.SettingsTrackAmmo",
    hint: "PB.SettingsTrackAmmoHint",
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  /** The allowed classes menu */
  game.settings.registerMenu("pirateborg", "EditAllowedCharacterGeneratorClassesMenu", {
    name: "PB.EditAllowedCharacterGeneratorClassesMenu",
    hint: "PB.EditAllowedCharacterGeneratorClassesMenuHint",
    label: "PB.EditAllowedCharacterGeneratorClassesMenuButtonLabel",
    icon: "fas fa-cog",
    type: AllowedCharacterClassesDialog,
    restricted: true,
  });

  /** The allowed classes for Character Generator */
  game.settings.register("pirateborg", "allowedCharacterGeneratorClasses", {
    name: "",
    default: {},
    type: Object,
    scope: "world",
    config: false,
  });

  /** The client Character Generator selected classes  */
  game.settings.register("pirateborg", "lastCharacterGeneratorSelection", {
    name: "",
    default: [],
    type: Array,
    scope: "client",
    config: false,
  });
};

export const trackCarryingCapacity = () => {
  return game.settings.get("pirateborg", "trackCarryingCapacity");
};

export const trackAmmo = () => {
  return game.settings.get("pirateborg", "trackAmmo");
};

export const isCharacterGeneratorClassAllowed = (classPack) => {
  const allowedCharacterGeneratorClasses = game.settings.get("pirateborg", "allowedCharacterGeneratorClasses");
  return typeof allowedCharacterGeneratorClasses[classPack] === "undefined" ? true : !!allowedCharacterGeneratorClasses[classPack];
};

export const setAllowedCharacterGeneratorClasses = (allowedCharacterGeneratorClasses) => {
  return game.settings.set("pirateborg", "allowedCharacterGeneratorClasses", allowedCharacterGeneratorClasses);
};

export const getLastCharacterGeneratorSelection = () => {
  return game.settings.get("pirateborg", "lastCharacterGeneratorSelection");
};

export const setLastCharacterGeneratorSelection = (lastCharacterGeneratorSelection) => {
  return game.settings.set("pirateborg", "lastCharacterGeneratorSelection", lastCharacterGeneratorSelection);
};

export const getSystemMigrationVersion = () => {
  return game.settings.get("pirateborg", "systemMigrationVersion");
};

export const setSystemMigrationVersion = (systemMigrationVersion) => {
  return game.settings.set("pirateborg", "systemMigrationVersion", systemMigrationVersion);
};

export const getSystemHelpDialogVersion = () => {
  return game.settings.get("pirateborg", "systemHelpDialogVersion");
};

export const setSystemHelpDialogVersion = (systemHelpDialogVersion) => {
  return game.settings.set("pirateborg", "systemHelpDialogVersion", systemHelpDialogVersion);
};
