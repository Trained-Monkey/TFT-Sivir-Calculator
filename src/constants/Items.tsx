export enum ITEM_NAMES {

    // Sword Items
    BFSWORD = 'BFSword',
    DEATHBLADE = 'Deathblade',
    GIANTSLAYER = 'MadredsBloodrazor',
    INFINITYEDGE = 'InfinityEdge',
    GUNBLADE = 'HextechGunblade',
    SHOJIN = 'SpearOfShojin',
    EDGEOFNIGHT = 'GuardianAngel',
    BLOODTHIRSTER = 'Bloodthirster',
    ZEKES = 'ZekesHerald',

    // Bow
    BOW = 'RecurveBow',
    LASTWHISPER = 'LastWhisper',
    RUNAANS = 'RunaansHurricane',
    RAPIDFIRECANNON = 'RapidFireCannon',
    GUINSOO = 'GuinsoosRageblade',
    STATIKK = 'StatikkShiv',
    TITANS = 'TitansResolve',
    ZZROT = 'TitanicHydra',

    // Glove
    GLOVE = 'SparringGloves',
    GUARDBREAKER = 'PowerGauntlet',
    HANDOFJUSTICE = 'UnstableConcoction',
    JEWELEDGAUNTLET = 'JeweledGauntlet',
    SHROUD = 'Shroud',
    QUICKSILVER = 'Quicksilver',
    THIEFSGLOVES = 'ThiefsGloves',

    // Ornn
    TRIFORCE = 'OrnnInfinityForce',
    DEATHDANCE = 'OrnnDeathsDefiance',
    BLACKCLEAVER = 'OrnnObsidianCleaver',
    GOLDCOLLECTOR = 'OrnnTheCollector',
    SPIRITVISAGE = 'OrnnAnimaVisage',
    ETERNALWINTER = 'OrnnEternalWinter',
    MANAZANE = 'OrnnMuramana',
    RANDUINS = 'OrnnRanduinsSanctum',
    BLITZHOOK = 'OrnnRocketPropelledFist',
    COLLECTOR = 'OrnnTheCollector',
    ZHONYAS = 'OrnnZhonyasParadox',

    // Radiant
    RADIANT_DEATHBLADE = 'DeathbladeRadiant',
    RADIANT_GIANTSLAYER = 'GiantSlayerRadiant',
    RADIANT_INFINITYEDGE = 'InfinityEdgeRadiant',
    RADIANT_GUNBLADE = 'HextechGunbladeRadiant',
    RADIANT_SHOJIN = 'SpearOfShojinRadiant',
    RADIANT_EDGEOFNIGHT = 'GuardianAngelRadiant',
    RADIANT_BLOODTHIRSTER = 'BloodthirsterRadiant',
    RADIANT_ZEKES = 'ZekesHeraldRadiant',

    RADIANT_LASTWHISPER = 'LastWhisperRadiant',
    RADIANT_RUNAANS = 'RunaansHurricaneRadiant',
    RADIANT_RAPIDFIRECANNON = 'RapidFirecannonRadiant',
    RADIANT_GUINSOO = 'GuinsoosRagebladeRadiant',
    RADIANT_STATIKK = 'StatikkShivRadiant',
    RADIANT_TITANS = 'TitansResolveRadiant',
    RADIANT_ZZROT = 'ZzRotPortalRadiant',

    RADIANT_GUARDBREAKER = 'TrapClawRadiant',
    RADIANT_HANDOFJUSTICE = 'HandOfJusticeRadiant',
    RADIANT_JEWELEDGAUNTLET = 'JeweledGauntletRadiant',
    RADIANT_SHROUD = 'ShroudOfStillnessRadiant',
    RADIANT_QUICKSILVER = 'QuicksilverRadiant',
    RADIANT_THIEFSGLOVES = 'ThiefsGlovesRadiant',
}

export const ITEM_TYPE = [
    {
        name: 'Sword',
        items: [
            ITEM_NAMES.BFSWORD,
            ITEM_NAMES.DEATHBLADE,
            ITEM_NAMES.GIANTSLAYER,
            ITEM_NAMES.GUNBLADE,
            ITEM_NAMES.SHOJIN,
            ITEM_NAMES.EDGEOFNIGHT,
            ITEM_NAMES.BLOODTHIRSTER,
            ITEM_NAMES.ZEKES,
            ITEM_NAMES.INFINITYEDGE
        ]
    },
    {
        name: 'Bow',
        items: [
            ITEM_NAMES.BOW,
            ITEM_NAMES.GIANTSLAYER,
            ITEM_NAMES.RAPIDFIRECANNON,
            ITEM_NAMES.GUINSOO,
            ITEM_NAMES.STATIKK,
            ITEM_NAMES.TITANS,
            ITEM_NAMES.RUNAANS,
            ITEM_NAMES.ZZROT,
            ITEM_NAMES.LASTWHISPER
        ]
    },
    {
        name: 'Glove',
        items: [
            ITEM_NAMES.GLOVE,
            ITEM_NAMES.INFINITYEDGE,
            ITEM_NAMES.LASTWHISPER,
            ITEM_NAMES.JEWELEDGAUNTLET,
            ITEM_NAMES.HANDOFJUSTICE,
            ITEM_NAMES.SHROUD,
            ITEM_NAMES.QUICKSILVER,
            ITEM_NAMES.GUARDBREAKER,
            ITEM_NAMES.THIEFSGLOVES
        ]
    },
    {
        name: 'Ornn',
        items: [
            ITEM_NAMES.TRIFORCE,
            ITEM_NAMES.BLACKCLEAVER,
            ITEM_NAMES.COLLECTOR,
            ITEM_NAMES.ZHONYAS,
            ITEM_NAMES.RANDUINS,
            ITEM_NAMES.ETERNALWINTER,
            ITEM_NAMES.MANAZANE,
            ITEM_NAMES.BLITZHOOK,
            ITEM_NAMES.DEATHDANCE
        ]
    },
    {
        name: 'Radiant',
        items: [
            ITEM_NAMES.RADIANT_HANDOFJUSTICE,
            ITEM_NAMES.RADIANT_DEATHBLADE,
            ITEM_NAMES.RADIANT_GIANTSLAYER,
            ITEM_NAMES.RADIANT_GUNBLADE,
            ITEM_NAMES.RADIANT_SHOJIN,
            ITEM_NAMES.RADIANT_EDGEOFNIGHT,
            ITEM_NAMES.RADIANT_BLOODTHIRSTER,
            ITEM_NAMES.RADIANT_ZEKES,
            ITEM_NAMES.RADIANT_INFINITYEDGE
        ]
    },
    {
        name: '',
        items: [
            ITEM_NAMES.RADIANT_GUARDBREAKER,
            ITEM_NAMES.RADIANT_GIANTSLAYER,
            ITEM_NAMES.RADIANT_RAPIDFIRECANNON,
            ITEM_NAMES.RADIANT_GUINSOO,
            ITEM_NAMES.RADIANT_STATIKK,
            ITEM_NAMES.RADIANT_TITANS,
            ITEM_NAMES.RADIANT_RUNAANS,
            ITEM_NAMES.RADIANT_ZZROT,
            ITEM_NAMES.RADIANT_LASTWHISPER
        ]
    }
]

export const ITEM_SELECTABLE = [

    ITEM_NAMES.BFSWORD,
    ITEM_NAMES.DEATHBLADE,
    ITEM_NAMES.GIANTSLAYER,
    ITEM_NAMES.GUNBLADE,
    ITEM_NAMES.SHOJIN,
    ITEM_NAMES.EDGEOFNIGHT,
    ITEM_NAMES.BLOODTHIRSTER,
    ITEM_NAMES.ZEKES,
    ITEM_NAMES.INFINITYEDGE,

    // ITEM_NAMES.GIANTSLAYER,
    ITEM_NAMES.RUNAANS,
    ITEM_NAMES.LASTWHISPER,
    ITEM_NAMES.HANDOFJUSTICE,

    ITEM_NAMES.GUARDBREAKER,
    ITEM_NAMES.TRIFORCE,
    ITEM_NAMES.BLACKCLEAVER,
    ITEM_NAMES.COLLECTOR,

    ITEM_NAMES.RADIANT_HANDOFJUSTICE,
    ITEM_NAMES.RADIANT_DEATHBLADE,
    // ITEM_NAMES.RADIANT_GIANTSLAYER,
    ITEM_NAMES.RADIANT_GUNBLADE,
    ITEM_NAMES.RADIANT_SHOJIN,
    ITEM_NAMES.RADIANT_EDGEOFNIGHT,
    ITEM_NAMES.RADIANT_BLOODTHIRSTER,
    ITEM_NAMES.RADIANT_ZEKES,
    ITEM_NAMES.RADIANT_INFINITYEDGE,
    ITEM_NAMES.RADIANT_GUARDBREAKER,
    ITEM_NAMES.RADIANT_GIANTSLAYER,
    // ITEM_NAMES.RADIANT_TITANS,
    ITEM_NAMES.RADIANT_RUNAANS,
    ITEM_NAMES.RADIANT_LASTWHISPER,
    null
]

export const ITEM_MODIFIER = {
    [ITEM_NAMES.BFSWORD]: 0.1,
    [ITEM_NAMES.DEATHBLADE]: 0.66,
    [ITEM_NAMES.GUNBLADE]: 0.1,
    [ITEM_NAMES.SHOJIN]: 0.1,
    [ITEM_NAMES.EDGEOFNIGHT]: 0.1,
    [ITEM_NAMES.BLOODTHIRSTER]: 0.2,
    [ITEM_NAMES.ZEKES]: 0.1,
    [ITEM_NAMES.INFINITYEDGE]: 0.3,

    [ITEM_NAMES.GIANTSLAYER]: 0.3,
    [ITEM_NAMES.RUNAANS]: 0.2,
    [ITEM_NAMES.LASTWHISPER]: 0.1,
    [ITEM_NAMES.HANDOFJUSTICE]: 0.15,

    [ITEM_NAMES.GUARDBREAKER]: 0.2,

    [ITEM_NAMES.TRIFORCE]: 0.25,
    [ITEM_NAMES.BLACKCLEAVER]: 0.25,
    [ITEM_NAMES.COLLECTOR]: 0,
    [ITEM_NAMES.DEATHDANCE]: 0.1,

    [ITEM_NAMES.RADIANT_HANDOFJUSTICE]: 0.5,
    [ITEM_NAMES.RADIANT_DEATHBLADE]: 1.2,
    [ITEM_NAMES.RADIANT_GUNBLADE]: 0.1,
    [ITEM_NAMES.RADIANT_SHOJIN]: 0.1,
    [ITEM_NAMES.RADIANT_EDGEOFNIGHT]: 0.3,
    [ITEM_NAMES.RADIANT_BLOODTHIRSTER]: 0.4,
    [ITEM_NAMES.RADIANT_ZEKES]: 0.1,
    [ITEM_NAMES.RADIANT_INFINITYEDGE]: 0.55,
    [ITEM_NAMES.RADIANT_GUARDBREAKER]: 0.4,
    [ITEM_NAMES.RADIANT_GIANTSLAYER]: 0.5,
    [ITEM_NAMES.RADIANT_TITANS]: 0,
    [ITEM_NAMES.RADIANT_RUNAANS]: 0.2,
    [ITEM_NAMES.RADIANT_LASTWHISPER]: 0.35
}