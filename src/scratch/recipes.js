
const misoOrangeSalmon = {
  id: 'userId + recipeName',
  title: 'Miso Orange Salmon',
  cookingTime: 30,
  servingSize: 3,
  
  ingredients: [
    { amount: 3, unit: 'fillets', name: 'of salmon', sub: [] },
    { amount: 0, unit: '', name: 'black sesame seeds to sprinkle', sub: [] },
    {
      amount: 0, unit: '', name: 'Orange glaze', sub: [
        { amount: 2, unit: 'tsp', name: 'tahini or miso paste', sub: [] },
        { amount: 1, unit: 'tbs', name: 'coconut sugar', sub: [] },
        { amount: 0.1, unit: 'l', name: 'rice vinegar', sub: [] },
        { amount: 0.1, unit: 'l', name: 'rice vinegar', sub: [] },
        { amount: '', unit: '', name: 'orange zest', sub: [] }
      ]
    }
  ],
  
  instructions: [
    'Set oven to 420F.',
    'Mix together the ingredients for the orange glaze.  Add the salmon fillets to a bowl and pour about 75% of the' +
    ' glaze into the bowl.  Massage the salmon and let it marinate for at least 20 minutes covered in the fridge.',
    'Add the salmon to a baking sheet lined with parchment paper.',
    'Bake for 6 to 8 minutes.  Then remove from the oven.',
    'Set to broil. Pour the remaining sauce over the salmon fillets and set back in the oven for NO more than 1.5' +
    ' minutes.',
    'Garnish with sesame seeds.'
  ],
  
  notes: [
    'next time: improve color  by not using Tahin'
  ],
  
  tags: {
    dishType: ['Main Dishes'],
    mealType: ['lunch', 'dinner'],
    seasonal: [],
    worldRegion: [],
    healthDiet: ['fish']
  }
};

const garlickyAsparagus = {
  id: 'userId + recipeName',
  // required
  title: 'Garlicky Asparagus OR Green Beans',
  //not required
  cookingTime: 15,
  servingSize: 3,
  
  ingredients: [
    { amount: 0, unit: '', name: 'olive oil spray', sub: [] },
    { amount: 1, unit: 'bundle (15 spears)', name: 'asparagus', sub: [] },
    { amount: 1, unit: 'tablespoon', name: 'water', sub: [] },
    { amount: 1, unit: 'tablespoon', name: 'garlic, minced', sub: [] }
  ],
  
  instructions: [
    'Set a nonstick skillet on medium-high heat.  Once the pan is hot, spray with olive oil. Toss in the asparagus' +
    ' spears and begin to sear for 2 to 3 minutes.  Then pour in water to create some steam in the skillet and toss the asparagus.',
    'Continue to cook until the asparagus turns a vibrant green color and the spears are crisp-tender.'
  ],
  
  notes: [],
  
  tags: {
    dishType: ['Side Dishes'],
    mealType: ['lunch', 'dinner'],
    seasonal: ['Spring'],
    worldRegion: [],
    healthDiet: ['vegetarian', 'vegan', 'gluten-free']
  }
};

const honeyLemonShrimpRecipeWithVeggies = {
  id: 'userId + recipeName',
  title: 'Honey Lemon Shrimp Recipe With Veggies',
  cookingTime: 35,
  servingSize: 4,
  
  ingredients: [
    {
      amount: 0, unit: '', name: 'Sauce', sub: [
        { amount: 3, unit: 'tablespoon', name: 'low sodium soy sauce', sub: [] },
        { amount: 1, unit: 'tablespoon', name: 'garlic, minced', sub: [] },
        { amount: 0, unit: '', name: 'juice from 1 lemon', sub: [] },
        { amount: 1, unit: 'tablespoon', name: 'raw honey', sub: [] },
        { amount: 2, unit: 'tablespoon', name: 'water', sub: [] }
      ]
    },
    { amount: 1.5, unit: 'lb', name: 'raw shrimp, peeled and deveined', sub: [] },
    {
      amount: 0, unit: '', name: 'Rice', sub: [
        { amount: 1, unit: 'cup', name: 'uncooked brown rice (or jasmine rice)', sub: [] },
        { amount: 1, unit: 'tablespoon', name: 'lemon zest', sub: [] },
        { amount: 1, unit: 'cup', name: 'vegetable or chicken stock', sub: [] },
        { amount: 1, unit: 'cup', name: 'water', sub: [] },
        { amount: .5, unit: 'tablespoon', name: 'olive oil', sub: [] },
      ]
    },
    { amount: 2, cups: 'tablespoon', name: 'raw (or frozen) broccoli florets', sub: [] },
    { amount: .5, cup: 'tablespoon', name: 'chopped onion', sub: [] },
    { amount: 1, unit: '', name: ' red bell pepper, sliced', sub: [] },
    { amount: 1, unit: 'tablespoon', name: 'olive oil', sub: [] },
    { amount: 1, unit: 'tablespoon', name: 'arrowroot', sub: [] },
    { amount: 1, unit: 'tablespoon', name: 'water', sub: [] },
  ],
  
  instructions: [
    'Mix together the ingredients for the sauce.  Pour about 2 tablespoons of the sauce onto shrimp in a bowl and' +
    ' let it marinate at least for 20 minutes.',
    'In a deep nonstick skillet or pan (with a tight fitting lid), add the ingredients for the rice.  Bring it to a' +
    ' boil, then reduce the heat to a low simmer and place the lid on.  Continue cooking until all the water has been absorbed.  When the rice is nearly cooked, remove the lid and place raw (or frozen) broccoli florets on top to steam, then place the lid back on to cook for the remaining time.  Once finished, set aside the rice and broccoli and place the skillet back on the heat.',
    'Set the heat to high and once hot, toss in the onion and bell pepper slices.  Cook the veggies until the' +
    ' outside of them are seared, about 3 to 5 minutes.  Remove from the skillet and set aside.',
    'Place the skillet back on the heat and reduce the heat to medium-high.  Add olive oil and the marinated shrimp.' +
    '  Sear and cook the shrimp in the skillet.  When it is nearly cooked (plump and pink), about 3 minutes, then mix the remaining sauce with the arrowroot and water and add it to the skillet.',
    'Reduce the heat to low-medium and once the sauce begins to bubble, IMMEDIATELY stir and fold the shrimp in the' +
    ' sauce.  Remove the skillet from the heat once the sauce is thick and continue stirring and folding.',
    'Build the meals by evenly dividing the ingredients by 4, or your number of servings.',
  ],
  
  notes: [],
  
  tags: {
    dishType: ['Main Dishes'],
    mealType: ['lunch', 'dinner'],
    seasonal: [],
    worldRegion: [],
    healthDiet: ['fish', 'gluten-free']
  }
};

let mockRecipes = [misoOrangeSalmon, garlickyAsparagus, honeyLemonShrimpRecipeWithVeggies];
module.exports = mockRecipes;