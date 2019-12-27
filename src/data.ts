import drinks from "./drinks";

export type UnitType = "cl" | "squirt" | "fresh" | "dashes" | "spoon" | "";
type IngredientTypeType =
  | "Tequila"
  | "Liquor"
  | "Bitters"
  | "Fresh fruit juice"
  | "Sweetener"
  | "Leaves"
  | "Rum"
  | "Vodka"
  | "Cognac"
  | "Gin"
  | "Punsch"
  | "Port"
  | "Whisky"
  | "Tonic"
  | "Other"
  | "Sparkling"
  | "Brandy"
  | "Vermouth"
  | "Juice";
export type DrinksList = Array<DrinkType>;
export type IngredientLineItem = {
  name: string;
  type: IngredientTypeType;
  amount: number;
  specificSelection?: string;
  unit: UnitType;
};
export type DrinkType = {
  name: string;
  image: string;
  ingredientLineItems: Array<IngredientLineItem>;
};

type IngredientsListType = Array<IngredientType>;
export type IngredientType = {
  identifier: string;
  name: string;
  pricePerUnit: number;
  type: IngredientTypeType;
  image: string;
};

export const ingredientsList: IngredientsListType = [
  {
    identifier: "sauza",
    name: "Sauza Blanco",
    pricePerUnit: 4.58,
    type: "Tequila",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/377959/377959_800.png"
  },
  {
    identifier: "calle23",
    name: "Calle 23",
    pricePerUnit: 7,
    type: "Tequila",
    image:
      "https://www.kuinak.com/system/base_product_images/images/000/003/638/detail/calle-23-blanco-1.jpg?1386038236"
  },
  {
    identifier: "cointreau",
    name: "Cointreau",
    pricePerUnit: 4.49,
    type: "Liquor",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/562/562_800.png"
  },
  {
    identifier: "freshlime",
    name: "Fresh Lime Juice",
    pricePerUnit: 3,
    type: "Fresh fruit juice",
    image:
      "https://cdn.shopify.com/s/files/1/2336/3219/products/shutterstock_188169533bearsss_x850.jpg?v=1554664732"
  },
  {
    identifier: "agave",
    name: "Agave syrup",
    pricePerUnit: 0,
    type: "Sweetener",
    image:
      "https://assets.icanet.se/t_product_large_v1,f_auto/3088542506508.jpg"
  },
  {
    identifier: "freshlemon",
    name: "Fresh Lemon Juice",
    pricePerUnit: 3,
    type: "Fresh fruit juice",
    image:
      "https://cdn.shopify.com/s/files/1/2336/3219/products/shutterstock_77846398eureka2_x850.jpg?v=1554665666"
  },
  {
    identifier: "lime",
    name: "Lime Juice",
    pricePerUnit: 0.6,
    type: "Fresh fruit juice",
    image:
      "https://www.garantskafferiet.se/filer/02-vara-produkter/smaksattning/till-mat/101239061.jpg?preset=product-page-image"
  },
  {
    identifier: "mintleaves",
    name: "Mint Leaves",
    pricePerUnit: 0,
    type: "Leaves",
    image:
      "https://image.made-in-china.com/2f0j00EFmakcKoMOrs/High-Quality-Dried-Mint-Leaves-for-Peppermint-Tea.jpg"
  },
  {
    identifier: "havana3",
    name: "Havana Club",
    pricePerUnit: 3.56,
    type: "Rum",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/21955588/21955588_800.png"
  },
  {
    identifier: "peachtree",
    name: "Peachtree Liqueur",
    pricePerUnit: 2.56,
    type: "Liquor",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/574575/574575_800.png"
  },
  {
    identifier: "pineapplejuice",
    name: "Pineapple Juice",
    pricePerUnit: 0,
    type: "Juice",
    image:
      "https://res.cloudinary.com/coopsverige/image/upload/d_cooponline:missingimage:missing-image.png,fl_progressive,q_90,c_lpad,w_660,h_660/317309.jpg"
  },
  {
    identifier: "icelandrum",
    name: "Reykjavík Rum",
    pricePerUnit: 2.4,
    type: "Rum",
    image:
      "https://www.dutyfree.is/media/1/105-2095.jpg?maxwidth=568&maxheight=490"
  },
  {
    identifier: "donpapa",
    name: "Don Papa Rum",
    pricePerUnit: 5.7,
    type: "Rum",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/841156/841156_800.png"
  },
  {
    identifier: "chambord",
    pricePerUnit: 4.98,
    name: "Chambord",
    type: "Liquor",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/334325/334325_800.png"
  },
  {
    identifier: "goldenfalernum",
    name: "The Bitter Truth",
    pricePerUnit: 6.56,
    type: "Liquor",
    image:
      "https://cdn1.masterofmalt.com/liqueurs/p-2813/the-bitter-truth-golden-falernum-liqueur.jpg?ss=2.0"
  },
  {
    identifier: "minttu",
    name: "Minttu",
    pricePerUnit: 3.84,
    type: "Liquor",
    image:
      "https://static.systembolaget.se/imagelibrary/publishedmedia/ptk93y1v9el7s8wskw37/942594.jpg"
  },
  {
    identifier: "hennessy",
    name: "Hennessy",
    pricePerUnit: 5.7,
    type: "Cognac",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61eK03TuM6L._SY445_.jpg"
  },
  {
    identifier: "alvisa",
    name: "Alvisa Brandy",
    pricePerUnit: 4.78,
    type: "Brandy",
    image:
      "https://static.systembolaget.se/imagelibrary/publishedmedia/e8sabs7dsraw4jrxyo9i/6891149.jpg"
  },
  {
    identifier: "estaterum",
    name: "Estate Rums",
    pricePerUnit: 5,
    image:
      "http://digital-gravity.com/kavanagh-communications/wp-content/uploads/sites/2/2015/07/SingleCane_Consuelo_White.jpg",
    type: "Rum"
  },
  {
    identifier: "angostura",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/685/685_800.png",
    name: "Angostura Bitters",
    pricePerUnit: 0,
    type: "Bitters"
  },
  {
    identifier: "licor43",
    name: "Licor 43",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/45270/45270_800.png",
    pricePerUnit: 3.98,
    type: "Liquor"
  },
  {
    identifier: "hendricks",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/199671/199671_800.png",
    name: "Hendricks Gin",
    pricePerUnit: 6.4,
    type: "Gin"
  },
  {
    identifier: "absolutvodka",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/164/164_800.png",
    pricePerUnit: 3.4,
    name: "Absolut Vodka",
    type: "Vodka"
  },
  {
    identifier: "bolsbanana",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/38735/38735_800.png",
    pricePerUnit: 3.7,
    name: "Bols Banana",
    type: "Liquor"
  },
  {
    identifier: "disaronno",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/652/652_800.png",
    name: "Disaronno",
    type: "Liquor",
    pricePerUnit: 3.58
  },
  {
    identifier: "himbrimi",
    image: "https://img.thewhiskyexchange.com/900/gin_him1.jpg",
    name: "Himbrimi Gin",
    pricePerUnit: 10,
    type: "Gin"
  },
  {
    identifier: "plantationbarbados",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/52586/52586_800.png",
    pricePerUnit: 4.12,
    name: "Plantation Grand Reserve",
    type: "Rum"
  },
  {
    identifier: "sourzapple",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/25052/25052_800.png",
    name: "Sourz Apple",
    pricePerUnit: 2.4,
    type: "Liquor"
  },
  {
    identifier: "gunroomrum",
    pricePerUnit: 10,
    image: "https://img.thewhiskyexchange.com/900/rum_gun3.jpg",
    name: "Gunroom Navy Rum",
    type: "Rum"
  },
  {
    identifier: "anchoreyes",
    name: "Ancho Reyes",
    type: "Liquor",
    image: "https://cdn.diffords.com/contrib/bws/2017/10/59db94bbb3f8d.jpg",
    pricePerUnit: 6.83
  },
  {
    identifier: "grenadine",
    image:
      "http://www.giffard.com/wp-content/uploads/2015/12/SIROP-GRENADINE-100CL-1.png",
    name: "Grenadine",
    pricePerUnit: 0,
    type: "Liquor"
  },
  {
    identifier: "benedictine",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/556/556_800.png",
    name: "Benedictine D.O.M",
    pricePerUnit: 4.9,
    type: "Liquor"
  },
  {
    identifier: "xante",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/4561/4561_800.png",
    name: "Xanté Cognac",
    pricePerUnit: 254 / 50,
    type: "Cognac"
  },
  {
    identifier: "bolsblue",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/38737/38737_800.png",
    name: "Bols Blue",
    pricePerUnit: 155 / 50,
    type: "Liquor"
  },
  {
    identifier: "cinzano",
    image:
      "https://cdn3.masterofmalt.com/vermouth/p-2813/cinzano/cinzano-rosso-vermouth-16-5-1960s.jpg?ss=2.0",
    name: "Cinzano Vermouth Rosso",
    pricePerUnit: 109 / 75,
    type: "Vermouth"
  },
  {
    identifier: "passoa",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/166487/166487_800.png",
    name: "Passoã",
    pricePerUnit: 199 / 70,
    type: "Liquor"
  },
  {
    identifier: "stgermain",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/21955801/21955801_800.png",
    name: "St Germain",
    pricePerUnit: 299 / 50,
    type: "Liquor"
  },
  {
    identifier: "drycuracao",
    image:
      "https://cdn2.masterofmalt.com/liqueurs/p-2813/pierre-ferrand/pierre-ferrand-dry-curacao-liqueur.jpg?ss=2.0",
    name: "Dry Curacao",
    pricePerUnit: 383 / 70,
    type: "Liquor"
  },
  {
    identifier: "kahlua",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/40732/40732_800.png",
    name: "Kahlua",
    pricePerUnit: 258 / 70,
    type: "Liquor"
  },
  {
    identifier: "vanillaextract",
    image: "https://www.clearlife.se/bilder/artiklar/zoom/10678_1.jpg",
    name: "Vaniljextrakt",
    pricePerUnit: 0,
    type: "Liquor"
  },
  {
    identifier: "rokugin",
    image: "https://img.thewhiskyexchange.com/900/gin_rok1.jpg",
    name: "Roku Gin",
    pricePerUnit: 400 / 70,
    type: "Gin"
  },
  {
    identifier: "bathtubgin",
    image:
      "https://cdn4.masterofmalt.com/gin/p-2813/ableforths/bathtub-gin.jpg?ss=2.0",
    name: "Bathtub Gin",
    pricePerUnit: 500 / 70,
    type: "Gin"
  },
  {
    identifier: "campari",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/8604603/8604603_400.png",
    name: "Campari",
    pricePerUnit: 225 / 70,
    type: "Liquor"
  },
  {
    identifier: "svenskpunsch",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/9050/9050_800.png",
    name: "Flaggpunsch",
    pricePerUnit: 162 / 50,
    type: "Punsch"
  },
  {
    identifier: "blacklabel",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/292050/292050_800.png",
    name: "Johnnie Walker Black Label",
    pricePerUnit: 359 / 70,
    type: "Whisky"
  },
  {
    identifier: "absinthe",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/1087343/1087343_800.png",
    name: "Mythe Absinthe",
    pricePerUnit: 459 / 50,
    type: "Liquor"
  },
  {
    identifier: "caramelsyrup",
    image:
      "https://cdn10.bigcommerce.com/s-k42qaci/products/212/images/149/Caramel__97003__99071.1429608335.1280.1280.jpg?c=2",
    name: "Caramel Syrup",
    pricePerUnit: 0,
    type: "Sweetener"
  },
  {
    identifier: "plantationpineapple",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/14868625/14868625_800.png",
    name: "Plantation Pineapple",
    pricePerUnit: 395 / 70,
    type: "Rum"
  },
  {
    identifier: "plantationoverproof",
    image:
      "https://www.celticwhiskeyshop.com/image/Rum/Plantation-OFTD-rum.jpg",
    name: "Plantation O.F.T.D",
    pricePerUnit: 400 / 70,
    type: "Rum"
  },
  {
    identifier: "cremedecasis",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/8024/8024_800.png",
    name: "Crème de Cassis",
    pricePerUnit: 169 / 50,
    type: "Liquor"
  },
  {
    identifier: "grandmarnier",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/581/581_800.png",
    name: "Grand Marnier",
    pricePerUnit: 299 / 50,
    type: "Liquor"
  },
  {
    identifier: "cremedeviolette",
    image: "https://www.weandwine.se/wp-content/uploads/2016/10/Violette.png",
    name: "Crème de Violette",
    pricePerUnit: 179 / 50,
    type: "Liquor"
  },
  {
    identifier: "noilyprat",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/4275/4275_400.png",
    name: "Noily Prat Vermouth",
    pricePerUnit: 137 / 75,
    type: "Vermouth"
  },
  {
    identifier: "plantation3stars",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/703835/703835_800.png",
    name: "Plantation 3 stars",
    pricePerUnit: 269 / 70,
    type: "Rum"
  },
  {
    identifier: "gingerliquor",
    image:
      "https://www.regioerz.de/media/image/c4/d9/de/Ingwerlik-r_600x600.jpg",
    name: "Ingwer Likör",
    pricePerUnit: 0,
    type: "Liquor"
  },
  {
    identifier: "plantation20",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/545196/545196_800.png",
    name: "Plantation XO 20th",
    pricePerUnit: 519 / 70,
    type: "Rum"
  },
  {
    identifier: "menthe",
    image:
      "https://cdn2.masterofmalt.com/liqueurs/p-2813/marie-brizard/marie-brizard-creme-de-menthe-1960s-liqueur.jpg?ss=2.0",
    name: "Menthe",
    pricePerUnit: 200 / 50,
    type: "Liquor"
  },
  {
    identifier: "kreatör",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/6053279/6053279_800.png",
    name: "Kreatör Gin",
    pricePerUnit: 349 / 50,
    type: "Gin"
  },
  {
    identifier: "luxardo",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/17383/17383_800.png",
    name: "Luxardo Maraschino",
    pricePerUnit: 249 / 50,
    type: "Liquor"
  },
  {
    identifier: "kir",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/685391/685391_800.png",
    name: "Caprice Kir",
    pricePerUnit: 75 / 75,
    type: "Liquor"
  },
  {
    identifier: "martiniextradry",
    image:
      "https://cdn1.masterofmalt.com/vermouth/p-2813/martini/martini-extra-dry-150cl-1980s.jpg?ss=2.0",
    name: "Martini Extra Dry Vermouth",
    pricePerUnit: 1,
    type: "Vermouth"
  },
  {
    identifier: "orgeatsyrup",
    image:
      "http://www.giffard.com/wp-content/uploads/2015/12/SIROP-ORGEAT-100CL-1.png",
    name: "Orgeat Syrup",
    pricePerUnit: 0,
    type: "Liquor"
  },
  {
    identifier: "limoncello",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/975128/975128_800.png",
    name: "Limoncello",
    pricePerUnit: 199 / 50,
    type: "Liquor"
  },
  {
    identifier: "lilletblanc",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/540519/540519_400.png",
    name: "Lillet Blanc",
    pricePerUnit: 179 / 75,
    type: "Liquor"
  },
  {
    identifier: "ggin",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/1095356/1095356_800.png",
    name: "G- Gin",
    pricePerUnit: 327 / 50,
    type: "Gin"
  },
  {
    identifier: "gordonpink",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/18635298/18635298_800.png",
    type: "Gin",
    name: "Gordon's Premium Pink",
    pricePerUnit: 247 / 70
  },
  {
    identifier: "tanqueray",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/195565/195565_800.png",
    name: "Tanqueray",
    pricePerUnit: 299 / 70,
    type: "Gin"
  },
  {
    identifier: "nock",
    image:
      "https://www.crushedagave.com/media/zoo/images/nock_tequila_anejo_73aa84e09933fa745dd3981d9e389fca.jpg",
    name: "Nock Añejo",
    pricePerUnit: 607 / 50,
    type: "Tequila"
  },
  {
    identifier: "galliano",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/44898/44898_400.png",
    name: "Galliano",
    pricePerUnit: 195 / 50,
    type: "Liquor"
  },
  {
    identifier: "sourzredberry",
    type: "Liquor",
    pricePerUnit: 169 / 70,
    name: "Sourz Red Berry",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/243236/243236_800.png"
  },
  {
    identifier: "ronzacapa",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/551356/551356_800.png",
    name: "Ron Zacapa Gran Reserva",
    pricePerUnit: 569 / 70,
    type: "Rum"
  },
  {
    identifier: "sparkling",
    image:
      "https://sb-product-media-prod.azureedge.net/productimages/1216712/1216712_800.png",
    name: "Freixenet Prosecco",
    pricePerUnit: 99 / 75,
    type: "Sparkling"
  },
  {
    identifier: "englishmarmelade",
    image:
      "https://www.candy-store.cz/out/pictures/z1/Robertsons_Olde_English_Thick_Cut_Orange_Marmalade_340g_z1.jpg",
    name: "English Orange Marmelade",
    pricePerUnit: 0,
    type: "Liquor"
  },
  {
    identifier: "ikaffe",
    image:
      "https://www.oatly.com/uploads/attachments/cjvz61k1702kam8qrdbjdurs8-61603-ikaffe-se-fi-dk-no-right-tp-brik-edge-1l-v013.full.jpg",
    name: "Oatly iKaffe",
    pricePerUnit: 0,
    type: "Juice"
  },
  {
    identifier: "croftport",
    image:
      "https://static.systembolaget.se/imagelibrary/publishedmedia/t3ksgrjaxh6j0tuwbxm9/1003765.jpg",
    name: "Croft Port",
    pricePerUnit: 229 / 75,
    type: "Port"
  },
  {
    identifier: "tajin",
    image: "https://tajin.com/content/images/productos/Clasico-142g_1.png",
    name: "Tajin",
    pricePerUnit: 0,
    type: "Other"
  },
  {
    identifier: "kiwi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg",
    name: "Kiwi",
    pricePerUnit: 0,
    type: "Other"
  },
  {
    identifier: "basil",
    image:
      "https://5.imimg.com/data5/SS/DS/MY-10247618/basil-leaves-500x500.jpg",
    name: "Basil Leaves",
    pricePerUnit: 0,
    type: "Leaves"
  },
  {
    identifier: "cucumberslice",
    image:
      "https://www.freefoodphotos.com/imagelibrary/vegetables/sliced_cucumber.jpg",
    name: "Cucumber slices",
    pricePerUnit: 0,
    type: "Other"
  },
  {
    identifier: "fentimans",
    image:
      "https://www.fotoagent.dk/single_picture/10620/138/mega/6035.gallery.jpg",
    name: "Fentimans Tonic",
    pricePerUnit: 1,
    type: "Tonic"
  },
  {
    identifier: "orangepeel",
    image:
      "https://www.spiceography.com/wp-content/uploads/2017/11/orange-peel-substitute-768x512.jpeg",
    name: "Orange Peel",
    pricePerUnit: 0,
    type: "Other"
  },
  {
    identifier: "fevertreemed",
    image:
      "https://www.fotoagent.dk/single_picture/10620/138/mega/Fever_tree_Mediteranean.jpg",
    name: "Fever Tree Mediterranean Tonic",
    pricePerUnit: 12 / 20,
    type: "Tonic"
  },
  {
    identifier: "rosemary",
    image:
      "https://cdn.shopify.com/s/files/1/0156/0137/products/rosemary-1200x960.jpg?v=1522850208",
    name: "Rosemary",
    pricePerUnit: 0,
    type: "Leaves"
  },
  {
    identifier: "lemonslice",
    image:
      "https://img.pngio.com/lemon-lemonade-orange-slice-yellow-friut-yummy-bright-lemon-lemon-wedge-png-820_975.png",
    name: "Lemon Slice",
    pricePerUnit: 0,
    type: "Other"
  },
  {
    identifier: "diplomatico",
    image:
      "https://static.systembolaget.se/imagelibrary/publishedmedia/sobcpqf44jregljemysp/541380.jpg",
    name: "Diplomático Grand Reserva",
    pricePerUnit: 525 / 70,
    type: "Rum"
  },
  {
    identifier: "fevertreeindian",
    image:
      "https://www.bar-life.se/media/catalog/product/cache/5/image/5de9a4081f7512616a879e1fa16b5ba3/f/e/fever-tree_indian_tonic_water_-_bedste_gin_tonic_vand.jpg",
    name: "Fever Tree Indian Tonic",
    pricePerUnit: 12 / 20,
    type: "Tonic"
  },
  {
    identifier: "appleslice",
    image:
      "https://www.sccpre.cat/mypng/full/487-4870024_stacked-apple-slices-apple-slice-top-view-png.png",
    name: "Apple Slice",
    pricePerUnit: 0,
    type: "Other"
  },
  {
    identifier: "raspberries",
    image:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/283/283018/raspberries.jpg",
    name: "Raspberries",
    pricePerUnit: 0,
    type: "Other"
  },
  {
    identifier: "cranberryjuice",
    image:
      "https://d1osgs5rdqb11o.cloudfront.net/products/main/1706/1706.thm350.jpg",
    name: "Cranberry juice",
    pricePerUnit: 0,
    type: "Juice"
  },
  {
    identifier: "absolutcitron",
    image:
      "https://static.systembolaget.se/imagelibrary/publishedmedia/2nk3dvz94kcca2xupuwe/176.jpg",
    name: "Absolut Citron",
    pricePerUnit: 255 / 70,
    type: "Vodka"
  },
  {
    identifier: "aquafaba",
    image: "",
    name: "Aquafaba",
    pricePerUnit: 0,
    type: "Other"
  }
];

export default drinks;
