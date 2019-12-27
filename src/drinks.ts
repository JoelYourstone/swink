import { DrinksList } from "./data";

const drinksList: DrinksList = [
  {
    name: "Margarita",
    image:
      "https://cdn.liquor.com/wp-content/uploads/2018/04/23134943/Margarita-720x720-recipe-v2.jpg",
    ingredientLineItems: [
      {
        name: "Tequila",
        amount: 4,
        type: "Tequila",
        specificSelection: "sauza",
        unit: "cl"
      },
      {
        name: "Cointreau",
        amount: 2,
        type: "Liquor",
        unit: "cl"
      },
      {
        name: "Lime Juice",
        amount: 3,
        type: "Fresh fruit juice",
        specificSelection: "freshlime",
        unit: "cl"
      },
      {
        unit: "cl",
        name: "Agave syrup",
        amount: 1,
        type: "Sweetener"
      }
    ]
  },
  {
    name: "Missionary's Downfall",
    image:
      "https://cdn.diffords.com/contrib/stock-images/2016/12/21/2016eeb430ea202428599e9aabe1ea71ae02.jpg",
    ingredientLineItems: [
      {
        unit: "cl",
        name: "White Rum",
        type: "Rum",
        specificSelection: "havana3",
        amount: 4
      },
      {
        unit: "cl",
        name: "Peach Liquor",
        amount: 1.5,
        type: "Liquor",
        specificSelection: "peachtree"
      },
      {
        unit: "",
        name: "Mint Leaves",
        amount: 12,
        type: "Leaves"
      },
      {
        unit: "cl",
        name: "Lime Juice",
        amount: 4.5,
        specificSelection: "freshlime",
        type: "Fresh fruit juice"
      },
      {
        unit: "cl",
        name: "Pineapple Juice",
        amount: 6,
        type: "Juice"
      },
      {
        unit: "cl",
        name: "Sugar syrup",
        amount: 1.5,
        specificSelection: "agave",
        type: "Sweetener"
      }
    ]
  },
  {
    name: "Hemingway Breakfast",
    image:
      "https://cdn.diffords.com/contrib/stock-images/2016/10/28/2016baa3689cf308de1c265e38f0b37ba70c.jpg",
    ingredientLineItems: [
      {
        unit: "cl",
        name: "White Rum",
        amount: 4,
        specificSelection: "havana3",
        type: "Rum"
      },
      {
        unit: "cl",
        name: "Absinthe",
        amount: 0.25,
        specificSelection: "absinthe",
        type: "Liquor"
      },
      {
        unit: "cl",
        name: "Lime Juice",
        amount: 2,
        specificSelection: "freshlime",
        type: "Fresh fruit juice"
      },
      {
        unit: "cl",
        name: "Syrup",
        amount: 1,
        specificSelection: "agavesyrup",
        type: "Sweetener"
      },
      {
        unit: "spoon",
        amount: 0.5,
        specificSelection: "englishmarmelade",
        name: "English Orange Marmelade",
        type: "Liquor"
      }
    ]
  },
  {
    image:
      "https://www.kahlua.com/globalassets/images/cocktails/2018/opt/kahluadrinks_whiterussian1.png",
    name: "White Malaysian",
    ingredientLineItems: [
      {
        unit: "cl",
        amount: 4,
        name: "Vodka",
        type: "Vodka"
      },
      {
        unit: "cl",
        amount: 3,
        name: "Kahlúa",
        specificSelection: "kahlua",
        type: "Liquor"
      },
      {
        unit: "cl",
        amount: 8,
        name: "iKaffe",
        specificSelection: "ikaffe",
        type: "Juice"
      }
    ]
  },
  {
    image:
      "https://cdn.diffords.com/contrib/stock-images/2016/12/23/2016e3345cfc0c53c47cd04eee658d557311.jpg",
    name: "Kiwi Bellini",
    ingredientLineItems: [
      {
        name: "Vodka",
        amount: 4,
        unit: "cl",
        type: "Vodka"
      },
      {
        unit: "cl",
        name: "Lemon Juice",
        amount: 0.75,
        specificSelection: "freshlemon",
        type: "Fresh fruit juice"
      },
      {
        unit: "cl",
        name: "Syrup",
        amount: 0.75,
        specificSelection: "agavesyrup",
        type: "Sweetener"
      },
      {
        unit: "",
        name: "Kiwi fruit",
        amount: 1,
        specificSelection: "kiwi",
        type: "Other"
      },
      {
        unit: "cl",
        name: "Sparkling",
        amount: 6,
        type: "Sparkling"
      },
      {
        unit: "",
        name: "Basil Leaves",
        amount: 2,
        type: "Leaves",
        specificSelection: "basil"
      }
    ]
  },
  {
    image:
      "https://www.cakenknife.com/wp-content/uploads/2017/04/Chili-Lime-Margarita-Thumbnail-720x540.jpg",
    name: "Flaming Margarita",
    ingredientLineItems: [
      {
        unit: "cl",
        name: "Tequila",
        amount: 3,
        type: "Tequila",
        specificSelection: "calle23"
      },
      {
        unit: "cl",
        name: "Cointreau",
        amount: 1,
        type: "Liquor"
      },
      {
        unit: "cl",
        name: "Ancho Reyes",
        amount: 2,
        type: "Liquor",
        specificSelection: "anchoreyes"
      },
      {
        unit: "cl",
        name: "Lime Juice",
        amount: 3,
        type: "Fresh fruit juice",
        specificSelection: "freshlime"
      },
      {
        unit: "cl",
        name: "Agave syrup",
        amount: 1,
        type: "Sweetener"
      },
      {
        unit: "",
        name: "Tajin",
        amount: 0,
        specificSelection: "tajin",
        type: "Other"
      }
    ]
  },
  {
    name: "Singapore Sling",
    image:
      "http://shake-that.com/wp-content/uploads/2015/07/Singapore-Sling-780x917.jpg",
    ingredientLineItems: [
      {
        unit: "cl",
        name: "Gin",
        type: "Gin",
        amount: 2.5,
        specificSelection: "tanqueray"
      },
      {
        unit: "cl",
        name: "Port Wine",
        type: "Port",
        amount: 2.5
      },
      {
        unit: "cl",
        name: "Benedictine",
        amount: 2.5,
        specificSelection: "benedictine",
        type: "Liquor"
      },
      {
        unit: "dashes",
        name: "Angostura Bitters",
        amount: 2,
        specificSelection: "angostura",
        type: "Bitters"
      },
      {
        unit: "cl",
        name: "Pineapple Juice",
        amount: 5,
        type: "Juice"
      },
      {
        unit: "cl",
        name: "Lime Juice",
        amount: 2.5,
        specificSelection: "freshlime",
        type: "Fresh fruit juice"
      },
      {
        unit: "cl",
        name: "Grenadine (optional)",
        amount: 0.5,
        specificSelection: "grenadine",
        type: "Liquor"
      }
    ]
  },
  {
    image:
      "https://cdn.diffords.com/contrib/stock-images/2018/12/5c137598b14d2.jpg",
    name: "Moonlight",
    ingredientLineItems: [
      {
        unit: "cl",
        name: "Gin",
        amount: 3,
        type: "Gin"
      },
      {
        unit: "cl",
        name: "Triple Sec",
        amount: 2,
        specificSelection: "cointreau",
        type: "Liquor"
      },
      {
        unit: "cl",
        name: "Créme de Violette",
        amount: 1.5,
        specificSelection: "cremedeviolette",
        type: "Liquor"
      },
      {
        unit: "cl",
        name: "Lime Juice",
        amount: 0.75,
        specificSelection: "freshlime",
        type: "Fresh fruit juice"
      },
      {
        unit: "cl",
        name: "Lemon Juice",
        amount: 0.75,
        specificSelection: "freshlemon",
        type: "Fresh fruit juice"
      }
    ]
  },
  {
    name: "French 76",
    image:
      "https://cdn.diffords.com/contrib/stock-images/2017/7/04/201750c47a400dc07fd2ca4f5be453e82829.jpg",
    ingredientLineItems: [
      {
        unit: "cl",
        name: "Gin",
        amount: 2,
        type: "Gin"
      },
      {
        unit: "cl",
        name: "Lemon Juice",
        amount: 2,
        specificSelection: "freshlemon",
        type: "Fresh fruit juice"
      },
      {
        unit: "cl",
        name: "Syrup",
        amount: 2,
        specificSelection: "agavesyrup",
        type: "Sweetener"
      },
      {
        unit: "cl",
        name: "St Germain",
        amount: 2,
        specificSelection: "stgermain",
        type: "Liquor"
      },
      {
        unit: "cl",
        name: "Sparkling",
        amount: 10,
        type: "Sparkling"
      }
    ]
  },
  {
    name: "Låtsasvuxen",
    image:
      "https://cdn.diffords.com/contrib/stock-images/2016/1/41/201670d4ba41562cc286c2ef9364977057c9.jpg",
    ingredientLineItems: [
      {
        unit: "cl",
        name: "Rum",
        amount: 5,
        type: "Rum"
      },
      {
        unit: "cl",
        name: "Syrup",
        amount: 1.5,
        specificSelection: "agavesyrup",
        type: "Sweetener"
      },
      {
        unit: "dashes",
        name: "Angostura",
        amount: 1,
        specificSelection: "angostura",
        type: "Bitters"
      }
    ]
  },
  {
    image:
      "https://cdn.diffords.com/contrib/stock-images/2016/3/10/20161cc3133df32007a68af7e2eb6bdb7a38.jpg",
    ingredientLineItems: [
      {
        unit: "cl",
        specificSelection: "hendricks",
        amount: 6,
        name: "Gin",
        type: "Gin"
      },
      {
        unit: "cl",
        specificSelection: "freshlemon",
        amount: 2,
        name: "Lemon Juice",
        type: "Fresh fruit juice"
      },
      {
        unit: "cl",
        specificSelection: "agavesyrup",
        amount: 2,
        name: "Syrup",
        type: "Sweetener"
      },
      {
        unit: "",
        specificSelection: "basil",
        amount: 6,
        name: "Basil leaves",
        type: "Leaves"
      }
    ],
    name: "Gin Basil Smash"
  },
  {
    ingredientLineItems: [
      {
        unit: "cl",
        amount: 4,
        specificSelection: "havana3",
        name: "Light Rum",
        type: "Rum"
      },
      {
        unit: "",
        amount: 6,
        specificSelection: "mintleaves",
        name: "Mint leaves",
        type: "Leaves"
      },
      {
        unit: "cl",
        amount: 2.25,
        specificSelection: "freshlime",
        name: "Lime Juice",
        type: "Fresh fruit juice"
      },
      {
        unit: "cl",
        amount: 1.87,
        specificSelection: "agavesyrup",
        name: "Syrup",
        type: "Sweetener"
      }
    ],
    image:
      "https://d32miag6ta013h.cloudfront.net/master_cocktails/185/en-gl/small/bacardi-mojito_sml_580x820..png",
    name: "Mojito"
  },
  {
    name: "Cosmopolitan",
    ingredientLineItems: [
      {
        unit: "cl",
        amount: 7,
        name: "Lemon Vodka",
        specificSelection: "absolutcitron",
        type: "Vodka"
      },
      {
        unit: "cl",
        amount: 3,
        name: "Cointreau",
        specificSelection: "cointreau",
        type: "Liquor"
      },
      {
        unit: "cl",
        amount: 4,
        name: "Cranberry juice",
        type: "Juice"
      },
      {
        unit: "cl",
        amount: 3,
        name: "Lime juice",
        type: "Fresh fruit juice",
        specificSelection: "freshlime"
      }
    ],
    image: ""
  },
  {
    name: "Jungle Bird",
    ingredientLineItems: [],
    image: ""
  },
  {
    ingredientLineItems: [
      {
        unit: "cl",
        type: "Rum",
        name: "Light Rum",
        amount: 4,
        specificSelection: "havana3"
      },
      {
        unit: "cl",
        type: "Fresh fruit juice",
        amount: 2,
        specificSelection: "freshlime",
        name: "Fresh Lime Juice"
      },
      {
        unit: "cl",
        type: "Sweetener",
        amount: 2,
        specificSelection: "agavesyrup",
        name: "Syrup"
      },
      {
        unit: "",
        type: "Other",
        amount: 6,
        specificSelection: "raspberries",
        name: "Raspberries"
      }
    ],
    image:
      "https://cdn.diffords.com/contrib/stock-images/2018/10/5bd1de632763b.jpg",
    name: "Raspberry Daiquiri"
  },
  {
    name: "Hendricks Gin & Tonic",
    image:
      "https://www.hendricksgin.com/assets/Cocktails/2019/Cocktail-Glass-Cut-Outs/838b1e3860/gin-tonic_cocktail__ScaleHeightWzUwMF0.png",
    ingredientLineItems: [
      {
        unit: "cl",
        name: "Gin",
        amount: 4,
        specificSelection: "hendricks",
        type: "Gin"
      },
      {
        unit: "cl",
        name: "Fentimans Tonic",
        amount: 12,
        specificSelection: "fentimans",
        type: "Tonic"
      },
      {
        unit: "",
        name: "Cucumber slices",
        amount: 3,
        specificSelection: "cucumberslice",
        type: "Other"
      }
    ]
  },
  {
    name: "Bathtub Gin & Tonic",
    ingredientLineItems: [
      {
        unit: "cl",
        amount: 4,
        specificSelection: "bathtubgin",
        name: "Bathtub Gin",
        type: "Gin"
      },
      {
        unit: "cl",
        amount: 12,
        specificSelection: "fevertreemed",
        name: "Fever Tree Mediterranean",
        type: "Tonic"
      },
      {
        unit: "cl",
        specificSelection: "rosemary",
        amount: 1,
        name: "Rosemary branch",
        type: "Leaves"
      },
      {
        unit: "",
        specificSelection: "lemonslice",
        amount: 1,
        name: "Lemon Slice",
        type: "Other"
      }
    ],
    image:
      "https://daisiesandpie.co.uk/wp-content/uploads/2019/07/Abelforths-bathtub-gin-and-tonic-with-lemon-and-rosemary.jpg"
  },
  {
    image:
      "https://c8.alamy.com/comp/X7HKJX/apple-gin-tonic-served-in-glass-X7HKJX.jpg",
    name: "Kreatör Jin & Tonic",
    ingredientLineItems: [
      {
        unit: "cl",
        amount: 4,
        specificSelection: "kreatör",
        name: "Gin",
        type: "Gin"
      },
      {
        unit: "cl",
        amount: 12,
        specificSelection: "fevertreeindian",
        name: "Fever Tree Indian Tonic",
        type: "Tonic"
      },
      {
        unit: "",
        specificSelection: "rosemary",
        amount: 1,
        name: "Rosemary branch",
        type: "Leaves"
      },
      {
        unit: "",
        specificSelection: "appleslice",
        amount: 1,
        name: "Apple slice",
        type: "Other"
      }
    ]
  },
  {
    image:
      "https://mittkok.expressen.se/wp-content/uploads/2017/03/gtadobestock_126085930-1-700x700.jpg",
    name: "Gin & Tonic",
    ingredientLineItems: [
      {
        name: "Gin",
        amount: 4,
        unit: "cl",
        specificSelection: "tanqueray",
        type: "Gin"
      },
      {
        type: "Tonic",
        amount: 12,
        unit: "cl",
        specificSelection: "fevertreeindian",
        name: "Tonic"
      },
      {
        name: "Lemon Slice",
        amount: 1,
        unit: "",
        specificSelection: "lemonslice",
        type: "Other"
      }
    ]
  },
  {
    image:
      "https://assets.epicurious.com/photos/5577559881ac1e5023673c24/6:4/w_620%2Ch_413/51193080_autumn-gin-sour_6x4.jpg",
    ingredientLineItems: [
      {
        name: "Gin",
        amount: 6,
        unit: "cl",
        type: "Gin",
        specificSelection: "bombay"
      },
      {
        name: "Syrup",
        amount: 2,
        unit: "cl",
        type: "Sweetener"
      },
      {
        name: "Lemon Juice",
        amount: 3,
        unit: "cl",
        type: "Fresh fruit juice",
        specificSelection: "freshlemon"
      },
      {
        name: "Aquafaba",
        amount: 0,
        unit: "",
        type: "Other",
        specificSelection: "aquafaba"
      }
    ],
    name: "Gin sour"
  }
];

export default drinksList;
