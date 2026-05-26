import { PokemonCard } from './pokemon-card.model';

export const ALL_POKEMON_CARDS: PokemonCard[] = [
  {
    "id": 2001,
    "name": "Poción",
    "image": "assets/images/hq_potion.png",
    "types": ["magic"],
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "cardClass": "magic",
    "magicEffect": "heal",
    "effectValue": 1000,
    "level": 1,
    "rarity": "common",
    "description": "Carta Mágica de Curación. Recupera 1000 puntos de vida a tu héroe inmediatamente."
  },
  {
    "id": 2002,
    "name": "Danza Lluvia",
    "image": "assets/images/hq_raindance.png",
    "types": ["magic"],
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "cardClass": "magic",
    "magicEffect": "field",
    "effectValue": 200,
    "level": 2,
    "rarity": "common",
    "description": "Carta Mágica de Campo. Una lluvia torrencial inunda el campo, potenciando el Ataque de todos los Pokémon de tipo Agua en 200 puntos."
  },
  {
    "id": 2005,
    "name": "Día Soleado",
    "image": "assets/images/dia_soleado.jpg",
    "types": ["magic"],
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "cardClass": "magic",
    "magicEffect": "field",
    "effectValue": 200,
    "level": 2,
    "rarity": "common",
    "description": "Carta Mágica de Campo. El sol brilla intensamente, potenciando el Ataque de todos los Pokémon de tipo Fuego en 200 puntos."
  },
  {
    "id": 2006,
    "name": "Gimnasio Roca",
    "image": "assets/images/gimnasio_roca.jpg",
    "types": ["magic"],
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "cardClass": "magic",
    "magicEffect": "field",
    "effectValue": 200,
    "level": 2,
    "rarity": "common",
    "description": "Carta Mágica de Campo. Un terreno rocoso que potencia el Ataque y Defensa de los Pokémon de tipo Roca en 200 puntos."
  },
  {
    "id": 2003,
    "name": "Protección",
    "image": "assets/images/hq_protect.png",
    "types": ["trap"],
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "cardClass": "trap",
    "trapTrigger": "on_attack",
    "effectValue": 0,
    "level": 3,
    "rarity": "common",
    "description": "Carta Trampa Defensiva. Colócala boca abajo. Cuando un monstruo rival ataque, activa esta carta para bloquear completamente el daño."
  },
  {
    "id": 2004,
    "name": "Trampa Rocas",
    "image": "assets/images/hq_stealthrock.png",
    "types": ["trap"],
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "cardClass": "trap",
    "trapTrigger": "on_summon",
    "effectValue": 200,
    "level": 4,
    "rarity": "common",
    "description": "Carta Trampa de Daño. Colócala boca abajo. Cuando el oponente invoque un monstruo, las rocas afiladas le causan 200 puntos de daño directo."
  },
  {
    "id": 2007,
    "name": "Armadura Defensiva",
    "image": "assets/images/armor_defense.png",
    "types": ["magic"],
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "cardClass": "magic",
    "magicEffect": "boost_def",
    "effectValue": 300,
    "level": 2,
    "rarity": "common",
    "description": "Carta Mágica de Defensa. Potencia la Defensa de todos tus monstruos en 300 puntos inmediatamente."
  },
  {
    "id": 2008,
    "name": "Fortaleza Mística",
    "image": "assets/images/mystical_fortress.png",
    "types": ["magic"],
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "cardClass": "magic",
    "magicEffect": "boost_def",
    "effectValue": 150,
    "level": 1,
    "rarity": "common",
    "description": "Carta Mágica de Protección. Una barrera mística rodea el campo, potenciando la Defensa de todos tus Pokémon en 150 puntos."
  },
  {
    "id": 1,
    "name": "Bulbasaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 450,
    "attack": 98,
    "defense": 98,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Bulbasaur mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 600,
    "attack": 124,
    "defense": 126,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Ivysaur ataca sin piedad. Sus 124 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 3,
    "name": "Venusaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 800,
    "attack": 164,
    "defense": 166,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Venusaur es un muro infranqueable de tipo grass. Su asombrosa defensa de 166 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 4,
    "name": "Charmander",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "types": [
      "fire"
    ],
    "hp": 390,
    "attack": 104,
    "defense": 86,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Charmander ataca sin piedad. Sus 104 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    "types": [
      "fire"
    ],
    "hp": 580,
    "attack": 128,
    "defense": 116,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Charmeleon ataca sin piedad. Sus 128 puntos de ataque físico lo convierten en un depredador implacable de tipo fire. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 6,
    "name": "Charizard",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    "types": [
      "fire",
      "flying"
    ],
    "hp": 780,
    "attack": 168,
    "defense": 156,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Charizard es un muro infranqueable de tipo fire. Su asombrosa defensa de 156 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 7,
    "name": "Squirtle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    "types": [
      "water"
    ],
    "hp": 440,
    "attack": 96,
    "defense": 130,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Squirtle mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 8,
    "name": "Wartortle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    "types": [
      "water"
    ],
    "hp": 590,
    "attack": 126,
    "defense": 160,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Wartortle ataca sin piedad. Sus 126 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 9,
    "name": "Blastoise",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    "types": [
      "water"
    ],
    "hp": 790,
    "attack": 166,
    "defense": 200,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Blastoise es un muro infranqueable de tipo water. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 10,
    "name": "Caterpie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    "types": [
      "bug"
    ],
    "hp": 450,
    "attack": 60,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Caterpie mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 11,
    "name": "Metapod",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    "types": [
      "bug"
    ],
    "hp": 500,
    "attack": 40,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Metapod mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 12,
    "name": "Butterfree",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 600,
    "attack": 90,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo bug. Butterfree mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 13,
    "name": "Weedle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 400,
    "attack": 70,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Weedle mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 14,
    "name": "Kakuna",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 450,
    "attack": 50,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Kakuna mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 15,
    "name": "Beedrill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 650,
    "attack": 180,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Beedrill ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 16,
    "name": "Pidgey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 400,
    "attack": 90,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Pidgey mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 630,
    "attack": 120,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Pidgeotto es un muro infranqueable de tipo normal. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 830,
    "attack": 160,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Pidgeot es un muro infranqueable de tipo normal. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 19,
    "name": "Rattata",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    "types": [
      "normal"
    ],
    "hp": 300,
    "attack": 112,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Rattata ataca sin piedad. Sus 112 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 20,
    "name": "Raticate",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    "types": [
      "normal"
    ],
    "hp": 550,
    "attack": 162,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Raticate ataca sin piedad. Sus 162 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 21,
    "name": "Spearow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 400,
    "attack": 120,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Spearow ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 22,
    "name": "Fearow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 650,
    "attack": 180,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Fearow es un muro infranqueable de tipo normal. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 23,
    "name": "Ekans",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    "types": [
      "poison"
    ],
    "hp": 350,
    "attack": 120,
    "defense": 88,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Ekans ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo poison."
  },
  {
    "id": 24,
    "name": "Arbok",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "types": [
      "poison"
    ],
    "hp": 600,
    "attack": 190,
    "defense": 138,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Arbok ataca sin piedad. Sus 190 puntos de ataque físico lo convierten en un depredador implacable de tipo poison. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 25,
    "name": "Pikachu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "types": [
      "electric"
    ],
    "hp": 350,
    "attack": 110,
    "defense": 80,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 3,
    "rarity": "rare",
    "description": "Consciente de su poder, Pikachu ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo electric. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 26,
    "name": "Raichu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    "types": [
      "electric"
    ],
    "hp": 600,
    "attack": 180,
    "defense": 110,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Consciente de su poder, Raichu ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo electric. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    "types": [
      "ground"
    ],
    "hp": 500,
    "attack": 150,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Sandshrew ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo ground."
  },
  {
    "id": 28,
    "name": "Sandslash",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    "types": [
      "ground"
    ],
    "hp": 750,
    "attack": 200,
    "defense": 220,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Sandslash es un muro infranqueable de tipo ground. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 29,
    "name": "Nidoran-f",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    "types": [
      "poison"
    ],
    "hp": 550,
    "attack": 94,
    "defense": 104,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo poison. Nidoran-f mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 30,
    "name": "Nidorina",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    "types": [
      "poison"
    ],
    "hp": 700,
    "attack": 124,
    "defense": 134,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Nidorina es un muro infranqueable de tipo poison. Su asombrosa defensa de 134 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    "types": [
      "poison",
      "ground"
    ],
    "hp": 900,
    "attack": 184,
    "defense": 174,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Nidoqueen es un muro infranqueable de tipo poison. Su asombrosa defensa de 174 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 32,
    "name": "Nidoran-m",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    "types": [
      "poison"
    ],
    "hp": 460,
    "attack": 114,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Nidoran-m ataca sin piedad. Sus 114 puntos de ataque físico lo convierten en un depredador implacable de tipo poison."
  },
  {
    "id": 33,
    "name": "Nidorino",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    "types": [
      "poison"
    ],
    "hp": 610,
    "attack": 144,
    "defense": 114,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Nidorino es un muro infranqueable de tipo poison. Su asombrosa defensa de 114 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 34,
    "name": "Nidoking",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    "types": [
      "poison",
      "ground"
    ],
    "hp": 810,
    "attack": 204,
    "defense": 154,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Nidoking es un muro infranqueable de tipo poison. Su asombrosa defensa de 154 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 35,
    "name": "Clefairy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    "types": [
      "fairy"
    ],
    "hp": 700,
    "attack": 90,
    "defense": 96,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo fairy. Clefairy mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 36,
    "name": "Clefable",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    "types": [
      "fairy"
    ],
    "hp": 950,
    "attack": 140,
    "defense": 146,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Clefable es un muro infranqueable de tipo fairy. Su asombrosa defensa de 146 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 37,
    "name": "Vulpix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    "types": [
      "fire"
    ],
    "hp": 380,
    "attack": 82,
    "defense": 80,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fire. Vulpix mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 38,
    "name": "Ninetales",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    "types": [
      "fire"
    ],
    "hp": 730,
    "attack": 152,
    "defense": 150,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Ninetales es un muro infranqueable de tipo fire. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    "types": [
      "normal",
      "fairy"
    ],
    "hp": 1150,
    "attack": 90,
    "defense": 40,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Jigglypuff mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    "types": [
      "normal",
      "fairy"
    ],
    "hp": 1200,
    "attack": 140,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Consciente de su poder, Wigglytuff ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 41,
    "name": "Zubat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    "types": [
      "poison",
      "flying"
    ],
    "hp": 400,
    "attack": 90,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo poison. Zubat mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 42,
    "name": "Golbat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    "types": [
      "poison",
      "flying"
    ],
    "hp": 750,
    "attack": 160,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Golbat es un muro infranqueable de tipo poison. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 43,
    "name": "Oddish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 450,
    "attack": 100,
    "defense": 110,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Oddish mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 44,
    "name": "Gloom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 600,
    "attack": 130,
    "defense": 140,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Gloom ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 45,
    "name": "Vileplume",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 750,
    "attack": 160,
    "defense": 170,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Vileplume es un muro infranqueable de tipo grass. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 46,
    "name": "Paras",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    "types": [
      "bug",
      "grass"
    ],
    "hp": 350,
    "attack": 140,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Paras ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 47,
    "name": "Parasect",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    "types": [
      "bug",
      "grass"
    ],
    "hp": 600,
    "attack": 190,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Parasect ataca sin piedad. Sus 190 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 48,
    "name": "Venonat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 600,
    "attack": 110,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Venonat ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 49,
    "name": "Venomoth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 700,
    "attack": 130,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Venomoth es un muro infranqueable de tipo bug. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 50,
    "name": "Diglett",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    "types": [
      "ground"
    ],
    "hp": 100,
    "attack": 110,
    "defense": 50,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Diglett ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo ground."
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    "types": [
      "ground"
    ],
    "hp": 350,
    "attack": 200,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Dugtrio ataca sin piedad. Sus 200 puntos de ataque físico lo convierten en un depredador implacable de tipo ground. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 52,
    "name": "Meowth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    "types": [
      "normal"
    ],
    "hp": 400,
    "attack": 90,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Meowth mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 53,
    "name": "Persian",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    "types": [
      "normal"
    ],
    "hp": 650,
    "attack": 140,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Persian es un muro infranqueable de tipo normal. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 54,
    "name": "Psyduck",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    "types": [
      "water"
    ],
    "hp": 500,
    "attack": 104,
    "defense": 96,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Psyduck ataca sin piedad. Sus 104 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 55,
    "name": "Golduck",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    "types": [
      "water"
    ],
    "hp": 800,
    "attack": 164,
    "defense": 156,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Golduck es un muro infranqueable de tipo water. Su asombrosa defensa de 156 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 56,
    "name": "Mankey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    "types": [
      "fighting"
    ],
    "hp": 400,
    "attack": 160,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Mankey ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting."
  },
  {
    "id": 57,
    "name": "Primeape",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    "types": [
      "fighting"
    ],
    "hp": 650,
    "attack": 210,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Primeape es un muro infranqueable de tipo fighting. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 58,
    "name": "Growlithe",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    "types": [
      "fire"
    ],
    "hp": 550,
    "attack": 140,
    "defense": 90,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Growlithe ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 59,
    "name": "Arcanine",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    "types": [
      "fire"
    ],
    "hp": 900,
    "attack": 220,
    "defense": 160,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 6,
    "rarity": "rare",
    "description": "Arcanine es un muro infranqueable de tipo fire. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 60,
    "name": "Poliwag",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    "types": [
      "water"
    ],
    "hp": 400,
    "attack": 100,
    "defense": 80,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Poliwag mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    "types": [
      "water"
    ],
    "hp": 650,
    "attack": 130,
    "defense": 130,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Poliwhirl es un muro infranqueable de tipo water. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    "types": [
      "water",
      "fighting"
    ],
    "hp": 900,
    "attack": 190,
    "defense": 190,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Poliwrath es un muro infranqueable de tipo water. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 63,
    "name": "Abra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    "types": [
      "psychic"
    ],
    "hp": 250,
    "attack": 40,
    "defense": 30,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Abra mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 64,
    "name": "Kadabra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    "types": [
      "psychic"
    ],
    "hp": 400,
    "attack": 70,
    "defense": 60,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo psychic. Kadabra mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 65,
    "name": "Alakazam",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    "types": [
      "psychic"
    ],
    "hp": 550,
    "attack": 100,
    "defense": 90,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Una criatura versátil de tipo psychic. Alakazam mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 66,
    "name": "Machop",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    "types": [
      "fighting"
    ],
    "hp": 700,
    "attack": 160,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Machop ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting."
  },
  {
    "id": 67,
    "name": "Machoke",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    "types": [
      "fighting"
    ],
    "hp": 800,
    "attack": 200,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Machoke es un muro infranqueable de tipo fighting. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 68,
    "name": "Machamp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    "types": [
      "fighting"
    ],
    "hp": 900,
    "attack": 260,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Machamp es un muro infranqueable de tipo fighting. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 500,
    "attack": 150,
    "defense": 70,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Bellsprout ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 650,
    "attack": 180,
    "defense": 100,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Weepinbell ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 71,
    "name": "Victreebel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 800,
    "attack": 210,
    "defense": 130,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Victreebel es un muro infranqueable de tipo grass. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 72,
    "name": "Tentacool",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    "types": [
      "water",
      "poison"
    ],
    "hp": 400,
    "attack": 80,
    "defense": 70,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Tentacool mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    "types": [
      "water",
      "poison"
    ],
    "hp": 800,
    "attack": 140,
    "defense": 130,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 6,
    "rarity": "rare",
    "description": "Tentacruel es un muro infranqueable de tipo water. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 74,
    "name": "Geodude",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    "types": [
      "rock",
      "ground"
    ],
    "hp": 400,
    "attack": 160,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Geodude ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 75,
    "name": "Graveler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    "types": [
      "rock",
      "ground"
    ],
    "hp": 550,
    "attack": 190,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Graveler ataca sin piedad. Sus 190 puntos de ataque físico lo convierten en un depredador implacable de tipo rock. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 76,
    "name": "Golem",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    "types": [
      "rock",
      "ground"
    ],
    "hp": 800,
    "attack": 240,
    "defense": 260,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Golem es un muro infranqueable de tipo rock. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 77,
    "name": "Ponyta",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    "types": [
      "fire"
    ],
    "hp": 500,
    "attack": 170,
    "defense": 110,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Ponyta ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 78,
    "name": "Rapidash",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    "types": [
      "fire"
    ],
    "hp": 650,
    "attack": 200,
    "defense": 140,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Rapidash es un muro infranqueable de tipo fire. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    "types": [
      "water",
      "psychic"
    ],
    "hp": 900,
    "attack": 130,
    "defense": 130,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Slowpoke es un muro infranqueable de tipo water. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 80,
    "name": "Slowbro",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    "types": [
      "water",
      "psychic"
    ],
    "hp": 950,
    "attack": 150,
    "defense": 220,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Slowbro es un muro infranqueable de tipo water. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 81,
    "name": "Magnemite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    "types": [
      "electric",
      "steel"
    ],
    "hp": 250,
    "attack": 70,
    "defense": 140,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Magnemite mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 82,
    "name": "Magneton",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    "types": [
      "electric",
      "steel"
    ],
    "hp": 500,
    "attack": 120,
    "defense": 190,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Magneton ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo electric. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 83,
    "name": "Farfetchd",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 520,
    "attack": 180,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Farfetchd ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 84,
    "name": "Doduo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 350,
    "attack": 170,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Doduo ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 85,
    "name": "Dodrio",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 600,
    "attack": 220,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Dodrio ataca sin piedad. Sus 220 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 86,
    "name": "Seel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    "types": [
      "water"
    ],
    "hp": 650,
    "attack": 90,
    "defense": 110,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Seel es un muro infranqueable de tipo water. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 87,
    "name": "Dewgong",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    "types": [
      "water",
      "ice"
    ],
    "hp": 900,
    "attack": 140,
    "defense": 160,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Dewgong es un muro infranqueable de tipo water. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 88,
    "name": "Grimer",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    "types": [
      "poison"
    ],
    "hp": 800,
    "attack": 160,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Grimer ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo poison."
  },
  {
    "id": 89,
    "name": "Muk",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    "types": [
      "poison"
    ],
    "hp": 1050,
    "attack": 210,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Muk es un muro infranqueable de tipo poison. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 90,
    "name": "Shellder",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    "types": [
      "water"
    ],
    "hp": 300,
    "attack": 130,
    "defense": 200,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Shellder ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 91,
    "name": "Cloyster",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    "types": [
      "water",
      "ice"
    ],
    "hp": 500,
    "attack": 190,
    "defense": 360,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 6,
    "rarity": "rare",
    "description": "Consciente de su poder, Cloyster ataca sin piedad. Sus 190 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 92,
    "name": "Gastly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    "types": [
      "ghost",
      "poison"
    ],
    "hp": 300,
    "attack": 70,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ghost. Gastly mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 93,
    "name": "Haunter",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    "types": [
      "ghost",
      "poison"
    ],
    "hp": 450,
    "attack": 100,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo ghost. Haunter mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 94,
    "name": "Gengar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    "types": [
      "ghost",
      "poison"
    ],
    "hp": 600,
    "attack": 130,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Consciente de su poder, Gengar ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 95,
    "name": "Onix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    "types": [
      "rock",
      "ground"
    ],
    "hp": 350,
    "attack": 90,
    "defense": 320,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo rock. Onix mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 96,
    "name": "Drowzee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    "types": [
      "psychic"
    ],
    "hp": 600,
    "attack": 96,
    "defense": 90,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Drowzee mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 97,
    "name": "Hypno",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    "types": [
      "psychic"
    ],
    "hp": 850,
    "attack": 146,
    "defense": 140,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Hypno es un muro infranqueable de tipo psychic. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 98,
    "name": "Krabby",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    "types": [
      "water"
    ],
    "hp": 300,
    "attack": 210,
    "defense": 180,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Krabby ataca sin piedad. Sus 210 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 99,
    "name": "Kingler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    "types": [
      "water"
    ],
    "hp": 550,
    "attack": 260,
    "defense": 230,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Kingler ataca sin piedad. Sus 260 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 100,
    "name": "Voltorb",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    "types": [
      "electric"
    ],
    "hp": 400,
    "attack": 60,
    "defense": 100,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Voltorb mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 101,
    "name": "Electrode",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    "types": [
      "electric"
    ],
    "hp": 600,
    "attack": 100,
    "defense": 140,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo electric. Electrode mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    "types": [
      "grass",
      "psychic"
    ],
    "hp": 600,
    "attack": 80,
    "defense": 160,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Exeggcute mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
    "types": [
      "grass",
      "psychic"
    ],
    "hp": 950,
    "attack": 190,
    "defense": 170,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Exeggutor es un muro infranqueable de tipo grass. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 104,
    "name": "Cubone",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    "types": [
      "ground"
    ],
    "hp": 500,
    "attack": 100,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ground. Cubone mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 105,
    "name": "Marowak",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    "types": [
      "ground"
    ],
    "hp": 600,
    "attack": 160,
    "defense": 220,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Marowak ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo ground. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
    "types": [
      "fighting"
    ],
    "hp": 500,
    "attack": 240,
    "defense": 106,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Hitmonlee ataca sin piedad. Sus 240 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
    "types": [
      "fighting"
    ],
    "hp": 500,
    "attack": 210,
    "defense": 158,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Hitmonchan ataca sin piedad. Sus 210 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 108,
    "name": "Lickitung",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    "types": [
      "normal"
    ],
    "hp": 900,
    "attack": 110,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Lickitung es un muro infranqueable de tipo normal. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 109,
    "name": "Koffing",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    "types": [
      "poison"
    ],
    "hp": 400,
    "attack": 130,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Koffing ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo poison."
  },
  {
    "id": 110,
    "name": "Weezing",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
    "types": [
      "poison"
    ],
    "hp": 650,
    "attack": 180,
    "defense": 240,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Weezing es un muro infranqueable de tipo poison. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    "types": [
      "ground",
      "rock"
    ],
    "hp": 800,
    "attack": 170,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Rhyhorn es un muro infranqueable de tipo ground. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 112,
    "name": "Rhydon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
    "types": [
      "ground",
      "rock"
    ],
    "hp": 1050,
    "attack": 260,
    "defense": 240,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Rhydon es un muro infranqueable de tipo ground. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 113,
    "name": "Chansey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    "types": [
      "normal"
    ],
    "hp": 1200,
    "attack": 10,
    "defense": 10,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 13,
    "rarity": "legendary",
    "description": "Una criatura versátil de tipo normal. Chansey mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 114,
    "name": "Tangela",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
    "types": [
      "grass"
    ],
    "hp": 650,
    "attack": 110,
    "defense": 230,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Tangela es un muro infranqueable de tipo grass. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    "types": [
      "normal"
    ],
    "hp": 1050,
    "attack": 190,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Kangaskhan es un muro infranqueable de tipo normal. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 116,
    "name": "Horsea",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    "types": [
      "water"
    ],
    "hp": 300,
    "attack": 80,
    "defense": 140,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Horsea mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 117,
    "name": "Seadra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    "types": [
      "water"
    ],
    "hp": 550,
    "attack": 130,
    "defense": 190,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Seadra ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 118,
    "name": "Goldeen",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    "types": [
      "water"
    ],
    "hp": 450,
    "attack": 134,
    "defense": 120,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Goldeen ataca sin piedad. Sus 134 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 119,
    "name": "Seaking",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    "types": [
      "water"
    ],
    "hp": 800,
    "attack": 184,
    "defense": 130,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Seaking es un muro infranqueable de tipo water. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 120,
    "name": "Staryu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    "types": [
      "water"
    ],
    "hp": 300,
    "attack": 90,
    "defense": 110,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Staryu mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 121,
    "name": "Starmie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    "types": [
      "water",
      "psychic"
    ],
    "hp": 600,
    "attack": 150,
    "defense": 170,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 6,
    "rarity": "rare",
    "description": "Consciente de su poder, Starmie ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 122,
    "name": "Mr-mime",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "hp": 400,
    "attack": 90,
    "defense": 130,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo psychic. Mr-mime mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 123,
    "name": "Scyther",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 700,
    "attack": 220,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "common",
    "description": "Scyther es un muro infranqueable de tipo bug. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 124,
    "name": "Jynx",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    "types": [
      "ice",
      "psychic"
    ],
    "hp": 650,
    "attack": 100,
    "defense": 70,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo ice. Jynx mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    "types": [
      "electric"
    ],
    "hp": 650,
    "attack": 166,
    "defense": 114,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Electabuzz es un muro infranqueable de tipo electric. Su asombrosa defensa de 114 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 126,
    "name": "Magmar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
    "types": [
      "fire"
    ],
    "hp": 650,
    "attack": 190,
    "defense": 114,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Magmar es un muro infranqueable de tipo fire. Su asombrosa defensa de 114 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 127,
    "name": "Pinsir",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    "types": [
      "bug"
    ],
    "hp": 650,
    "attack": 250,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Pinsir es un muro infranqueable de tipo bug. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 128,
    "name": "Tauros",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    "types": [
      "normal"
    ],
    "hp": 750,
    "attack": 200,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Tauros es un muro infranqueable de tipo normal. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 129,
    "name": "Magikarp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    "types": [
      "water"
    ],
    "hp": 200,
    "attack": 20,
    "defense": 110,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Magikarp mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 130,
    "name": "Gyarados",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    "types": [
      "water",
      "flying"
    ],
    "hp": 950,
    "attack": 250,
    "defense": 158,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 6,
    "rarity": "rare",
    "description": "Gyarados es un muro infranqueable de tipo water. Su asombrosa defensa de 158 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 131,
    "name": "Lapras",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    "types": [
      "water",
      "ice"
    ],
    "hp": 1200,
    "attack": 170,
    "defense": 160,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 6,
    "rarity": "rare",
    "description": "Lapras es un muro infranqueable de tipo water. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 132,
    "name": "Ditto",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    "types": [
      "normal"
    ],
    "hp": 480,
    "attack": 96,
    "defense": 96,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo normal. Ditto mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 133,
    "name": "Eevee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    "types": [
      "normal"
    ],
    "hp": 550,
    "attack": 110,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Eevee ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    "types": [
      "water"
    ],
    "hp": 1200,
    "attack": 130,
    "defense": 120,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 6,
    "rarity": "rare",
    "description": "Vaporeon es un muro infranqueable de tipo water. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 135,
    "name": "Jolteon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    "types": [
      "electric"
    ],
    "hp": 650,
    "attack": 130,
    "defense": 120,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 6,
    "rarity": "rare",
    "description": "Jolteon es un muro infranqueable de tipo electric. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 136,
    "name": "Flareon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    "types": [
      "fire"
    ],
    "hp": 650,
    "attack": 260,
    "defense": 120,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 6,
    "rarity": "rare",
    "description": "Flareon es un muro infranqueable de tipo fire. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 137,
    "name": "Porygon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    "types": [
      "normal"
    ],
    "hp": 650,
    "attack": 120,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Porygon es un muro infranqueable de tipo normal. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 138,
    "name": "Omanyte",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    "types": [
      "rock",
      "water"
    ],
    "hp": 350,
    "attack": 80,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo rock. Omanyte mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 139,
    "name": "Omastar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
    "types": [
      "rock",
      "water"
    ],
    "hp": 700,
    "attack": 120,
    "defense": 250,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Omastar es un muro infranqueable de tipo rock. Su asombrosa defensa de 250 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 140,
    "name": "Kabuto",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    "types": [
      "rock",
      "water"
    ],
    "hp": 300,
    "attack": 160,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Kabuto ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 141,
    "name": "Kabutops",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    "types": [
      "rock",
      "water"
    ],
    "hp": 600,
    "attack": 230,
    "defense": 210,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Kabutops ataca sin piedad. Sus 230 puntos de ataque físico lo convierten en un depredador implacable de tipo rock. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    "types": [
      "rock",
      "flying"
    ],
    "hp": 800,
    "attack": 210,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Aerodactyl es un muro infranqueable de tipo rock. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 143,
    "name": "Snorlax",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    "types": [
      "normal"
    ],
    "hp": 1200,
    "attack": 220,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Snorlax es un muro infranqueable de tipo normal. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 144,
    "name": "Articuno",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    "types": [
      "ice",
      "flying"
    ],
    "hp": 900,
    "attack": 170,
    "defense": 200,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Articuno es un muro infranqueable de tipo ice. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 145,
    "name": "Zapdos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    "types": [
      "electric",
      "flying"
    ],
    "hp": 900,
    "attack": 180,
    "defense": 170,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Zapdos es un muro infranqueable de tipo electric. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 146,
    "name": "Moltres",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    "types": [
      "fire",
      "flying"
    ],
    "hp": 900,
    "attack": 200,
    "defense": 180,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Moltres es un muro infranqueable de tipo fire. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 147,
    "name": "Dratini",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    "types": [
      "dragon"
    ],
    "hp": 410,
    "attack": 128,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Dratini ataca sin piedad. Sus 128 puntos de ataque físico lo convierten en un depredador implacable de tipo dragon."
  },
  {
    "id": 148,
    "name": "Dragonair",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    "types": [
      "dragon"
    ],
    "hp": 610,
    "attack": 168,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Dragonair es un muro infranqueable de tipo dragon. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 149,
    "name": "Dragonite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    "types": [
      "dragon",
      "flying"
    ],
    "hp": 910,
    "attack": 268,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Dragonite es un muro infranqueable de tipo dragon. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    "types": [
      "psychic"
    ],
    "hp": 1060,
    "attack": 220,
    "defense": 180,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Mewtwo es un muro infranqueable de tipo psychic. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 151,
    "name": "Mew",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    "types": [
      "psychic"
    ],
    "hp": 1000,
    "attack": 200,
    "defense": 200,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Mew es un muro infranqueable de tipo psychic. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 152,
    "name": "Chikorita",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
    "types": [
      "grass"
    ],
    "hp": 450,
    "attack": 98,
    "defense": 130,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Chikorita mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 153,
    "name": "Bayleef",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png",
    "types": [
      "grass"
    ],
    "hp": 600,
    "attack": 124,
    "defense": 160,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Bayleef ataca sin piedad. Sus 124 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 154,
    "name": "Meganium",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png",
    "types": [
      "grass"
    ],
    "hp": 800,
    "attack": 164,
    "defense": 200,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Meganium es un muro infranqueable de tipo grass. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 155,
    "name": "Cyndaquil",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
    "types": [
      "fire"
    ],
    "hp": 390,
    "attack": 104,
    "defense": 86,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Cyndaquil ataca sin piedad. Sus 104 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 156,
    "name": "Quilava",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png",
    "types": [
      "fire"
    ],
    "hp": 580,
    "attack": 128,
    "defense": 116,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Quilava ataca sin piedad. Sus 128 puntos de ataque físico lo convierten en un depredador implacable de tipo fire. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 157,
    "name": "Typhlosion",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png",
    "types": [
      "fire"
    ],
    "hp": 780,
    "attack": 168,
    "defense": 156,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Typhlosion es un muro infranqueable de tipo fire. Su asombrosa defensa de 156 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 158,
    "name": "Totodile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
    "types": [
      "water"
    ],
    "hp": 500,
    "attack": 130,
    "defense": 128,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Totodile ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 159,
    "name": "Croconaw",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png",
    "types": [
      "water"
    ],
    "hp": 650,
    "attack": 160,
    "defense": 160,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Croconaw es un muro infranqueable de tipo water. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 160,
    "name": "Feraligatr",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png",
    "types": [
      "water"
    ],
    "hp": 850,
    "attack": 210,
    "defense": 200,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Feraligatr es un muro infranqueable de tipo water. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 161,
    "name": "Sentret",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png",
    "types": [
      "normal"
    ],
    "hp": 350,
    "attack": 92,
    "defense": 68,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Sentret mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 162,
    "name": "Furret",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png",
    "types": [
      "normal"
    ],
    "hp": 850,
    "attack": 152,
    "defense": 128,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Furret es un muro infranqueable de tipo normal. Su asombrosa defensa de 128 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 163,
    "name": "Hoothoot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 600,
    "attack": 60,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Hoothoot mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 164,
    "name": "Noctowl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 1000,
    "attack": 100,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo normal. Noctowl mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 165,
    "name": "Ledyba",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 400,
    "attack": 40,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Ledyba mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 166,
    "name": "Ledian",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 550,
    "attack": 70,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo bug. Ledian mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 167,
    "name": "Spinarak",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 400,
    "attack": 120,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Spinarak ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 168,
    "name": "Ariados",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 700,
    "attack": 180,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Ariados es un muro infranqueable de tipo bug. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 169,
    "name": "Crobat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png",
    "types": [
      "poison",
      "flying"
    ],
    "hp": 850,
    "attack": 180,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Crobat es un muro infranqueable de tipo poison. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 170,
    "name": "Chinchou",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png",
    "types": [
      "water",
      "electric"
    ],
    "hp": 750,
    "attack": 76,
    "defense": 76,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Chinchou mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 171,
    "name": "Lanturn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png",
    "types": [
      "water",
      "electric"
    ],
    "hp": 1200,
    "attack": 116,
    "defense": 116,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Lanturn es un muro infranqueable de tipo water. Su asombrosa defensa de 116 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 172,
    "name": "Pichu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
    "types": [
      "electric"
    ],
    "hp": 200,
    "attack": 80,
    "defense": 30,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Pichu mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 173,
    "name": "Cleffa",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png",
    "types": [
      "fairy"
    ],
    "hp": 500,
    "attack": 50,
    "defense": 56,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fairy. Cleffa mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 174,
    "name": "Igglybuff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png",
    "types": [
      "normal",
      "fairy"
    ],
    "hp": 900,
    "attack": 60,
    "defense": 30,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Igglybuff mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 175,
    "name": "Togepi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png",
    "types": [
      "fairy"
    ],
    "hp": 350,
    "attack": 40,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fairy. Togepi mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 176,
    "name": "Togetic",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png",
    "types": [
      "fairy",
      "flying"
    ],
    "hp": 550,
    "attack": 80,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo fairy. Togetic mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 177,
    "name": "Natu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png",
    "types": [
      "psychic",
      "flying"
    ],
    "hp": 400,
    "attack": 100,
    "defense": 90,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Natu mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 178,
    "name": "Xatu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png",
    "types": [
      "psychic",
      "flying"
    ],
    "hp": 650,
    "attack": 150,
    "defense": 140,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Xatu es un muro infranqueable de tipo psychic. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 179,
    "name": "Mareep",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png",
    "types": [
      "electric"
    ],
    "hp": 550,
    "attack": 80,
    "defense": 80,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Mareep mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 180,
    "name": "Flaaffy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png",
    "types": [
      "electric"
    ],
    "hp": 700,
    "attack": 110,
    "defense": 110,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Flaaffy es un muro infranqueable de tipo electric. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 181,
    "name": "Ampharos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png",
    "types": [
      "electric"
    ],
    "hp": 900,
    "attack": 150,
    "defense": 170,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Ampharos es un muro infranqueable de tipo electric. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 182,
    "name": "Bellossom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png",
    "types": [
      "grass"
    ],
    "hp": 750,
    "attack": 160,
    "defense": 190,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Bellossom es un muro infranqueable de tipo grass. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 183,
    "name": "Marill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png",
    "types": [
      "water",
      "fairy"
    ],
    "hp": 700,
    "attack": 40,
    "defense": 100,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Marill mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 184,
    "name": "Azumarill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png",
    "types": [
      "water",
      "fairy"
    ],
    "hp": 1000,
    "attack": 100,
    "defense": 160,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 6,
    "rarity": "rare",
    "description": "Azumarill es un muro infranqueable de tipo water. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 185,
    "name": "Sudowoodo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png",
    "types": [
      "rock"
    ],
    "hp": 700,
    "attack": 200,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Sudowoodo es un muro infranqueable de tipo rock. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 186,
    "name": "Politoed",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png",
    "types": [
      "water"
    ],
    "hp": 900,
    "attack": 150,
    "defense": 150,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Politoed es un muro infranqueable de tipo water. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 187,
    "name": "Hoppip",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png",
    "types": [
      "grass",
      "flying"
    ],
    "hp": 350,
    "attack": 70,
    "defense": 80,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Hoppip mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 188,
    "name": "Skiploom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png",
    "types": [
      "grass",
      "flying"
    ],
    "hp": 550,
    "attack": 90,
    "defense": 100,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo grass. Skiploom mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 189,
    "name": "Jumpluff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png",
    "types": [
      "grass",
      "flying"
    ],
    "hp": 750,
    "attack": 110,
    "defense": 140,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 6,
    "rarity": "legendary",
    "description": "Jumpluff es un muro infranqueable de tipo grass. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 190,
    "name": "Aipom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png",
    "types": [
      "normal"
    ],
    "hp": 550,
    "attack": 140,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Aipom ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 191,
    "name": "Sunkern",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png",
    "types": [
      "grass"
    ],
    "hp": 300,
    "attack": 60,
    "defense": 60,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Sunkern mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 192,
    "name": "Sunflora",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png",
    "types": [
      "grass"
    ],
    "hp": 750,
    "attack": 150,
    "defense": 110,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Sunflora es un muro infranqueable de tipo grass. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 193,
    "name": "Yanma",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 650,
    "attack": 130,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Yanma ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 194,
    "name": "Wooper",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png",
    "types": [
      "water",
      "ground"
    ],
    "hp": 550,
    "attack": 90,
    "defense": 90,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Wooper mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 195,
    "name": "Quagsire",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png",
    "types": [
      "water",
      "ground"
    ],
    "hp": 950,
    "attack": 170,
    "defense": 170,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Quagsire es un muro infranqueable de tipo water. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 196,
    "name": "Espeon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png",
    "types": [
      "psychic"
    ],
    "hp": 650,
    "attack": 130,
    "defense": 120,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 6,
    "rarity": "rare",
    "description": "Espeon es un muro infranqueable de tipo psychic. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 197,
    "name": "Umbreon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png",
    "types": [
      "dark"
    ],
    "hp": 950,
    "attack": 130,
    "defense": 220,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Umbreon es un muro infranqueable de tipo dark. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 198,
    "name": "Murkrow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png",
    "types": [
      "dark",
      "flying"
    ],
    "hp": 600,
    "attack": 170,
    "defense": 84,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Murkrow ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo dark."
  },
  {
    "id": 199,
    "name": "Slowking",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png",
    "types": [
      "water",
      "psychic"
    ],
    "hp": 950,
    "attack": 150,
    "defense": 160,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Slowking es un muro infranqueable de tipo water. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 200,
    "name": "Misdreavus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png",
    "types": [
      "ghost"
    ],
    "hp": 600,
    "attack": 120,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Misdreavus ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost."
  },
  {
    "id": 201,
    "name": "Unown",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png",
    "types": [
      "psychic"
    ],
    "hp": 480,
    "attack": 144,
    "defense": 96,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 3,
    "rarity": "rare",
    "description": "Consciente de su poder, Unown ataca sin piedad. Sus 144 puntos de ataque físico lo convierten en un depredador implacable de tipo psychic. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 202,
    "name": "Wobbuffet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png",
    "types": [
      "psychic"
    ],
    "hp": 1200,
    "attack": 66,
    "defense": 116,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 4,
    "rarity": "rare",
    "description": "Wobbuffet es un muro infranqueable de tipo psychic. Su asombrosa defensa de 116 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 203,
    "name": "Girafarig",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png",
    "types": [
      "normal",
      "psychic"
    ],
    "hp": 700,
    "attack": 160,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Girafarig es un muro infranqueable de tipo normal. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 204,
    "name": "Pineco",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png",
    "types": [
      "bug"
    ],
    "hp": 500,
    "attack": 130,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Pineco ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 205,
    "name": "Forretress",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png",
    "types": [
      "bug",
      "steel"
    ],
    "hp": 750,
    "attack": 180,
    "defense": 280,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Forretress es un muro infranqueable de tipo bug. Su asombrosa defensa de 280 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 206,
    "name": "Dunsparce",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png",
    "types": [
      "normal"
    ],
    "hp": 1000,
    "attack": 140,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Dunsparce es un muro infranqueable de tipo normal. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 207,
    "name": "Gligar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png",
    "types": [
      "ground",
      "flying"
    ],
    "hp": 650,
    "attack": 150,
    "defense": 210,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Gligar es un muro infranqueable de tipo ground. Su asombrosa defensa de 210 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 208,
    "name": "Steelix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png",
    "types": [
      "steel",
      "ground"
    ],
    "hp": 750,
    "attack": 170,
    "defense": 400,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Steelix es un muro infranqueable de tipo steel. Su asombrosa defensa de 400 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 209,
    "name": "Snubbull",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png",
    "types": [
      "fairy"
    ],
    "hp": 600,
    "attack": 160,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Snubbull ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo fairy."
  },
  {
    "id": 210,
    "name": "Granbull",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png",
    "types": [
      "fairy"
    ],
    "hp": 900,
    "attack": 240,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Granbull es un muro infranqueable de tipo fairy. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 211,
    "name": "Qwilfish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png",
    "types": [
      "water",
      "poison"
    ],
    "hp": 650,
    "attack": 190,
    "defense": 170,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Qwilfish es un muro infranqueable de tipo water. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 212,
    "name": "Scizor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png",
    "types": [
      "bug",
      "steel"
    ],
    "hp": 700,
    "attack": 260,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Scizor es un muro infranqueable de tipo bug. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 213,
    "name": "Shuckle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png",
    "types": [
      "bug",
      "rock"
    ],
    "hp": 200,
    "attack": 20,
    "defense": 460,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo bug. Shuckle mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 214,
    "name": "Heracross",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png",
    "types": [
      "bug",
      "fighting"
    ],
    "hp": 800,
    "attack": 250,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Heracross es un muro infranqueable de tipo bug. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 215,
    "name": "Sneasel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png",
    "types": [
      "dark",
      "ice"
    ],
    "hp": 550,
    "attack": 190,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Sneasel ataca sin piedad. Sus 190 puntos de ataque físico lo convierten en un depredador implacable de tipo dark."
  },
  {
    "id": 216,
    "name": "Teddiursa",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png",
    "types": [
      "normal"
    ],
    "hp": 600,
    "attack": 160,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Teddiursa ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 217,
    "name": "Ursaring",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png",
    "types": [
      "normal"
    ],
    "hp": 900,
    "attack": 260,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Ursaring es un muro infranqueable de tipo normal. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 218,
    "name": "Slugma",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png",
    "types": [
      "fire"
    ],
    "hp": 400,
    "attack": 80,
    "defense": 80,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fire. Slugma mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 219,
    "name": "Magcargo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png",
    "types": [
      "fire",
      "rock"
    ],
    "hp": 600,
    "attack": 100,
    "defense": 240,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo fire. Magcargo mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 220,
    "name": "Swinub",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    "types": [
      "ice",
      "ground"
    ],
    "hp": 500,
    "attack": 100,
    "defense": 80,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ice. Swinub mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 221,
    "name": "Piloswine",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png",
    "types": [
      "ice",
      "ground"
    ],
    "hp": 1000,
    "attack": 200,
    "defense": 160,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 5,
    "rarity": "rare",
    "description": "Piloswine es un muro infranqueable de tipo ice. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 222,
    "name": "Corsola",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png",
    "types": [
      "water",
      "rock"
    ],
    "hp": 650,
    "attack": 110,
    "defense": 190,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Corsola es un muro infranqueable de tipo water. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 223,
    "name": "Remoraid",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png",
    "types": [
      "water"
    ],
    "hp": 350,
    "attack": 130,
    "defense": 70,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Remoraid ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 224,
    "name": "Octillery",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png",
    "types": [
      "water"
    ],
    "hp": 750,
    "attack": 210,
    "defense": 150,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Octillery es un muro infranqueable de tipo water. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 225,
    "name": "Delibird",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png",
    "types": [
      "ice",
      "flying"
    ],
    "hp": 450,
    "attack": 110,
    "defense": 90,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 3,
    "rarity": "rare",
    "description": "Consciente de su poder, Delibird ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo ice. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 226,
    "name": "Mantine",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png",
    "types": [
      "water",
      "flying"
    ],
    "hp": 850,
    "attack": 80,
    "defense": 140,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Mantine es un muro infranqueable de tipo water. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 227,
    "name": "Skarmory",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png",
    "types": [
      "steel",
      "flying"
    ],
    "hp": 650,
    "attack": 160,
    "defense": 280,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Skarmory es un muro infranqueable de tipo steel. Su asombrosa defensa de 280 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 228,
    "name": "Houndour",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png",
    "types": [
      "dark",
      "fire"
    ],
    "hp": 450,
    "attack": 120,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Houndour ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo dark."
  },
  {
    "id": 229,
    "name": "Houndoom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png",
    "types": [
      "dark",
      "fire"
    ],
    "hp": 750,
    "attack": 180,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Houndoom ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo dark. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 230,
    "name": "Kingdra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png",
    "types": [
      "water",
      "dragon"
    ],
    "hp": 750,
    "attack": 190,
    "defense": 190,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Kingdra es un muro infranqueable de tipo water. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 231,
    "name": "Phanpy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png",
    "types": [
      "ground"
    ],
    "hp": 900,
    "attack": 120,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Phanpy es un muro infranqueable de tipo ground. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 232,
    "name": "Donphan",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png",
    "types": [
      "ground"
    ],
    "hp": 900,
    "attack": 240,
    "defense": 240,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Donphan es un muro infranqueable de tipo ground. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 233,
    "name": "Porygon2",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png",
    "types": [
      "normal"
    ],
    "hp": 850,
    "attack": 160,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Porygon2 es un muro infranqueable de tipo normal. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 234,
    "name": "Stantler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png",
    "types": [
      "normal"
    ],
    "hp": 730,
    "attack": 190,
    "defense": 124,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Stantler es un muro infranqueable de tipo normal. Su asombrosa defensa de 124 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 235,
    "name": "Smeargle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png",
    "types": [
      "normal"
    ],
    "hp": 550,
    "attack": 40,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Smeargle mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 236,
    "name": "Tyrogue",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png",
    "types": [
      "fighting"
    ],
    "hp": 350,
    "attack": 70,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fighting. Tyrogue mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 237,
    "name": "Hitmontop",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png",
    "types": [
      "fighting"
    ],
    "hp": 500,
    "attack": 190,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Hitmontop ataca sin piedad. Sus 190 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 238,
    "name": "Smoochum",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png",
    "types": [
      "ice",
      "psychic"
    ],
    "hp": 450,
    "attack": 60,
    "defense": 30,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ice. Smoochum mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 239,
    "name": "Elekid",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png",
    "types": [
      "electric"
    ],
    "hp": 450,
    "attack": 126,
    "defense": 74,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Elekid ataca sin piedad. Sus 126 puntos de ataque físico lo convierten en un depredador implacable de tipo electric."
  },
  {
    "id": 240,
    "name": "Magby",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png",
    "types": [
      "fire"
    ],
    "hp": 450,
    "attack": 150,
    "defense": 74,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Magby ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 241,
    "name": "Miltank",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png",
    "types": [
      "normal"
    ],
    "hp": 950,
    "attack": 160,
    "defense": 210,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Miltank es un muro infranqueable de tipo normal. Su asombrosa defensa de 210 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 242,
    "name": "Blissey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png",
    "types": [
      "normal"
    ],
    "hp": 1200,
    "attack": 20,
    "defense": 20,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 20,
    "rarity": "legendary",
    "description": "Una criatura versátil de tipo normal. Blissey mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 243,
    "name": "Raikou",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png",
    "types": [
      "electric"
    ],
    "hp": 900,
    "attack": 170,
    "defense": 150,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Raikou es un muro infranqueable de tipo electric. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 244,
    "name": "Entei",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png",
    "types": [
      "fire"
    ],
    "hp": 1150,
    "attack": 230,
    "defense": 170,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Entei es un muro infranqueable de tipo fire. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 245,
    "name": "Suicune",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png",
    "types": [
      "water"
    ],
    "hp": 1000,
    "attack": 150,
    "defense": 230,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Suicune es un muro infranqueable de tipo water. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 246,
    "name": "Larvitar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png",
    "types": [
      "rock",
      "ground"
    ],
    "hp": 500,
    "attack": 128,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Larvitar ataca sin piedad. Sus 128 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 247,
    "name": "Pupitar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png",
    "types": [
      "rock",
      "ground"
    ],
    "hp": 700,
    "attack": 168,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Pupitar es un muro infranqueable de tipo rock. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 248,
    "name": "Tyranitar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png",
    "types": [
      "rock",
      "dark"
    ],
    "hp": 1000,
    "attack": 268,
    "defense": 220,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Tyranitar es un muro infranqueable de tipo rock. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 249,
    "name": "Lugia",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
    "types": [
      "psychic",
      "flying"
    ],
    "hp": 1060,
    "attack": 180,
    "defense": 260,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Lugia es un muro infranqueable de tipo psychic. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 250,
    "name": "Ho-oh",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png",
    "types": [
      "fire",
      "flying"
    ],
    "hp": 1060,
    "attack": 260,
    "defense": 180,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Ho-oh es un muro infranqueable de tipo fire. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 251,
    "name": "Celebi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png",
    "types": [
      "psychic",
      "grass"
    ],
    "hp": 1000,
    "attack": 200,
    "defense": 200,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Celebi es un muro infranqueable de tipo psychic. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 252,
    "name": "Treecko",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
    "types": [
      "grass"
    ],
    "hp": 400,
    "attack": 90,
    "defense": 70,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Treecko mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 253,
    "name": "Grovyle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png",
    "types": [
      "grass"
    ],
    "hp": 500,
    "attack": 130,
    "defense": 90,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Grovyle ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 254,
    "name": "Sceptile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
    "types": [
      "grass"
    ],
    "hp": 700,
    "attack": 170,
    "defense": 130,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Sceptile es un muro infranqueable de tipo grass. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 255,
    "name": "Torchic",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
    "types": [
      "fire"
    ],
    "hp": 450,
    "attack": 120,
    "defense": 80,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Torchic ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 256,
    "name": "Combusken",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 600,
    "attack": 170,
    "defense": 120,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Combusken ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo fire. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 257,
    "name": "Blaziken",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 800,
    "attack": 240,
    "defense": 140,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Blaziken es un muro infranqueable de tipo fire. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 258,
    "name": "Mudkip",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
    "types": [
      "water"
    ],
    "hp": 500,
    "attack": 140,
    "defense": 100,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Mudkip ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 259,
    "name": "Marshtomp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png",
    "types": [
      "water",
      "ground"
    ],
    "hp": 700,
    "attack": 170,
    "defense": 140,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Marshtomp es un muro infranqueable de tipo water. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 260,
    "name": "Swampert",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png",
    "types": [
      "water",
      "ground"
    ],
    "hp": 1000,
    "attack": 220,
    "defense": 180,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Swampert es un muro infranqueable de tipo water. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 261,
    "name": "Poochyena",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png",
    "types": [
      "dark"
    ],
    "hp": 350,
    "attack": 110,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Poochyena ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo dark."
  },
  {
    "id": 262,
    "name": "Mightyena",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png",
    "types": [
      "dark"
    ],
    "hp": 700,
    "attack": 180,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Mightyena es un muro infranqueable de tipo dark. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 263,
    "name": "Zigzagoon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png",
    "types": [
      "normal"
    ],
    "hp": 380,
    "attack": 60,
    "defense": 82,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Zigzagoon mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 264,
    "name": "Linoone",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png",
    "types": [
      "normal"
    ],
    "hp": 780,
    "attack": 140,
    "defense": 122,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Linoone es un muro infranqueable de tipo normal. Su asombrosa defensa de 122 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 265,
    "name": "Wurmple",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png",
    "types": [
      "bug"
    ],
    "hp": 450,
    "attack": 90,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Wurmple mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 266,
    "name": "Silcoon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png",
    "types": [
      "bug"
    ],
    "hp": 500,
    "attack": 70,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Silcoon mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 267,
    "name": "Beautifly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 600,
    "attack": 140,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Beautifly ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 268,
    "name": "Cascoon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png",
    "types": [
      "bug"
    ],
    "hp": 500,
    "attack": 70,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Cascoon mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 269,
    "name": "Dustox",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 600,
    "attack": 100,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo bug. Dustox mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 270,
    "name": "Lotad",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png",
    "types": [
      "water",
      "grass"
    ],
    "hp": 400,
    "attack": 60,
    "defense": 60,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Lotad mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 271,
    "name": "Lombre",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png",
    "types": [
      "water",
      "grass"
    ],
    "hp": 600,
    "attack": 100,
    "defense": 100,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 3,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo water. Lombre mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 272,
    "name": "Ludicolo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png",
    "types": [
      "water",
      "grass"
    ],
    "hp": 800,
    "attack": 140,
    "defense": 140,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Ludicolo es un muro infranqueable de tipo water. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 273,
    "name": "Seedot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png",
    "types": [
      "grass"
    ],
    "hp": 400,
    "attack": 80,
    "defense": 100,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Seedot mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 274,
    "name": "Nuzleaf",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png",
    "types": [
      "grass",
      "dark"
    ],
    "hp": 700,
    "attack": 140,
    "defense": 80,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Consciente de su poder, Nuzleaf ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 275,
    "name": "Shiftry",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png",
    "types": [
      "grass",
      "dark"
    ],
    "hp": 900,
    "attack": 200,
    "defense": 120,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Shiftry es un muro infranqueable de tipo grass. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 276,
    "name": "Taillow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 400,
    "attack": 110,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Taillow ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 277,
    "name": "Swellow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 600,
    "attack": 170,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Swellow ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 278,
    "name": "Wingull",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png",
    "types": [
      "water",
      "flying"
    ],
    "hp": 400,
    "attack": 60,
    "defense": 60,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Wingull mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 279,
    "name": "Pelipper",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png",
    "types": [
      "water",
      "flying"
    ],
    "hp": 600,
    "attack": 100,
    "defense": 200,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo water. Pelipper mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 280,
    "name": "Ralts",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "hp": 280,
    "attack": 50,
    "defense": 50,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Ralts mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 281,
    "name": "Kirlia",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "hp": 380,
    "attack": 70,
    "defense": 70,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 3,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Kirlia mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 282,
    "name": "Gardevoir",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "hp": 680,
    "attack": 130,
    "defense": 130,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Gardevoir es un muro infranqueable de tipo psychic. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 283,
    "name": "Surskit",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png",
    "types": [
      "bug",
      "water"
    ],
    "hp": 400,
    "attack": 60,
    "defense": 64,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Surskit mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 284,
    "name": "Masquerain",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 700,
    "attack": 120,
    "defense": 124,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Masquerain es un muro infranqueable de tipo bug. Su asombrosa defensa de 124 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 285,
    "name": "Shroomish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png",
    "types": [
      "grass"
    ],
    "hp": 600,
    "attack": 80,
    "defense": 120,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Shroomish mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 286,
    "name": "Breloom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png",
    "types": [
      "grass",
      "fighting"
    ],
    "hp": 600,
    "attack": 260,
    "defense": 160,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Breloom ataca sin piedad. Sus 260 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 287,
    "name": "Slakoth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png",
    "types": [
      "normal"
    ],
    "hp": 600,
    "attack": 120,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Slakoth ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 288,
    "name": "Vigoroth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png",
    "types": [
      "normal"
    ],
    "hp": 800,
    "attack": 160,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Vigoroth es un muro infranqueable de tipo normal. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 289,
    "name": "Slaking",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png",
    "types": [
      "normal"
    ],
    "hp": 1200,
    "attack": 320,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Slaking es un muro infranqueable de tipo normal. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 290,
    "name": "Nincada",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png",
    "types": [
      "bug",
      "ground"
    ],
    "hp": 310,
    "attack": 90,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Nincada mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 291,
    "name": "Ninjask",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 610,
    "attack": 180,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Ninjask ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 292,
    "name": "Shedinja",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png",
    "types": [
      "bug",
      "ghost"
    ],
    "hp": 10,
    "attack": 180,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Shedinja ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 293,
    "name": "Whismur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png",
    "types": [
      "normal"
    ],
    "hp": 640,
    "attack": 102,
    "defense": 46,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Whismur ataca sin piedad. Sus 102 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 294,
    "name": "Loudred",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png",
    "types": [
      "normal"
    ],
    "hp": 840,
    "attack": 142,
    "defense": 86,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Loudred ataca sin piedad. Sus 142 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 295,
    "name": "Exploud",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png",
    "types": [
      "normal"
    ],
    "hp": 1040,
    "attack": 182,
    "defense": 126,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Exploud es un muro infranqueable de tipo normal. Su asombrosa defensa de 126 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 296,
    "name": "Makuhita",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png",
    "types": [
      "fighting"
    ],
    "hp": 720,
    "attack": 120,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Makuhita ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting."
  },
  {
    "id": 297,
    "name": "Hariyama",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png",
    "types": [
      "fighting"
    ],
    "hp": 1200,
    "attack": 240,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Hariyama es un muro infranqueable de tipo fighting. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 298,
    "name": "Azurill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png",
    "types": [
      "normal",
      "fairy"
    ],
    "hp": 500,
    "attack": 40,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Azurill mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 299,
    "name": "Nosepass",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png",
    "types": [
      "rock"
    ],
    "hp": 300,
    "attack": 90,
    "defense": 270,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo rock. Nosepass mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 300,
    "name": "Skitty",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png",
    "types": [
      "normal"
    ],
    "hp": 500,
    "attack": 90,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Skitty mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 301,
    "name": "Delcatty",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png",
    "types": [
      "normal"
    ],
    "hp": 700,
    "attack": 130,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Delcatty es un muro infranqueable de tipo normal. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 302,
    "name": "Sableye",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png",
    "types": [
      "dark",
      "ghost"
    ],
    "hp": 500,
    "attack": 150,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Sableye ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo dark. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 303,
    "name": "Mawile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png",
    "types": [
      "steel",
      "fairy"
    ],
    "hp": 500,
    "attack": 170,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Mawile ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo steel. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 304,
    "name": "Aron",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png",
    "types": [
      "steel",
      "rock"
    ],
    "hp": 500,
    "attack": 140,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Aron ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo steel."
  },
  {
    "id": 305,
    "name": "Lairon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png",
    "types": [
      "steel",
      "rock"
    ],
    "hp": 600,
    "attack": 180,
    "defense": 280,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Lairon ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo steel. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 306,
    "name": "Aggron",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png",
    "types": [
      "steel",
      "rock"
    ],
    "hp": 700,
    "attack": 220,
    "defense": 360,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Aggron es un muro infranqueable de tipo steel. Su asombrosa defensa de 360 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 307,
    "name": "Meditite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "hp": 300,
    "attack": 80,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fighting. Meditite mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 308,
    "name": "Medicham",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "hp": 600,
    "attack": 120,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Medicham ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 309,
    "name": "Electrike",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png",
    "types": [
      "electric"
    ],
    "hp": 400,
    "attack": 90,
    "defense": 80,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Electrike mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 310,
    "name": "Manectric",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png",
    "types": [
      "electric"
    ],
    "hp": 700,
    "attack": 150,
    "defense": 120,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Manectric es un muro infranqueable de tipo electric. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 311,
    "name": "Plusle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png",
    "types": [
      "electric"
    ],
    "hp": 600,
    "attack": 100,
    "defense": 80,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo electric. Plusle mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 312,
    "name": "Minun",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png",
    "types": [
      "electric"
    ],
    "hp": 600,
    "attack": 80,
    "defense": 100,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo electric. Minun mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 313,
    "name": "Volbeat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png",
    "types": [
      "bug"
    ],
    "hp": 650,
    "attack": 146,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Volbeat es un muro infranqueable de tipo bug. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 314,
    "name": "Illumise",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png",
    "types": [
      "bug"
    ],
    "hp": 650,
    "attack": 94,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Illumise es un muro infranqueable de tipo bug. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 315,
    "name": "Roselia",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 500,
    "attack": 120,
    "defense": 90,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Roselia ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 316,
    "name": "Gulpin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png",
    "types": [
      "poison"
    ],
    "hp": 700,
    "attack": 86,
    "defense": 106,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Gulpin es un muro infranqueable de tipo poison. Su asombrosa defensa de 106 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 317,
    "name": "Swalot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png",
    "types": [
      "poison"
    ],
    "hp": 1000,
    "attack": 146,
    "defense": 166,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Swalot es un muro infranqueable de tipo poison. Su asombrosa defensa de 166 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 318,
    "name": "Carvanha",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png",
    "types": [
      "water",
      "dark"
    ],
    "hp": 450,
    "attack": 180,
    "defense": 40,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Carvanha ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 319,
    "name": "Sharpedo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png",
    "types": [
      "water",
      "dark"
    ],
    "hp": 700,
    "attack": 240,
    "defense": 80,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Sharpedo ataca sin piedad. Sus 240 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 320,
    "name": "Wailmer",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png",
    "types": [
      "water"
    ],
    "hp": 1200,
    "attack": 140,
    "defense": 70,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Wailmer ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 321,
    "name": "Wailord",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png",
    "types": [
      "water"
    ],
    "hp": 1200,
    "attack": 180,
    "defense": 90,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Wailord ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 322,
    "name": "Numel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png",
    "types": [
      "fire",
      "ground"
    ],
    "hp": 600,
    "attack": 120,
    "defense": 80,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Numel ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 323,
    "name": "Camerupt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png",
    "types": [
      "fire",
      "ground"
    ],
    "hp": 700,
    "attack": 200,
    "defense": 140,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Camerupt es un muro infranqueable de tipo fire. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 324,
    "name": "Torkoal",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png",
    "types": [
      "fire"
    ],
    "hp": 700,
    "attack": 170,
    "defense": 280,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Torkoal es un muro infranqueable de tipo fire. Su asombrosa defensa de 280 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 325,
    "name": "Spoink",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png",
    "types": [
      "psychic"
    ],
    "hp": 600,
    "attack": 50,
    "defense": 70,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Spoink mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 326,
    "name": "Grumpig",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png",
    "types": [
      "psychic"
    ],
    "hp": 800,
    "attack": 90,
    "defense": 130,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Grumpig es un muro infranqueable de tipo psychic. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 327,
    "name": "Spinda",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png",
    "types": [
      "normal"
    ],
    "hp": 600,
    "attack": 120,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Spinda ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 328,
    "name": "Trapinch",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png",
    "types": [
      "ground"
    ],
    "hp": 450,
    "attack": 200,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Trapinch ataca sin piedad. Sus 200 puntos de ataque físico lo convierten en un depredador implacable de tipo ground."
  },
  {
    "id": 329,
    "name": "Vibrava",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png",
    "types": [
      "ground",
      "dragon"
    ],
    "hp": 500,
    "attack": 140,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Consciente de su poder, Vibrava ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo ground. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 330,
    "name": "Flygon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png",
    "types": [
      "ground",
      "dragon"
    ],
    "hp": 800,
    "attack": 200,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Flygon es un muro infranqueable de tipo ground. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 331,
    "name": "Cacnea",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png",
    "types": [
      "grass"
    ],
    "hp": 500,
    "attack": 170,
    "defense": 80,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Cacnea ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 332,
    "name": "Cacturne",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png",
    "types": [
      "grass",
      "dark"
    ],
    "hp": 700,
    "attack": 230,
    "defense": 120,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Cacturne es un muro infranqueable de tipo grass. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 333,
    "name": "Swablu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 450,
    "attack": 80,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Swablu mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 334,
    "name": "Altaria",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png",
    "types": [
      "dragon",
      "flying"
    ],
    "hp": 750,
    "attack": 140,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Altaria es un muro infranqueable de tipo dragon. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 335,
    "name": "Zangoose",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png",
    "types": [
      "normal"
    ],
    "hp": 730,
    "attack": 230,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Zangoose es un muro infranqueable de tipo normal. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 336,
    "name": "Seviper",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png",
    "types": [
      "poison"
    ],
    "hp": 730,
    "attack": 200,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Seviper es un muro infranqueable de tipo poison. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 337,
    "name": "Lunatone",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png",
    "types": [
      "rock",
      "psychic"
    ],
    "hp": 900,
    "attack": 110,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Lunatone es un muro infranqueable de tipo rock. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 338,
    "name": "Solrock",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png",
    "types": [
      "rock",
      "psychic"
    ],
    "hp": 900,
    "attack": 190,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Solrock es un muro infranqueable de tipo rock. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 339,
    "name": "Barboach",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png",
    "types": [
      "water",
      "ground"
    ],
    "hp": 500,
    "attack": 96,
    "defense": 86,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Barboach mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 340,
    "name": "Whiscash",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png",
    "types": [
      "water",
      "ground"
    ],
    "hp": 1100,
    "attack": 156,
    "defense": 146,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Whiscash es un muro infranqueable de tipo water. Su asombrosa defensa de 146 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 341,
    "name": "Corphish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png",
    "types": [
      "water"
    ],
    "hp": 430,
    "attack": 160,
    "defense": 130,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Corphish ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 342,
    "name": "Crawdaunt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png",
    "types": [
      "water",
      "dark"
    ],
    "hp": 630,
    "attack": 240,
    "defense": 170,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Crawdaunt es un muro infranqueable de tipo water. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 343,
    "name": "Baltoy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png",
    "types": [
      "ground",
      "psychic"
    ],
    "hp": 400,
    "attack": 80,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ground. Baltoy mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 344,
    "name": "Claydol",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png",
    "types": [
      "ground",
      "psychic"
    ],
    "hp": 600,
    "attack": 140,
    "defense": 210,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Claydol ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo ground. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 345,
    "name": "Lileep",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png",
    "types": [
      "rock",
      "grass"
    ],
    "hp": 660,
    "attack": 82,
    "defense": 154,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Lileep es un muro infranqueable de tipo rock. Su asombrosa defensa de 154 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 346,
    "name": "Cradily",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png",
    "types": [
      "rock",
      "grass"
    ],
    "hp": 860,
    "attack": 162,
    "defense": 194,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Cradily es un muro infranqueable de tipo rock. Su asombrosa defensa de 194 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 347,
    "name": "Anorith",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png",
    "types": [
      "rock",
      "bug"
    ],
    "hp": 450,
    "attack": 190,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Anorith ataca sin piedad. Sus 190 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 348,
    "name": "Armaldo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png",
    "types": [
      "rock",
      "bug"
    ],
    "hp": 750,
    "attack": 250,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Armaldo es un muro infranqueable de tipo rock. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 349,
    "name": "Feebas",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png",
    "types": [
      "water"
    ],
    "hp": 200,
    "attack": 30,
    "defense": 40,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Feebas mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 350,
    "name": "Milotic",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png",
    "types": [
      "water"
    ],
    "hp": 950,
    "attack": 120,
    "defense": 158,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 6,
    "rarity": "rare",
    "description": "Milotic es un muro infranqueable de tipo water. Su asombrosa defensa de 158 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 351,
    "name": "Castform",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png",
    "types": [
      "normal"
    ],
    "hp": 700,
    "attack": 140,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Castform es un muro infranqueable de tipo normal. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 352,
    "name": "Kecleon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png",
    "types": [
      "normal"
    ],
    "hp": 600,
    "attack": 180,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Kecleon ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 353,
    "name": "Shuppet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png",
    "types": [
      "ghost"
    ],
    "hp": 440,
    "attack": 150,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Shuppet ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost."
  },
  {
    "id": 354,
    "name": "Banette",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png",
    "types": [
      "ghost"
    ],
    "hp": 640,
    "attack": 230,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Banette es un muro infranqueable de tipo ghost. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 355,
    "name": "Duskull",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png",
    "types": [
      "ghost"
    ],
    "hp": 200,
    "attack": 80,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ghost. Duskull mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 356,
    "name": "Dusclops",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png",
    "types": [
      "ghost"
    ],
    "hp": 400,
    "attack": 140,
    "defense": 260,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Dusclops ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 357,
    "name": "Tropius",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png",
    "types": [
      "grass",
      "flying"
    ],
    "hp": 990,
    "attack": 136,
    "defense": 166,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Tropius es un muro infranqueable de tipo grass. Su asombrosa defensa de 166 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 358,
    "name": "Chimecho",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png",
    "types": [
      "psychic"
    ],
    "hp": 750,
    "attack": 100,
    "defense": 160,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Chimecho es un muro infranqueable de tipo psychic. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 359,
    "name": "Absol",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png",
    "types": [
      "dark"
    ],
    "hp": 650,
    "attack": 260,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Absol es un muro infranqueable de tipo dark. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 360,
    "name": "Wynaut",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png",
    "types": [
      "psychic"
    ],
    "hp": 950,
    "attack": 46,
    "defense": 96,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Wynaut mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 361,
    "name": "Snorunt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png",
    "types": [
      "ice"
    ],
    "hp": 500,
    "attack": 100,
    "defense": 100,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ice. Snorunt mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 362,
    "name": "Glalie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png",
    "types": [
      "ice"
    ],
    "hp": 800,
    "attack": 160,
    "defense": 160,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 5,
    "rarity": "rare",
    "description": "Glalie es un muro infranqueable de tipo ice. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 363,
    "name": "Spheal",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png",
    "types": [
      "ice",
      "water"
    ],
    "hp": 700,
    "attack": 80,
    "defense": 100,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ice. Spheal mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 364,
    "name": "Sealeo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png",
    "types": [
      "ice",
      "water"
    ],
    "hp": 900,
    "attack": 120,
    "defense": 140,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 4,
    "rarity": "rare",
    "description": "Sealeo es un muro infranqueable de tipo ice. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 365,
    "name": "Walrein",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png",
    "types": [
      "ice",
      "water"
    ],
    "hp": 1100,
    "attack": 160,
    "defense": 180,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Walrein es un muro infranqueable de tipo ice. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 366,
    "name": "Clamperl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png",
    "types": [
      "water"
    ],
    "hp": 350,
    "attack": 128,
    "defense": 170,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Clamperl ataca sin piedad. Sus 128 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 367,
    "name": "Huntail",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png",
    "types": [
      "water"
    ],
    "hp": 550,
    "attack": 208,
    "defense": 210,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Huntail ataca sin piedad. Sus 208 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 368,
    "name": "Gorebyss",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png",
    "types": [
      "water"
    ],
    "hp": 550,
    "attack": 168,
    "defense": 210,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Gorebyss ataca sin piedad. Sus 168 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 369,
    "name": "Relicanth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png",
    "types": [
      "water",
      "rock"
    ],
    "hp": 1000,
    "attack": 180,
    "defense": 260,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Relicanth es un muro infranqueable de tipo water. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 370,
    "name": "Luvdisc",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png",
    "types": [
      "water"
    ],
    "hp": 430,
    "attack": 60,
    "defense": 110,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 3,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo water. Luvdisc mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 371,
    "name": "Bagon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png",
    "types": [
      "dragon"
    ],
    "hp": 450,
    "attack": 150,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Bagon ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo dragon."
  },
  {
    "id": 372,
    "name": "Shelgon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png",
    "types": [
      "dragon"
    ],
    "hp": 650,
    "attack": 190,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Shelgon es un muro infranqueable de tipo dragon. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 373,
    "name": "Salamence",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png",
    "types": [
      "dragon",
      "flying"
    ],
    "hp": 950,
    "attack": 270,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Salamence es un muro infranqueable de tipo dragon. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 374,
    "name": "Beldum",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png",
    "types": [
      "steel",
      "psychic"
    ],
    "hp": 400,
    "attack": 110,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Beldum ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo steel."
  },
  {
    "id": 375,
    "name": "Metang",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png",
    "types": [
      "steel",
      "psychic"
    ],
    "hp": 600,
    "attack": 150,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Metang ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo steel. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 376,
    "name": "Metagross",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png",
    "types": [
      "steel",
      "psychic"
    ],
    "hp": 800,
    "attack": 270,
    "defense": 260,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Metagross es un muro infranqueable de tipo steel. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 377,
    "name": "Regirock",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png",
    "types": [
      "rock"
    ],
    "hp": 800,
    "attack": 200,
    "defense": 400,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Regirock es un muro infranqueable de tipo rock. Su asombrosa defensa de 400 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 378,
    "name": "Regice",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png",
    "types": [
      "ice"
    ],
    "hp": 800,
    "attack": 100,
    "defense": 200,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Regice es un muro infranqueable de tipo ice. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 379,
    "name": "Registeel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png",
    "types": [
      "steel"
    ],
    "hp": 800,
    "attack": 150,
    "defense": 300,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Registeel es un muro infranqueable de tipo steel. Su asombrosa defensa de 300 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 380,
    "name": "Latias",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "hp": 800,
    "attack": 160,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Latias es un muro infranqueable de tipo dragon. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 381,
    "name": "Latios",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "hp": 800,
    "attack": 180,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Latios es un muro infranqueable de tipo dragon. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 382,
    "name": "Kyogre",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png",
    "types": [
      "water"
    ],
    "hp": 1000,
    "attack": 200,
    "defense": 180,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Kyogre es un muro infranqueable de tipo water. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 383,
    "name": "Groudon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png",
    "types": [
      "ground"
    ],
    "hp": 1000,
    "attack": 300,
    "defense": 280,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Groudon es un muro infranqueable de tipo ground. Su asombrosa defensa de 280 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 384,
    "name": "Rayquaza",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
    "types": [
      "dragon",
      "flying"
    ],
    "hp": 1050,
    "attack": 300,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Rayquaza es un muro infranqueable de tipo dragon. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 385,
    "name": "Jirachi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png",
    "types": [
      "steel",
      "psychic"
    ],
    "hp": 1000,
    "attack": 200,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Jirachi es un muro infranqueable de tipo steel. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 386,
    "name": "Deoxys-normal",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png",
    "types": [
      "psychic"
    ],
    "hp": 500,
    "attack": 300,
    "defense": 100,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Consciente de su poder, Deoxys-normal ataca sin piedad. Sus 300 puntos de ataque físico lo convierten en un depredador implacable de tipo psychic. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 387,
    "name": "Turtwig",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
    "types": [
      "grass"
    ],
    "hp": 550,
    "attack": 136,
    "defense": 128,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Turtwig ataca sin piedad. Sus 136 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 388,
    "name": "Grotle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png",
    "types": [
      "grass"
    ],
    "hp": 750,
    "attack": 178,
    "defense": 170,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Grotle es un muro infranqueable de tipo grass. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 389,
    "name": "Torterra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png",
    "types": [
      "grass",
      "ground"
    ],
    "hp": 950,
    "attack": 218,
    "defense": 210,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Torterra es un muro infranqueable de tipo grass. Su asombrosa defensa de 210 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 390,
    "name": "Chimchar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png",
    "types": [
      "fire"
    ],
    "hp": 440,
    "attack": 116,
    "defense": 88,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Chimchar ataca sin piedad. Sus 116 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 391,
    "name": "Monferno",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 640,
    "attack": 156,
    "defense": 104,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 4,
    "rarity": "rare",
    "description": "Monferno es un muro infranqueable de tipo fire. Su asombrosa defensa de 104 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 392,
    "name": "Infernape",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 760,
    "attack": 208,
    "defense": 142,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Infernape es un muro infranqueable de tipo fire. Su asombrosa defensa de 142 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 393,
    "name": "Piplup",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png",
    "types": [
      "water"
    ],
    "hp": 530,
    "attack": 102,
    "defense": 106,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Piplup ataca sin piedad. Sus 102 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 394,
    "name": "Prinplup",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png",
    "types": [
      "water"
    ],
    "hp": 640,
    "attack": 132,
    "defense": 136,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Prinplup es un muro infranqueable de tipo water. Su asombrosa defensa de 136 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 395,
    "name": "Empoleon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png",
    "types": [
      "water",
      "steel"
    ],
    "hp": 840,
    "attack": 172,
    "defense": 176,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Empoleon es un muro infranqueable de tipo water. Su asombrosa defensa de 176 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 396,
    "name": "Starly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 400,
    "attack": 110,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Starly ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 397,
    "name": "Staravia",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 550,
    "attack": 150,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Consciente de su poder, Staravia ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 398,
    "name": "Staraptor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 850,
    "attack": 240,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Staraptor es un muro infranqueable de tipo normal. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 399,
    "name": "Bidoof",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png",
    "types": [
      "normal"
    ],
    "hp": 590,
    "attack": 90,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Bidoof mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 400,
    "name": "Bibarel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png",
    "types": [
      "normal",
      "water"
    ],
    "hp": 790,
    "attack": 170,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Bibarel es un muro infranqueable de tipo normal. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 401,
    "name": "Kricketot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png",
    "types": [
      "bug"
    ],
    "hp": 370,
    "attack": 50,
    "defense": 82,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Kricketot mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 402,
    "name": "Kricketune",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png",
    "types": [
      "bug"
    ],
    "hp": 770,
    "attack": 170,
    "defense": 102,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Kricketune es un muro infranqueable de tipo bug. Su asombrosa defensa de 102 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 403,
    "name": "Shinx",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png",
    "types": [
      "electric"
    ],
    "hp": 450,
    "attack": 130,
    "defense": 68,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Shinx ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo electric."
  },
  {
    "id": 404,
    "name": "Luxio",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png",
    "types": [
      "electric"
    ],
    "hp": 600,
    "attack": 170,
    "defense": 98,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Luxio ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo electric. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 405,
    "name": "Luxray",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png",
    "types": [
      "electric"
    ],
    "hp": 800,
    "attack": 240,
    "defense": 158,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Luxray es un muro infranqueable de tipo electric. Su asombrosa defensa de 158 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 406,
    "name": "Budew",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 400,
    "attack": 60,
    "defense": 70,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Budew mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 407,
    "name": "Roserade",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 600,
    "attack": 140,
    "defense": 130,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Consciente de su poder, Roserade ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 408,
    "name": "Cranidos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png",
    "types": [
      "rock"
    ],
    "hp": 670,
    "attack": 250,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Cranidos ataca sin piedad. Sus 250 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 409,
    "name": "Rampardos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png",
    "types": [
      "rock"
    ],
    "hp": 970,
    "attack": 330,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Rampardos es un muro infranqueable de tipo rock. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 410,
    "name": "Shieldon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png",
    "types": [
      "rock",
      "steel"
    ],
    "hp": 300,
    "attack": 84,
    "defense": 236,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo rock. Shieldon mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 411,
    "name": "Bastiodon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png",
    "types": [
      "rock",
      "steel"
    ],
    "hp": 600,
    "attack": 104,
    "defense": 336,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Bastiodon ataca sin piedad. Sus 104 puntos de ataque físico lo convierten en un depredador implacable de tipo rock. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 412,
    "name": "Burmy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png",
    "types": [
      "bug"
    ],
    "hp": 400,
    "attack": 58,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Burmy mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 413,
    "name": "Wormadam-plant",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png",
    "types": [
      "bug",
      "grass"
    ],
    "hp": 600,
    "attack": 118,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Wormadam-plant ataca sin piedad. Sus 118 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 414,
    "name": "Mothim",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 700,
    "attack": 188,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Mothim ataca sin piedad. Sus 188 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 415,
    "name": "Combee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 300,
    "attack": 60,
    "defense": 84,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Combee mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 416,
    "name": "Vespiquen",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 700,
    "attack": 160,
    "defense": 204,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Vespiquen es un muro infranqueable de tipo bug. Su asombrosa defensa de 204 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 417,
    "name": "Pachirisu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png",
    "types": [
      "electric"
    ],
    "hp": 600,
    "attack": 90,
    "defense": 140,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo electric. Pachirisu mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 418,
    "name": "Buizel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png",
    "types": [
      "water"
    ],
    "hp": 550,
    "attack": 130,
    "defense": 70,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Buizel ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 419,
    "name": "Floatzel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png",
    "types": [
      "water"
    ],
    "hp": 850,
    "attack": 210,
    "defense": 110,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Floatzel es un muro infranqueable de tipo water. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 420,
    "name": "Cherubi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png",
    "types": [
      "grass"
    ],
    "hp": 450,
    "attack": 70,
    "defense": 90,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Cherubi mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 421,
    "name": "Cherrim",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png",
    "types": [
      "grass"
    ],
    "hp": 700,
    "attack": 120,
    "defense": 140,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Cherrim es un muro infranqueable de tipo grass. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 422,
    "name": "Shellos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png",
    "types": [
      "water"
    ],
    "hp": 760,
    "attack": 96,
    "defense": 96,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Shellos mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 423,
    "name": "Gastrodon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png",
    "types": [
      "water",
      "ground"
    ],
    "hp": 1110,
    "attack": 166,
    "defense": 136,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Gastrodon es un muro infranqueable de tipo water. Su asombrosa defensa de 136 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 424,
    "name": "Ambipom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png",
    "types": [
      "normal"
    ],
    "hp": 750,
    "attack": 200,
    "defense": 132,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Ambipom es un muro infranqueable de tipo normal. Su asombrosa defensa de 132 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 425,
    "name": "Drifloon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png",
    "types": [
      "ghost",
      "flying"
    ],
    "hp": 900,
    "attack": 100,
    "defense": 68,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ghost. Drifloon mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 426,
    "name": "Drifblim",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png",
    "types": [
      "ghost",
      "flying"
    ],
    "hp": 1200,
    "attack": 160,
    "defense": 88,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Drifblim ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 427,
    "name": "Buneary",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png",
    "types": [
      "normal"
    ],
    "hp": 550,
    "attack": 132,
    "defense": 88,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Buneary ataca sin piedad. Sus 132 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 428,
    "name": "Lopunny",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png",
    "types": [
      "normal"
    ],
    "hp": 650,
    "attack": 152,
    "defense": 168,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Lopunny es un muro infranqueable de tipo normal. Su asombrosa defensa de 168 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 429,
    "name": "Mismagius",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png",
    "types": [
      "ghost"
    ],
    "hp": 600,
    "attack": 120,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Mismagius ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 430,
    "name": "Honchkrow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png",
    "types": [
      "dark",
      "flying"
    ],
    "hp": 1000,
    "attack": 250,
    "defense": 104,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Honchkrow es un muro infranqueable de tipo dark. Su asombrosa defensa de 104 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 431,
    "name": "Glameow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png",
    "types": [
      "normal"
    ],
    "hp": 490,
    "attack": 110,
    "defense": 84,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Glameow ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 432,
    "name": "Purugly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png",
    "types": [
      "normal"
    ],
    "hp": 710,
    "attack": 164,
    "defense": 128,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Purugly es un muro infranqueable de tipo normal. Su asombrosa defensa de 128 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 433,
    "name": "Chingling",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png",
    "types": [
      "psychic"
    ],
    "hp": 450,
    "attack": 60,
    "defense": 100,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Chingling mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 434,
    "name": "Stunky",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png",
    "types": [
      "poison",
      "dark"
    ],
    "hp": 630,
    "attack": 126,
    "defense": 94,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Stunky ataca sin piedad. Sus 126 puntos de ataque físico lo convierten en un depredador implacable de tipo poison."
  },
  {
    "id": 435,
    "name": "Skuntank",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png",
    "types": [
      "poison",
      "dark"
    ],
    "hp": 1030,
    "attack": 186,
    "defense": 134,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Skuntank es un muro infranqueable de tipo poison. Su asombrosa defensa de 134 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 436,
    "name": "Bronzor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png",
    "types": [
      "steel",
      "psychic"
    ],
    "hp": 570,
    "attack": 48,
    "defense": 172,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo steel. Bronzor mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 437,
    "name": "Bronzong",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png",
    "types": [
      "steel",
      "psychic"
    ],
    "hp": 670,
    "attack": 178,
    "defense": 232,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Bronzong es un muro infranqueable de tipo steel. Su asombrosa defensa de 232 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 438,
    "name": "Bonsly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png",
    "types": [
      "rock"
    ],
    "hp": 500,
    "attack": 160,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Bonsly ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 439,
    "name": "Mime-jr",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "hp": 200,
    "attack": 50,
    "defense": 90,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Mime-jr mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 440,
    "name": "Happiny",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png",
    "types": [
      "normal"
    ],
    "hp": 1000,
    "attack": 10,
    "defense": 10,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo normal. Happiny mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 441,
    "name": "Chatot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 760,
    "attack": 130,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Chatot ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 442,
    "name": "Spiritomb",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png",
    "types": [
      "ghost",
      "dark"
    ],
    "hp": 500,
    "attack": 184,
    "defense": 216,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Spiritomb ataca sin piedad. Sus 184 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 443,
    "name": "Gible",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png",
    "types": [
      "dragon",
      "ground"
    ],
    "hp": 580,
    "attack": 140,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Gible ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo dragon."
  },
  {
    "id": 444,
    "name": "Gabite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png",
    "types": [
      "dragon",
      "ground"
    ],
    "hp": 680,
    "attack": 180,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Gabite es un muro infranqueable de tipo dragon. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 445,
    "name": "Garchomp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png",
    "types": [
      "dragon",
      "ground"
    ],
    "hp": 1080,
    "attack": 260,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Garchomp es un muro infranqueable de tipo dragon. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 446,
    "name": "Munchlax",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png",
    "types": [
      "normal"
    ],
    "hp": 1200,
    "attack": 170,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Munchlax ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 447,
    "name": "Riolu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png",
    "types": [
      "fighting"
    ],
    "hp": 400,
    "attack": 140,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Riolu ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting."
  },
  {
    "id": 448,
    "name": "Lucario",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
    "types": [
      "fighting",
      "steel"
    ],
    "hp": 700,
    "attack": 220,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Lucario es un muro infranqueable de tipo fighting. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 449,
    "name": "Hippopotas",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png",
    "types": [
      "ground"
    ],
    "hp": 680,
    "attack": 144,
    "defense": 156,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Hippopotas es un muro infranqueable de tipo ground. Su asombrosa defensa de 156 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 450,
    "name": "Hippowdon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png",
    "types": [
      "ground"
    ],
    "hp": 1080,
    "attack": 224,
    "defense": 236,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Hippowdon es un muro infranqueable de tipo ground. Su asombrosa defensa de 236 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 451,
    "name": "Skorupi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png",
    "types": [
      "poison",
      "bug"
    ],
    "hp": 400,
    "attack": 100,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo poison. Skorupi mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 452,
    "name": "Drapion",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png",
    "types": [
      "poison",
      "dark"
    ],
    "hp": 700,
    "attack": 180,
    "defense": 220,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Drapion es un muro infranqueable de tipo poison. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 453,
    "name": "Croagunk",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png",
    "types": [
      "poison",
      "fighting"
    ],
    "hp": 480,
    "attack": 122,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Croagunk ataca sin piedad. Sus 122 puntos de ataque físico lo convierten en un depredador implacable de tipo poison."
  },
  {
    "id": 454,
    "name": "Toxicroak",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png",
    "types": [
      "poison",
      "fighting"
    ],
    "hp": 830,
    "attack": 212,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Toxicroak es un muro infranqueable de tipo poison. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 455,
    "name": "Carnivine",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png",
    "types": [
      "grass"
    ],
    "hp": 740,
    "attack": 200,
    "defense": 144,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Carnivine es un muro infranqueable de tipo grass. Su asombrosa defensa de 144 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 456,
    "name": "Finneon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png",
    "types": [
      "water"
    ],
    "hp": 490,
    "attack": 98,
    "defense": 112,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Finneon mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 457,
    "name": "Lumineon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png",
    "types": [
      "water"
    ],
    "hp": 690,
    "attack": 138,
    "defense": 152,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Lumineon es un muro infranqueable de tipo water. Su asombrosa defensa de 152 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 458,
    "name": "Mantyke",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png",
    "types": [
      "water",
      "flying"
    ],
    "hp": 450,
    "attack": 40,
    "defense": 100,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Mantyke mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 459,
    "name": "Snover",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png",
    "types": [
      "grass",
      "ice"
    ],
    "hp": 600,
    "attack": 124,
    "defense": 100,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Snover ataca sin piedad. Sus 124 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 460,
    "name": "Abomasnow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png",
    "types": [
      "grass",
      "ice"
    ],
    "hp": 900,
    "attack": 184,
    "defense": 150,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Abomasnow es un muro infranqueable de tipo grass. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 461,
    "name": "Weavile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png",
    "types": [
      "dark",
      "ice"
    ],
    "hp": 700,
    "attack": 240,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Weavile es un muro infranqueable de tipo dark. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 462,
    "name": "Magnezone",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png",
    "types": [
      "electric",
      "steel"
    ],
    "hp": 700,
    "attack": 140,
    "defense": 230,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Magnezone es un muro infranqueable de tipo electric. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 463,
    "name": "Lickilicky",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png",
    "types": [
      "normal"
    ],
    "hp": 1100,
    "attack": 170,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Lickilicky es un muro infranqueable de tipo normal. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 464,
    "name": "Rhyperior",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png",
    "types": [
      "ground",
      "rock"
    ],
    "hp": 1150,
    "attack": 280,
    "defense": 260,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Rhyperior es un muro infranqueable de tipo ground. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 465,
    "name": "Tangrowth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png",
    "types": [
      "grass"
    ],
    "hp": 1000,
    "attack": 200,
    "defense": 250,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Tangrowth es un muro infranqueable de tipo grass. Su asombrosa defensa de 250 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 466,
    "name": "Electivire",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png",
    "types": [
      "electric"
    ],
    "hp": 750,
    "attack": 246,
    "defense": 134,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Electivire es un muro infranqueable de tipo electric. Su asombrosa defensa de 134 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 467,
    "name": "Magmortar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png",
    "types": [
      "fire"
    ],
    "hp": 750,
    "attack": 190,
    "defense": 134,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Magmortar es un muro infranqueable de tipo fire. Su asombrosa defensa de 134 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 468,
    "name": "Togekiss",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png",
    "types": [
      "fairy",
      "flying"
    ],
    "hp": 850,
    "attack": 100,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Togekiss es un muro infranqueable de tipo fairy. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 469,
    "name": "Yanmega",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 860,
    "attack": 152,
    "defense": 172,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Yanmega es un muro infranqueable de tipo bug. Su asombrosa defensa de 172 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 470,
    "name": "Leafeon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png",
    "types": [
      "grass"
    ],
    "hp": 650,
    "attack": 220,
    "defense": 260,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Leafeon es un muro infranqueable de tipo grass. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 471,
    "name": "Glaceon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png",
    "types": [
      "ice"
    ],
    "hp": 650,
    "attack": 120,
    "defense": 220,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 6,
    "rarity": "rare",
    "description": "Glaceon es un muro infranqueable de tipo ice. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 472,
    "name": "Gliscor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png",
    "types": [
      "ground",
      "flying"
    ],
    "hp": 750,
    "attack": 190,
    "defense": 250,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Gliscor es un muro infranqueable de tipo ground. Su asombrosa defensa de 250 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 473,
    "name": "Mamoswine",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png",
    "types": [
      "ice",
      "ground"
    ],
    "hp": 1100,
    "attack": 260,
    "defense": 160,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Mamoswine es un muro infranqueable de tipo ice. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 474,
    "name": "Porygon-z",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png",
    "types": [
      "normal"
    ],
    "hp": 850,
    "attack": 160,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Porygon-z es un muro infranqueable de tipo normal. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 475,
    "name": "Gallade",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png",
    "types": [
      "psychic",
      "fighting"
    ],
    "hp": 680,
    "attack": 250,
    "defense": 130,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Gallade es un muro infranqueable de tipo psychic. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 476,
    "name": "Probopass",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png",
    "types": [
      "rock",
      "steel"
    ],
    "hp": 600,
    "attack": 110,
    "defense": 290,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Consciente de su poder, Probopass ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo rock. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 477,
    "name": "Dusknoir",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png",
    "types": [
      "ghost"
    ],
    "hp": 450,
    "attack": 200,
    "defense": 270,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Consciente de su poder, Dusknoir ataca sin piedad. Sus 200 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 478,
    "name": "Froslass",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png",
    "types": [
      "ice",
      "ghost"
    ],
    "hp": 700,
    "attack": 160,
    "defense": 140,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 5,
    "rarity": "rare",
    "description": "Froslass es un muro infranqueable de tipo ice. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 479,
    "name": "Rotom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png",
    "types": [
      "electric",
      "ghost"
    ],
    "hp": 500,
    "attack": 100,
    "defense": 154,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo electric. Rotom mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 480,
    "name": "Uxie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png",
    "types": [
      "psychic"
    ],
    "hp": 750,
    "attack": 150,
    "defense": 260,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Uxie es un muro infranqueable de tipo psychic. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 481,
    "name": "Mesprit",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png",
    "types": [
      "psychic"
    ],
    "hp": 800,
    "attack": 210,
    "defense": 210,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Mesprit es un muro infranqueable de tipo psychic. Su asombrosa defensa de 210 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 482,
    "name": "Azelf",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png",
    "types": [
      "psychic"
    ],
    "hp": 750,
    "attack": 250,
    "defense": 140,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Azelf es un muro infranqueable de tipo psychic. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 483,
    "name": "Dialga",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png",
    "types": [
      "steel",
      "dragon"
    ],
    "hp": 1000,
    "attack": 240,
    "defense": 240,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Dialga es un muro infranqueable de tipo steel. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 484,
    "name": "Palkia",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png",
    "types": [
      "water",
      "dragon"
    ],
    "hp": 900,
    "attack": 240,
    "defense": 200,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Palkia es un muro infranqueable de tipo water. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 485,
    "name": "Heatran",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png",
    "types": [
      "fire",
      "steel"
    ],
    "hp": 910,
    "attack": 180,
    "defense": 212,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Heatran es un muro infranqueable de tipo fire. Su asombrosa defensa de 212 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 486,
    "name": "Regigigas",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png",
    "types": [
      "normal"
    ],
    "hp": 1100,
    "attack": 320,
    "defense": 220,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Regigigas es un muro infranqueable de tipo normal. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 487,
    "name": "Giratina-altered",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png",
    "types": [
      "ghost",
      "dragon"
    ],
    "hp": 1200,
    "attack": 200,
    "defense": 240,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Giratina-altered es un muro infranqueable de tipo ghost. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 488,
    "name": "Cresselia",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png",
    "types": [
      "psychic"
    ],
    "hp": 1200,
    "attack": 140,
    "defense": 220,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Cresselia es un muro infranqueable de tipo psychic. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 489,
    "name": "Phione",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png",
    "types": [
      "water"
    ],
    "hp": 800,
    "attack": 160,
    "defense": 160,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Phione es un muro infranqueable de tipo water. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 490,
    "name": "Manaphy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png",
    "types": [
      "water"
    ],
    "hp": 1000,
    "attack": 200,
    "defense": 200,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Manaphy es un muro infranqueable de tipo water. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 491,
    "name": "Darkrai",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png",
    "types": [
      "dark"
    ],
    "hp": 700,
    "attack": 180,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Darkrai es un muro infranqueable de tipo dark. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 492,
    "name": "Shaymin-land",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png",
    "types": [
      "grass"
    ],
    "hp": 1000,
    "attack": 200,
    "defense": 200,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Shaymin-land es un muro infranqueable de tipo grass. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 493,
    "name": "Arceus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png",
    "types": [
      "normal"
    ],
    "hp": 1200,
    "attack": 240,
    "defense": 240,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Arceus es un muro infranqueable de tipo normal. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 494,
    "name": "Victini",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png",
    "types": [
      "psychic",
      "fire"
    ],
    "hp": 1000,
    "attack": 200,
    "defense": 200,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Victini es un muro infranqueable de tipo psychic. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 495,
    "name": "Snivy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png",
    "types": [
      "grass"
    ],
    "hp": 450,
    "attack": 90,
    "defense": 110,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Snivy mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 496,
    "name": "Servine",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png",
    "types": [
      "grass"
    ],
    "hp": 600,
    "attack": 120,
    "defense": 150,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Servine ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 497,
    "name": "Serperior",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png",
    "types": [
      "grass"
    ],
    "hp": 750,
    "attack": 150,
    "defense": 190,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Serperior es un muro infranqueable de tipo grass. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 498,
    "name": "Tepig",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png",
    "types": [
      "fire"
    ],
    "hp": 650,
    "attack": 126,
    "defense": 90,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Tepig ataca sin piedad. Sus 126 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 499,
    "name": "Pignite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 900,
    "attack": 186,
    "defense": 110,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 4,
    "rarity": "rare",
    "description": "Pignite es un muro infranqueable de tipo fire. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 500,
    "name": "Emboar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 1100,
    "attack": 246,
    "defense": 130,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Emboar es un muro infranqueable de tipo fire. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 501,
    "name": "Oshawott",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png",
    "types": [
      "water"
    ],
    "hp": 550,
    "attack": 110,
    "defense": 90,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Oshawott ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 502,
    "name": "Dewott",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png",
    "types": [
      "water"
    ],
    "hp": 750,
    "attack": 150,
    "defense": 120,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Dewott es un muro infranqueable de tipo water. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 503,
    "name": "Samurott",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png",
    "types": [
      "water"
    ],
    "hp": 950,
    "attack": 200,
    "defense": 170,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Samurott es un muro infranqueable de tipo water. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 504,
    "name": "Patrat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png",
    "types": [
      "normal"
    ],
    "hp": 450,
    "attack": 110,
    "defense": 78,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Patrat ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 505,
    "name": "Watchog",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png",
    "types": [
      "normal"
    ],
    "hp": 600,
    "attack": 170,
    "defense": 138,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Watchog ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 506,
    "name": "Lillipup",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png",
    "types": [
      "normal"
    ],
    "hp": 450,
    "attack": 120,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Lillipup ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 507,
    "name": "Herdier",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png",
    "types": [
      "normal"
    ],
    "hp": 650,
    "attack": 160,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Herdier es un muro infranqueable de tipo normal. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 508,
    "name": "Stoutland",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png",
    "types": [
      "normal"
    ],
    "hp": 850,
    "attack": 220,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Stoutland es un muro infranqueable de tipo normal. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 509,
    "name": "Purrloin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png",
    "types": [
      "dark"
    ],
    "hp": 410,
    "attack": 100,
    "defense": 74,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo dark. Purrloin mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 510,
    "name": "Liepard",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png",
    "types": [
      "dark"
    ],
    "hp": 640,
    "attack": 176,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Liepard ataca sin piedad. Sus 176 puntos de ataque físico lo convierten en un depredador implacable de tipo dark. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 511,
    "name": "Pansage",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png",
    "types": [
      "grass"
    ],
    "hp": 500,
    "attack": 106,
    "defense": 96,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Pansage ataca sin piedad. Sus 106 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 512,
    "name": "Simisage",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png",
    "types": [
      "grass"
    ],
    "hp": 750,
    "attack": 196,
    "defense": 126,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Simisage es un muro infranqueable de tipo grass. Su asombrosa defensa de 126 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 513,
    "name": "Pansear",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png",
    "types": [
      "fire"
    ],
    "hp": 500,
    "attack": 106,
    "defense": 96,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Pansear ataca sin piedad. Sus 106 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 514,
    "name": "Simisear",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png",
    "types": [
      "fire"
    ],
    "hp": 750,
    "attack": 196,
    "defense": 126,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Simisear es un muro infranqueable de tipo fire. Su asombrosa defensa de 126 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 515,
    "name": "Panpour",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png",
    "types": [
      "water"
    ],
    "hp": 500,
    "attack": 106,
    "defense": 96,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Panpour ataca sin piedad. Sus 106 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 516,
    "name": "Simipour",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png",
    "types": [
      "water"
    ],
    "hp": 750,
    "attack": 196,
    "defense": 126,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Simipour es un muro infranqueable de tipo water. Su asombrosa defensa de 126 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 517,
    "name": "Munna",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png",
    "types": [
      "psychic"
    ],
    "hp": 760,
    "attack": 50,
    "defense": 90,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Munna mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 518,
    "name": "Musharna",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png",
    "types": [
      "psychic"
    ],
    "hp": 1160,
    "attack": 110,
    "defense": 170,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Musharna es un muro infranqueable de tipo psychic. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 519,
    "name": "Pidove",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 500,
    "attack": 110,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Pidove ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 520,
    "name": "Tranquill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 620,
    "attack": 154,
    "defense": 124,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Tranquill es un muro infranqueable de tipo normal. Su asombrosa defensa de 124 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 521,
    "name": "Unfezant",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 800,
    "attack": 230,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Unfezant es un muro infranqueable de tipo normal. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 522,
    "name": "Blitzle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png",
    "types": [
      "electric"
    ],
    "hp": 450,
    "attack": 120,
    "defense": 64,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Blitzle ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo electric."
  },
  {
    "id": 523,
    "name": "Zebstrika",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png",
    "types": [
      "electric"
    ],
    "hp": 750,
    "attack": 200,
    "defense": 126,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Zebstrika es un muro infranqueable de tipo electric. Su asombrosa defensa de 126 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 524,
    "name": "Roggenrola",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png",
    "types": [
      "rock"
    ],
    "hp": 550,
    "attack": 150,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Roggenrola ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 525,
    "name": "Boldore",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png",
    "types": [
      "rock"
    ],
    "hp": 700,
    "attack": 210,
    "defense": 210,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Boldore es un muro infranqueable de tipo rock. Su asombrosa defensa de 210 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 526,
    "name": "Gigalith",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png",
    "types": [
      "rock"
    ],
    "hp": 850,
    "attack": 270,
    "defense": 260,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Gigalith es un muro infranqueable de tipo rock. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 527,
    "name": "Woobat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png",
    "types": [
      "psychic",
      "flying"
    ],
    "hp": 650,
    "attack": 90,
    "defense": 86,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Woobat mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 528,
    "name": "Swoobat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png",
    "types": [
      "psychic",
      "flying"
    ],
    "hp": 670,
    "attack": 114,
    "defense": 110,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 4,
    "rarity": "rare",
    "description": "Swoobat es un muro infranqueable de tipo psychic. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 529,
    "name": "Drilbur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png",
    "types": [
      "ground"
    ],
    "hp": 600,
    "attack": 170,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Drilbur ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo ground."
  },
  {
    "id": 530,
    "name": "Excadrill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png",
    "types": [
      "ground",
      "steel"
    ],
    "hp": 1100,
    "attack": 270,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Excadrill es un muro infranqueable de tipo ground. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 531,
    "name": "Audino",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png",
    "types": [
      "normal"
    ],
    "hp": 1030,
    "attack": 120,
    "defense": 172,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 13,
    "rarity": "legendary",
    "description": "Audino es un muro infranqueable de tipo normal. Su asombrosa defensa de 172 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 532,
    "name": "Timburr",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png",
    "types": [
      "fighting"
    ],
    "hp": 750,
    "attack": 160,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Timburr es un muro infranqueable de tipo fighting. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 533,
    "name": "Gurdurr",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png",
    "types": [
      "fighting"
    ],
    "hp": 850,
    "attack": 210,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Gurdurr es un muro infranqueable de tipo fighting. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 534,
    "name": "Conkeldurr",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png",
    "types": [
      "fighting"
    ],
    "hp": 1050,
    "attack": 280,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Conkeldurr es un muro infranqueable de tipo fighting. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 535,
    "name": "Tympole",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png",
    "types": [
      "water"
    ],
    "hp": 500,
    "attack": 100,
    "defense": 80,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Tympole mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 536,
    "name": "Palpitoad",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png",
    "types": [
      "water",
      "ground"
    ],
    "hp": 750,
    "attack": 130,
    "defense": 110,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Palpitoad es un muro infranqueable de tipo water. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 537,
    "name": "Seismitoad",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png",
    "types": [
      "water",
      "ground"
    ],
    "hp": 1050,
    "attack": 190,
    "defense": 150,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Seismitoad es un muro infranqueable de tipo water. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 538,
    "name": "Throh",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png",
    "types": [
      "fighting"
    ],
    "hp": 1200,
    "attack": 200,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Throh es un muro infranqueable de tipo fighting. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 539,
    "name": "Sawk",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png",
    "types": [
      "fighting"
    ],
    "hp": 750,
    "attack": 250,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Sawk es un muro infranqueable de tipo fighting. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 540,
    "name": "Sewaddle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png",
    "types": [
      "bug",
      "grass"
    ],
    "hp": 450,
    "attack": 106,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Sewaddle ataca sin piedad. Sus 106 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 541,
    "name": "Swadloon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png",
    "types": [
      "bug",
      "grass"
    ],
    "hp": 550,
    "attack": 126,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Swadloon ataca sin piedad. Sus 126 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 542,
    "name": "Leavanny",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png",
    "types": [
      "bug",
      "grass"
    ],
    "hp": 750,
    "attack": 206,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Leavanny es un muro infranqueable de tipo bug. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 543,
    "name": "Venipede",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 300,
    "attack": 90,
    "defense": 118,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Venipede mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 544,
    "name": "Whirlipede",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 400,
    "attack": 110,
    "defense": 198,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Whirlipede ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 545,
    "name": "Scolipede",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png",
    "types": [
      "bug",
      "poison"
    ],
    "hp": 600,
    "attack": 200,
    "defense": 178,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Consciente de su poder, Scolipede ataca sin piedad. Sus 200 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 546,
    "name": "Cottonee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png",
    "types": [
      "grass",
      "fairy"
    ],
    "hp": 400,
    "attack": 54,
    "defense": 120,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Cottonee mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 547,
    "name": "Whimsicott",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png",
    "types": [
      "grass",
      "fairy"
    ],
    "hp": 600,
    "attack": 134,
    "defense": 170,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Whimsicott ataca sin piedad. Sus 134 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 548,
    "name": "Petilil",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png",
    "types": [
      "grass"
    ],
    "hp": 450,
    "attack": 70,
    "defense": 100,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Petilil mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 549,
    "name": "Lilligant",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png",
    "types": [
      "grass"
    ],
    "hp": 700,
    "attack": 120,
    "defense": 150,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Lilligant es un muro infranqueable de tipo grass. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 550,
    "name": "Basculin-red-striped",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png",
    "types": [
      "water"
    ],
    "hp": 700,
    "attack": 184,
    "defense": 130,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Basculin-red-striped es un muro infranqueable de tipo water. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 551,
    "name": "Sandile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png",
    "types": [
      "ground",
      "dark"
    ],
    "hp": 500,
    "attack": 144,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Sandile ataca sin piedad. Sus 144 puntos de ataque físico lo convierten en un depredador implacable de tipo ground."
  },
  {
    "id": 552,
    "name": "Krokorok",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png",
    "types": [
      "ground",
      "dark"
    ],
    "hp": 600,
    "attack": 164,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Krokorok ataca sin piedad. Sus 164 puntos de ataque físico lo convierten en un depredador implacable de tipo ground. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 553,
    "name": "Krookodile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png",
    "types": [
      "ground",
      "dark"
    ],
    "hp": 950,
    "attack": 234,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Krookodile es un muro infranqueable de tipo ground. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 554,
    "name": "Darumaka",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png",
    "types": [
      "fire"
    ],
    "hp": 700,
    "attack": 180,
    "defense": 90,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Darumaka ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 555,
    "name": "Darmanitan-standard",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png",
    "types": [
      "fire"
    ],
    "hp": 1050,
    "attack": 280,
    "defense": 110,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Darmanitan-standard es un muro infranqueable de tipo fire. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 556,
    "name": "Maractus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png",
    "types": [
      "grass"
    ],
    "hp": 750,
    "attack": 172,
    "defense": 134,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Maractus es un muro infranqueable de tipo grass. Su asombrosa defensa de 134 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 557,
    "name": "Dwebble",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png",
    "types": [
      "bug",
      "rock"
    ],
    "hp": 500,
    "attack": 130,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Dwebble ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 558,
    "name": "Crustle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png",
    "types": [
      "bug",
      "rock"
    ],
    "hp": 700,
    "attack": 210,
    "defense": 250,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Crustle es un muro infranqueable de tipo bug. Su asombrosa defensa de 250 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 559,
    "name": "Scraggy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png",
    "types": [
      "dark",
      "fighting"
    ],
    "hp": 500,
    "attack": 150,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Scraggy ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo dark."
  },
  {
    "id": 560,
    "name": "Scrafty",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png",
    "types": [
      "dark",
      "fighting"
    ],
    "hp": 650,
    "attack": 180,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Scrafty es un muro infranqueable de tipo dark. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 561,
    "name": "Sigilyph",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png",
    "types": [
      "psychic",
      "flying"
    ],
    "hp": 720,
    "attack": 116,
    "defense": 160,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Sigilyph es un muro infranqueable de tipo psychic. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 562,
    "name": "Yamask",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png",
    "types": [
      "ghost"
    ],
    "hp": 380,
    "attack": 60,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ghost. Yamask mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 563,
    "name": "Cofagrigus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png",
    "types": [
      "ghost"
    ],
    "hp": 580,
    "attack": 100,
    "defense": 290,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo ghost. Cofagrigus mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 564,
    "name": "Tirtouga",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png",
    "types": [
      "water",
      "rock"
    ],
    "hp": 540,
    "attack": 156,
    "defense": 206,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Tirtouga ataca sin piedad. Sus 156 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 565,
    "name": "Carracosta",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png",
    "types": [
      "water",
      "rock"
    ],
    "hp": 740,
    "attack": 216,
    "defense": 266,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Carracosta es un muro infranqueable de tipo water. Su asombrosa defensa de 266 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 566,
    "name": "Archen",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png",
    "types": [
      "rock",
      "flying"
    ],
    "hp": 550,
    "attack": 224,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Archen ataca sin piedad. Sus 224 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 567,
    "name": "Archeops",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png",
    "types": [
      "rock",
      "flying"
    ],
    "hp": 750,
    "attack": 280,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Archeops es un muro infranqueable de tipo rock. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 568,
    "name": "Trubbish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png",
    "types": [
      "poison"
    ],
    "hp": 500,
    "attack": 100,
    "defense": 124,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo poison. Trubbish mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 569,
    "name": "Garbodor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png",
    "types": [
      "poison"
    ],
    "hp": 800,
    "attack": 190,
    "defense": 164,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Garbodor es un muro infranqueable de tipo poison. Su asombrosa defensa de 164 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 570,
    "name": "Zorua",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png",
    "types": [
      "dark"
    ],
    "hp": 400,
    "attack": 130,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Zorua ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo dark."
  },
  {
    "id": 571,
    "name": "Zoroark",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png",
    "types": [
      "dark"
    ],
    "hp": 600,
    "attack": 210,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Zoroark ataca sin piedad. Sus 210 puntos de ataque físico lo convierten en un depredador implacable de tipo dark. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 572,
    "name": "Minccino",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png",
    "types": [
      "normal"
    ],
    "hp": 550,
    "attack": 100,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Minccino mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 573,
    "name": "Cinccino",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png",
    "types": [
      "normal"
    ],
    "hp": 750,
    "attack": 190,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Cinccino es un muro infranqueable de tipo normal. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 574,
    "name": "Gothita",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png",
    "types": [
      "psychic"
    ],
    "hp": 450,
    "attack": 60,
    "defense": 100,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Gothita mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 575,
    "name": "Gothorita",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png",
    "types": [
      "psychic"
    ],
    "hp": 600,
    "attack": 90,
    "defense": 140,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo psychic. Gothorita mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 576,
    "name": "Gothitelle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png",
    "types": [
      "psychic"
    ],
    "hp": 700,
    "attack": 110,
    "defense": 190,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Gothitelle es un muro infranqueable de tipo psychic. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 577,
    "name": "Solosis",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png",
    "types": [
      "psychic"
    ],
    "hp": 450,
    "attack": 60,
    "defense": 80,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Solosis mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 578,
    "name": "Duosion",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png",
    "types": [
      "psychic"
    ],
    "hp": 650,
    "attack": 80,
    "defense": 100,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo psychic. Duosion mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 579,
    "name": "Reuniclus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png",
    "types": [
      "psychic"
    ],
    "hp": 1100,
    "attack": 130,
    "defense": 150,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Reuniclus es un muro infranqueable de tipo psychic. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 580,
    "name": "Ducklett",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png",
    "types": [
      "water",
      "flying"
    ],
    "hp": 620,
    "attack": 88,
    "defense": 100,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Ducklett mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 581,
    "name": "Swanna",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png",
    "types": [
      "water",
      "flying"
    ],
    "hp": 750,
    "attack": 174,
    "defense": 126,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Swanna es un muro infranqueable de tipo water. Su asombrosa defensa de 126 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 582,
    "name": "Vanillite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png",
    "types": [
      "ice"
    ],
    "hp": 360,
    "attack": 100,
    "defense": 100,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ice. Vanillite mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 583,
    "name": "Vanillish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png",
    "types": [
      "ice"
    ],
    "hp": 510,
    "attack": 130,
    "defense": 130,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Vanillish ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo ice. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 584,
    "name": "Vanilluxe",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png",
    "types": [
      "ice"
    ],
    "hp": 710,
    "attack": 190,
    "defense": 170,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Vanilluxe es un muro infranqueable de tipo ice. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 585,
    "name": "Deerling",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png",
    "types": [
      "normal",
      "grass"
    ],
    "hp": 600,
    "attack": 120,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Deerling ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 586,
    "name": "Sawsbuck",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png",
    "types": [
      "normal",
      "grass"
    ],
    "hp": 800,
    "attack": 200,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Sawsbuck es un muro infranqueable de tipo normal. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 587,
    "name": "Emolga",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png",
    "types": [
      "electric",
      "flying"
    ],
    "hp": 550,
    "attack": 150,
    "defense": 120,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Emolga ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo electric. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 588,
    "name": "Karrablast",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png",
    "types": [
      "bug"
    ],
    "hp": 500,
    "attack": 150,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Karrablast ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 589,
    "name": "Escavalier",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png",
    "types": [
      "bug",
      "steel"
    ],
    "hp": 700,
    "attack": 270,
    "defense": 210,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Escavalier es un muro infranqueable de tipo bug. Su asombrosa defensa de 210 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 590,
    "name": "Foongus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 690,
    "attack": 110,
    "defense": 90,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Foongus ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 591,
    "name": "Amoonguss",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 1140,
    "attack": 170,
    "defense": 140,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Amoonguss es un muro infranqueable de tipo grass. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 592,
    "name": "Frillish-male",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png",
    "types": [
      "water",
      "ghost"
    ],
    "hp": 550,
    "attack": 80,
    "defense": 100,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Frillish-male mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 593,
    "name": "Jellicent-male",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png",
    "types": [
      "water",
      "ghost"
    ],
    "hp": 1000,
    "attack": 120,
    "defense": 140,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Jellicent-male es un muro infranqueable de tipo water. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 594,
    "name": "Alomomola",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png",
    "types": [
      "water"
    ],
    "hp": 1200,
    "attack": 150,
    "defense": 160,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Alomomola es un muro infranqueable de tipo water. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 595,
    "name": "Joltik",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png",
    "types": [
      "bug",
      "electric"
    ],
    "hp": 500,
    "attack": 94,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Joltik mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 596,
    "name": "Galvantula",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png",
    "types": [
      "bug",
      "electric"
    ],
    "hp": 700,
    "attack": 154,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Galvantula es un muro infranqueable de tipo bug. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 597,
    "name": "Ferroseed",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png",
    "types": [
      "grass",
      "steel"
    ],
    "hp": 440,
    "attack": 100,
    "defense": 182,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Ferroseed mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 598,
    "name": "Ferrothorn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png",
    "types": [
      "grass",
      "steel"
    ],
    "hp": 740,
    "attack": 188,
    "defense": 262,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Ferrothorn es un muro infranqueable de tipo grass. Su asombrosa defensa de 262 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 599,
    "name": "Klink",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png",
    "types": [
      "steel"
    ],
    "hp": 400,
    "attack": 110,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Klink ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo steel."
  },
  {
    "id": 600,
    "name": "Klang",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png",
    "types": [
      "steel"
    ],
    "hp": 600,
    "attack": 160,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Klang ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo steel. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 601,
    "name": "Klinklang",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png",
    "types": [
      "steel"
    ],
    "hp": 600,
    "attack": 200,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Consciente de su poder, Klinklang ataca sin piedad. Sus 200 puntos de ataque físico lo convierten en un depredador implacable de tipo steel. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 602,
    "name": "Tynamo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png",
    "types": [
      "electric"
    ],
    "hp": 350,
    "attack": 110,
    "defense": 80,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Tynamo ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo electric."
  },
  {
    "id": 603,
    "name": "Eelektrik",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png",
    "types": [
      "electric"
    ],
    "hp": 650,
    "attack": 170,
    "defense": 140,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Eelektrik es un muro infranqueable de tipo electric. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 604,
    "name": "Eelektross",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png",
    "types": [
      "electric"
    ],
    "hp": 850,
    "attack": 230,
    "defense": 160,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Eelektross es un muro infranqueable de tipo electric. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 605,
    "name": "Elgyem",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png",
    "types": [
      "psychic"
    ],
    "hp": 550,
    "attack": 110,
    "defense": 110,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Elgyem ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo psychic."
  },
  {
    "id": 606,
    "name": "Beheeyem",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png",
    "types": [
      "psychic"
    ],
    "hp": 750,
    "attack": 150,
    "defense": 150,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Beheeyem es un muro infranqueable de tipo psychic. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 607,
    "name": "Litwick",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png",
    "types": [
      "ghost",
      "fire"
    ],
    "hp": 500,
    "attack": 60,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ghost. Litwick mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 608,
    "name": "Lampent",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png",
    "types": [
      "ghost",
      "fire"
    ],
    "hp": 600,
    "attack": 80,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo ghost. Lampent mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 609,
    "name": "Chandelure",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png",
    "types": [
      "ghost",
      "fire"
    ],
    "hp": 600,
    "attack": 110,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Consciente de su poder, Chandelure ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 610,
    "name": "Axew",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png",
    "types": [
      "dragon"
    ],
    "hp": 460,
    "attack": 174,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Axew ataca sin piedad. Sus 174 puntos de ataque físico lo convierten en un depredador implacable de tipo dragon."
  },
  {
    "id": 611,
    "name": "Fraxure",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png",
    "types": [
      "dragon"
    ],
    "hp": 660,
    "attack": 234,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Fraxure es un muro infranqueable de tipo dragon. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 612,
    "name": "Haxorus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png",
    "types": [
      "dragon"
    ],
    "hp": 760,
    "attack": 294,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Haxorus es un muro infranqueable de tipo dragon. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 613,
    "name": "Cubchoo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png",
    "types": [
      "ice"
    ],
    "hp": 550,
    "attack": 140,
    "defense": 80,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Cubchoo ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo ice."
  },
  {
    "id": 614,
    "name": "Beartic",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png",
    "types": [
      "ice"
    ],
    "hp": 950,
    "attack": 260,
    "defense": 160,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 5,
    "rarity": "rare",
    "description": "Beartic es un muro infranqueable de tipo ice. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 615,
    "name": "Cryogonal",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png",
    "types": [
      "ice"
    ],
    "hp": 800,
    "attack": 100,
    "defense": 100,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 6,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo ice. Cryogonal mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 616,
    "name": "Shelmet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png",
    "types": [
      "bug"
    ],
    "hp": 500,
    "attack": 80,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Shelmet mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 617,
    "name": "Accelgor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png",
    "types": [
      "bug"
    ],
    "hp": 800,
    "attack": 140,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Accelgor ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 618,
    "name": "Stunfisk",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png",
    "types": [
      "ground",
      "electric"
    ],
    "hp": 1090,
    "attack": 132,
    "defense": 168,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Stunfisk es un muro infranqueable de tipo ground. Su asombrosa defensa de 168 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 619,
    "name": "Mienfoo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png",
    "types": [
      "fighting"
    ],
    "hp": 450,
    "attack": 170,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Mienfoo ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting."
  },
  {
    "id": 620,
    "name": "Mienshao",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png",
    "types": [
      "fighting"
    ],
    "hp": 650,
    "attack": 250,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Mienshao es un muro infranqueable de tipo fighting. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 621,
    "name": "Druddigon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png",
    "types": [
      "dragon"
    ],
    "hp": 770,
    "attack": 240,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Druddigon es un muro infranqueable de tipo dragon. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 622,
    "name": "Golett",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png",
    "types": [
      "ground",
      "ghost"
    ],
    "hp": 590,
    "attack": 148,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Golett ataca sin piedad. Sus 148 puntos de ataque físico lo convierten en un depredador implacable de tipo ground."
  },
  {
    "id": 623,
    "name": "Golurk",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png",
    "types": [
      "ground",
      "ghost"
    ],
    "hp": 890,
    "attack": 248,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Golurk es un muro infranqueable de tipo ground. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 624,
    "name": "Pawniard",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png",
    "types": [
      "dark",
      "steel"
    ],
    "hp": 450,
    "attack": 170,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Pawniard ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo dark."
  },
  {
    "id": 625,
    "name": "Bisharp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png",
    "types": [
      "dark",
      "steel"
    ],
    "hp": 650,
    "attack": 250,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Bisharp es un muro infranqueable de tipo dark. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 626,
    "name": "Bouffalant",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png",
    "types": [
      "normal"
    ],
    "hp": 950,
    "attack": 220,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Bouffalant es un muro infranqueable de tipo normal. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 627,
    "name": "Rufflet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 700,
    "attack": 166,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Rufflet ataca sin piedad. Sus 166 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 628,
    "name": "Braviary",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 1000,
    "attack": 246,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Braviary es un muro infranqueable de tipo normal. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 629,
    "name": "Vullaby",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png",
    "types": [
      "dark",
      "flying"
    ],
    "hp": 700,
    "attack": 110,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Vullaby es un muro infranqueable de tipo dark. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 630,
    "name": "Mandibuzz",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png",
    "types": [
      "dark",
      "flying"
    ],
    "hp": 1100,
    "attack": 130,
    "defense": 210,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Mandibuzz es un muro infranqueable de tipo dark. Su asombrosa defensa de 210 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 631,
    "name": "Heatmor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png",
    "types": [
      "fire"
    ],
    "hp": 850,
    "attack": 194,
    "defense": 132,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Heatmor es un muro infranqueable de tipo fire. Su asombrosa defensa de 132 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 632,
    "name": "Durant",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png",
    "types": [
      "bug",
      "steel"
    ],
    "hp": 580,
    "attack": 218,
    "defense": 224,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Durant ataca sin piedad. Sus 218 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 633,
    "name": "Deino",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png",
    "types": [
      "dark",
      "dragon"
    ],
    "hp": 520,
    "attack": 130,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Deino ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo dark."
  },
  {
    "id": 634,
    "name": "Zweilous",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png",
    "types": [
      "dark",
      "dragon"
    ],
    "hp": 720,
    "attack": 170,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Zweilous es un muro infranqueable de tipo dark. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 635,
    "name": "Hydreigon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png",
    "types": [
      "dark",
      "dragon"
    ],
    "hp": 920,
    "attack": 210,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Hydreigon es un muro infranqueable de tipo dark. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 636,
    "name": "Larvesta",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png",
    "types": [
      "bug",
      "fire"
    ],
    "hp": 550,
    "attack": 170,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Larvesta ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 637,
    "name": "Volcarona",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png",
    "types": [
      "bug",
      "fire"
    ],
    "hp": 850,
    "attack": 120,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Volcarona es un muro infranqueable de tipo bug. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 638,
    "name": "Cobalion",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png",
    "types": [
      "steel",
      "fighting"
    ],
    "hp": 910,
    "attack": 180,
    "defense": 258,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Cobalion es un muro infranqueable de tipo steel. Su asombrosa defensa de 258 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 639,
    "name": "Terrakion",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png",
    "types": [
      "rock",
      "fighting"
    ],
    "hp": 910,
    "attack": 258,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Terrakion es un muro infranqueable de tipo rock. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 640,
    "name": "Virizion",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png",
    "types": [
      "grass",
      "fighting"
    ],
    "hp": 910,
    "attack": 180,
    "defense": 144,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Virizion es un muro infranqueable de tipo grass. Su asombrosa defensa de 144 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 641,
    "name": "Tornadus-incarnate",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png",
    "types": [
      "flying"
    ],
    "hp": 790,
    "attack": 230,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Tornadus-incarnate es un muro infranqueable de tipo flying. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 642,
    "name": "Thundurus-incarnate",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png",
    "types": [
      "electric",
      "flying"
    ],
    "hp": 790,
    "attack": 230,
    "defense": 140,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Thundurus-incarnate es un muro infranqueable de tipo electric. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 643,
    "name": "Reshiram",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png",
    "types": [
      "dragon",
      "fire"
    ],
    "hp": 1000,
    "attack": 240,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Reshiram es un muro infranqueable de tipo dragon. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 644,
    "name": "Zekrom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png",
    "types": [
      "dragon",
      "electric"
    ],
    "hp": 1000,
    "attack": 300,
    "defense": 240,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Zekrom es un muro infranqueable de tipo dragon. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 645,
    "name": "Landorus-incarnate",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png",
    "types": [
      "ground",
      "flying"
    ],
    "hp": 890,
    "attack": 250,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Landorus-incarnate es un muro infranqueable de tipo ground. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 646,
    "name": "Kyurem",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png",
    "types": [
      "dragon",
      "ice"
    ],
    "hp": 1200,
    "attack": 260,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Kyurem es un muro infranqueable de tipo dragon. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 647,
    "name": "Keldeo-ordinary",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png",
    "types": [
      "water",
      "fighting"
    ],
    "hp": 910,
    "attack": 144,
    "defense": 180,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Keldeo-ordinary es un muro infranqueable de tipo water. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 648,
    "name": "Meloetta-aria",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png",
    "types": [
      "normal",
      "psychic"
    ],
    "hp": 1000,
    "attack": 154,
    "defense": 154,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Meloetta-aria es un muro infranqueable de tipo normal. Su asombrosa defensa de 154 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 649,
    "name": "Genesect",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png",
    "types": [
      "bug",
      "steel"
    ],
    "hp": 710,
    "attack": 240,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Genesect es un muro infranqueable de tipo bug. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 650,
    "name": "Chespin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png",
    "types": [
      "grass"
    ],
    "hp": 560,
    "attack": 122,
    "defense": 130,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Chespin ataca sin piedad. Sus 122 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 651,
    "name": "Quilladin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png",
    "types": [
      "grass"
    ],
    "hp": 610,
    "attack": 156,
    "defense": 190,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Quilladin es un muro infranqueable de tipo grass. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 652,
    "name": "Chesnaught",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png",
    "types": [
      "grass",
      "fighting"
    ],
    "hp": 880,
    "attack": 214,
    "defense": 244,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Chesnaught es un muro infranqueable de tipo grass. Su asombrosa defensa de 244 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 653,
    "name": "Fennekin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png",
    "types": [
      "fire"
    ],
    "hp": 400,
    "attack": 90,
    "defense": 80,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fire. Fennekin mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 654,
    "name": "Braixen",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png",
    "types": [
      "fire"
    ],
    "hp": 590,
    "attack": 118,
    "defense": 116,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Braixen ataca sin piedad. Sus 118 puntos de ataque físico lo convierten en un depredador implacable de tipo fire. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 655,
    "name": "Delphox",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png",
    "types": [
      "fire",
      "psychic"
    ],
    "hp": 750,
    "attack": 138,
    "defense": 144,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Delphox es un muro infranqueable de tipo fire. Su asombrosa defensa de 144 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 656,
    "name": "Froakie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png",
    "types": [
      "water"
    ],
    "hp": 410,
    "attack": 112,
    "defense": 80,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Froakie ataca sin piedad. Sus 112 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 657,
    "name": "Frogadier",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png",
    "types": [
      "water"
    ],
    "hp": 540,
    "attack": 126,
    "defense": 104,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Frogadier ataca sin piedad. Sus 126 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 658,
    "name": "Greninja",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
    "types": [
      "water",
      "dark"
    ],
    "hp": 720,
    "attack": 190,
    "defense": 134,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Greninja es un muro infranqueable de tipo water. Su asombrosa defensa de 134 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 659,
    "name": "Bunnelby",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png",
    "types": [
      "normal"
    ],
    "hp": 380,
    "attack": 72,
    "defense": 76,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Bunnelby mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 660,
    "name": "Diggersby",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png",
    "types": [
      "normal",
      "ground"
    ],
    "hp": 850,
    "attack": 112,
    "defense": 154,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Diggersby es un muro infranqueable de tipo normal. Su asombrosa defensa de 154 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 661,
    "name": "Fletchling",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 450,
    "attack": 100,
    "defense": 86,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Fletchling mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 662,
    "name": "Fletchinder",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png",
    "types": [
      "fire",
      "flying"
    ],
    "hp": 620,
    "attack": 146,
    "defense": 110,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 4,
    "rarity": "rare",
    "description": "Fletchinder es un muro infranqueable de tipo fire. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 663,
    "name": "Talonflame",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png",
    "types": [
      "fire",
      "flying"
    ],
    "hp": 780,
    "attack": 162,
    "defense": 142,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Talonflame es un muro infranqueable de tipo fire. Su asombrosa defensa de 142 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 664,
    "name": "Scatterbug",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png",
    "types": [
      "bug"
    ],
    "hp": 380,
    "attack": 70,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Scatterbug mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 665,
    "name": "Spewpa",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png",
    "types": [
      "bug"
    ],
    "hp": 450,
    "attack": 44,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Spewpa mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 666,
    "name": "Vivillon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png",
    "types": [
      "bug",
      "flying"
    ],
    "hp": 800,
    "attack": 104,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Consciente de su poder, Vivillon ataca sin piedad. Sus 104 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 667,
    "name": "Litleo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png",
    "types": [
      "fire",
      "normal"
    ],
    "hp": 620,
    "attack": 100,
    "defense": 116,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Litleo es un muro infranqueable de tipo fire. Su asombrosa defensa de 116 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 668,
    "name": "Pyroar-male",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png",
    "types": [
      "fire",
      "normal"
    ],
    "hp": 860,
    "attack": 136,
    "defense": 144,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Pyroar-male es un muro infranqueable de tipo fire. Su asombrosa defensa de 144 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 669,
    "name": "Flabebe",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png",
    "types": [
      "fairy"
    ],
    "hp": 440,
    "attack": 76,
    "defense": 78,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fairy. Flabebe mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 670,
    "name": "Floette",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png",
    "types": [
      "fairy"
    ],
    "hp": 540,
    "attack": 90,
    "defense": 94,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo fairy. Floette mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 671,
    "name": "Florges",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png",
    "types": [
      "fairy"
    ],
    "hp": 780,
    "attack": 130,
    "defense": 136,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Florges es un muro infranqueable de tipo fairy. Su asombrosa defensa de 136 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 672,
    "name": "Skiddo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png",
    "types": [
      "grass"
    ],
    "hp": 660,
    "attack": 130,
    "defense": 96,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Skiddo ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 673,
    "name": "Gogoat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png",
    "types": [
      "grass"
    ],
    "hp": 1200,
    "attack": 200,
    "defense": 124,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Gogoat es un muro infranqueable de tipo grass. Su asombrosa defensa de 124 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 674,
    "name": "Pancham",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png",
    "types": [
      "fighting"
    ],
    "hp": 670,
    "attack": 164,
    "defense": 124,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Pancham es un muro infranqueable de tipo fighting. Su asombrosa defensa de 124 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 675,
    "name": "Pangoro",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png",
    "types": [
      "fighting",
      "dark"
    ],
    "hp": 950,
    "attack": 248,
    "defense": 156,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Pangoro es un muro infranqueable de tipo fighting. Su asombrosa defensa de 156 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 676,
    "name": "Furfrou",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png",
    "types": [
      "normal"
    ],
    "hp": 750,
    "attack": 160,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Furfrou es un muro infranqueable de tipo normal. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 677,
    "name": "Espurr",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png",
    "types": [
      "psychic"
    ],
    "hp": 620,
    "attack": 96,
    "defense": 108,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 2,
    "rarity": "common",
    "description": "Espurr es un muro infranqueable de tipo psychic. Su asombrosa defensa de 108 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 678,
    "name": "Meowstic-male",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png",
    "types": [
      "psychic"
    ],
    "hp": 740,
    "attack": 96,
    "defense": 152,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Meowstic-male es un muro infranqueable de tipo psychic. Su asombrosa defensa de 152 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 679,
    "name": "Honedge",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png",
    "types": [
      "steel",
      "ghost"
    ],
    "hp": 450,
    "attack": 160,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Honedge ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo steel."
  },
  {
    "id": 680,
    "name": "Doublade",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png",
    "types": [
      "steel",
      "ghost"
    ],
    "hp": 590,
    "attack": 220,
    "defense": 300,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Doublade ataca sin piedad. Sus 220 puntos de ataque físico lo convierten en un depredador implacable de tipo steel. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 681,
    "name": "Aegislash-shield",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png",
    "types": [
      "steel",
      "ghost"
    ],
    "hp": 600,
    "attack": 100,
    "defense": 280,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Una criatura versátil de tipo steel. Aegislash-shield mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 682,
    "name": "Spritzee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png",
    "types": [
      "fairy"
    ],
    "hp": 780,
    "attack": 104,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Spritzee es un muro infranqueable de tipo fairy. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 683,
    "name": "Aromatisse",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png",
    "types": [
      "fairy"
    ],
    "hp": 1010,
    "attack": 144,
    "defense": 144,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Aromatisse es un muro infranqueable de tipo fairy. Su asombrosa defensa de 144 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 684,
    "name": "Swirlix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png",
    "types": [
      "fairy"
    ],
    "hp": 620,
    "attack": 96,
    "defense": 132,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Swirlix es un muro infranqueable de tipo fairy. Su asombrosa defensa de 132 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 685,
    "name": "Slurpuff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png",
    "types": [
      "fairy"
    ],
    "hp": 820,
    "attack": 160,
    "defense": 172,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Slurpuff es un muro infranqueable de tipo fairy. Su asombrosa defensa de 172 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 686,
    "name": "Inkay",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png",
    "types": [
      "dark",
      "psychic"
    ],
    "hp": 530,
    "attack": 108,
    "defense": 106,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Inkay ataca sin piedad. Sus 108 puntos de ataque físico lo convierten en un depredador implacable de tipo dark."
  },
  {
    "id": 687,
    "name": "Malamar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png",
    "types": [
      "dark",
      "psychic"
    ],
    "hp": 860,
    "attack": 184,
    "defense": 176,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Malamar es un muro infranqueable de tipo dark. Su asombrosa defensa de 176 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 688,
    "name": "Binacle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png",
    "types": [
      "rock",
      "water"
    ],
    "hp": 420,
    "attack": 104,
    "defense": 134,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Binacle ataca sin piedad. Sus 104 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 689,
    "name": "Barbaracle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png",
    "types": [
      "rock",
      "water"
    ],
    "hp": 720,
    "attack": 210,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Barbaracle es un muro infranqueable de tipo rock. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 690,
    "name": "Skrelp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png",
    "types": [
      "poison",
      "water"
    ],
    "hp": 500,
    "attack": 120,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Skrelp ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo poison."
  },
  {
    "id": 691,
    "name": "Dragalge",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png",
    "types": [
      "poison",
      "dragon"
    ],
    "hp": 650,
    "attack": 150,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Dragalge es un muro infranqueable de tipo poison. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 692,
    "name": "Clauncher",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png",
    "types": [
      "water"
    ],
    "hp": 500,
    "attack": 106,
    "defense": 124,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Clauncher ataca sin piedad. Sus 106 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 693,
    "name": "Clawitzer",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png",
    "types": [
      "water"
    ],
    "hp": 710,
    "attack": 146,
    "defense": 176,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 3,
    "rarity": "common",
    "description": "Clawitzer es un muro infranqueable de tipo water. Su asombrosa defensa de 176 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 694,
    "name": "Helioptile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png",
    "types": [
      "electric",
      "normal"
    ],
    "hp": 440,
    "attack": 76,
    "defense": 66,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Helioptile mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 695,
    "name": "Heliolisk",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png",
    "types": [
      "electric",
      "normal"
    ],
    "hp": 620,
    "attack": 110,
    "defense": 104,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Heliolisk es un muro infranqueable de tipo electric. Su asombrosa defensa de 104 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 696,
    "name": "Tyrunt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png",
    "types": [
      "rock",
      "dragon"
    ],
    "hp": 580,
    "attack": 178,
    "defense": 154,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Tyrunt ataca sin piedad. Sus 178 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 697,
    "name": "Tyrantrum",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png",
    "types": [
      "rock",
      "dragon"
    ],
    "hp": 820,
    "attack": 242,
    "defense": 238,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Tyrantrum es un muro infranqueable de tipo rock. Su asombrosa defensa de 238 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 698,
    "name": "Amaura",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png",
    "types": [
      "rock",
      "ice"
    ],
    "hp": 770,
    "attack": 118,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Amaura ataca sin piedad. Sus 118 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 699,
    "name": "Aurorus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png",
    "types": [
      "rock",
      "ice"
    ],
    "hp": 1200,
    "attack": 154,
    "defense": 144,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Aurorus es un muro infranqueable de tipo rock. Su asombrosa defensa de 144 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 700,
    "name": "Sylveon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png",
    "types": [
      "fairy"
    ],
    "hp": 950,
    "attack": 130,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Sylveon es un muro infranqueable de tipo fairy. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 701,
    "name": "Hawlucha",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png",
    "types": [
      "fighting",
      "flying"
    ],
    "hp": 780,
    "attack": 184,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Hawlucha es un muro infranqueable de tipo fighting. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 702,
    "name": "Dedenne",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png",
    "types": [
      "electric",
      "fairy"
    ],
    "hp": 670,
    "attack": 116,
    "defense": 114,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Dedenne es un muro infranqueable de tipo electric. Su asombrosa defensa de 114 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 703,
    "name": "Carbink",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png",
    "types": [
      "rock",
      "fairy"
    ],
    "hp": 500,
    "attack": 100,
    "defense": 300,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "common",
    "description": "Una criatura versátil de tipo rock. Carbink mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 704,
    "name": "Goomy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png",
    "types": [
      "dragon"
    ],
    "hp": 450,
    "attack": 100,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo dragon. Goomy mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 705,
    "name": "Sliggoo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png",
    "types": [
      "dragon"
    ],
    "hp": 680,
    "attack": 150,
    "defense": 106,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Sliggoo es un muro infranqueable de tipo dragon. Su asombrosa defensa de 106 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 706,
    "name": "Goodra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png",
    "types": [
      "dragon"
    ],
    "hp": 900,
    "attack": 200,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Goodra es un muro infranqueable de tipo dragon. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 707,
    "name": "Klefki",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png",
    "types": [
      "steel",
      "fairy"
    ],
    "hp": 570,
    "attack": 160,
    "defense": 182,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Klefki ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo steel. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 708,
    "name": "Phantump",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png",
    "types": [
      "ghost",
      "grass"
    ],
    "hp": 430,
    "attack": 140,
    "defense": 96,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Phantump ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost."
  },
  {
    "id": 709,
    "name": "Trevenant",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png",
    "types": [
      "ghost",
      "grass"
    ],
    "hp": 850,
    "attack": 220,
    "defense": 152,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Trevenant es un muro infranqueable de tipo ghost. Su asombrosa defensa de 152 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 710,
    "name": "Pumpkaboo-average",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png",
    "types": [
      "ghost",
      "grass"
    ],
    "hp": 490,
    "attack": 132,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Pumpkaboo-average ataca sin piedad. Sus 132 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost."
  },
  {
    "id": 711,
    "name": "Gourgeist-average",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png",
    "types": [
      "ghost",
      "grass"
    ],
    "hp": 650,
    "attack": 180,
    "defense": 244,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Gourgeist-average es un muro infranqueable de tipo ghost. Su asombrosa defensa de 244 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 712,
    "name": "Bergmite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png",
    "types": [
      "ice"
    ],
    "hp": 550,
    "attack": 138,
    "defense": 170,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Bergmite ataca sin piedad. Sus 138 puntos de ataque físico lo convierten en un depredador implacable de tipo ice."
  },
  {
    "id": 713,
    "name": "Avalugg",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png",
    "types": [
      "ice"
    ],
    "hp": 950,
    "attack": 234,
    "defense": 368,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 6,
    "rarity": "rare",
    "description": "Avalugg es un muro infranqueable de tipo ice. Su asombrosa defensa de 368 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 714,
    "name": "Noibat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png",
    "types": [
      "flying",
      "dragon"
    ],
    "hp": 400,
    "attack": 60,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo flying. Noibat mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 715,
    "name": "Noivern",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png",
    "types": [
      "flying",
      "dragon"
    ],
    "hp": 850,
    "attack": 140,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Noivern es un muro infranqueable de tipo flying. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 716,
    "name": "Xerneas",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png",
    "types": [
      "fairy"
    ],
    "hp": 1200,
    "attack": 262,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Xerneas es un muro infranqueable de tipo fairy. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 717,
    "name": "Yveltal",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png",
    "types": [
      "dark",
      "flying"
    ],
    "hp": 1200,
    "attack": 262,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Yveltal es un muro infranqueable de tipo dark. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 718,
    "name": "Zygarde-50",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png",
    "types": [
      "dragon",
      "ground"
    ],
    "hp": 1080,
    "attack": 200,
    "defense": 242,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Zygarde-50 es un muro infranqueable de tipo dragon. Su asombrosa defensa de 242 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 719,
    "name": "Diancie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png",
    "types": [
      "rock",
      "fairy"
    ],
    "hp": 500,
    "attack": 200,
    "defense": 300,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Consciente de su poder, Diancie ataca sin piedad. Sus 200 puntos de ataque físico lo convierten en un depredador implacable de tipo rock. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 720,
    "name": "Hoopa",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "hp": 800,
    "attack": 220,
    "defense": 120,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Hoopa es un muro infranqueable de tipo psychic. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 721,
    "name": "Volcanion",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png",
    "types": [
      "fire",
      "water"
    ],
    "hp": 800,
    "attack": 220,
    "defense": 240,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Volcanion es un muro infranqueable de tipo fire. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 722,
    "name": "Rowlet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png",
    "types": [
      "grass",
      "flying"
    ],
    "hp": 680,
    "attack": 110,
    "defense": 110,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Rowlet es un muro infranqueable de tipo grass. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 723,
    "name": "Dartrix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png",
    "types": [
      "grass",
      "flying"
    ],
    "hp": 780,
    "attack": 150,
    "defense": 150,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Dartrix es un muro infranqueable de tipo grass. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 724,
    "name": "Decidueye",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png",
    "types": [
      "grass",
      "ghost"
    ],
    "hp": 780,
    "attack": 214,
    "defense": 150,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Decidueye es un muro infranqueable de tipo grass. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 725,
    "name": "Litten",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png",
    "types": [
      "fire"
    ],
    "hp": 450,
    "attack": 130,
    "defense": 80,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Litten ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 726,
    "name": "Torracat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png",
    "types": [
      "fire"
    ],
    "hp": 650,
    "attack": 170,
    "defense": 100,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Torracat ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo fire. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 727,
    "name": "Incineroar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png",
    "types": [
      "fire",
      "dark"
    ],
    "hp": 950,
    "attack": 230,
    "defense": 180,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Incineroar es un muro infranqueable de tipo fire. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 728,
    "name": "Popplio",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png",
    "types": [
      "water"
    ],
    "hp": 500,
    "attack": 108,
    "defense": 108,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Popplio ataca sin piedad. Sus 108 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 729,
    "name": "Brionne",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png",
    "types": [
      "water"
    ],
    "hp": 600,
    "attack": 138,
    "defense": 138,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Brionne ataca sin piedad. Sus 138 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 730,
    "name": "Primarina",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png",
    "types": [
      "water",
      "fairy"
    ],
    "hp": 800,
    "attack": 148,
    "defense": 148,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Primarina es un muro infranqueable de tipo water. Su asombrosa defensa de 148 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 731,
    "name": "Pikipek",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 350,
    "attack": 150,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Pikipek ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 732,
    "name": "Trumbeak",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 550,
    "attack": 170,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Trumbeak ataca sin piedad. Sus 170 puntos de ataque físico lo convierten en un depredador implacable de tipo normal. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 733,
    "name": "Toucannon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 800,
    "attack": 240,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Toucannon es un muro infranqueable de tipo normal. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 734,
    "name": "Yungoos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png",
    "types": [
      "normal"
    ],
    "hp": 480,
    "attack": 140,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Yungoos ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 735,
    "name": "Gumshoos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png",
    "types": [
      "normal"
    ],
    "hp": 880,
    "attack": 220,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Gumshoos es un muro infranqueable de tipo normal. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 736,
    "name": "Grubbin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png",
    "types": [
      "bug"
    ],
    "hp": 470,
    "attack": 124,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Grubbin ataca sin piedad. Sus 124 puntos de ataque físico lo convierten en un depredador implacable de tipo bug."
  },
  {
    "id": 737,
    "name": "Charjabug",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png",
    "types": [
      "bug",
      "electric"
    ],
    "hp": 570,
    "attack": 164,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Charjabug ataca sin piedad. Sus 164 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 738,
    "name": "Vikavolt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png",
    "types": [
      "bug",
      "electric"
    ],
    "hp": 770,
    "attack": 140,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Vikavolt es un muro infranqueable de tipo bug. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 739,
    "name": "Crabrawler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png",
    "types": [
      "fighting"
    ],
    "hp": 470,
    "attack": 164,
    "defense": 114,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Crabrawler ataca sin piedad. Sus 164 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting."
  },
  {
    "id": 740,
    "name": "Crabominable",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png",
    "types": [
      "fighting",
      "ice"
    ],
    "hp": 970,
    "attack": 264,
    "defense": 154,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Crabominable es un muro infranqueable de tipo fighting. Su asombrosa defensa de 154 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 741,
    "name": "Oricorio-baile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png",
    "types": [
      "fire",
      "flying"
    ],
    "hp": 750,
    "attack": 140,
    "defense": 140,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Oricorio-baile es un muro infranqueable de tipo fire. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 742,
    "name": "Cutiefly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png",
    "types": [
      "bug",
      "fairy"
    ],
    "hp": 400,
    "attack": 90,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Cutiefly mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 743,
    "name": "Ribombee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png",
    "types": [
      "bug",
      "fairy"
    ],
    "hp": 600,
    "attack": 110,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Ribombee ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 744,
    "name": "Rockruff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png",
    "types": [
      "rock"
    ],
    "hp": 450,
    "attack": 130,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Rockruff ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 745,
    "name": "Lycanroc-midday",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png",
    "types": [
      "rock"
    ],
    "hp": 750,
    "attack": 230,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Lycanroc-midday es un muro infranqueable de tipo rock. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 746,
    "name": "Wishiwashi-solo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png",
    "types": [
      "water"
    ],
    "hp": 450,
    "attack": 40,
    "defense": 40,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Wishiwashi-solo mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 747,
    "name": "Mareanie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png",
    "types": [
      "poison",
      "water"
    ],
    "hp": 500,
    "attack": 106,
    "defense": 124,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Mareanie ataca sin piedad. Sus 106 puntos de ataque físico lo convierten en un depredador implacable de tipo poison."
  },
  {
    "id": 748,
    "name": "Toxapex",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png",
    "types": [
      "poison",
      "water"
    ],
    "hp": 500,
    "attack": 126,
    "defense": 304,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Toxapex ataca sin piedad. Sus 126 puntos de ataque físico lo convierten en un depredador implacable de tipo poison. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 749,
    "name": "Mudbray",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png",
    "types": [
      "ground"
    ],
    "hp": 700,
    "attack": 200,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Mudbray es un muro infranqueable de tipo ground. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 750,
    "name": "Mudsdale",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png",
    "types": [
      "ground"
    ],
    "hp": 1000,
    "attack": 250,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Mudsdale es un muro infranqueable de tipo ground. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 751,
    "name": "Dewpider",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png",
    "types": [
      "water",
      "bug"
    ],
    "hp": 380,
    "attack": 80,
    "defense": 104,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Dewpider mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 752,
    "name": "Araquanid",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png",
    "types": [
      "water",
      "bug"
    ],
    "hp": 680,
    "attack": 140,
    "defense": 184,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Araquanid es un muro infranqueable de tipo water. Su asombrosa defensa de 184 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 753,
    "name": "Fomantis",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png",
    "types": [
      "grass"
    ],
    "hp": 400,
    "attack": 110,
    "defense": 70,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Fomantis ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 754,
    "name": "Lurantis",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png",
    "types": [
      "grass"
    ],
    "hp": 700,
    "attack": 210,
    "defense": 180,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Lurantis es un muro infranqueable de tipo grass. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 755,
    "name": "Morelull",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png",
    "types": [
      "grass",
      "fairy"
    ],
    "hp": 400,
    "attack": 70,
    "defense": 110,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Morelull mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 756,
    "name": "Shiinotic",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png",
    "types": [
      "grass",
      "fairy"
    ],
    "hp": 600,
    "attack": 90,
    "defense": 160,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo grass. Shiinotic mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 757,
    "name": "Salandit",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png",
    "types": [
      "poison",
      "fire"
    ],
    "hp": 480,
    "attack": 88,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo poison. Salandit mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 758,
    "name": "Salazzle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png",
    "types": [
      "poison",
      "fire"
    ],
    "hp": 680,
    "attack": 128,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Salazzle es un muro infranqueable de tipo poison. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 759,
    "name": "Stufful",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png",
    "types": [
      "normal",
      "fighting"
    ],
    "hp": 700,
    "attack": 150,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Stufful ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo normal."
  },
  {
    "id": 760,
    "name": "Bewear",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png",
    "types": [
      "normal",
      "fighting"
    ],
    "hp": 1200,
    "attack": 250,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Bewear es un muro infranqueable de tipo normal. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 761,
    "name": "Bounsweet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png",
    "types": [
      "grass"
    ],
    "hp": 420,
    "attack": 60,
    "defense": 76,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Bounsweet mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 762,
    "name": "Steenee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png",
    "types": [
      "grass"
    ],
    "hp": 520,
    "attack": 80,
    "defense": 96,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo grass. Steenee mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 763,
    "name": "Tsareena",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png",
    "types": [
      "grass"
    ],
    "hp": 720,
    "attack": 240,
    "defense": 196,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 7,
    "rarity": "legendary",
    "description": "Tsareena es un muro infranqueable de tipo grass. Su asombrosa defensa de 196 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 764,
    "name": "Comfey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png",
    "types": [
      "fairy"
    ],
    "hp": 510,
    "attack": 104,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Comfey ataca sin piedad. Sus 104 puntos de ataque físico lo convierten en un depredador implacable de tipo fairy. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 765,
    "name": "Oranguru",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png",
    "types": [
      "normal",
      "psychic"
    ],
    "hp": 900,
    "attack": 120,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Oranguru es un muro infranqueable de tipo normal. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 766,
    "name": "Passimian",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png",
    "types": [
      "fighting"
    ],
    "hp": 1000,
    "attack": 240,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Passimian es un muro infranqueable de tipo fighting. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 767,
    "name": "Wimpod",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png",
    "types": [
      "bug",
      "water"
    ],
    "hp": 250,
    "attack": 70,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Wimpod mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 768,
    "name": "Golisopod",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png",
    "types": [
      "bug",
      "water"
    ],
    "hp": 750,
    "attack": 250,
    "defense": 280,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Golisopod es un muro infranqueable de tipo bug. Su asombrosa defensa de 280 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 769,
    "name": "Sandygast",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png",
    "types": [
      "ghost",
      "ground"
    ],
    "hp": 550,
    "attack": 110,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Sandygast ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost."
  },
  {
    "id": 770,
    "name": "Palossand",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png",
    "types": [
      "ghost",
      "ground"
    ],
    "hp": 850,
    "attack": 150,
    "defense": 220,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Palossand es un muro infranqueable de tipo ghost. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 771,
    "name": "Pyukumuku",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png",
    "types": [
      "water"
    ],
    "hp": 550,
    "attack": 120,
    "defense": 260,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Pyukumuku ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 772,
    "name": "Type-null",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png",
    "types": [
      "normal"
    ],
    "hp": 950,
    "attack": 190,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Type-null es un muro infranqueable de tipo normal. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 773,
    "name": "Silvally",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png",
    "types": [
      "normal"
    ],
    "hp": 950,
    "attack": 190,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Silvally es un muro infranqueable de tipo normal. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 774,
    "name": "Minior-red-meteor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png",
    "types": [
      "rock",
      "flying"
    ],
    "hp": 600,
    "attack": 120,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Minior-red-meteor ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo rock. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 775,
    "name": "Komala",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png",
    "types": [
      "normal"
    ],
    "hp": 650,
    "attack": 230,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Komala es un muro infranqueable de tipo normal. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 776,
    "name": "Turtonator",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png",
    "types": [
      "fire",
      "dragon"
    ],
    "hp": 600,
    "attack": 156,
    "defense": 270,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Turtonator ataca sin piedad. Sus 156 puntos de ataque físico lo convierten en un depredador implacable de tipo fire. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 777,
    "name": "Togedemaru",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png",
    "types": [
      "electric",
      "steel"
    ],
    "hp": 650,
    "attack": 196,
    "defense": 126,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Togedemaru es un muro infranqueable de tipo electric. Su asombrosa defensa de 126 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 778,
    "name": "Mimikyu-disguised",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "hp": 550,
    "attack": 180,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Mimikyu-disguised ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 779,
    "name": "Bruxish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png",
    "types": [
      "water",
      "psychic"
    ],
    "hp": 680,
    "attack": 210,
    "defense": 140,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Bruxish es un muro infranqueable de tipo water. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 780,
    "name": "Drampa",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png",
    "types": [
      "normal",
      "dragon"
    ],
    "hp": 780,
    "attack": 120,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Drampa es un muro infranqueable de tipo normal. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 781,
    "name": "Dhelmise",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png",
    "types": [
      "ghost",
      "grass"
    ],
    "hp": 700,
    "attack": 262,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Dhelmise es un muro infranqueable de tipo ghost. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 782,
    "name": "Jangmo-o",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png",
    "types": [
      "dragon"
    ],
    "hp": 450,
    "attack": 110,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Jangmo-o ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo dragon."
  },
  {
    "id": 783,
    "name": "Hakamo-o",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "hp": 550,
    "attack": 150,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Hakamo-o ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo dragon. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 784,
    "name": "Kommo-o",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "hp": 750,
    "attack": 220,
    "defense": 250,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Kommo-o es un muro infranqueable de tipo dragon. Su asombrosa defensa de 250 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 785,
    "name": "Tapu-koko",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png",
    "types": [
      "electric",
      "fairy"
    ],
    "hp": 700,
    "attack": 230,
    "defense": 170,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Tapu-koko es un muro infranqueable de tipo electric. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 786,
    "name": "Tapu-lele",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "hp": 700,
    "attack": 170,
    "defense": 150,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Tapu-lele es un muro infranqueable de tipo psychic. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 787,
    "name": "Tapu-bulu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png",
    "types": [
      "grass",
      "fairy"
    ],
    "hp": 700,
    "attack": 260,
    "defense": 230,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Tapu-bulu es un muro infranqueable de tipo grass. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 788,
    "name": "Tapu-fini",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png",
    "types": [
      "water",
      "fairy"
    ],
    "hp": 700,
    "attack": 150,
    "defense": 230,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Tapu-fini es un muro infranqueable de tipo water. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 789,
    "name": "Cosmog",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png",
    "types": [
      "psychic"
    ],
    "hp": 430,
    "attack": 58,
    "defense": 62,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Cosmog mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 790,
    "name": "Cosmoem",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png",
    "types": [
      "psychic"
    ],
    "hp": 430,
    "attack": 58,
    "defense": 262,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo psychic. Cosmoem mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 791,
    "name": "Solgaleo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png",
    "types": [
      "psychic",
      "steel"
    ],
    "hp": 1200,
    "attack": 274,
    "defense": 214,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Solgaleo es un muro infranqueable de tipo psychic. Su asombrosa defensa de 214 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 792,
    "name": "Lunala",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "hp": 1200,
    "attack": 226,
    "defense": 178,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Lunala es un muro infranqueable de tipo psychic. Su asombrosa defensa de 178 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 793,
    "name": "Nihilego",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png",
    "types": [
      "rock",
      "poison"
    ],
    "hp": 1090,
    "attack": 106,
    "defense": 94,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Consciente de su poder, Nihilego ataca sin piedad. Sus 106 puntos de ataque físico lo convierten en un depredador implacable de tipo rock. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 794,
    "name": "Buzzwole",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png",
    "types": [
      "bug",
      "fighting"
    ],
    "hp": 1070,
    "attack": 278,
    "defense": 278,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Buzzwole es un muro infranqueable de tipo bug. Su asombrosa defensa de 278 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 795,
    "name": "Pheromosa",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png",
    "types": [
      "bug",
      "fighting"
    ],
    "hp": 710,
    "attack": 274,
    "defense": 74,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Consciente de su poder, Pheromosa ataca sin piedad. Sus 274 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 796,
    "name": "Xurkitree",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png",
    "types": [
      "electric"
    ],
    "hp": 830,
    "attack": 178,
    "defense": 142,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Xurkitree es un muro infranqueable de tipo electric. Su asombrosa defensa de 142 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 797,
    "name": "Celesteela",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png",
    "types": [
      "steel",
      "flying"
    ],
    "hp": 970,
    "attack": 202,
    "defense": 206,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Celesteela es un muro infranqueable de tipo steel. Su asombrosa defensa de 206 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 798,
    "name": "Kartana",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png",
    "types": [
      "grass",
      "steel"
    ],
    "hp": 590,
    "attack": 362,
    "defense": 262,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Consciente de su poder, Kartana ataca sin piedad. Sus 362 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 799,
    "name": "Guzzlord",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png",
    "types": [
      "dark",
      "dragon"
    ],
    "hp": 1200,
    "attack": 202,
    "defense": 106,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Guzzlord es un muro infranqueable de tipo dark. Su asombrosa defensa de 106 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 800,
    "name": "Necrozma",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png",
    "types": [
      "psychic"
    ],
    "hp": 970,
    "attack": 214,
    "defense": 202,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Necrozma es un muro infranqueable de tipo psychic. Su asombrosa defensa de 202 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 801,
    "name": "Magearna",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png",
    "types": [
      "steel",
      "fairy"
    ],
    "hp": 800,
    "attack": 190,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Magearna es un muro infranqueable de tipo steel. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 802,
    "name": "Marshadow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png",
    "types": [
      "fighting",
      "ghost"
    ],
    "hp": 900,
    "attack": 250,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Marshadow es un muro infranqueable de tipo fighting. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 803,
    "name": "Poipole",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png",
    "types": [
      "poison"
    ],
    "hp": 670,
    "attack": 146,
    "defense": 134,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Poipole es un muro infranqueable de tipo poison. Su asombrosa defensa de 134 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 804,
    "name": "Naganadel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png",
    "types": [
      "poison",
      "dragon"
    ],
    "hp": 730,
    "attack": 146,
    "defense": 146,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Naganadel es un muro infranqueable de tipo poison. Su asombrosa defensa de 146 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 805,
    "name": "Stakataka",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png",
    "types": [
      "rock",
      "steel"
    ],
    "hp": 610,
    "attack": 262,
    "defense": 422,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Stakataka es un muro infranqueable de tipo rock. Su asombrosa defensa de 422 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 806,
    "name": "Blacephalon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png",
    "types": [
      "fire",
      "ghost"
    ],
    "hp": 530,
    "attack": 254,
    "defense": 106,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Consciente de su poder, Blacephalon ataca sin piedad. Sus 254 puntos de ataque físico lo convierten en un depredador implacable de tipo fire. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 807,
    "name": "Zeraora",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png",
    "types": [
      "electric"
    ],
    "hp": 880,
    "attack": 224,
    "defense": 150,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Zeraora es un muro infranqueable de tipo electric. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 808,
    "name": "Meltan",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png",
    "types": [
      "steel"
    ],
    "hp": 460,
    "attack": 130,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Meltan ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo steel. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 809,
    "name": "Melmetal",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png",
    "types": [
      "steel"
    ],
    "hp": 1200,
    "attack": 286,
    "defense": 286,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Melmetal es un muro infranqueable de tipo steel. Su asombrosa defensa de 286 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 810,
    "name": "Grookey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png",
    "types": [
      "grass"
    ],
    "hp": 500,
    "attack": 130,
    "defense": 100,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Grookey ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 811,
    "name": "Thwackey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png",
    "types": [
      "grass"
    ],
    "hp": 700,
    "attack": 170,
    "defense": 140,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Thwackey es un muro infranqueable de tipo grass. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 812,
    "name": "Rillaboom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png",
    "types": [
      "grass"
    ],
    "hp": 1000,
    "attack": 250,
    "defense": 180,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Rillaboom es un muro infranqueable de tipo grass. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 813,
    "name": "Scorbunny",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png",
    "types": [
      "fire"
    ],
    "hp": 500,
    "attack": 142,
    "defense": 80,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Scorbunny ataca sin piedad. Sus 142 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 814,
    "name": "Raboot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png",
    "types": [
      "fire"
    ],
    "hp": 650,
    "attack": 172,
    "defense": 120,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 4,
    "rarity": "rare",
    "description": "Raboot es un muro infranqueable de tipo fire. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 815,
    "name": "Cinderace",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png",
    "types": [
      "fire"
    ],
    "hp": 800,
    "attack": 232,
    "defense": 150,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Cinderace es un muro infranqueable de tipo fire. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 816,
    "name": "Sobble",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png",
    "types": [
      "water"
    ],
    "hp": 500,
    "attack": 80,
    "defense": 80,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Sobble mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 817,
    "name": "Drizzile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png",
    "types": [
      "water"
    ],
    "hp": 650,
    "attack": 120,
    "defense": 110,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Drizzile es un muro infranqueable de tipo water. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 818,
    "name": "Inteleon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png",
    "types": [
      "water"
    ],
    "hp": 700,
    "attack": 170,
    "defense": 130,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Inteleon es un muro infranqueable de tipo water. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 819,
    "name": "Skwovet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png",
    "types": [
      "normal"
    ],
    "hp": 700,
    "attack": 110,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Skwovet es un muro infranqueable de tipo normal. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 820,
    "name": "Greedent",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png",
    "types": [
      "normal"
    ],
    "hp": 1200,
    "attack": 190,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Greedent es un muro infranqueable de tipo normal. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 821,
    "name": "Rookidee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png",
    "types": [
      "flying"
    ],
    "hp": 380,
    "attack": 94,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo flying. Rookidee mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 822,
    "name": "Corvisquire",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png",
    "types": [
      "flying"
    ],
    "hp": 680,
    "attack": 134,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Corvisquire es un muro infranqueable de tipo flying. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 823,
    "name": "Corviknight",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png",
    "types": [
      "flying",
      "steel"
    ],
    "hp": 980,
    "attack": 174,
    "defense": 210,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Corviknight es un muro infranqueable de tipo flying. Su asombrosa defensa de 210 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 824,
    "name": "Blipbug",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png",
    "types": [
      "bug"
    ],
    "hp": 250,
    "attack": 40,
    "defense": 40,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Blipbug mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 825,
    "name": "Dottler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png",
    "types": [
      "bug",
      "psychic"
    ],
    "hp": 500,
    "attack": 70,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo bug. Dottler mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 826,
    "name": "Orbeetle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png",
    "types": [
      "bug",
      "psychic"
    ],
    "hp": 600,
    "attack": 90,
    "defense": 220,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Una criatura versátil de tipo bug. Orbeetle mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 827,
    "name": "Nickit",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png",
    "types": [
      "dark"
    ],
    "hp": 400,
    "attack": 56,
    "defense": 56,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo dark. Nickit mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 828,
    "name": "Thievul",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png",
    "types": [
      "dark"
    ],
    "hp": 700,
    "attack": 116,
    "defense": 116,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Thievul es un muro infranqueable de tipo dark. Su asombrosa defensa de 116 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 829,
    "name": "Gossifleur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png",
    "types": [
      "grass"
    ],
    "hp": 400,
    "attack": 80,
    "defense": 120,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Gossifleur mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 830,
    "name": "Eldegoss",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png",
    "types": [
      "grass"
    ],
    "hp": 600,
    "attack": 100,
    "defense": 180,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo grass. Eldegoss mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 831,
    "name": "Wooloo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png",
    "types": [
      "normal"
    ],
    "hp": 420,
    "attack": 80,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo normal. Wooloo mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 832,
    "name": "Dubwool",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png",
    "types": [
      "normal"
    ],
    "hp": 720,
    "attack": 160,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Dubwool es un muro infranqueable de tipo normal. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 833,
    "name": "Chewtle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png",
    "types": [
      "water"
    ],
    "hp": 500,
    "attack": 128,
    "defense": 100,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Chewtle ataca sin piedad. Sus 128 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 834,
    "name": "Drednaw",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png",
    "types": [
      "water",
      "rock"
    ],
    "hp": 900,
    "attack": 230,
    "defense": 180,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Drednaw es un muro infranqueable de tipo water. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 835,
    "name": "Yamper",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png",
    "types": [
      "electric"
    ],
    "hp": 590,
    "attack": 90,
    "defense": 100,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Yamper mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 836,
    "name": "Boltund",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png",
    "types": [
      "electric"
    ],
    "hp": 690,
    "attack": 180,
    "defense": 120,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Boltund es un muro infranqueable de tipo electric. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 837,
    "name": "Rolycoly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png",
    "types": [
      "rock"
    ],
    "hp": 300,
    "attack": 80,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo rock. Rolycoly mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 838,
    "name": "Carkol",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png",
    "types": [
      "rock",
      "fire"
    ],
    "hp": 800,
    "attack": 120,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Carkol es un muro infranqueable de tipo rock. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 839,
    "name": "Coalossal",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png",
    "types": [
      "rock",
      "fire"
    ],
    "hp": 1100,
    "attack": 160,
    "defense": 240,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Coalossal es un muro infranqueable de tipo rock. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 840,
    "name": "Applin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png",
    "types": [
      "grass",
      "dragon"
    ],
    "hp": 400,
    "attack": 80,
    "defense": 160,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Applin mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 841,
    "name": "Flapple",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png",
    "types": [
      "grass",
      "dragon"
    ],
    "hp": 700,
    "attack": 220,
    "defense": 160,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Flapple es un muro infranqueable de tipo grass. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 842,
    "name": "Appletun",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png",
    "types": [
      "grass",
      "dragon"
    ],
    "hp": 1100,
    "attack": 170,
    "defense": 160,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Appletun es un muro infranqueable de tipo grass. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 843,
    "name": "Silicobra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png",
    "types": [
      "ground"
    ],
    "hp": 520,
    "attack": 114,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Silicobra ataca sin piedad. Sus 114 puntos de ataque físico lo convierten en un depredador implacable de tipo ground."
  },
  {
    "id": 844,
    "name": "Sandaconda",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png",
    "types": [
      "ground"
    ],
    "hp": 720,
    "attack": 214,
    "defense": 250,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Sandaconda es un muro infranqueable de tipo ground. Su asombrosa defensa de 250 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 845,
    "name": "Cramorant",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png",
    "types": [
      "flying",
      "water"
    ],
    "hp": 700,
    "attack": 170,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Cramorant es un muro infranqueable de tipo flying. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 846,
    "name": "Arrokuda",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png",
    "types": [
      "water"
    ],
    "hp": 410,
    "attack": 126,
    "defense": 80,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Arrokuda ataca sin piedad. Sus 126 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 847,
    "name": "Barraskewda",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png",
    "types": [
      "water"
    ],
    "hp": 610,
    "attack": 246,
    "defense": 120,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Barraskewda es un muro infranqueable de tipo water. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 848,
    "name": "Toxel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png",
    "types": [
      "electric",
      "poison"
    ],
    "hp": 400,
    "attack": 76,
    "defense": 70,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Toxel mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 849,
    "name": "Toxtricity-amped",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png",
    "types": [
      "electric",
      "poison"
    ],
    "hp": 750,
    "attack": 196,
    "defense": 140,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Toxtricity-amped es un muro infranqueable de tipo electric. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 850,
    "name": "Sizzlipede",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png",
    "types": [
      "fire",
      "bug"
    ],
    "hp": 500,
    "attack": 130,
    "defense": 90,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Sizzlipede ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo fire."
  },
  {
    "id": 851,
    "name": "Centiskorch",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png",
    "types": [
      "fire",
      "bug"
    ],
    "hp": 1000,
    "attack": 230,
    "defense": 130,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 6,
    "rarity": "rare",
    "description": "Centiskorch es un muro infranqueable de tipo fire. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 852,
    "name": "Clobbopus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png",
    "types": [
      "fighting"
    ],
    "hp": 500,
    "attack": 136,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Clobbopus ataca sin piedad. Sus 136 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting."
  },
  {
    "id": 853,
    "name": "Grapploct",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png",
    "types": [
      "fighting"
    ],
    "hp": 800,
    "attack": 236,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Grapploct es un muro infranqueable de tipo fighting. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 854,
    "name": "Sinistea",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png",
    "types": [
      "ghost"
    ],
    "hp": 400,
    "attack": 90,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ghost. Sinistea mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 855,
    "name": "Polteageist",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png",
    "types": [
      "ghost"
    ],
    "hp": 600,
    "attack": 130,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Polteageist ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 856,
    "name": "Hatenna",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png",
    "types": [
      "psychic"
    ],
    "hp": 420,
    "attack": 60,
    "defense": 90,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Hatenna mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 857,
    "name": "Hattrem",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png",
    "types": [
      "psychic"
    ],
    "hp": 570,
    "attack": 80,
    "defense": 130,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 4,
    "rarity": "rare",
    "description": "Una criatura versátil de tipo psychic. Hattrem mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 858,
    "name": "Hatterene",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "hp": 570,
    "attack": 180,
    "defense": 190,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Consciente de su poder, Hatterene ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo psychic. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 859,
    "name": "Impidimp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png",
    "types": [
      "dark",
      "fairy"
    ],
    "hp": 450,
    "attack": 90,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo dark. Impidimp mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 860,
    "name": "Morgrem",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png",
    "types": [
      "dark",
      "fairy"
    ],
    "hp": 650,
    "attack": 120,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Morgrem ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo dark. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 861,
    "name": "Grimmsnarl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png",
    "types": [
      "dark",
      "fairy"
    ],
    "hp": 950,
    "attack": 240,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Grimmsnarl es un muro infranqueable de tipo dark. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 862,
    "name": "Obstagoon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png",
    "types": [
      "dark",
      "normal"
    ],
    "hp": 930,
    "attack": 180,
    "defense": 202,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Obstagoon es un muro infranqueable de tipo dark. Su asombrosa defensa de 202 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 863,
    "name": "Perrserker",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png",
    "types": [
      "steel"
    ],
    "hp": 700,
    "attack": 220,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Perrserker es un muro infranqueable de tipo steel. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 864,
    "name": "Cursola",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png",
    "types": [
      "ghost"
    ],
    "hp": 600,
    "attack": 190,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Cursola ataca sin piedad. Sus 190 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 865,
    "name": "Sirfetchd",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png",
    "types": [
      "fighting"
    ],
    "hp": 620,
    "attack": 270,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Sirfetchd es un muro infranqueable de tipo fighting. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 866,
    "name": "Mr-rime",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png",
    "types": [
      "ice",
      "psychic"
    ],
    "hp": 800,
    "attack": 170,
    "defense": 150,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 6,
    "rarity": "rare",
    "description": "Mr-rime es un muro infranqueable de tipo ice. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 867,
    "name": "Runerigus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png",
    "types": [
      "ground",
      "ghost"
    ],
    "hp": 580,
    "attack": 190,
    "defense": 290,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Runerigus ataca sin piedad. Sus 190 puntos de ataque físico lo convierten en un depredador implacable de tipo ground. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 868,
    "name": "Milcery",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png",
    "types": [
      "fairy"
    ],
    "hp": 450,
    "attack": 80,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fairy. Milcery mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 869,
    "name": "Alcremie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png",
    "types": [
      "fairy"
    ],
    "hp": 650,
    "attack": 120,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Alcremie es un muro infranqueable de tipo fairy. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 870,
    "name": "Falinks",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png",
    "types": [
      "fighting"
    ],
    "hp": 650,
    "attack": 200,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Falinks es un muro infranqueable de tipo fighting. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 871,
    "name": "Pincurchin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png",
    "types": [
      "electric"
    ],
    "hp": 480,
    "attack": 202,
    "defense": 190,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Pincurchin ataca sin piedad. Sus 202 puntos de ataque físico lo convierten en un depredador implacable de tipo electric. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 872,
    "name": "Snom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png",
    "types": [
      "ice",
      "bug"
    ],
    "hp": 300,
    "attack": 50,
    "defense": 70,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ice. Snom mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 873,
    "name": "Frosmoth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png",
    "types": [
      "ice",
      "bug"
    ],
    "hp": 700,
    "attack": 130,
    "defense": 120,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 5,
    "rarity": "rare",
    "description": "Frosmoth es un muro infranqueable de tipo ice. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 874,
    "name": "Stonjourner",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png",
    "types": [
      "rock"
    ],
    "hp": 1000,
    "attack": 250,
    "defense": 270,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Stonjourner es un muro infranqueable de tipo rock. Su asombrosa defensa de 270 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 875,
    "name": "Eiscue-ice",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png",
    "types": [
      "ice"
    ],
    "hp": 750,
    "attack": 160,
    "defense": 220,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 5,
    "rarity": "rare",
    "description": "Eiscue-ice es un muro infranqueable de tipo ice. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 876,
    "name": "Indeedee-male",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png",
    "types": [
      "psychic",
      "normal"
    ],
    "hp": 600,
    "attack": 130,
    "defense": 110,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Indeedee-male ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo psychic. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 877,
    "name": "Morpeko-full-belly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png",
    "types": [
      "electric",
      "dark"
    ],
    "hp": 580,
    "attack": 190,
    "defense": 116,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Morpeko-full-belly ataca sin piedad. Sus 190 puntos de ataque físico lo convierten en un depredador implacable de tipo electric. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 878,
    "name": "Cufant",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png",
    "types": [
      "steel"
    ],
    "hp": 720,
    "attack": 160,
    "defense": 98,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Cufant ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo steel."
  },
  {
    "id": 879,
    "name": "Copperajah",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png",
    "types": [
      "steel"
    ],
    "hp": 1200,
    "attack": 260,
    "defense": 138,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Copperajah es un muro infranqueable de tipo steel. Su asombrosa defensa de 138 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 880,
    "name": "Dracozolt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png",
    "types": [
      "electric",
      "dragon"
    ],
    "hp": 900,
    "attack": 200,
    "defense": 180,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Dracozolt es un muro infranqueable de tipo electric. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 881,
    "name": "Arctozolt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png",
    "types": [
      "electric",
      "ice"
    ],
    "hp": 900,
    "attack": 200,
    "defense": 180,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Arctozolt es un muro infranqueable de tipo electric. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 882,
    "name": "Dracovish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png",
    "types": [
      "water",
      "dragon"
    ],
    "hp": 900,
    "attack": 180,
    "defense": 200,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Dracovish es un muro infranqueable de tipo water. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 883,
    "name": "Arctovish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png",
    "types": [
      "water",
      "ice"
    ],
    "hp": 900,
    "attack": 180,
    "defense": 200,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Arctovish es un muro infranqueable de tipo water. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 884,
    "name": "Duraludon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png",
    "types": [
      "steel",
      "dragon"
    ],
    "hp": 700,
    "attack": 190,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Duraludon es un muro infranqueable de tipo steel. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 885,
    "name": "Dreepy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "hp": 280,
    "attack": 120,
    "defense": 60,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Dreepy ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo dragon."
  },
  {
    "id": 886,
    "name": "Drakloak",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "hp": 680,
    "attack": 160,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Drakloak ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo dragon. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 887,
    "name": "Dragapult",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "hp": 880,
    "attack": 240,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Dragapult es un muro infranqueable de tipo dragon. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 888,
    "name": "Zacian",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png",
    "types": [
      "fairy"
    ],
    "hp": 920,
    "attack": 240,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 11,
    "rarity": "legendary",
    "description": "Zacian es un muro infranqueable de tipo fairy. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 889,
    "name": "Zamazenta",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png",
    "types": [
      "fighting"
    ],
    "hp": 920,
    "attack": 240,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 11,
    "rarity": "legendary",
    "description": "Zamazenta es un muro infranqueable de tipo fighting. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 890,
    "name": "Eternatus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png",
    "types": [
      "poison",
      "dragon"
    ],
    "hp": 1200,
    "attack": 170,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 11,
    "rarity": "legendary",
    "description": "Eternatus es un muro infranqueable de tipo poison. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 891,
    "name": "Kubfu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png",
    "types": [
      "fighting"
    ],
    "hp": 600,
    "attack": 180,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Kubfu ataca sin piedad. Sus 180 puntos de ataque físico lo convierten en un depredador implacable de tipo fighting."
  },
  {
    "id": 892,
    "name": "Urshifu-single-strike",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png",
    "types": [
      "fighting",
      "dark"
    ],
    "hp": 1000,
    "attack": 260,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Urshifu-single-strike es un muro infranqueable de tipo fighting. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 893,
    "name": "Zarude",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png",
    "types": [
      "dark",
      "grass"
    ],
    "hp": 1050,
    "attack": 240,
    "defense": 210,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Zarude es un muro infranqueable de tipo dark. Su asombrosa defensa de 210 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 894,
    "name": "Regieleki",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png",
    "types": [
      "electric"
    ],
    "hp": 800,
    "attack": 200,
    "defense": 100,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Consciente de su poder, Regieleki ataca sin piedad. Sus 200 puntos de ataque físico lo convierten en un depredador implacable de tipo electric. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 895,
    "name": "Regidrago",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png",
    "types": [
      "dragon"
    ],
    "hp": 1200,
    "attack": 200,
    "defense": 100,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Consciente de su poder, Regidrago ataca sin piedad. Sus 200 puntos de ataque físico lo convierten en un depredador implacable de tipo dragon. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 896,
    "name": "Glastrier",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png",
    "types": [
      "ice"
    ],
    "hp": 1000,
    "attack": 290,
    "defense": 260,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Glastrier es un muro infranqueable de tipo ice. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 897,
    "name": "Spectrier",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png",
    "types": [
      "ghost"
    ],
    "hp": 1000,
    "attack": 130,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Spectrier es un muro infranqueable de tipo ghost. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 898,
    "name": "Calyrex",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png",
    "types": [
      "psychic",
      "grass"
    ],
    "hp": 1000,
    "attack": 160,
    "defense": 160,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Calyrex es un muro infranqueable de tipo psychic. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 899,
    "name": "Wyrdeer",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png",
    "types": [
      "normal",
      "psychic"
    ],
    "hp": 1030,
    "attack": 210,
    "defense": 144,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Wyrdeer es un muro infranqueable de tipo normal. Su asombrosa defensa de 144 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 900,
    "name": "Kleavor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png",
    "types": [
      "bug",
      "rock"
    ],
    "hp": 700,
    "attack": 270,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Kleavor es un muro infranqueable de tipo bug. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 901,
    "name": "Ursaluna",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png",
    "types": [
      "ground",
      "normal"
    ],
    "hp": 1200,
    "attack": 280,
    "defense": 210,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Ursaluna es un muro infranqueable de tipo ground. Su asombrosa defensa de 210 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 902,
    "name": "Basculegion-male",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png",
    "types": [
      "water",
      "ghost"
    ],
    "hp": 1200,
    "attack": 224,
    "defense": 130,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Basculegion-male es un muro infranqueable de tipo water. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 903,
    "name": "Sneasler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png",
    "types": [
      "fighting",
      "poison"
    ],
    "hp": 800,
    "attack": 260,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Sneasler es un muro infranqueable de tipo fighting. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 904,
    "name": "Overqwil",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png",
    "types": [
      "dark",
      "poison"
    ],
    "hp": 850,
    "attack": 230,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Overqwil es un muro infranqueable de tipo dark. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 905,
    "name": "Enamorus-incarnate",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png",
    "types": [
      "fairy",
      "flying"
    ],
    "hp": 740,
    "attack": 230,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "rare",
    "description": "Enamorus-incarnate es un muro infranqueable de tipo fairy. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 906,
    "name": "Sprigatito",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png",
    "types": [
      "grass"
    ],
    "hp": 400,
    "attack": 122,
    "defense": 108,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Sprigatito ataca sin piedad. Sus 122 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 907,
    "name": "Floragato",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/907.png",
    "types": [
      "grass"
    ],
    "hp": 610,
    "attack": 160,
    "defense": 126,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Floragato es un muro infranqueable de tipo grass. Su asombrosa defensa de 126 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 908,
    "name": "Meowscarada",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png",
    "types": [
      "grass",
      "dark"
    ],
    "hp": 760,
    "attack": 220,
    "defense": 140,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Meowscarada es un muro infranqueable de tipo grass. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 909,
    "name": "Fuecoco",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png",
    "types": [
      "fire"
    ],
    "hp": 670,
    "attack": 90,
    "defense": 118,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 2,
    "rarity": "common",
    "description": "Fuecoco es un muro infranqueable de tipo fire. Su asombrosa defensa de 118 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 910,
    "name": "Crocalor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/910.png",
    "types": [
      "fire"
    ],
    "hp": 810,
    "attack": 110,
    "defense": 156,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 4,
    "rarity": "rare",
    "description": "Crocalor es un muro infranqueable de tipo fire. Su asombrosa defensa de 156 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 911,
    "name": "Skeledirge",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png",
    "types": [
      "fire",
      "ghost"
    ],
    "hp": 1040,
    "attack": 150,
    "defense": 200,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Skeledirge es un muro infranqueable de tipo fire. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 912,
    "name": "Quaxly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png",
    "types": [
      "water"
    ],
    "hp": 550,
    "attack": 130,
    "defense": 90,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Quaxly ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 913,
    "name": "Quaxwell",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/913.png",
    "types": [
      "water"
    ],
    "hp": 700,
    "attack": 170,
    "defense": 130,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Quaxwell es un muro infranqueable de tipo water. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 914,
    "name": "Quaquaval",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png",
    "types": [
      "water",
      "fighting"
    ],
    "hp": 850,
    "attack": 240,
    "defense": 160,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Quaquaval es un muro infranqueable de tipo water. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 915,
    "name": "Lechonk",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/915.png",
    "types": [
      "normal"
    ],
    "hp": 540,
    "attack": 90,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Lechonk mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 916,
    "name": "Oinkologne-male",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/916.png",
    "types": [
      "normal"
    ],
    "hp": 1100,
    "attack": 200,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Oinkologne-male es un muro infranqueable de tipo normal. Su asombrosa defensa de 150 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 917,
    "name": "Tarountula",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png",
    "types": [
      "bug"
    ],
    "hp": 350,
    "attack": 82,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Tarountula mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 918,
    "name": "Spidops",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/918.png",
    "types": [
      "bug"
    ],
    "hp": 600,
    "attack": 158,
    "defense": 184,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Spidops ataca sin piedad. Sus 158 puntos de ataque físico lo convierten en un depredador implacable de tipo bug. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 919,
    "name": "Nymble",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png",
    "types": [
      "bug"
    ],
    "hp": 330,
    "attack": 92,
    "defense": 80,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Nymble mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 920,
    "name": "Lokix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/920.png",
    "types": [
      "bug",
      "dark"
    ],
    "hp": 710,
    "attack": 204,
    "defense": 156,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Lokix es un muro infranqueable de tipo bug. Su asombrosa defensa de 156 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 921,
    "name": "Pawmi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/921.png",
    "types": [
      "electric"
    ],
    "hp": 450,
    "attack": 100,
    "defense": 40,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Pawmi mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 922,
    "name": "Pawmo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/922.png",
    "types": [
      "electric",
      "fighting"
    ],
    "hp": 600,
    "attack": 150,
    "defense": 80,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Pawmo ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo electric. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 923,
    "name": "Pawmot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/923.png",
    "types": [
      "electric",
      "fighting"
    ],
    "hp": 700,
    "attack": 230,
    "defense": 140,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Pawmot es un muro infranqueable de tipo electric. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 924,
    "name": "Tandemaus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/924.png",
    "types": [
      "normal"
    ],
    "hp": 500,
    "attack": 100,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo normal. Tandemaus mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 925,
    "name": "Maushold-family-of-four",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png",
    "types": [
      "normal"
    ],
    "hp": 740,
    "attack": 150,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Maushold-family-of-four es un muro infranqueable de tipo normal. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 926,
    "name": "Fidough",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/926.png",
    "types": [
      "fairy"
    ],
    "hp": 370,
    "attack": 110,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Fidough ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo fairy."
  },
  {
    "id": 927,
    "name": "Dachsbun",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/927.png",
    "types": [
      "fairy"
    ],
    "hp": 570,
    "attack": 160,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Dachsbun ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo fairy. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 928,
    "name": "Smoliv",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/928.png",
    "types": [
      "grass",
      "normal"
    ],
    "hp": 410,
    "attack": 70,
    "defense": 90,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Smoliv mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 929,
    "name": "Dolliv",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/929.png",
    "types": [
      "grass",
      "normal"
    ],
    "hp": 520,
    "attack": 106,
    "defense": 120,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Dolliv ataca sin piedad. Sus 106 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 930,
    "name": "Arboliva",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/930.png",
    "types": [
      "grass",
      "normal"
    ],
    "hp": 780,
    "attack": 138,
    "defense": 180,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Arboliva es un muro infranqueable de tipo grass. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 931,
    "name": "Squawkabilly-green-plumage",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/931.png",
    "types": [
      "normal",
      "flying"
    ],
    "hp": 820,
    "attack": 192,
    "defense": 102,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Squawkabilly-green-plumage es un muro infranqueable de tipo normal. Su asombrosa defensa de 102 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 932,
    "name": "Nacli",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png",
    "types": [
      "rock"
    ],
    "hp": 550,
    "attack": 110,
    "defense": 150,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Nacli ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo rock."
  },
  {
    "id": 933,
    "name": "Naclstack",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png",
    "types": [
      "rock"
    ],
    "hp": 600,
    "attack": 120,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Naclstack ataca sin piedad. Sus 120 puntos de ataque físico lo convierten en un depredador implacable de tipo rock. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 934,
    "name": "Garganacl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png",
    "types": [
      "rock"
    ],
    "hp": 1000,
    "attack": 200,
    "defense": 260,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Garganacl es un muro infranqueable de tipo rock. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 935,
    "name": "Charcadet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/935.png",
    "types": [
      "fire"
    ],
    "hp": 400,
    "attack": 100,
    "defense": 80,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fire. Charcadet mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 936,
    "name": "Armarouge",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png",
    "types": [
      "fire",
      "psychic"
    ],
    "hp": 850,
    "attack": 120,
    "defense": 200,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Armarouge es un muro infranqueable de tipo fire. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 937,
    "name": "Ceruledge",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png",
    "types": [
      "fire",
      "ghost"
    ],
    "hp": 750,
    "attack": 250,
    "defense": 160,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Ceruledge es un muro infranqueable de tipo fire. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 938,
    "name": "Tadbulb",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png",
    "types": [
      "electric"
    ],
    "hp": 610,
    "attack": 62,
    "defense": 82,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Tadbulb mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 939,
    "name": "Bellibolt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png",
    "types": [
      "electric"
    ],
    "hp": 1090,
    "attack": 128,
    "defense": 182,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Bellibolt es un muro infranqueable de tipo electric. Su asombrosa defensa de 182 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 940,
    "name": "Wattrel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png",
    "types": [
      "electric",
      "flying"
    ],
    "hp": 400,
    "attack": 80,
    "defense": 70,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo electric. Wattrel mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 941,
    "name": "Kilowattrel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png",
    "types": [
      "electric",
      "flying"
    ],
    "hp": 700,
    "attack": 140,
    "defense": 120,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Kilowattrel es un muro infranqueable de tipo electric. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 942,
    "name": "Maschiff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/942.png",
    "types": [
      "dark"
    ],
    "hp": 600,
    "attack": 156,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Maschiff ataca sin piedad. Sus 156 puntos de ataque físico lo convierten en un depredador implacable de tipo dark."
  },
  {
    "id": 943,
    "name": "Mabosstiff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/943.png",
    "types": [
      "dark"
    ],
    "hp": 800,
    "attack": 240,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Mabosstiff es un muro infranqueable de tipo dark. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 944,
    "name": "Shroodle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/944.png",
    "types": [
      "poison",
      "normal"
    ],
    "hp": 400,
    "attack": 130,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Shroodle ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo poison."
  },
  {
    "id": 945,
    "name": "Grafaiai",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/945.png",
    "types": [
      "poison",
      "normal"
    ],
    "hp": 630,
    "attack": 190,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Grafaiai es un muro infranqueable de tipo poison. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 946,
    "name": "Bramblin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png",
    "types": [
      "grass",
      "ghost"
    ],
    "hp": 400,
    "attack": 130,
    "defense": 60,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Bramblin ataca sin piedad. Sus 130 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 947,
    "name": "Brambleghast",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/947.png",
    "types": [
      "grass",
      "ghost"
    ],
    "hp": 550,
    "attack": 230,
    "defense": 140,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Consciente de su poder, Brambleghast ataca sin piedad. Sus 230 puntos de ataque físico lo convierten en un depredador implacable de tipo grass. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 948,
    "name": "Toedscool",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/948.png",
    "types": [
      "ground",
      "grass"
    ],
    "hp": 400,
    "attack": 80,
    "defense": 70,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ground. Toedscool mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 949,
    "name": "Toedscruel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/949.png",
    "types": [
      "ground",
      "grass"
    ],
    "hp": 800,
    "attack": 140,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Toedscruel es un muro infranqueable de tipo ground. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 950,
    "name": "Klawf",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/950.png",
    "types": [
      "rock"
    ],
    "hp": 700,
    "attack": 200,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Klawf es un muro infranqueable de tipo rock. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 951,
    "name": "Capsakid",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/951.png",
    "types": [
      "grass"
    ],
    "hp": 500,
    "attack": 124,
    "defense": 80,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Capsakid ataca sin piedad. Sus 124 puntos de ataque físico lo convierten en un depredador implacable de tipo grass."
  },
  {
    "id": 952,
    "name": "Scovillain",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png",
    "types": [
      "grass",
      "fire"
    ],
    "hp": 650,
    "attack": 216,
    "defense": 130,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Scovillain es un muro infranqueable de tipo grass. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 953,
    "name": "Rellor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/953.png",
    "types": [
      "bug"
    ],
    "hp": 410,
    "attack": 100,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo bug. Rellor mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 954,
    "name": "Rabsca",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/954.png",
    "types": [
      "bug",
      "psychic"
    ],
    "hp": 750,
    "attack": 100,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Rabsca es un muro infranqueable de tipo bug. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 955,
    "name": "Flittle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/955.png",
    "types": [
      "psychic"
    ],
    "hp": 300,
    "attack": 70,
    "defense": 60,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo psychic. Flittle mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 956,
    "name": "Espathra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png",
    "types": [
      "psychic"
    ],
    "hp": 950,
    "attack": 120,
    "defense": 120,
    "specialAbility": {
      "name": "Mind Read",
      "description": "Draw extra card",
      "effect": "draw_card",
      "value": 1
    },
    "level": 5,
    "rarity": "rare",
    "description": "Espathra es un muro infranqueable de tipo psychic. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 957,
    "name": "Tinkatink",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/957.png",
    "types": [
      "fairy",
      "steel"
    ],
    "hp": 500,
    "attack": 90,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Una criatura versátil de tipo fairy. Tinkatink mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 958,
    "name": "Tinkatuff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/958.png",
    "types": [
      "fairy",
      "steel"
    ],
    "hp": 650,
    "attack": 110,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Tinkatuff es un muro infranqueable de tipo fairy. Su asombrosa defensa de 110 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 959,
    "name": "Tinkaton",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png",
    "types": [
      "fairy",
      "steel"
    ],
    "hp": 850,
    "attack": 150,
    "defense": 154,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Tinkaton es un muro infranqueable de tipo fairy. Su asombrosa defensa de 154 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 960,
    "name": "Wiglett",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/960.png",
    "types": [
      "water"
    ],
    "hp": 100,
    "attack": 110,
    "defense": 50,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Wiglett ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo water."
  },
  {
    "id": 961,
    "name": "Wugtrio",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/961.png",
    "types": [
      "water"
    ],
    "hp": 350,
    "attack": 200,
    "defense": 100,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 4,
    "rarity": "rare",
    "description": "Consciente de su poder, Wugtrio ataca sin piedad. Sus 200 puntos de ataque físico lo convierten en un depredador implacable de tipo water. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 962,
    "name": "Bombirdier",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/962.png",
    "types": [
      "flying",
      "dark"
    ],
    "hp": 700,
    "attack": 206,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Bombirdier es un muro infranqueable de tipo flying. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 963,
    "name": "Finizen",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png",
    "types": [
      "water"
    ],
    "hp": 700,
    "attack": 90,
    "defense": 80,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo water. Finizen mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 964,
    "name": "Palafin-zero",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png",
    "types": [
      "water"
    ],
    "hp": 1000,
    "attack": 140,
    "defense": 144,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Palafin-zero es un muro infranqueable de tipo water. Su asombrosa defensa de 144 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 965,
    "name": "Varoom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png",
    "types": [
      "steel",
      "poison"
    ],
    "hp": 450,
    "attack": 140,
    "defense": 126,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Varoom ataca sin piedad. Sus 140 puntos de ataque físico lo convierten en un depredador implacable de tipo steel."
  },
  {
    "id": 966,
    "name": "Revavroom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png",
    "types": [
      "steel",
      "poison"
    ],
    "hp": 800,
    "attack": 238,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Revavroom es un muro infranqueable de tipo steel. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 967,
    "name": "Cyclizar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/967.png",
    "types": [
      "dragon",
      "normal"
    ],
    "hp": 700,
    "attack": 190,
    "defense": 130,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Cyclizar es un muro infranqueable de tipo dragon. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 968,
    "name": "Orthworm",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png",
    "types": [
      "steel"
    ],
    "hp": 700,
    "attack": 170,
    "defense": 290,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Orthworm es un muro infranqueable de tipo steel. Su asombrosa defensa de 290 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 969,
    "name": "Glimmet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/969.png",
    "types": [
      "rock",
      "poison"
    ],
    "hp": 480,
    "attack": 70,
    "defense": 84,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo rock. Glimmet mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 970,
    "name": "Glimmora",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png",
    "types": [
      "rock",
      "poison"
    ],
    "hp": 830,
    "attack": 110,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Glimmora es un muro infranqueable de tipo rock. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 971,
    "name": "Greavard",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/971.png",
    "types": [
      "ghost"
    ],
    "hp": 500,
    "attack": 122,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 1,
    "rarity": "common",
    "description": "Consciente de su poder, Greavard ataca sin piedad. Sus 122 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost."
  },
  {
    "id": 972,
    "name": "Houndstone",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/972.png",
    "types": [
      "ghost"
    ],
    "hp": 720,
    "attack": 202,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Houndstone es un muro infranqueable de tipo ghost. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 973,
    "name": "Flamigo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/973.png",
    "types": [
      "flying",
      "fighting"
    ],
    "hp": 820,
    "attack": 230,
    "defense": 148,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Flamigo es un muro infranqueable de tipo flying. Su asombrosa defensa de 148 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 974,
    "name": "Cetoddle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/974.png",
    "types": [
      "ice"
    ],
    "hp": 1080,
    "attack": 136,
    "defense": 90,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Cetoddle ataca sin piedad. Sus 136 puntos de ataque físico lo convierten en un depredador implacable de tipo ice."
  },
  {
    "id": 975,
    "name": "Cetitan",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/975.png",
    "types": [
      "ice"
    ],
    "hp": 1200,
    "attack": 226,
    "defense": 130,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 6,
    "rarity": "rare",
    "description": "Cetitan es un muro infranqueable de tipo ice. Su asombrosa defensa de 130 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 976,
    "name": "Veluza",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/976.png",
    "types": [
      "water",
      "psychic"
    ],
    "hp": 900,
    "attack": 204,
    "defense": 146,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 5,
    "rarity": "rare",
    "description": "Veluza es un muro infranqueable de tipo water. Su asombrosa defensa de 146 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 977,
    "name": "Dondozo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png",
    "types": [
      "water"
    ],
    "hp": 1200,
    "attack": 200,
    "defense": 230,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Dondozo es un muro infranqueable de tipo water. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 978,
    "name": "Tatsugiri-curly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png",
    "types": [
      "dragon",
      "water"
    ],
    "hp": 680,
    "attack": 100,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Tatsugiri-curly es un muro infranqueable de tipo dragon. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 979,
    "name": "Annihilape",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/979.png",
    "types": [
      "fighting",
      "ghost"
    ],
    "hp": 1100,
    "attack": 230,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Annihilape es un muro infranqueable de tipo fighting. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 980,
    "name": "Clodsire",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/980.png",
    "types": [
      "poison",
      "ground"
    ],
    "hp": 1200,
    "attack": 150,
    "defense": 120,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Clodsire es un muro infranqueable de tipo poison. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 981,
    "name": "Farigiraf",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png",
    "types": [
      "normal",
      "psychic"
    ],
    "hp": 1200,
    "attack": 180,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 8,
    "rarity": "legendary",
    "description": "Farigiraf es un muro infranqueable de tipo normal. Su asombrosa defensa de 140 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 982,
    "name": "Dudunsparce-two-segment",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/982.png",
    "types": [
      "normal"
    ],
    "hp": 1200,
    "attack": 200,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 6,
    "rarity": "rare",
    "description": "Dudunsparce-two-segment es un muro infranqueable de tipo normal. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 983,
    "name": "Kingambit",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png",
    "types": [
      "dark",
      "steel"
    ],
    "hp": 1000,
    "attack": 270,
    "defense": 240,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Kingambit es un muro infranqueable de tipo dark. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 984,
    "name": "Great-tusk",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/984.png",
    "types": [
      "ground",
      "fighting"
    ],
    "hp": 1150,
    "attack": 262,
    "defense": 262,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Great-tusk es un muro infranqueable de tipo ground. Su asombrosa defensa de 262 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 985,
    "name": "Scream-tail",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/985.png",
    "types": [
      "fairy",
      "psychic"
    ],
    "hp": 1150,
    "attack": 130,
    "defense": 198,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Scream-tail es un muro infranqueable de tipo fairy. Su asombrosa defensa de 198 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 986,
    "name": "Brute-bonnet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/986.png",
    "types": [
      "grass",
      "dark"
    ],
    "hp": 1110,
    "attack": 254,
    "defense": 198,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Brute-bonnet es un muro infranqueable de tipo grass. Su asombrosa defensa de 198 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 987,
    "name": "Flutter-mane",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/987.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "hp": 550,
    "attack": 110,
    "defense": 110,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Consciente de su poder, Flutter-mane ataca sin piedad. Sus 110 puntos de ataque físico lo convierten en un depredador implacable de tipo ghost. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 988,
    "name": "Slither-wing",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png",
    "types": [
      "bug",
      "fighting"
    ],
    "hp": 850,
    "attack": 270,
    "defense": 158,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Slither-wing es un muro infranqueable de tipo bug. Su asombrosa defensa de 158 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 989,
    "name": "Sandy-shocks",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/989.png",
    "types": [
      "electric",
      "ground"
    ],
    "hp": 850,
    "attack": 162,
    "defense": 194,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Sandy-shocks es un muro infranqueable de tipo electric. Su asombrosa defensa de 194 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 990,
    "name": "Iron-treads",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/990.png",
    "types": [
      "ground",
      "steel"
    ],
    "hp": 900,
    "attack": 224,
    "defense": 240,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Iron-treads es un muro infranqueable de tipo ground. Su asombrosa defensa de 240 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 991,
    "name": "Iron-bundle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/991.png",
    "types": [
      "ice",
      "water"
    ],
    "hp": 560,
    "attack": 160,
    "defense": 228,
    "specialAbility": {
      "name": "Freeze",
      "description": "Reduce opponent defense",
      "effect": "reduce_defense",
      "value": 15
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Consciente de su poder, Iron-bundle ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo ice. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 992,
    "name": "Iron-hands",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/992.png",
    "types": [
      "fighting",
      "electric"
    ],
    "hp": 1200,
    "attack": 280,
    "defense": 216,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Iron-hands es un muro infranqueable de tipo fighting. Su asombrosa defensa de 216 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 993,
    "name": "Iron-jugulis",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png",
    "types": [
      "dark",
      "flying"
    ],
    "hp": 940,
    "attack": 160,
    "defense": 172,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Iron-jugulis es un muro infranqueable de tipo dark. Su asombrosa defensa de 172 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 994,
    "name": "Iron-moth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png",
    "types": [
      "fire",
      "poison"
    ],
    "hp": 800,
    "attack": 140,
    "defense": 120,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Iron-moth es un muro infranqueable de tipo fire. Su asombrosa defensa de 120 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 995,
    "name": "Iron-thorns",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png",
    "types": [
      "rock",
      "electric"
    ],
    "hp": 1000,
    "attack": 268,
    "defense": 220,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Iron-thorns es un muro infranqueable de tipo rock. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 996,
    "name": "Frigibax",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png",
    "types": [
      "dragon",
      "ice"
    ],
    "hp": 650,
    "attack": 150,
    "defense": 90,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Consciente de su poder, Frigibax ataca sin piedad. Sus 150 puntos de ataque físico lo convierten en un depredador implacable de tipo dragon."
  },
  {
    "id": 997,
    "name": "Arctibax",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png",
    "types": [
      "dragon",
      "ice"
    ],
    "hp": 900,
    "attack": 190,
    "defense": 132,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 4,
    "rarity": "rare",
    "description": "Arctibax es un muro infranqueable de tipo dragon. Su asombrosa defensa de 132 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 998,
    "name": "Baxcalibur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png",
    "types": [
      "dragon",
      "ice"
    ],
    "hp": 1150,
    "attack": 290,
    "defense": 184,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Baxcalibur es un muro infranqueable de tipo dragon. Su asombrosa defensa de 184 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 999,
    "name": "Gimmighoul",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png",
    "types": [
      "ghost"
    ],
    "hp": 450,
    "attack": 60,
    "defense": 140,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo ghost. Gimmighoul mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 1000,
    "name": "Gholdengo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png",
    "types": [
      "steel",
      "ghost"
    ],
    "hp": 870,
    "attack": 120,
    "defense": 190,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Gholdengo es un muro infranqueable de tipo steel. Su asombrosa defensa de 190 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1001,
    "name": "Wo-chien",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png",
    "types": [
      "dark",
      "grass"
    ],
    "hp": 850,
    "attack": 170,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Wo-chien es un muro infranqueable de tipo dark. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1002,
    "name": "Chien-pao",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1002.png",
    "types": [
      "dark",
      "ice"
    ],
    "hp": 800,
    "attack": 240,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Chien-pao es un muro infranqueable de tipo dark. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1003,
    "name": "Ting-lu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png",
    "types": [
      "dark",
      "ground"
    ],
    "hp": 1200,
    "attack": 220,
    "defense": 250,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Ting-lu es un muro infranqueable de tipo dark. Su asombrosa defensa de 250 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1004,
    "name": "Chi-yu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png",
    "types": [
      "dark",
      "fire"
    ],
    "hp": 550,
    "attack": 160,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Consciente de su poder, Chi-yu ataca sin piedad. Sus 160 puntos de ataque físico lo convierten en un depredador implacable de tipo dark. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1005,
    "name": "Roaring-moon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png",
    "types": [
      "dragon",
      "dark"
    ],
    "hp": 1050,
    "attack": 278,
    "defense": 142,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Roaring-moon es un muro infranqueable de tipo dragon. Su asombrosa defensa de 142 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1006,
    "name": "Iron-valiant",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png",
    "types": [
      "fairy",
      "fighting"
    ],
    "hp": 740,
    "attack": 260,
    "defense": 180,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Iron-valiant es un muro infranqueable de tipo fairy. Su asombrosa defensa de 180 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1007,
    "name": "Koraidon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png",
    "types": [
      "fighting",
      "dragon"
    ],
    "hp": 1000,
    "attack": 270,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 11,
    "rarity": "legendary",
    "description": "Koraidon es un muro infranqueable de tipo fighting. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1008,
    "name": "Miraidon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png",
    "types": [
      "electric",
      "dragon"
    ],
    "hp": 1000,
    "attack": 170,
    "defense": 200,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 11,
    "rarity": "legendary",
    "description": "Miraidon es un muro infranqueable de tipo electric. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1009,
    "name": "Walking-wake",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png",
    "types": [
      "water",
      "dragon"
    ],
    "hp": 990,
    "attack": 166,
    "defense": 182,
    "specialAbility": {
      "name": "Aqua Heal",
      "description": "Restore 50 HP",
      "effect": "heal",
      "value": 50
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Walking-wake es un muro infranqueable de tipo water. Su asombrosa defensa de 182 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1010,
    "name": "Iron-leaves",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png",
    "types": [
      "grass",
      "psychic"
    ],
    "hp": 900,
    "attack": 260,
    "defense": 176,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Iron-leaves es un muro infranqueable de tipo grass. Su asombrosa defensa de 176 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1011,
    "name": "Dipplin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png",
    "types": [
      "grass",
      "dragon"
    ],
    "hp": 800,
    "attack": 160,
    "defense": 220,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Dipplin es un muro infranqueable de tipo grass. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 1012,
    "name": "Poltchageist",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1012.png",
    "types": [
      "grass",
      "ghost"
    ],
    "hp": 400,
    "attack": 90,
    "defense": 90,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 2,
    "rarity": "common",
    "description": "Una criatura versátil de tipo grass. Poltchageist mantiene un equilibrio perfecto entre ataque y defensa, adaptándose a cualquier estrategia de su entrenador."
  },
  {
    "id": 1013,
    "name": "Sinistcha",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png",
    "types": [
      "grass",
      "ghost"
    ],
    "hp": 710,
    "attack": 120,
    "defense": 212,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 5,
    "rarity": "rare",
    "description": "Sinistcha es un muro infranqueable de tipo grass. Su asombrosa defensa de 212 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Es un espécimen difícil de encontrar en estado salvaje."
  },
  {
    "id": 1014,
    "name": "Okidogi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png",
    "types": [
      "poison",
      "fighting"
    ],
    "hp": 880,
    "attack": 256,
    "defense": 230,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Okidogi es un muro infranqueable de tipo poison. Su asombrosa defensa de 230 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1015,
    "name": "Munkidori",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png",
    "types": [
      "poison",
      "psychic"
    ],
    "hp": 880,
    "attack": 150,
    "defense": 132,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Munkidori es un muro infranqueable de tipo poison. Su asombrosa defensa de 132 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1016,
    "name": "Fezandipiti",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png",
    "types": [
      "poison",
      "fairy"
    ],
    "hp": 880,
    "attack": 182,
    "defense": 164,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Fezandipiti es un muro infranqueable de tipo poison. Su asombrosa defensa de 164 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1017,
    "name": "Ogerpon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png",
    "types": [
      "grass"
    ],
    "hp": 800,
    "attack": 240,
    "defense": 168,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Ogerpon es un muro infranqueable de tipo grass. Su asombrosa defensa de 168 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1018,
    "name": "Archaludon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png",
    "types": [
      "steel",
      "dragon"
    ],
    "hp": 900,
    "attack": 210,
    "defense": 260,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Archaludon es un muro infranqueable de tipo steel. Su asombrosa defensa de 260 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1019,
    "name": "Hydrapple",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png",
    "types": [
      "grass",
      "dragon"
    ],
    "hp": 1060,
    "attack": 160,
    "defense": 220,
    "specialAbility": {
      "name": "Spore Shield",
      "description": "Block next attack",
      "effect": "block",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Hydrapple es un muro infranqueable de tipo grass. Su asombrosa defensa de 220 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1020,
    "name": "Gouging-fire",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png",
    "types": [
      "fire",
      "dragon"
    ],
    "hp": 1050,
    "attack": 230,
    "defense": 242,
    "specialAbility": {
      "name": "Burn",
      "description": "Boost attack for next turn",
      "effect": "boost_attack",
      "value": 10
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Gouging-fire es un muro infranqueable de tipo fire. Su asombrosa defensa de 242 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1021,
    "name": "Raging-bolt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png",
    "types": [
      "electric",
      "dragon"
    ],
    "hp": 1200,
    "attack": 146,
    "defense": 182,
    "specialAbility": {
      "name": "Thunder Strike",
      "description": "Direct damage to opponent",
      "effect": "direct_damage",
      "value": 50
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Raging-bolt es un muro infranqueable de tipo electric. Su asombrosa defensa de 182 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1022,
    "name": "Iron-boulder",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png",
    "types": [
      "rock",
      "psychic"
    ],
    "hp": 900,
    "attack": 240,
    "defense": 160,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Iron-boulder es un muro infranqueable de tipo rock. Su asombrosa defensa de 160 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1023,
    "name": "Iron-crown",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png",
    "types": [
      "steel",
      "psychic"
    ],
    "hp": 900,
    "attack": 144,
    "defense": 200,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 9,
    "rarity": "legendary",
    "description": "Iron-crown es un muro infranqueable de tipo steel. Su asombrosa defensa de 200 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  },
  {
    "id": 1024,
    "name": "Terapagos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png",
    "types": [
      "normal"
    ],
    "hp": 900,
    "attack": 130,
    "defense": 170,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 3,
    "rarity": "common",
    "description": "Terapagos es un muro infranqueable de tipo normal. Su asombrosa defensa de 170 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla."
  },
  {
    "id": 1025,
    "name": "Pecharunt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png",
    "types": [
      "poison",
      "ghost"
    ],
    "hp": 880,
    "attack": 176,
    "defense": 320,
    "specialAbility": {
      "name": "Basic Attack",
      "description": "Standard attack",
      "effect": "direct_damage",
      "value": 0
    },
    "level": 10,
    "rarity": "legendary",
    "description": "Pecharunt es un muro infranqueable de tipo poison. Su asombrosa defensa de 320 puntos lo hace ideal para resistir los asedios más duros en el campo de batalla. Su presencia mitológica infunde terror en sus enemigos."
  }
];