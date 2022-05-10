// Namespace Configuration Values
export const PB = {};

PB.abilities = {
  agility: "PB.AbilityAgility",
  presence: "PB.AbilityPresence",
  strength: "PB.AbilityStrength",
  toughness: "PB.AbilityToughness",
  spirit: "PB.AbilitySpirit",
};

PB.armorTiers = {
  0: {
    key: "PB.ArmorTierNone",
    damageReductionDie: "1d0",
    agilityModifier: 0,
    defenseModifier: 0,
  },
  1: {
    key: "PB.ArmorTierLight",
    damageReductionDie: "1d2",
    agilityModifier: 0,
    defenseModifier: 0,
  },
  2: {
    key: "PB.ArmorTierMedium",
    damageReductionDie: "1d4",
    agilityModifier: 2,
    defenseModifier: 2,
  },
  3: {
    key: "PB.ArmorTierHeavy",
    damageReductionDie: "1d6",
    agilityModifier: 4,
    defenseModifier: 2,
  },
};

PB.flagScope = "pirateborg"; // must match system name

PB.flags = {
  ATTACK_DR: "attackDR",
  DEFEND_DR: "defendDR",
  INCOMING_ATTACK: "incomingAttack",
  TARGET_ARMOR: "targetArmor",
};

PB.premiumModuleName = "pirateborg";

PB.handed = {
  1: "PB.HandedOne",
  2: "PB.HandedTwo",
};

PB.itemTypes = {
  ammo: "ammo",
  armor: "armor",
  background: "background",
  class: "class",
  container: "container",
  feature: "feature",
  hat: "hat",
  invokable: "invokable",
  misc: "misc",
  weapon: "weapon",
  cargo: "cargo",
  armament: "armament",
};

PB.itemTypeKeys = {
  ammo: "PB.ItemTypeAmmo",
  armor: "PB.ItemTypeArmor",
  background: "PB.ItemTypeBackground",
  class: "PB.ItemTypeClass",
  container: "PB.ItemTypeContainer",
  feature: "PB.ItemTypeFeature",
  hat: "PB.ItemTypeHat",
  invokable: "PB.ItemTypeInvokable",
  misc: "PB.ItemTypeMisc",
  weapon: "PB.ItemTypeWeapon",
  cargo: "PB.ItemTypeCargo",
  armament: "PB.ItemTypeArmament",  
};

// these Item types are "equipment"
PB.itemEquipmentTypes = [
  PB.itemTypes.ammo,
  PB.itemTypes.armor,
  PB.itemTypes.container,
  PB.itemTypes.misc,
  PB.itemTypes.invokable,
  PB.itemTypes.hat,
  PB.itemTypes.weapon,
];

PB.allowedContainerItemTypes = [PB.itemTypes.ammo, PB.itemTypes.armor, PB.itemTypes.misc, PB.itemTypes.invokable, PB.itemTypes.hat, PB.itemTypes.weapon];

PB.equippableItemTypes = [PB.itemTypes.armor, PB.itemTypes.hat, PB.itemTypes.weapon];

PB.droppableItemTypes = [PB.itemTypes.container];

PB.plusMinusItemTypes = [PB.itemTypes.ammo, PB.itemTypes.misc, PB.itemTypes.feature];

PB.weaponTypes = {
  melee: "PB.WeaponTypeMelee",
  ranged: "PB.WeaponTypeRanged",
};

PB.armamentTypes = {
  "small-arm": "PB.ArmamentTypeSmallRam",
  "broadside": "PB.ArmamentTypeBroadside",
  "ram": "PB.ArmamentTypeRam",
};

// Config variables for the Scvmfactory character generator
PB.scvmFactory = {
  characterCreationPack: "pirateborg.rolls-character-creation",

  firstNamesPack: "pirateborg.rolls-character-creation;First Names",
  nickNamesPack: "pirateborg.rolls-character-creation;Nicknames",
  lastNamesPack: "pirateborg.rolls-character-creation;Last Names",

  armorsRollTable: "pirateborg.rolls-character-creation;d10 Starting clothing & armor",
  weaponsRollTable: "pirateborg.rolls-character-creation;d10 Starting weapons",
  hatsRollTable: "pirateborg.rolls-character-creation;d12 Starting hats",
  arcaneRitualsRollTable: "pirateborg.rolls-character-creation;d20 Arcane rituals",
  ancientRelicsRollTable: "pirateborg.rolls-character-creation;d20 Ancient relics",

  // compendium;table;amount
  baseTables: [
    "pirateborg.rolls-character-creation;d100 Backgrounds",
    "pirateborg.rolls-character-creation;d6 Container",
    "pirateborg.rolls-character-creation;d12 Cheap gear",
    "pirateborg.rolls-character-creation;d12 Fancy gear",
    "pirateborg.rolls-character-creation;d20 Distinctive Flaws",
    "pirateborg.rolls-character-creation;d20 Physical Ailments",
    "pirateborg.rolls-character-creation;d20 Idiosyncrasies",
    "pirateborg.rolls-character-creation;d20 Unfortunate Incidents & Conditions",
    "pirateborg.rolls-character-creation;d100 Thing of Importance",
  ],
};
