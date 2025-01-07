import sample from '../assets/sample.jpg';
import ceaser from '../assets/food/ceaser.jpg';
import greek from '../assets/food/greek.jpg';
import cobb from '../assets/food/cobb.jpg';
import choco from '../assets/food/choco.jpg';
import cheesecake from '../assets/food/cheesecake.jpg';
import strawberry from '../assets/food/strawberry.jpg';
import tart from '../assets/food/tart.jpg';
import tiramisu from '../assets/food/tiramisu.jpg';
import chocoshake from '../assets/food/chocoshake.jpg';
import vanilla from '../assets/food/vanilla.jpg';
import banana from '../assets/food/banana.jpg';
import paneer from '../assets/food/paneer.jpg';
import veggie from '../assets/food/veggie.jpg';
import aloo from '../assets/food/aloo.jpg';
import chicken from '../assets/food/chicken.jpg';
import fettucine from '../assets/food/fettucine.jpg';
import sphagetti from '../assets/food/sphagetti.jpg';
import lasagna from '../assets/food/lasagna.jpg';
import penne from '../assets/food/penne.jpg';
import veg from '../assets/food/veg.jpg';
import ramen from '../assets/food/ramen.jpg';
import chilli from '../assets/food/chilli.jpg';
import ravioli from '../assets/food/ravioli.jpg';

export const food_list = [
    {
        id: 1,
        name: "Caesar Salad",
        image: sample,
        price: 200,
        description: "Crispy romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        category: "salad"
    },
    {
        id: 2,
        name: "Greek Salad",
        image: greek,
        price: 250,
        description: "Fresh mixed greens with tomatoes, cucumbers, olives, feta cheese, and Greek dressing.",
        category: "salad"
    },
    {
        id: 3,
        name: "Cobb Salad",
        image: cobb,
        price: 150,
        description: "Romaine lettuce with bacon, avocado, chicken, egg, and blue cheese dressing.",
        category: "salad"
    },
    {
        id: 4,
        name: "Quinoa Salad",
        image: ceaser,
        price: 200,
        description: "Quinoa mixed with black beans, corn, bell peppers, and lime dressing.",
        category: "salad"
    },
    {
        id: 5,
        name: "Chicken Wrap",
        image: chicken,
        price: 120,
        description: "Grilled chicken with lettuce, tomatoes, and ranch dressing in a soft tortilla.",
        category: "rolls"
    },
    {
        id: 6,
        name: "Veggie Wrap",
        image: veggie,
        price: 100,
        description: "Fresh vegetables with hummus and avocado in a whole wheat tortilla.",
        category: "rolls"
    },
    {
        id: 7,
        name: "Paneer Wrap",
        image: paneer,
        price: 179,
        description: "Spicy paneer tikka with lettuce and mint chutney in a whole wheat wrap.",
        category: "rolls",
    },
    {
        id: 8,
        name: "Aloo Tikki Wrap",
        image: aloo,
        price: 100,
        description: "Spicy aloo tikki with chutneys and veggies in a whole wheat wrap.",
        category: "rolls"
    },
    {
        id: 9,
        name: "Chocolate Cake",
        image: choco,
        price: 80,
        description: "Rich chocolate cake with a smooth chocolate ganache.",
        category: "dessert"
    },
    {
        id: 10,
        name: "Cheesecake",
        image: cheesecake,
        price: 120,
        description: "Creamy cheesecake with a graham cracker crust and strawberry topping.",
        category: "dessert"
    },
    {
        id: 11,
        name: "Tiramisu",
        image: tiramisu,
        price: 120,
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
        category: "dessert"
    },
    {
        id: 12,
        name: "Fruit Tart",
        image: tart,
        price: 180,
        description: "Crispy tart filled with custard and topped with fresh fruits.",
        category: "dessert"
    },
    {
        id: 13,
        name: "Vanilla Shake",
        image: vanilla,
        price: 100,
        description: "Creamy vanilla shake made with real vanilla ice cream.",
        category: "shakes"
    },
    {
        id: 14,
        name: "Chocolate Shake",
        image: chocoshake,
        price: 100,
        description: "Rich chocolate shake made with premium chocolate ice cream.",
        category: "shakes"
    },
    {
        id: 15,
        name: "Strawberry Shake",
        image: strawberry,
        price: 100,
        description: "Fresh strawberry shake made with real strawberries and vanilla ice cream.",
        category: "shakes"
    },
    {
        id: 16,
        name: "Banana Shake",
        image: banana,
        price: 100,
        description: "Smooth banana shake made with ripe bananas and vanilla ice cream.",
        category: "shakes"
    },
    {
        id: 17,
        name: "Spaghetti Carbonara",
        image: sphagetti,
        price: 299,
        description: "Classic Italian pasta with creamy sauce, pancetta, and parmesan cheese.",
        category: "pasta"
    },
    {
        id: 18,
        name: "Penne Arrabbiata",
        image: penne,
        price: 249,
        description: "Penne pasta with spicy tomato sauce and fresh basil.",
        category: "pasta"
    },
    {
        id: 19,
        name: "Fettuccine Alfredo",
        image: fettucine,
        price: 279,
        description: "Fettuccine pasta with creamy Alfredo sauce and parmesan cheese.",
        category: "pasta"
    },
    {
        id: 20,
        name: "Lasagna",
        image: lasagna,
        price: 329,
        description: "Layered pasta with ground chicken, ricotta cheese, and marinara sauce.",
        category: "pasta"
    },
    {
        id: 21,
        name: "Ravioli",
        image: ravioli,
        price: 349,
        description: "Pasta filled with ricotta cheese and spinach, served with marinara sauce.",
        category: "noodles"
    },
    {
        id: 22,
        name: "Ramen Noodles",
        image: ramen,
        price: 279,
        description: "Classic macaroni pasta in a creamy cheese sauce.",
        category: "noodles"
    },
    {
        id: 23,
        name: "Vegetable Noodles",
        image: veg,
        price: 199,
        description: "Stir-fried noodles with mixed vegetables and soy sauce.",
        category: "noodles"
    },
    {
        id: 24,
        name: "Chilli Garlic Noodles",
        image: chilli,
        price: 219,
        description: "Noodles stir-fried with garlic, chillies, and vegetables.",
        category: "noodles"
    },
    // {
    //     id: 25,
    //     name: "Ramen Noodles",
    //     image: sample,
    //     price: 249,
    //     description: "Japanese-style noodles in a rich broth with vegetables and an egg.",
    //     category: "noodles"
    // },
    // {
    //     id: 26,
    //     name: "Singapore Noodles",
    //     image: sample,
    //     price: 229,
    //     description: "Stir-fried rice noodles with curry powder, shrimp, and vegetables.",
    //     category: "noodles"
    // }
];
