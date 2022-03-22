import { v4 as uuid } from "uuid";
import s1 from "../../assets/images/shirt1.webp";
import s2 from "../../assets/images/shirt2.webp";
import s3 from "../../assets/images/shirt3.webp";
import j1 from "../../assets/images/jeans1.webp";
import j2 from "../../assets/images/jeans2.webp";
import j3 from "../../assets/images/jeans3.webp";
import jw1 from "../../assets/images/jw1.webp";
import jw2 from "../../assets/images/jw2.webp";
import jw3 from "../../assets/images/jw3.webp";
import kw1 from "../../assets/images/kw1.webp";
import kw2 from "../../assets/images/kw2.webp";
import kw3 from "../../assets/images/kw3.webp";
import k1 from "../../assets/images/k1.webp";
import k2 from "../../assets/images/k2.webp";
import k3 from "../../assets/images/k3.webp";
import k4 from "../../assets/images/k4.webp";
import k5 from "../../assets/images/k5.webp";
import i1 from "../../assets/images/i1.webp";
import i2 from "../../assets/images/i2.webp";
import i3 from "../../assets/images/i3.webp";
import i4 from "../../assets/images/i4.webp";
import i5 from "../../assets/images/i5.webp";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // {
  //   _id: uuid(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   categoryName: "non-fiction",
  // },
  // {
  //   _id: uuid(),
  //   title: "You are Winner",
  //   author: "Junaid Qureshi",
  //   price: "3000",
  //   categoryName: "horror",
  // },
  // {
  //   _id: uuid(),
  //   title: "Think and Grow Rich",
  //   author: "Shiv Khera",
  //   price: "1000",
  //   categoryName: "fiction",
  // },

  {
    _id: uuid(),
    image: j1,
    companyName: "U.S. POLO ASSN.",
    design: "Mid-Wash Slim Fit Jeans",
    price: "1219",
    category: "Men",
    size: "M",
    rating: 5,
  },

  {
    _id: uuid(),
    image: j2,
    companyName: "LEVIS",
    design: "Slim Fit Washed Jeans",
    price: "1763",
    category: "Men",
    size: "S",
    rating: 2,
  },
  {
    _id: uuid(),
    image: j3,
    companyName: "RARE RABBIT",
    design: "Light Wash Straight Jeans",
    price: "2999",
    category: "Men",
    size: "M",
    rating: 2,
  },
  {
    _id: uuid(),
    image: s1,
    companyName: "CAMPUS SUTRA",
    design: "Striped Regular Fit Shirt",
    price: "645",
    category: "Men",
    size: "M",
    rating: 1,
  },
  {
    _id: uuid(),
    image: s2,
    companyName: "BENE KLEED",
    design: "Floral Print Slim Fit Shirt",
    price: "630",
    category: "Men",
    size: "M",
    rating: 1,
  },
  {
    _id: uuid(),
    image: s3,
    companyName: "THE INDIAN GARAGE",
    design: "Checked Shirt with Patch Pocket",
    price: "437",
    category: "Men",
    size: "M",
    rating: 4,
  },
  {
    _id: uuid(),
    image: jw1,
    companyName: "FIG",
    design: "Skinny Pants with Insert Pockets",
    price: "999",
    category: "Women",
    size: "M",
    rating: 5,
  },
  {
    _id: uuid(),
    image: jw2,
    companyName: "LEVIS",
    design: "Skinny Fit Jeans",
    price: "1463",
    category: "Women",
    size: "M",
    rating: 3,
  },
  {
    _id: uuid(),
    image: jw3,
    companyName: "ADBUCKS",
    design: "Solid Ankle-length Jeans",
    price: "850",
    category: "Women",
    size: "M",
    rating: 5,
  },
  {
    _id: uuid(),
    image: kw1,
    companyName: "ANUBHUTEE",
    design: "Indian Anarkali Kurta Set",
    price: "1800",
    category: "Women",
    size: "L",
    rating: 5,
  },
  {
    _id: uuid(),
    image: kw2,
    companyName: "SITARAM DESIGNER",
    design: "Foil Print Straight Kurta with Palazzo",
    price: "960",
    category: "Women",
    size: "S",
    rating: 4,
  },

  {
    _id: uuid(),
    image: kw3,
    companyName: "GULMOHAR JAIPUR",
    design: "Embellished Straight Kurta",
    price: "599",
    category: "Women",
    size: "M",
    rating: 5,
  },

  {
    _id: uuid(),
    image: k1,
    companyName: "POINT COVE",
    design: "Floral Print Flared Dress",
    price: "450",
    category: "Kids",
    size: "M",
    rating: 5,
  },
  {
    _id: uuid(),
    image: k2,
    companyName: "U.S. POLO ASSN.",
    design: "Speckled Polo T-shirt",
    price: "588",
    category: "Kids",
    size: "S",
    rating: 4,
  },

  {
    _id: uuid(),
    image: k3,
    companyName: "RIO GIRLS",
    design: "Checked Shirt Dress",
    price: "432",
    category: "Kids",
    size: "M",
    rating: 5,
  },

  {
    _id: uuid(),
    image: k4,
    companyName: "TRAMPOLINE",
    design: "Solid Track Pants",
    price: "725",
    category: "Kids",
    size: "M",
    rating: 4,
  },

  {
    _id: uuid(),
    image: k5,
    companyName: "RHYTHM",
    design: "Abstract Print 3/4th Shorts",
    price: "341",
    category: "Kids",
    size: "S",
    rating: 5,
  },

  {
    _id: uuid(),
    image: i1,
    companyName: "BUTA BUTI",
    design: "Animal Print Cotton Saree",
    price: "1399",
    category: "Indie",
    size: "M",
    rating: 5,
  },

  {
    _id: uuid(),
    image: i2,
    companyName: "INDIE PICKS",
    design: "Amritsar Supersoft Paisely Shawl",
    price: "1199",
    category: "Indie",
    size: "L",
    rating: 4,
  },

  {
    _id: uuid(),
    image: i3,
    companyName: "INDIE PICKS",
    design: "Anahat Handblock Print Kurta",
    price: "2279",
    category: "Indie",
    size: "M",
    rating: 5,
  },

  {
    _id: uuid(),
    image: i4,
    companyName: "Indie Picks",
    design: "Print Dabu Pure Chanderi Dupatta",
    price: "920",
    category: "Indie",
    size: "L",
    rating: 5,
  },

  {
    _id: uuid(),
    image: i5,
    companyName: "Indie Picks",
    design: "Handblock Print Slim Fit Shirt",
    price: "756",
    category: "Indie",
    size: "S",
    rating: 4,
  },
];
