import {getPretenders} from './pretenders';
import {putPretendersToNations} from './nationsPretenders';
import {adjustPretenders} from './adjustPretenders';

export function getNations() {
  const nationsData = {
    0:   { era: null, label: "Any nation",
      realms: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      cheapgods20: [],
      cheapgods40: []},
    5:   { era: 0, label: "EA Arcoscephale - Golden Era",
      realms: [3],
      cheapgods20: [1343/*Titan of Love*/, 1230/*Forge Lord*/, 602/*Titan of Heaven*/, 600 /*Titan of War and Wisdom*/, 2783/*Drakon*/, 3053 /*Grand Hierophant*/],
      cheapgods40: []},
    6:   { era: 0, label: "EA Ermor - New Faith",
      realms: [3],
      cheapgods20: [2463/*Statue of War*/, 1343/*Titan of Love*/, 874 /*Divine Emperor*/],
      cheapgods40: []},
    7:   { era: 0, label: "EA Ulm - Enigma of Steel", heat: -1,
      realms: [1, 2],
      cheapgods20: [2234/*Irminsul*/, 1340/*Tiwaz of War*/, 1370/*Volla of the Bountiful Forest*/, 606/*Great Mother*/, 1230/*Forge Lord*/, 266/*Dragon(N)*/],
      cheapgods40: []},
    8:   { era: 0, label: "EA Marverni - Time of Druids",
      realms: [2],
      cheapgods20: [],
      cheapgods40: []},
    9:   { era: 0, label: "EA Sauromatia - Amazon Queens",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    10:  { era: 0, label: "EA T’ien Ch’i - Spring and Autumn",
      realms: [4],
      cheapgods20: [],
      cheapgods40: []},
    11:  { era: 0, label: "EA Machaka - Lion Kings", heat: 2,
      realms: [7],
      cheapgods20: [],
      cheapgods40: []},
    12:  { era: 0, label: "EA Mictlan - Reign of Blood", heat: 1, blessF: 1, blessB: 2,
      realms: [6],
      cheapgods20: [],
      cheapgods40: []},
    13:  { era: 0, label: "EA Abysia - Children of Flame", heat: 3, blessF: 2,
      realms: [7],
      cheapgods20: [],
      cheapgods40: []},
    14:  { era: 0, label: "EA Caelum - Eagle Kings", heat: -2,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    15:  { era: 0, label: "EA C’tis - Lizard Kings", heat: 2,
      realms: [7],
      cheapgods20: [],
      cheapgods40: []},
    16:  { era: 0, label: "EA Pangaea - Age of Revelry",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    17:  { era: 0, label: "EA Agartha - Pale Ones", blessE: 2,
      realms: [10],
      cheapgods20: [],
      cheapgods40: []},
    18:  { era: 0, label: "EA Tir na n'Og - Land of the Ever Young",
      realms: [2],
      cheapgods20: [],
      cheapgods40: []},
    19:  { era: 0, label: "EA Fomoria - The Cursed Ones",
      realms: [2],
      cheapgods20: [],
      cheapgods40: []},
    20:  { era: 0, label: "EA Vanheim - Age of Vanir", heat: -1,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    21:  { era: 0, label: "EA Helheim - Dusk and Death", heat: -1,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    22:  { era: 0, label: "EA Niefelheim - Sons of Winter", heat: -3,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    24:  { era: 0, label: "EA Rus - Sons of Heaven", heat: -2,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    25:  { era: 0, label: "EA Kailasa - Rise of the Ape Kings", heat: 2,
      realms: [8],
      cheapgods20: [],
      cheapgods40: []},
    26:  { era: 0, label: "EA Lanka - Land of Demons", heat: 2,
      realms: [8],
      cheapgods20: [],
      cheapgods40: []},
    27:  { era: 0, label: "EA Yomi - Oni Kings",
      realms: [4],
      cheapgods20: [],
      cheapgods40: []},
    28:  { era: 0, label: "EA Hinnom - Sons of the Fallen", heat: 2,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    29:  { era: 0, label: "EA Ur - The First City", heat: 1,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    30:  { era: 0, label: "EA Berytos - Phoenix Empire", heat: 1,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    31:  { era: 0, label: "EA Xibalba - Vigil of the Sun", heat: 1,
      realms: [6],
      cheapgods20: [],
      cheapgods40: []},
    36:  { era: 0, label: "EA Atlantis - Emergence of the Deep Ones",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    37:  { era: 0, label: "EA R’lyeh - Time of Aboleths",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    38:  { era: 0, label: "EA Pelagia - Pearl Kings",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    39:  { era: 0, label: "EA Oceania - Coming of the Capricorns",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    40:  { era: 0, label: "EA Therodos - Telkhine Spectre",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    43:  { era: 1, label: "MA Arcoscephale - The Old Kingdom",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    44:  { era: 1, label: "MA Ermor - Ashen Empire", growth: -3,
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    45:  { era: 1, label: "MA Sceleria - Reformed Empire",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    46:  { era: 1, label: "MA Pythium - Emerald Empire",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    47:  { era: 1, label: "MA Man - Tower of Avalon",
      realms: [2],
      cheapgods20: [],
      cheapgods40: []},
    48:  { era: 1, label: "MA Eriu - Last of the Tuatha",
      realms: [2],
      cheapgods20: [],
      cheapgods40: []},
    49:  { era: 1, label: "MA Ulm - Forges of Ulm",
      realms: [1, 2],
      cheapgods20: [],
      cheapgods40: []},
    50:  { era: 1, label: "MA Marignon - Fiery Justice", blessF: 2, blessS: 2,
      realms: [2, 3],
      cheapgods20: [],
      cheapgods40: []},
    51:  { era: 1, label: "MA Mictlan - Reign of the Lawgiver", heat: 1, blessA: 1, blessN: 2,
      realms: [6],
      cheapgods20: [],
      cheapgods40: []},
    52:  { era: 1, label: "MA T’ien Ch’i - Imperial Bureaucracy",
      realms: [4],
      cheapgods20: [],
      cheapgods40: []},
    53:  { era: 1, label: "MA Machaka - Reign of Sorcerors", heat: 2,
      realms: [7],
      cheapgods20: [],
      cheapgods40: []},
    54:  { era: 1, label: "MA Agartha - Golem Cult", blessE: 1,
      realms: [10],
      cheapgods20: [],
      cheapgods40: []},
    55:  { era: 1, label: "MA Abysia - Blood and Fire", heat: 3, blessF: 1,
      realms: [7],
      cheapgods20: [],
      cheapgods40: []},
    56:  { era: 1, label: "MA Caelum - Reign of the Seraphim", heat: -3,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    57:  { era: 1, label: "MA C’tis - Miasma", heat: 2,
      realms: [7],
      cheapgods20: [],
      cheapgods40: []},
    58:  { era: 1, label: "MA Pangaea - Age of Bronze",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    59:  { era: 1, label: "MA Asphodel - Carrion Woods",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    60:  { era: 1, label: "MA Vanheim - Arrival of Man", heat: -1,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    61:  { era: 1, label: "MA Jotunheim - Iron Woods", heat: -2,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    62:  { era: 1, label: "MA Vanarus - Land of the Chuds", heat: -2,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    63:  { era: 1, label: "MA Bandar Log - Land of the Apes", heat: 2,
      realms: [8],
      cheapgods20: [],
      cheapgods40: []},
    64:  { era: 1, label: "MA Shinuyama - Land of the Bakemono",
      realms: [4],
      cheapgods20: [],
      cheapgods40: []},
    65:  { era: 1, label: "MA Ashdod - Reign of the Anakim", heat: 2,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    66:  { era: 1, label: "MA Uruk - City States", heat: 1,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    67:  { era: 1, label: "MA Nazca - Kingdom of the Sun", heat: -1,
      realms: [6],
      cheapgods20: [],
      cheapgods40: []},
    68:  { era: 1, label: "MA Xibalba - Flooded Caves", heat: 1,
      realms: [6],
      cheapgods20: [],
      cheapgods40: []},
    73:  { era: 1, label: "MA Atlantis - Kings of the Deep",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    74:  { era: 1, label: "MA R’lyeh - Fallen Star",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    75:  { era: 1, label: "MA Pelagia - Triton Kings",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    76:  { era: 1, label: "MA Oceania - Mermidons",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    77:  { era: 1, label: "MA Ys - Morgen Queens",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    80:  { era: 2, label: "LA Arcoscephale - Sibylline Guidance",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    81:  { era: 2, label: "LA Pythium - Serpent Cult",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    82:  { era: 2, label: "LA Lemuria - Soul Gate", growth: -3,
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    83:  { era: 2, label: "LA Man - Towers of Chelms",
      realms: [2],
      cheapgods20: [],
      cheapgods40: []},
    84:  { era: 2, label: "LA Ulm - Black Forest",
      realms: [1, 2],
      cheapgods20: [],
      cheapgods40: []},
    85:  { era: 2, label: "LA Marignon - Conquerors of the Sea", blessF: 1, blessS: 1, blessB: 1,
      realms: [2, 3, 6],
      cheapgods20: [],
      cheapgods40: []},
    86:  { era: 2, label: "LA Mictlan - Blood and Rain", heat: 1, blessW: 1, blessB: 2,
      realms: [6],
      cheapgods20: [],
      cheapgods40: []},
    87:  { era: 2, label: "LA T’ien Ch’i - Barbarian Kings",
      realms: [4],
      cheapgods20: [],
      cheapgods40: []},
    89:  { era: 2, label: "LA Jomon - Human Daimyos",
      realms: [4],
      cheapgods20: [],
      cheapgods40: []},
    90:  { era: 2, label: "LA Agartha - Ktonian Dead",
      realms: [10],
      cheapgods20: [],
      cheapgods40: []},
    91:  { era: 2, label: "LA Abysia - Blood of Humans", heat: 2,
      realms: [7],
      cheapgods20: [],
      cheapgods40: []},
    92:  { era: 2, label: "LA Caelum - Return of the Raptors", heat: -1,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    93:  { era: 2, label: "LA C’tis - Desert Tombs", heat: 2,
      realms: [7],
      cheapgods20: [],
      cheapgods40: []},
    94:  { era: 2, label: "LA Pangaea - New Era",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    95:  { era: 2, label: "LA Midgård - Age of Men", heat: -1,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    96:  { era: 2, label: "LA Utgård - Well of Urd", heat: -1,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    97:  { era: 2, label: "LA Bogarus - Age of Heroes", heat: -2,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    98:  { era: 2, label: "LA Patala - Reign of the Nagas", heat: 2,
      realms: [8],
      cheapgods20: [],
      cheapgods40: []},
    99:  { era: 2, label: "LA Gath - Last of the Giants", heat: 1,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    100: { era: 2, label: "LA Ragha - Dual Kingdom",
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    101: { era: 2, label: "LA Xibalba - Return of the Zotz", heat: 1,
      realms: [6],
      cheapgods20: [],
      cheapgods40: []},
    106: { era: 2, label: "LA Atlantis - Frozen Sea", heat: -2,
      realms: [10],
      cheapgods20: [],
      cheapgods40: []},
    107: { era: 2, label: "LA R’lyeh - Dreamlands",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    108: { era: 2, label: "LA Erytheia - Kingdom of Two Worlds", heat: 1,
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
  };

  Object.keys(nationsData).forEach(nationId => {
    if (!nationsData[nationId].heat) {
      nationsData[nationId].heat = 0;
    }
    if (!nationsData[nationId].growth) {
      nationsData[nationId].growth = 0;
    }
    if (!nationsData[nationId].blessF) {
      nationsData[nationId].blessF = 0;
    }
    if (!nationsData[nationId].blessA) {
      nationsData[nationId].blessA = 0;
    }
    if (!nationsData[nationId].blessW) {
      nationsData[nationId].blessW = 0;
    }
    if (!nationsData[nationId].blessE) {
      nationsData[nationId].blessE = 0;
    }
    if (!nationsData[nationId].blessS) {
      nationsData[nationId].blessS = 0;
    }
    if (!nationsData[nationId].blessD) {
      nationsData[nationId].blessD = 0;
    }
    if (!nationsData[nationId].blessN) {
      nationsData[nationId].blessN = 0;
    }
    if (!nationsData[nationId].blessB) {
      nationsData[nationId].blessB = 0;
    }
    nationsData[nationId].pretenders = [];
  });

  putPretendersToNations(nationsData, getPretenders());
  // console.log(nationsData[5].pretenders)
  adjustPretenders(nationsData);
  // console.log(nationsData[5].pretenders)
  return nationsData;

};
