export const color = {
  COLOR_PRIMARY: "#f96163",
  COLOR_LIGHT: "#fff",
  COLOR_DARK: "#000",
  COLOR_DARK_ALT: "#262626",
};

//.. Data.for.categories.filter

export const categories = [
  {
    id: "01",
    category: "Breakfast",
  },
  {
    id: "02",
    category: "Lunch",
  },
  {
    id: "03",
    category: "Dinner",
  },
  {
    id: "04",
    category: "Asian",
  },
  {
    id: "05",
    category: "Italian",
  },
  {
    id: "06",
    category: "Desserts",
  },
  {
    id: "07",
    category: "Vegetarian",
  },
  {
    id: "08",
    category: "Seafood",
  },
];

export const recipeList = [
  {
    id: "01",
    name: "Tuna Tartare",
    image: require("../assets/Tuna2.png"),
    rating: "4.2",
    ingridients: ["Fresh Tuna", "Lime Juice", "Red onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "#f39c12",
    description:
      "A delightful and refreshing dish featuring fresh tuna mixed with zesty lime juice and the crunch of red onion and avocado.",
    steps: [
      "Dice fresh, sushi-grade tuna into small, even cubes and keep it chilled.",
      "Mix soy sauce, sesame oil, lime juice, minced garlic, and a dash of chili flakes in a bowl.",
      "Toss the diced tuna with the dressing and add finely chopped scallions, cilantro, and diced avocado (optional).",
      "Use a mold or shape the tuna mixture into a neat stack on a plate for a professional look.",
      "Top with sesame seeds, microgreens, or a drizzle of extra dressing, and serve with crackers or cucumber slices.",
    ],
  },
  {
    id: "02",
    name: "Lasagna",
    image: require("../assets/Lasagna2.png"),
    rating: "3.6",
    time: "40 mins",
    calories: "220 cal",
    difficulty: "medium",
    color: "#800080",
    ingridients: [
      "Lasagna Noodles",
      "Grand Beef",
      "Ricotta Cheese",
      "Tomato Sauce",
    ],
    description:
      "A classic Italian comfort food with layers of lasagna noodles, flavorful ground beef",
    steps: [
      "Cook the lasagna noodes according to package instructions.",
      "Brown the ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, beef, ricotta cheese, and tomato sauce in a baki",
      "Repeat the layers and bake in the oven until bubbly and golden.",
      "Let it cool slightly before serving.",
    ],
  },
  {
    id: "03",
    name: "Hot Dog",
    image: require("../assets/Hotdog2.png"),
    rating: "4.6",
    ingridients: ["HotDogBuns", "Frankfurters", "Ketchup", "Mustard"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "#FF0000",
    description:
      " A classic American favorite, hot dog buns stuffed with juicy frankfurters, drazzled with ketchup and mustard for that perfect balance of flavors.",
    steps: [
      "Slice a hot dog bun lengthwise, but dont cut all the way through.",
      "Grill, boil, or pan-fry the hot dog sausage until its heated through and slightly browned.",
      "Place the cooked sausage inside the warmed bun.",
      "Top with your favorite condiments like ketchup, mustard, mayonnaise, or relish.",
      "Plate your hot dog, serve with a side of fries or chips, and enjoy this classic treat.",
    ],
  },
  {
    id: "04",
    name: "Manchurian",
    image: require("../assets/Manchurian2.png"),
    rating: "3.6",
    ingridients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
    time: "30 mins",
    difficulty: "Easy",
    calories: "310 cal",
    color: "#808080",
    description:
      " A popular Indo-Chinese dish made with crispy fried vegetable or chicken balls tossed in a tangy and savory sauce.",
    steps: [
      "Mix grated vegetables (like cabbage, carrots, and capsicum) or minced chicken with flour, cornflour, spices, and salt.",
      "Deep-fry or pan-fry the balls until golden brown and crispy. Set aside.",
      "In a pan, sauté garlic, ginger, and green chilies. Add soy sauce, tomato ketchup, vinegar, and a pinch of sugar.",
      "Mix cornflour with water to make a slurry, then add it to the sauce to thicken. ",
      "Add the fried balls to the sauce, toss to coat evenly, and garnish with spring onions.",
    ],
  },
  {
    id: "05",
    name: "Chicken",
    image: require("../assets/Chicken2.png"),
    rating: "2.2",
    ingridients: ["Chicken Breasts", "Salt", "Black pepper", "Olive Oil"],
    time: "20 mins",
    calories: "410 cal",
    difficulty: "Medium",
    color: "#0000FF",
    description:
      "Tender, juicy, and perfectly seasoned, roasted chicken is a timeless dish that combines crispy golden skin with rich, savory flavors.",
    steps: [
      "Clean and pat dry the chicken pieces. Season with salt, pepper, and your choice of spices or marinade.",
      "Heat a skillet or pan over medium heat and add oil or butter.",
      "Place the chicken in the pan and cook for 6-8 minutes per side (for boneless) or until golden brown and cooked through.",
      "Use a meat thermometer to ensure the internal temperature reaches 165°F (75°C).",
      "Let the chicken rest for a few minutes before slicing to retain its juices. Serve with your favorite sides.",
    ],
  },
  {
    id: "06",
    name: "Cupcakes",
    image: require("../assets/Cupcakes2.png"),
    rating: "4.5",
    ingridients: [
      "All-purpose flour",
      "Granulated sugar",
      "Butter",
      "Eggs",
      "Baking Powder",
    ],
    time: "35 mins",
    calories: "380 cal",
    difficulty: "Medium",
    color: "#FCE883",
    description:
      "Delightful cupcakes made with a perfect blend of flour, sugar, eggs and butter, perfect for any occasion.",
    steps: [
      "Preheat your oven to 350°F (175°C) and line a cupcake tray with paper liners.",
      " In a bowl, beat together butter and sugar until fluffy. Add eggs and vanilla extract, mixing well.",
      "Gradually mix in flour, baking powder, and a pinch of salt, alternating with milk until you get a smooth batter.",
      "Fill each liner about two-thirds full with batter. Bake for 18-20 minutes, or until a toothpick comes out clean.",
      "Let the cupcakes cool completely before frosting and adding your favorite toppings.",
    ],
  },
  {
    id: "07",
    name: "Curry",
    image: require("../assets/Curry2.png"),
    rating: "4.5",
    ingridients: ["Onions", "Garlic", "Ginger", "Tomatoes", "Coriander"],
    time: "30 mins",
    calories: "220 cal",
    difficulty: "Hard",
    color: "#D8A7D4",
    description:
      " A rich aromatic curry dish featuring tender pieces of meat cooked in a flavorful blend of curry powder, coconut milk and spices.",
    steps: [
      "Heat oil in a pan and sauté chopped onions, garlic, and ginger until golden.",
      "Add curry powder, turmeric, cumin, or other spices and cook briefly to release their flavors.",
      "Add your choice of vegetables, meat, or protein (like chicken, tofu, or chickpeas).",
      "Pour in tomatoes, coconut milk, or broth and let it simmer until the ingredients are cooked through.",
      "Add salt, garnish with fresh cilantro, and serve hot with rice or naan.",
    ],
  },
  {
    id: "08",
    name: "Ramen",
    image: require("../assets/Ramen2.png"),
    rating: "3.5",
    time: "35 mins",
    difficulty: "Easy",
    color: "#89CFF0",
    calories: "450 cal",
    description:
      " A beloved Japanese noodle dish known for its rich, flavorful broth and variety of toppings.",
    steps: [
      "Cook your ramen noodles in boiling water according to the package instructions. Drain and set aside.",
      "In a pot, combine chicken or vegetable stock with soy sauce, miso paste, garlic, and ginger.",
      "Sauté your choice of toppings like mushrooms, bok choy, or thinly sliced meat.",
      "Place the cooked noodles in a bowl and pour the hot broth over them. Arrange your toppings neatly on top.",
      " Add chopped green onions, sesame seeds, and a drizzle of chili oil or soy sauce. Serve hot and enjoy!",
    ],
    ingridients: [
      "Ramen Noodles",
      "Broth",
      "Soy Sauce",
      "Miso Paste",
      "boiled eggs",
    ],
  },
];
