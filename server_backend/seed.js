import mongoose from "mongoose";
import dotenv from "dotenv";
import productModel from "./models/productModel.js";
// import assets from "../e-com_frontend/src/assets/assets.js";
// import { products } from "../e-com_frontend/src/assets/assets.js";

dotenv.config();

const products = [
    {
        name: "Gryffindor House Hoodie",
        description: "Stay warm and spellbound in this cozy hoodie inspired by the magic of the wizarding world.",
        price: 700,
        image: ["/src/assets/p_img1.png"],
        category: "Clothing",
        subCategory: "Gryffindor",
        bestseller: true
    },
    {
        name: "Slytherin House Hoodie",
        description: "Stay warm and spellbound in this cozy hoodie inspired by the magic of the wizarding world.",
        price: 700,
        image: ["/src/assets/p_img2.png"],
        category: "Clothing",
        subCategory: "Slytherin",
        bestseller: false
    },
    {
        name: "Ravenclaw House Hoodie",
        description: "Stay warm and spellbound in this cozy hoodie inspired by the magic of the wizarding world.",
        price: 700,
        image: ["/src/assets/p_img3.png"],
        category: "Clothing",
        subCategory: "Ravenclaw",
        bestseller: false
    },
    {
        name: "Hufflepuff House Hoodie",
        description: "Stay warm and spellbound in this cozy hoodie inspired by the magic of the wizarding world.",
        price: 700,
        image: ["/src/assets/p_img4.png"],
        category: "Clothing",
        subCategory: "Hufflepuff",
        bestseller: false
    },
    {
        name: "Magical Hogwarts Hoodie",
        description: "Stay warm and spellbound in this cozy hoodie inspired by the magic of the wizarding world.",
        price: 700,
        image: ["/src/assets/p_img5.png"],
        category: "Clothing",
        subCategory: "Hogwarts",
        bestseller: false
    },
    {
        name: "Gryffindor Stoneware Mug",
        description: "Sip your favorite potion in style with this enchanting mug inspired by the wizarding world.",
        price: 250,
        image: ["/src/assets/p_img6.png"],
        category: "Mugs",
        subCategory: "Gryffindor",
        bestseller: false
    },
    {
        name: "Slytherin Stoneware Mug",
        description: "Sip your favorite potion in style with this enchanting mug inspired by the wizarding world.",
        price: 250,
        image: ["/src/assets/p_img7.png"],
        category: "Mugs",
        subCategory: "Slytherin",
        bestseller: false
    },
    {
        name: "Ravenclaw Stoneware Mug",
        description: "Sip your favorite potion in style with this enchanting mug inspired by the wizarding world.",
        price: 250,
        image: ["/src/assets/p_img8.png"],
        category: "Mugs",
        subCategory: "Ravenclaw",
        bestseller: false
    },
    {
        name: "Hufflepuff Stoneware Mug",
        description: "Sip your favorite potion in style with this enchanting mug inspired by the wizarding world.",
        price: 250,
        image: ["/src/assets/p_img9.png"],
        category: "Mugs",
        subCategory: "Hufflepuff",
        bestseller: false
    },
    {
        name: "Magical Hogwarts Mug",
        description: "Sip your favorite potion in style with this enchanting mug inspired by the wizarding world.",
        price: 250,
        image: ["/src/assets/p_img10.png"],
        category: "Mugs",
        subCategory: "Hogwarts",
        bestseller: true
    },
    {
        name: "House Mascot Gryffindor Stationery Set",
        description: "Product Description",
        price: 400,
        image: ["/src/assets/p_img11.png"],
        category: "Stationery",
        subCategory: "Gryffindor",
        bestseller: false
    },
    {
        name: "House Mascot Slytherin Stationery Set",
        description: "Product Description",
        price: 400,
        image: ["/src/assets/p_img12.png"],
        category: "Stationery",
        subCategory: "Slytherin",
        bestseller: false
    },
    {
        name: "House Mascot Ravenclaw Stationery Set",
        description: "Product Description",
        price: 400,
        image: ["/src/assets/p_img13.png"],
        category: "Stationery",
        subCategory: "Ravenclaw",
        bestseller: false
    },
    {
        name: "House Mascot Hufflepuff Stationery Set",
        description: "Product Description",
        price: 400,
        image: ["/src/assets/p_img14.png"],
        category: "Stationery",
        subCategory: "Hufflepuff",
        bestseller: false
    },
    {
        name: "Magical Hogwarts Notebook Set",
        description: "Product Description",
        price: 250,
        image: ["/src/assets/p_img15.png"],
        category: "Stationery",
        subCategory: "Hogwarts",
        bestseller: false
    },
    {
        name: "Hogwarts Express Pen",
        description: "Product Description",
        price: 170,
        image: ["/src/assets/p_img16.png"],
        category: "Stationery",
        subCategory: "Hogwarts",
        bestseller: false
    },
    {
        name: "Herbology Notebook",
        description: "Product Description",
        price: 150,
        image: ["/src/assets/p_img17.png"],
        category: "Stationery",
        subCategory: "Others",
        bestseller: false
    },
    {
        name: "Marauder's Map Stationery Set",
        description: "Product Description",
        price: 400,
        image: ["/src/assets/p_img18.png"],
        category: "Stationery",
        subCategory: "Others",
        bestseller: true
    },
    {
        name: "Hufflepuff Crest Embossed Journal",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img19.png"],
        category: "Stationery",
        subCategory: "Hufflepuff",
        bestseller: false
    },
    {
        name: "Slytherin Crest Embossed Journal",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img20.png"],
        category: "Stationery",
        subCategory: "Slytherin",
        bestseller: true
    },
    {
        name: "Ravenclaw Crest Embossed Journal",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img21.png"],
        category: "Stationery",
        subCategory: "Ravenclaw",
        bestseller: false
    },
    {
        name: "Gryffindor Crest Embossed Journal",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img22.png"],
        category: "Stationery",
        subCategory: "Gryffindor",
        bestseller: false
    },
    {
        name: "Hogwarts Crest Embossed Journal",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img23.png"],
        category: "Stationery",
        subCategory: "Hogwarts",
        bestseller: false
    },
    {
        name: "Golden Snitch Keyring",
        description: "Product Description",
        price: 210,
        image: ["/src/assets/p_img24.png"],
        category: "Keyring",
        subCategory: "Others",
        bestseller: true
    },
    {
        name: "Gryffindor House Points Keyring",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img25.png"],
        category: "Keyring",
        subCategory: "Gryffindor",
        bestseller: false
    },
    {
        name: "Slytherin House Points Keyring",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img26.png"],
        category: "Keyring",
        subCategory: "Slytherin",
        bestseller: false
    },
    {
        name: "Ravenclaw House Points Keyring",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img27.png"],
        category: "Keyring",
        subCategory: "Ravenclaw",
        bestseller: false
    },
    {
        name: "Hufflepuff House Points Keyring",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img28.png"],
        category: "Keyring",
        subCategory: "Hufflepuff",
        bestseller: false
    },
    {
        name: "Hogwarts Scarf Keyring",
        description: "Product Description",
        price: 150,
        image: ["/src/assets/p_img29.png"],
        category: "Keyring",
        subCategory: "Hogwarts",
        bestseller: false
    },
    {
        name: "Gryffindor Scarf Keyring",
        description: "Product Description",
        price: 150,
        image: ["/src/assets/p_img30.png"],
        category: "Keyring",
        subCategory: "Gryffindor",
        bestseller: false
    },
    {
        name: "Slytherin Scarf Keyring",
        description: "Product Description",
        price: 150,
        image: ["/src/assets/p_img31.png"],
        category: "Keyring",
        subCategory: "Slytherin",
        bestseller: false
    },
    {
        name: "Ravenclaw Scarf Keyring",
        description: "Product Description",
        price: 150,
        image: ["/src/assets/p_img32.png"],
        category: "Keyring",
        subCategory: "Ravenclaw",
        bestseller: false
    },
    {
        name: "Hufflepuff Scarf Keyring",
        description: "Product Description",
        price: 150,
        image: ["/src/assets/p_img33.png"],
        category: "Keyring",
        subCategory: "Hufflepuff",
        bestseller: false
    },
    {
        name: "Time-Turner Keyring",
        description: "Product Description",
        price: 260,
        image: ["/src/assets/p_img34.png"],
        category: "Keyring",
        subCategory: "Others",
        bestseller: false
    },
    {
        name: "Chocolate Frog",
        description: "Product Description",
        price: 240,
        image: ["/src/assets/p_img35.png"],
        category: "Sweet Trolley",
        subCategory: "Others",
        bestseller: true
    },
    {
        name: "Bertie Bott's Every Flavour Beans",
        description: "Product Description",
        price: 270,
        image: ["/src/assets/p_img36.png"],
        category: "Sweet Trolley",
        subCategory: "Others",
        bestseller: false
    },
    {
        name: "Bottled Butterbeer",
        description: "Product Description",
        price: 250,
        image: ["/src/assets/p_img37.png"],
        category: "Sweet Trolley",
        subCategory: "Others",
        bestseller: true
    },
    {
        name: "Chocolate Galleons",
        description: "Product Description",
        price: 280,
        image: ["/src/assets/p_img38.png"],
        category: "Sweet Trolley",
        subCategory: "Others",
        bestseller: false
    },
    {
        name: "Fizzing Whizbees",
        description: "Product Description",
        price: 260,
        image: ["/src/assets/p_img39.png"],
        category: "Sweet Trolley",
        subCategory: "Others",
        bestseller: false
    },
    {
        name: "Exploding Bon Bons",
        description: "Product Description",
        price: 290,
        image: ["/src/assets/p_img40.png"],
        category: "Sweet Trolley",
        subCategory: "Others",
        bestseller: false
    },
    {
        name: "Gryffindor Milk Chocolate Bar",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img41.png"],
        category: "Sweet Trolley",
        subCategory: "Gryffindor",
        bestseller: false
    },
    {
        name: "Hufflepuff Milk Chocolate Bar",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img42.png"],
        category: "Sweet Trolley",
        subCategory: "Hufflepuff",
        bestseller: false
    },
    {
        name: "Slytherin Dark Chocolate Bar",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img43.png"],
        category: "Sweet Trolley",
        subCategory: "Slytherin",
        bestseller: false
    },
    {
        name: "Ravenclaw Milk Chocolate Bar",
        description: "Product Description",
        price: 200,
        image: ["/src/assets/p_img44.png"],
        category: "Sweet Trolley",
        subCategory: "Ravenclaw",
        bestseller: false
    },
    {
        name: "Gryffindor Mascot Lion Soft Toy",
        description: "Product Description",
        price: 500,
        image: ["/src/assets/p_img45.png"],
        category: "Soft Toy",
        subCategory: "Gryffindor",
        bestseller: false
    },
    {
        name: "Slytherin Mascot Snake Soft Toy",
        description: "Product Description",
        price: 500,
        image: ["/src/assets/p_img46.png"],
        category: "Soft Toy",
        subCategory: "Slytherin",
        bestseller: false
    },
    {
        name: "Ravenclaw Mascot Raven Soft Toy",
        description: "Product Description",
        price: 500,
        image: ["/src/assets/p_img47.png"],
        category: "Soft Toy",
        subCategory: "Ravenclaw",
        bestseller: false
    },
    {
        name: "Hufflepuff Mascot Badger Soft Toy",
        description: "Product Description",
        price: 500,
        image: ["/src/assets/p_img48.png"],
        category: "Soft Toy",
        subCategory: "Hufflepuff",
        bestseller: false
    },
    {
        name: "Hedwig Soft Toy",
        description: "Product Description",
        price: 500,
        image: ["/src/assets/p_img49.png"],
        category: "Soft Toy",
        subCategory: "Others",
        bestseller: true
    },
    {
        name: "Gryffindor House Seeker T-Shirt",
        description: "Product Description",
        price: 350,
        image: ["/src/assets/p_img50.png"],
        category: "Clothing",
        subCategory: "Gryffindor",
        bestseller: false
    },
    {
        name: "Slytherin House Seeker T-Shirt",
        description: "Product Description",
        price: 350,
        image: ["/src/assets/p_img51.png"],
        category: "Clothing",
        subCategory: "Slytherin",
        bestseller: true
    },
    {
        name: "Ravenclaw House Seeker T-Shirt",
        description: "Product Description",
        price: 350,
        image: ["/src/assets/p_img52.png"],
        category: "Clothing",
        subCategory: "Ravenclaw",
        bestseller: false
    },
    {
        name: "Hufflepuff House Seeker T-Shirt",
        description: "Product Description",
        price: 350,
        image: ["/src/assets/p_img53.png"],
        category: "Clothing",
        subCategory: "Hufflepuff",
        bestseller: false
    }

]

const seedDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/kiosk');
    await productModel.deleteMany(); // clear existing data
    await productModel.insertMany(products);
    console.log("Database seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seedDB();
