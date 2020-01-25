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
      { name: "Cointreau", amount: 2, type: "Liquor", unit: "cl" },
      {
        name: "Lime Juice",
        amount: 3,
        type: "Fresh fruit juice",
        specificSelection: "freshlime",
        unit: "cl"
      },
      { unit: "cl", name: "Agave syrup", amount: 1, type: "Sweetener" }
    ],
    ownedBy: ["Joel", "Daniel"]
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
      { unit: "", name: "Mint Leaves", amount: 12, type: "Leaves" },
      {
        unit: "cl",
        name: "Lime Juice",
        amount: 4.5,
        specificSelection: "freshlime",
        type: "Fresh fruit juice"
      },
      { unit: "cl", name: "Pineapple Juice", amount: 6, type: "Juice" },
      {
        unit: "cl",
        name: "Sugar syrup",
        amount: 1.5,
        specificSelection: "agave",
        type: "Sweetener"
      }
    ],
    ownedBy: ["Joel"]
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
    ],
    ownedBy: ["Joel"]
  },
  {
    image:
      "https://www.kahlua.com/globalassets/images/cocktails/2018/opt/kahluadrinks_whiterussian1.png",
    name: "White Malaysian",
    ingredientLineItems: [
      { unit: "cl", amount: 4, name: "Vodka", type: "Vodka" },
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
    ],
    ownedBy: ["Joel"]
  },
  {
    image:
      "https://cdn.diffords.com/contrib/stock-images/2016/12/23/2016e3345cfc0c53c47cd04eee658d557311.jpg",
    name: "Kiwi Bellini",
    ingredientLineItems: [
      { name: "Vodka", amount: 4, unit: "cl", type: "Vodka" },
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
      { unit: "cl", name: "Sparkling", amount: 6, type: "Sparkling" },
      {
        unit: "",
        name: "Basil Leaves",
        amount: 2,
        type: "Leaves",
        specificSelection: "basil"
      }
    ],
    ownedBy: ["Joel"]
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
      { unit: "cl", name: "Cointreau", amount: 1, type: "Liquor" },
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
      { unit: "cl", name: "Agave syrup", amount: 1, type: "Sweetener" },
      {
        unit: "",
        name: "Tajin",
        amount: 0,
        specificSelection: "tajin",
        type: "Other"
      }
    ],
    ownedBy: ["Joel"]
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
      { unit: "cl", name: "Port Wine", type: "Port", amount: 2.5 },
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
      { unit: "cl", name: "Pineapple Juice", amount: 5, type: "Juice" },
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
    ],
    ownedBy: ["Joel"]
  },
  {
    image:
      "https://cdn.diffords.com/contrib/stock-images/2018/12/5c137598b14d2.jpg",
    name: "Moonlight",
    ingredientLineItems: [
      { unit: "cl", name: "Gin", amount: 3, type: "Gin" },
      {
        unit: "cl",
        name: "Triple Sec",
        amount: 2,
        specificSelection: "cointreau",
        type: "Liquor"
      },
      {
        unit: "cl",
        name: "Crème de Violette",
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
    ],
    ownedBy: ["Joel"]
  },
  {
    name: "French 76",
    image:
      "https://cdn.diffords.com/contrib/stock-images/2017/7/04/201750c47a400dc07fd2ca4f5be453e82829.jpg",
    ingredientLineItems: [
      { unit: "cl", name: "Gin", amount: 2, type: "Gin" },
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
        name: "Elderflower Liquor",
        amount: 2,
        specificSelection: "stgermain",
        type: "Liquor"
      },
      { unit: "cl", name: "Sparkling", amount: 10, type: "Sparkling" }
    ],
    ownedBy: ["Joel"]
  },
  {
    name: "Låtsasvuxen (Rum old fashioned)",
    image:
      "https://cdn.diffords.com/contrib/stock-images/2016/1/41/201670d4ba41562cc286c2ef9364977057c9.jpg",
    instructions: [
      "Stir rum with three ice cubes in a glass for 20 seconds",
      "Add sugar & bitters and two more ice cubes. Stir for 30 seconds",
      "Garnish with orange zest"
    ],
    ingredientLineItems: [
      { unit: "cl", name: "Rum", amount: 5, type: "Rum" },
      {
        unit: "cl",
        name: "Syrup",
        amount: 1,
        specificSelection: "agavesyrup",
        type: "Sweetener"
      },
      {
        unit: "dashes",
        name: "Angostura",
        amount: 4,
        specificSelection: "angostura",
        type: "Bitters"
      }
    ],
    ownedBy: ["Joel"]
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
    name: "Gin Basil Smash",
    ownedBy: ["Joel"]
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
    name: "Mojito",
    ownedBy: ["Joel"]
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
      { unit: "cl", amount: 4, name: "Cranberry juice", type: "Juice" },
      {
        unit: "cl",
        amount: 3,
        name: "Lime juice",
        type: "Fresh fruit juice",
        specificSelection: "freshlime"
      }
    ],
    image: "",
    ownedBy: ["Joel"]
  },
  {
    name: "Jungle Bird",
    ingredientLineItems: [],
    image: "",
    ownedBy: ["Joel"]
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
    name: "Raspberry Daiquiri",
    ownedBy: ["Joel"]
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
    ],
    ownedBy: ["Joel"]
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
      "https://daisiesandpie.co.uk/wp-content/uploads/2019/07/Abelforths-bathtub-gin-and-tonic-with-lemon-and-rosemary.jpg",
    ownedBy: ["Joel"]
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
    ],
    ownedBy: ["Joel"]
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
    ],
    ownedBy: ["Joel"]
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
      { name: "Syrup", amount: 2, unit: "cl", type: "Sweetener" },
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
    name: "Gin sour",
    ownedBy: ["Joel"]
  },
  {
    ownedBy: ["Daniel"],
    name: "Red Russchian",
    image:
      "https://drinkgeneratorn.schweppes.se/uploads/89527b5a84da788c8d0c921342484115.jpg",
    ingredientLineItems: [
      {
        name: "Gin",
        amount: 4,
        unit: "cl",
        type: "Gin",
        specificSelection: "tanqueray"
      },
      {
        name: "Crème de cassis",
        specificSelection: "cremedecasis",
        amount: 2,
        type: "Liquor",
        unit: "cl"
      },
      {
        name: "Schweppes Russchian",
        amount: 0,
        unit: "top",
        type: "Other",
        specificSelection: "schweppesrusschian"
      }
    ]
  },
  {
    name: "Jungle Bird",
    ownedBy: ["Daniel"],
    image:
      "https://cdn.liquor.com/wp-content/uploads/2016/06/15162422/jungle-bird-720x720-recipe.jpg",
    ingredientLineItems: [
      {
        amount: 4.5,
        name: "Rum",
        type: "Rum",
        unit: "cl",
        specificSelection: "plantationbarbados"
      },
      {
        name: "Pineapple Juice",
        amount: 4.5,
        type: "Juice",
        unit: "cl"
      },
      {
        amount: 1.5,
        name: "Campari",
        type: "Liquor",
        unit: "cl",
        specificSelection: "campari"
      },
      {
        amount: 1,
        name: "Syrup",
        type: "Sweetener",
        unit: "cl",
        specificSelection: "simplesyrup"
      },
      {
        amount: 1,
        name: "Lime Juice",
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      }
    ]
  },
  {
    name: "Mai Tai",
    ownedBy: ["Daniel"],
    image: "https://cdn1.tasteline.com/8797_Mai-Tai-klassisk.jpg",
    ingredientLineItems: [
      {
        name: "Rum",
        amount: 4,
        type: "Rum",
        unit: "cl",
        specificSelection: "plantationbarbados"
      },
      {
        amount: 2,
        name: "Triple Sec",
        type: "Liquor",
        unit: "cl",
        specificSelection: "cointreau"
      },
      {
        amount: 0.75,
        name: "Disaronno",
        type: "Liquor",
        unit: "cl",
        specificSelection: "disaronno"
      },
      {
        amount: 4,
        name: "Lime Juice",
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        amount: 2,
        name: "Pomegranate Juice",
        type: "Juice",
        unit: "cl",
        specificSelection: "Pomegranatejuice"
      },
      {
        amount: 0,
        name: "Pineapple juice",
        type: "Juice",
        unit: "top",
        specificSelection: "pineapplejuice"
      }
    ]
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://cdn.liquor.com/wp-content/uploads/2016/09/16091143/bramble-720x720-recipe.jpg",
    ingredientLineItems: [
      {
        name: "Gin",
        amount: 4,
        type: "Gin",
        unit: "cl",
        specificSelection: "tanqueray"
      },
      {
        name: "Chambord",
        amount: 4,
        type: "Liquor",
        unit: "cl",
        specificSelection: "chambord"
      },
      {
        name: "Lemon Juice",
        amount: 2,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        amount: 2,
        name: "Syrup",
        type: "Sweetener",
        unit: "cl",
        specificSelection: "simplesyrup"
      }
    ],
    name: "Bramble"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://cdn1.tasteline.com/Elderflower-Sour-foto-sanna-livijn-wexell-mathem-360x360.jpg",
    ingredientLineItems: [
      {
        name: "Gin",
        amount: 3,
        type: "Gin",
        unit: "cl",
        specificSelection: "tanqueray"
      },
      {
        name: "Elderflower Liquor",
        amount: 2,
        type: "Liquor",
        unit: "cl",
        specificSelection: "elderflowerdekuyper"
      },
      {
        name: "Lemon Juice",
        amount: 4,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        amount: 2,
        name: "Syrup",
        type: "Sweetener",
        unit: "cl",
        specificSelection: "simplesyrup"
      }
    ],
    name: "Elderflower sour"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://i.pinimg.com/originals/8a/d1/ce/8ad1ce0325e2cdf936b95797b03b83eb.jpg",
    ingredientLineItems: [
      {
        name: "Glögg",
        amount: 5,
        type: "Glögg",
        unit: "cl",
        specificSelection: "alcfreeblossa"
      },
      {
        name: "Cranberry Juice",
        amount: 5,
        type: "Juice",
        unit: "cl",
        specificSelection: "cranberryjuice"
      },
      {
        name: "Lime Juice",
        amount: 2,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        amount: 4,
        name: "Triple Sec",
        type: "Liquor",
        unit: "cl",
        specificSelection: "cointreau"
      }
    ],
    name: "Blossapolitan"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "",
    ingredientLineItems: [
      {
        name: "Rum",
        amount: 3,
        type: "Rum",
        unit: "cl",
        specificSelection: "plantationbarbados"
      },
      {
        name: "Passoa",
        amount: 3,
        type: "Liquor",
        unit: "cl",
        specificSelection: "passoa"
      },
      {
        name: "Lime Juice",
        amount: 1,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        amount: 3,
        name: "Pineapple Juice",
        type: "Juice",
        unit: "cl",
        specificSelection: "pineapplejuice"
      },
      {
        amount: 6,
        name: "Cranberry Juice",
        type: "Juice",
        unit: "cl",
        specificSelection: "cranberryjuice"
      }
    ],
    name: "Rum-passion tikki"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "",
    ingredientLineItems: [
      {
        name: "Rum",
        amount: 4.5,
        type: "Rum",
        unit: "cl",
        specificSelection: "plantationbarbados"
      },
      {
        name: "Triple Sec",
        amount: 1.5,
        type: "Liquor",
        unit: "cl",
        specificSelection: "cointreau"
      },
      {
        name: "Pineapple Juice",
        amount: 4.5,
        type: "Juice",
        unit: "cl",
        specificSelection: "pineapplejuice"
      },
      {
        amount: 3,
        name: "Lime Juice",
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        amount: 6,
        name: "Sparkling",
        type: "Sparkling",
        unit: "cl",
        specificSelection: "sparkling"
      }
    ],
    name: "Tikki-fizz"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://drinkoteket.se/wp-content/uploads/peachy-860x860.jpg",
    ingredientLineItems: [
      {
        name: "Peach Liquor",
        amount: 6,
        type: "Liquor",
        unit: "cl",
        specificSelection: "peachtree"
      },
      {
        name: "Lemon Juice",
        amount: 4,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        name: "Orange Juice",
        amount: 10,
        type: "Juice",
        unit: "cl",
        specificSelection: "orangejuice"
      },
      {
        name: "Syrup",
        amount: 1,
        type: "Sweetener",
        unit: "cl",
        specificSelection: "simplesyrup"
      },
      {
        amount: 6,
        name: "Sparkling",
        type: "Sparkling",
        unit: "cl",
        specificSelection: "sparkling"
      }
    ],
    name: "Peachy"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://hungerthirstplay.com/wp-content/uploads/2019/10/Rosemary-Bees-Knees-4-600x900.jpg",
    ingredientLineItems: [
      {
        name: "Gin",
        amount: 6,
        type: "Gin",
        unit: "cl",
        specificSelection: "rokugin"
      },
      {
        name: "Lemon Juice",
        amount: 3,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        name: "Rosemary Cinnamon Honey Syrup",
        amount: 2.5,
        type: "Sweetener",
        unit: "cl",
        specificSelection: "rosemarycinnamonhoneysyrup"
      }
    ],
    name: "Rosemary Bee's Knees"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://selfproclaimedfoodie.com/wp-content/uploads/refreshing-raspberry-mule.jpg",
    ingredientLineItems: [
      {
        name: "Raspberries",
        amount: 8,
        type: "Other",
        unit: "pieces",
        specificSelection: "raspberries"
      },
      {
        name: "Vodka",
        amount: 6,
        type: "Vodka",
        unit: "cl"
      },
      {
        name: "Lime Juice",
        amount: 3,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        name: "Syrup",
        amount: 1.5,
        type: "Sweetener",
        unit: "cl",
        specificSelection: "simplesyrup"
      },
      {
        name: "Ginger Beer",
        amount: 16.5,
        type: "Ginger Beer",
        unit: "cl",
        specificSelection: "gingerbeer"
      }
    ],
    name: "Raspberry Mule"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://drinkoteket.se/wp-content/uploads/philippa-860x860.jpg",
    ingredientLineItems: [
      {
        name: "White Rum",
        amount: 4,
        type: "Rum",
        unit: "cl",
        specificSelection: "bacardiblanca"
      },
      {
        name: "Passoa",
        amount: 2,
        type: "Liquor",
        unit: "cl"
      },
      {
        name: "Apple Sourz",
        amount: 2,
        type: "Liquor",
        unit: "cl",
        specificSelection: "applesourz"
      },
      {
        name: "Lemon Juice",
        amount: 1,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        name: "Sprite",
        amount: 0,
        type: "Soft Drink",
        unit: "top",
        specificSelection: "sprite"
      }
    ],
    name: "Philippa"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://drinkoteket.se/wp-content/uploads/alptopp.jpg",
    ingredientLineItems: [
      {
        name: "Gin",
        amount: 3,
        type: "Gin",
        unit: "cl",
        specificSelection: "tanqueray"
      },
      {
        name: "Blue curacao",
        amount: 1,
        type: "Liquor",
        unit: "cl",
        specificSelection: "bolsblue"
      },
      {
        name: "Peach liquor",
        amount: 1,
        type: "Liquor",
        unit: "cl",
        specificSelection: "peachtree"
      },
      {
        name: "Lemon Juice",
        amount: 1,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        name: "Tonic",
        amount: 10,
        type: "Other",
        unit: "top",
        specificSelection: "schweppespremium"
      }
    ],
    name: "Alptopp"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://drinkgeneratorn.schweppes.se/uploads/9198336d348299a8c5705da911d4df3d.jpg",
    ingredientLineItems: [
      {
        name: "Vanilla Vodka",
        amount: 5,
        type: "Vodka",
        unit: "cl",
        specificSelection: "absolutvanilla"
      },
      {
        name: "Chambord",
        amount: 2,
        type: "Liquor",
        unit: "cl",
        specificSelection: "chambord"
      },
      {
        name: "Syrup",
        amount: 1.5,
        type: "Sweetener",
        unit: "cl",
        specificSelection: "agave"
      },
      {
        name: "Lemon Juice",
        amount: 2,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        name: "Schweppes Russchian",
        amount: 0,
        unit: "top",
        type: "Other",
        specificSelection: "schweppesrusschian"
      }
    ],
    name: "Sweet Russchian"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://folkofolk.se/sites/default/files/2019-04/dark_and_stormy_0.jpg",
    ingredientLineItems: [
      {
        name: "Dark Rum",
        amount: 5,
        type: "Rum",
        unit: "cl",
        specificSelection: "thekraken"
      },
      {
        name: "Lime Juice",
        amount: 2,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        name: "Ginger Beer",
        amount: 16.5,
        unit: "cl",
        type: "Ginger Beer",
        specificSelection: "gingerbeer"
      }
    ],
    name: "Dark & Stormy"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://drinkoteket.se/wp-content/uploads/hallon-lakrits-860x860.jpg",
    ingredientLineItems: [
      {
        name: "Chambord",
        amount: 4,
        type: "Liquor",
        unit: "cl",
        specificSelection: "chambord"
      },
      {
        name: "Syrup",
        amount: 1,
        type: "Sweetener",
        unit: "cl",
        specificSelection: "agave"
      },
      {
        name: "Lemon Juice",
        amount: 2,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        name: "Grenadine",
        amount: 2,
        unit: "cl",
        type: "Liquor",
        specificSelection: "grenadine"
      },
      {
        name: "Liquorice Liquor",
        amount: 0.5,
        unit: "cl",
        type: "Liquor",
        specificSelection: "pernod"
      }
    ],
    name: "Hallonlakrits"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://drinkoteket.se/wp-content/uploads/frozen-strawberry-daiquiri-1.jpg",
    ingredientLineItems: [
      {
        name: "Frozen Strawberries",
        amount: 125,
        type: "Other",
        unit: "g",
        specificSelection: "frozenstrawberries"
      },
      {
        name: "White Rum",
        amount: 5,
        type: "Rum",
        unit: "cl",
        specificSelection: "bacardiblanca"
      },
      {
        name: "Lime Juice",
        amount: 2.5,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        name: "Syrup",
        amount: 2,
        unit: "cl",
        type: "Liquor",
        specificSelection: "simplesyrup"
      },
      {
        name: "Crushed Ice",
        amount: 15,
        unit: "cl",
        type: "Other",
        specificSelection: "crushedice"
      }
    ],
    name: "Frozen Strawberry Daiquiri"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://cdn.diffords.com/contrib/stock-images/2016/7/16/20167a7b0f4b72c236ead72efbb0cd132eca.jpg",
    ingredientLineItems: [
      {
        name: "Raspberries",
        amount: 12,
        type: "Other",
        unit: "pieces",
        specificSelection: "raspberries"
      },
      {
        name: "Bourbon",
        amount: 6,
        type: "Whisky",
        unit: "cl",
        specificSelection: "jimbeanbourbon"
      },
      {
        name: "Chambord",
        amount: 3,
        type: "Liquor",
        unit: "cl",
        specificSelection: "chambord"
      },
      {
        name: "Lime Juice",
        amount: 1.5,
        unit: "cl",
        type: "Fresh fruit juice",
        specificSelection: "freshlime"
      },
      {
        name: "Cranberry Juice",
        amount: 6,
        unit: "cl",
        type: "Juice",
        specificSelection: "cranberryjuice"
      }
    ],
    name: "Eclipse"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://imbibemagazine.com/wp-content/uploads/2016/02/penicillin-vertical-crdt-lara-ferroni-330x410.jpg",
    ingredientLineItems: [
      {
        name: "Bourbon",
        amount: 6,
        type: "Whisky",
        unit: "cl",
        specificSelection: "jimbeanbourbon"
      },
      {
        name: "Lemon Juice",
        amount: 2,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        name: "Honey syrup",
        amount: 2.5,
        type: "Sweetener",
        unit: "cl",
        specificSelection: "honeysyrup"
      },
      {
        name: "Smoky Whisky",
        amount: 0,
        type: "Whisky",
        unit: "spray",
        specificSelection: "bowmore"
      }
    ],
    name: "Penicillin"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "",
    ingredientLineItems: [
      {
        name: "Vanilla Vodka",
        amount: 3,
        type: "Vodka",
        unit: "cl",
        specificSelection: "absolutvanilla"
      },
      {
        name: "Crème de Cassis",
        amount: 2,
        type: "Liquor",
        unit: "cl",
        specificSelection: "cremedecassis"
      },
      {
        name: "Lime Juice",
        amount: 2,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        name: "Sprite",
        amount: 0,
        type: "Soft Drink",
        unit: "top",
        specificSelection: "sprite"
      }
    ],
    name: "T2"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://cdn1.tasteline.com/drink2-360x360_1.jpg",
    ingredientLineItems: [
      {
        name: "Tequila",
        amount: 4,
        type: "Tequila",
        unit: "cl",
        specificSelection: "sauza"
      },
      {
        name: "Crème de Cassis",
        amount: 1,
        type: "Liquor",
        unit: "cl",
        specificSelection: "cremedecassis"
      },
      {
        name: "Lime Juice",
        amount: 2,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        name: "Ginger Beer",
        amount: 16.5,
        type: "Ginger Beer",
        unit: "cl",
        specificSelection: "gingerbeer"
      }
    ],
    name: "El Diablo"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://www.ginfoundry.com/wp-content/uploads/2016/04/french75_lg_340x460_acf_cropped.jpg",
    ingredientLineItems: [
      {
        name: "Gin",
        amount: 4,
        type: "Gin",
        unit: "cl",
        specificSelection: "tanqueray"
      },
      {
        name: "Triple Sec",
        amount: 2,
        type: "Liquor",
        unit: "cl",
        specificSelection: "cointreau"
      },
      {
        name: "Lemon Juice",
        amount: 2,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        name: "Sparkling",
        amount: 8,
        type: "Sparkling",
        unit: "cl"
      }
    ],
    name: "French 75"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://drinkoteket.se/wp-content/uploads/japanese-slipper-860x860.jpg",
    ingredientLineItems: [
      {
        name: "Melon Liquor",
        amount: 4,
        type: "Liquor",
        unit: "cl",
        specificSelection: "midori"
      },
      {
        name: "Triple Sec",
        amount: 4,
        type: "Liquor",
        unit: "cl",
        specificSelection: "cointreau"
      },
      {
        name: "Lime Juice",
        amount: 4,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      }
    ],
    name: "Japanese Slipper"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://www.diageobaracademy.com/uploads/photos/Captain_Morgan_Spiced_Cranberry_Fizz.jpg",
    ingredientLineItems: [
      {
        name: "White Rum",
        amount: 6,
        type: "Rum",
        unit: "cl",
        specificSelection: "bacardirazz"
      },
      {
        name: "Cranberry Juice",
        amount: 4,
        type: "Juice",
        unit: "cl",
        specificSelection: "cranberryjuice"
      },
      {
        name: "Lime Juice",
        amount: 4,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        name: "Tonic",
        amount: 20,
        type: "Tonic",
        unit: "cl",
        specificSelection: "schweppespremium"
      }
    ],
    name: "Marias Special"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://i.pinimg.com/originals/d4/9c/13/d49c13d0330d1d7c3f9eb7d2b802cb91.jpg",
    ingredientLineItems: [
      {
        name: "Vanilla Vodka",
        amount: 3,
        type: "Vodka",
        unit: "cl",
        specificSelection: "absolutvanilla"
      },
      {
        name: "Apple Sourz",
        amount: 3,
        type: "Liquor",
        unit: "cl",
        specificSelection: "applesourz"
      },
      {
        name: "Lime Juice",
        amount: 1,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        name: "Sprite",
        amount: 0,
        type: "Soft Drink",
        unit: "cl",
        specificSelection: "sprite"
      }
    ],
    name: "P2"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://cdn.diffords.com/contrib/stock-images/2018/05/5af311caad063.jpg",
    ingredientLineItems: [
      {
        name: "Crème De Cassis",
        amount: 2,
        type: "Liquor",
        unit: "cl",
        specificSelection: "cremedecassis"
      },
      {
        name: "Syrup",
        amount: 2,
        type: "Sweetener",
        unit: "cl",
        specificSelection: "simplesyrup"
      },
      {
        name: "Lemon Juice",
        amount: 1,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlemon"
      },
      {
        name: "Vodka",
        amount: 3,
        type: "Vodka",
        unit: "cl"
      },
      {
        name: "Sparkling",
        amount: 8,
        type: "Sparkling",
        unit: "cl"
      }
    ],
    name: "Russian Spring Punch"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://cdn.diffords.com/contrib/stock-images/2017/8/48/20175bfb132fa3c89f7b565702377eedd9f7.jpg",
    ingredientLineItems: [
      {
        name: "Peach Liquor",
        amount: 2,
        type: "Liquor",
        unit: "cl",
        specificSelection: "peachtree"
      },
      {
        name: "Orange Juice",
        amount: 3,
        type: "Juice",
        unit: "cl",
        specificSelection: "orangejuice"
      },
      {
        name: "Pineapple Juice",
        amount: 3,
        type: "Juice",
        unit: "cl",
        specificSelection: "pineapplejuice"
      },
      {
        name: "Vodka",
        amount: 4,
        type: "Vodka",
        unit: "cl"
      },
      {
        name: "Cranberry Juice",
        amount: 3,
        type: "Juice",
        unit: "cl",
        specificSelection: "cranberryjuice"
      },
      {
        name: "Chambord",
        amount: 2,
        type: "Liquor",
        unit: "cl",
        specificSelection: "chambord"
      }
    ],
    name: "Sex on the Beach",
    instructions: [
      "Shake all orange looking ingredients with ice",
      "Strain into glass",
      "Shake the remaining ingredients with ice",
      "Strain into same glass"
    ]
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://drinkoteket.se/wp-content/uploads/sodapop-860x860.jpg",
    ingredientLineItems: [
      {
        name: "Apple Sourz",
        amount: 4,
        type: "Liquor",
        unit: "cl",
        specificSelection: "applesourz"
      },
      {
        name: "Blue Curacao",
        amount: 2,
        type: "Liquor",
        unit: "cl",
        specificSelection: "bolsblue"
      },
      {
        name: "Lime Juice",
        amount: 2,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        name: "Syrup (optional)",
        amount: 2,
        type: "Sweetener",
        unit: "cl",
        specificSelection: "simplesyrup"
      },
      {
        name: "Sprite (optional)",
        amount: 0,
        type: "Soft Drink",
        unit: "top",
        specificSelection: "sprite"
      }
    ],
    name: "Soda Pop"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://cdn.diffords.com/contrib/stock-images/2017/8/49/201746c438fdcb534ea73fd518baa2a0e386.jpg",
    ingredientLineItems: [
      {
        name: "Triple Sec",
        amount: 2.5,
        type: "Liquor",
        unit: "cl",
        specificSelection: "cointreau"
      },
      {
        name: "Tequila",
        amount: 4.5,
        type: "Tequila",
        unit: "cl",
        specificSelection: "suza"
      },
      {
        name: "Lime Juice",
        amount: 1.5,
        type: "Fresh fruit juice",
        unit: "cl",
        specificSelection: "freshlime"
      },
      {
        name: "Crème de Cassis",
        amount: 0.5,
        type: "Liquor",
        unit: "cl",
        specificSelection: "cremedecassis"
      },
      {
        name: "Grenadine",
        amount: 0.5,
        type: "Liquor",
        unit: "cl",
        specificSelection: "grenadine"
      },
      {
        name: "Orange Juice",
        amount: 7.5,
        type: "Juice",
        unit: "cl",
        specificSelection: "orangejuice"
      }
    ],
    instructions: [
      "Pour grenadine and cassis into ice-filled glass.",
      "Shake other ingredients and carfully strain on top of the red base layer."
    ],
    name: "Tequila Sunrise"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://www.jocooks.com/wp-content/uploads/2015/12/pomegranate-elderflower-cocktail-1-2.jpg",
    ingredientLineItems: [
      {
        name: "Sparkling",
        amount: 8,
        type: "Sparkling",
        unit: "cl",
        specificSelection: "sparkling"
      },
      {
        name: "Pomegranate Juice",
        amount: 6,
        type: "Juice",
        unit: "cl",
        specificSelection: "pomegranatejuice"
      },
      {
        name: "Elderflower Liquor",
        amount: 6,
        type: "Liquor",
        unit: "cl",
        specificSelection: "elderflowerdekuyper"
      }
    ],
    instructions: [
      "Shake pomegranate juice and elderflower liquor with ice and pour into glass.",
      "Top with sparkling wine and optionally some pomegranate seeds."
    ],
    name: "Pomegranate Elderflower Spritzer"
  },
  {
    ownedBy: ["Daniel"],
    image:
      "https://www.kitchensanctuary.com/wp-content/uploads/2016/12/New-Years-Eve-Berry-Cocktail-tall.jpg",
    ingredientLineItems: [
      {
        name: "Dark Rum",
        amount: 4,
        type: "Rum",
        unit: "cl",
        specificSelection: "thekraken"
      },
      {
        name: "Pomegranate Juice",
        amount: 8,
        type: "Juice",
        unit: "cl",
        specificSelection: "pomegranatejuice"
      },
      {
        name: "Triple Sec",
        amount: 2,
        type: "Liquor",
        unit: "cl",
        specificSelection: "cointreau"
      },
      {
        name: "Ginger Beer",
        amount: 16.5,
        type: "Ginger Beer",
        unit: "cl",
        specificSelection: "gingerbeer"
      }
    ],
    instructions: [
      "Shake rum, pomegranate juice and triple sec with ice and pour into glass.",
      "Top with ginger beer and optionally some mixed frozen berries."
    ],
    name: "New Year's Eve Berry Cocktail"
  },
  {
    name: 'Earth, Wind & Fire',
    image: 'https://preview.redd.it/nq48xe1ib7c41.jpg?width=640&crop=smart&auto=webp&s=3c4d6962cd21fd4fc94ff78aefc03f99bb753c49',
    ingredientLineItems: [
      {
        name: 'Cucumber Slice',
        amount: 5,
        type: 'Other',
        unit: '',
        specificSelection: 'cucumberslice'
      },
      {
        name: 'Passion Fruit',
        amount: 1,
        type: 'Other',
        unit: '',
        specificSelection: 'passionfruit'
      },
      {
        name: 'Agave syrup',
        amount: 1.5,
        type: 'Sweetener',
        unit: 'cl',
        specificSelection: 'agave'
      },
      {
        name: 'Lime juice',
        amount: 3,
        type: 'Fresh fruit juice',
        unit: 'cl',
        specificSelection: 'freshlime'
      },
      {
        name: 'Dry Curacao',
        amount: 2,
        type: 'Liquor',
        unit: 'cl',
        specificSelection: 'drycuracao'
      },
      {
        name: 'Tequila',
        amount: 4,
        type: 'Tequila',
        unit: 'cl',
      },
      {
        name: 'Ginger beer',
        amount: 4,
        type: 'Ginger Beer',
        unit: 'cl',
        specificSelection: 'gingerbeer'
      }
    ],
    ownedBy: ['Joel', 'Daniel'],
    instructions: [
      'Slice cucumber and get meat from passion fruit',
      'Add to shaker and muddle',
      'Add all other ingredients except Ginger beer',
      'Shake and fine strain into highball-ish glass'
    ]
  }
];

export default drinksList;
