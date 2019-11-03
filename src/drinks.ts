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
        defaultSelection: "sauza"
      },
      {
        name: "Cointreau",
        amount: 2,
        type: "Liquor"
      },
      {
        name: "Lime Juice",
        amount: 3,
        type: "Fresh fruit juice",
        defaultSelection: "freshlime"
      },
      {
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
        name: "White Rum",
        type: "Rum",
        defaultSelection: "havana3",
        amount: 4
      },
      {
        name: "Peach Liquor",
        amount: 1.5,
        type: "Liquor",
        defaultSelection: "peachtree"
      },
      {
        name: "Mint Leaves",
        amount: 12,
        type: "Leaves"
      },
      {
        name: "Lime Juice",
        amount: 4.5,
        defaultSelection: "freshlime",
        type: "Fresh fruit juice"
      },
      {
        name: "Pineapple Juice",
        amount: 6,
        type: "Juice"
      },
      {
        name: "Sugar syrup",
        amount: 1.5,
        defaultSelection: "agave",
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
        name: "White Rum",
        amount: 4,
        defaultSelection: "havana3",
        type: "Rum"
      },
      {
        name: "Absinthe",
        amount: 0.25,
        defaultSelection: "absinthe",
        type: "Liquor"
      },
      {
        name: "Lime Juice",
        amount: 2,
        defaultSelection: "freshlime",
        type: "Fresh fruit juice"
      },
      {
        name: "Syrup",
        amount: 1,
        defaultSelection: "agavesyrup",
        type: "Sweetener"
      },
      {
        amount: 0.5,
        defaultSelection: "englishmarmelade",
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
        amount: 4,
        name: "Vodka",
        type: "Vodka"
      },
      {
        amount: 3,
        name: "Kahlúa",
        defaultSelection: "kahlua",
        type: "Liquor"
      },
      {
        amount: 8,
        name: "iKaffe",
        defaultSelection: "ikaffe",
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
        type: "Vodka"
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        defaultSelection: "freshlemon",
        type: "Fresh fruit juice"
      },
      {
        name: "Syrup",
        amount: 0.75,
        defaultSelection: "agavesyrup",
        type: "Sweetener"
      },
      {
        name: "Kiwi fruit",
        amount: 1,
        defaultSelection: "kiwi",
        type: "Other"
      },
      {
        name: "Sparkling",
        amount: 6,
        type: "Sparkling"
      },
      {
        name: "Basil Leaves",
        amount: 2,
        type: "Leaves",
        defaultSelection: "basil"
      }
    ]
  },
  {
    image:
      "https://www.cakenknife.com/wp-content/uploads/2017/04/Chili-Lime-Margarita-Thumbnail-720x540.jpg",
    name: "Flaming Margarita",
    ingredientLineItems: [
      {
        name: "Tequila",
        amount: 3,
        type: "Tequila",
        defaultSelection: "calle23"
      },
      {
        name: "Cointreau",
        amount: 1,
        type: "Liquor"
      },
      {
        name: "Ancho Reyes",
        amount: 2,
        type: "Liquor",
        defaultSelection: "anchoreyes"
      },
      {
        name: "Lime Juice",
        amount: 3,
        type: "Fresh fruit juice",
        defaultSelection: "freshlime"
      },
      {
        name: "Agave syrup",
        amount: 1,
        type: "Sweetener"
      },
      {
        name: "Tajin",
        amount: 0,
        defaultSelection: "tajin",
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
        name: "Gin",
        type: "Gin",
        amount: 2.5,
        defaultSelection: "tanqueray"
      },
      {
        name: "Port Wine",
        type: "Port",
        amount: 2.5
      },
      {
        name: "Benedictine",
        amount: 2.5,
        defaultSelection: "benedictine",
        type: "Liquor"
      },
      {
        name: "Angostura Bitters",
        amount: 2,
        defaultSelection: "angostura",
        type: "Bitters"
      },
      {
        name: "Pineapple Juice",
        amount: 5,
        type: "Juice"
      },
      {
        name: "Lime Juice",
        amount: 2.5,
        defaultSelection: "freshlime",
        type: "Fresh fruit juice"
      },
      {
        name: "Grenadine (optional)",
        amount: 0.5,
        defaultSelection: "grenadine",
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
        name: "Gin",
        amount: 3,
        type: "Gin"
      },
      {
        name: "Triple Sec",
        amount: 2,
        defaultSelection: "cointreau",
        type: "Liquor"
      },
      {
        name: "Créme de Violette",
        amount: 1.5,
        defaultSelection: "cremedeviolette",
        type: "Liquor"
      },
      {
        name: "Lime Juice",
        amount: 0.75,
        defaultSelection: "freshlime",
        type: "Fresh fruit juice"
      },
      {
        name: "Lemon Juice",
        amount: 0.75,
        defaultSelection: "freshlemon",
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
        name: "Gin",
        amount: 2,
        type: "Gin"
      },
      {
        name: "Lemon Juice",
        amount: 2,
        defaultSelection: "freshlemon",
        type: "Fresh fruit juice"
      },
      {
        name: "Syrup",
        amount: 2,
        defaultSelection: "agavesyrup",
        type: "Sweetener"
      },
      {
        name: "St Germain",
        amount: 2,
        defaultSelection: "stgermain",
        type: "Liquor"
      },
      {
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
        name: "Rum",
        amount: 5,
        type: "Rum"
      },
      {
        name: "Syrup",
        amount: 1.5,
        defaultSelection: "agavesyrup",
        type: "Sweetener"
      },
      {
        name: "Angostura",
        amount: 1,
        defaultSelection: "angostura",
        type: "Bitters"
      }
    ]
  },
  {
    image:
      "https://cdn.diffords.com/contrib/stock-images/2016/3/10/20161cc3133df32007a68af7e2eb6bdb7a38.jpg",
    ingredientLineItems: [
      {
        defaultSelection: "hendricks",
        amount: 6,
        name: "Gin",
        type: "Gin"
      },
      {
        defaultSelection: "freshlemon",
        amount: 2,
        name: "Lemon Juice",
        type: "Fresh fruit juice"
      },
      {
        defaultSelection: "agavesyrup",
        amount: 2,
        name: "Syrup",
        type: "Sweetener"
      },
      {
        defaultSelection: "basil",
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
        amount: 4,
        defaultSelection: "havana3",
        name: "Light Rum",
        type: "Rum"
      },
      {
        amount: 6,
        defaultSelection: "mintleaves",
        name: "Mint leaves",
        type: "Leaves"
      },
      {
        amount: 2.25,
        defaultSelection: "freshlime",
        name: "Lime Juice",
        type: "Fresh fruit juice"
      },
      {
        amount: 1.87,
        defaultSelection: "agavesyrup",
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
        amount: 7,
        name: "Lemon Vodka",
        defaultSelection: "absolutcitron",
        type: "Vodka"
      },
      {
        amount: 3,
        name: "Cointreau",
        defaultSelection: "cointreau",
        type: "Liquor"
      },
      {
        amount: 4,
        name: "Cranberry juice",
        type: "Juice"
      },
      {
        amount: 3,
        name: "Lime juice",
        type: "Fresh fruit juice",
        defaultSelection: "freshlime"
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
        type: "Rum",
        name: "Light Rum",
        amount: 4,
        defaultSelection: "havana3"
      },
      {
        type: "Fresh fruit juice",
        amount: 2,
        defaultSelection: "freshlime",
        name: "Fresh Lime Juice"
      },
      {
        type: "Sweetener",
        amount: 2,
        defaultSelection: "agavesyrup",
        name: "Syrup"
      },
      {
        type: "Other",
        amount: 6,
        defaultSelection: "raspberries",
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
        name: "Gin",
        amount: 4,
        defaultSelection: "hendricks",
        type: "Gin"
      },
      {
        name: "Fentimans Tonic",
        amount: 12,
        defaultSelection: "fentimans",
        type: "Tonic"
      },
      {
        name: "Cucumber slices",
        amount: 3,
        defaultSelection: "cucumberslice",
        type: "Other"
      }
    ]
  },
  {
    name: "Bathtub Gin & Tonic",
    ingredientLineItems: [
      {
        amount: 4,
        defaultSelection: "bathtubgin",
        name: "Bathtub Gin",
        type: "Gin"
      },
      {
        amount: 12,
        defaultSelection: "fevertreemed",
        name: "Fever Tree Mediterranean",
        type: "Tonic"
      },
      {
        defaultSelection: "rosemary",
        amount: 1,
        name: "Rosemary branch",
        type: "Leaves"
      },
      {
        defaultSelection: "lemonslice",
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
        amount: 4,
        defaultSelection: "kreatör",
        name: "Gin",
        type: "Gin"
      },
      {
        amount: 12,
        defaultSelection: "fevertreeindian",
        name: "Fever Tree Indian Tonic",
        type: "Tonic"
      },
      {
        defaultSelection: "rosemary",
        amount: 1,
        name: "Rosemary branch",
        type: "Leaves"
      },
      {
        defaultSelection: "appleslice",
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
        defaultSelection: "tanqueray",
        type: "Gin"
      },
      {
        type: "Tonic",
        amount: 12,
        defaultSelection: "fevertreeindian",
        name: "Tonic"
      },
      {
        name: "Lemon Slice",
        amount: 1,
        defaultSelection: "lemonslice",
        type: "Other"
      }
    ]
  }
];

export default drinksList;
