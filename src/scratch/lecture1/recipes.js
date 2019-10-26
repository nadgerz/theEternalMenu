const misoOrangeSalmon = {
  title: '',
  cookingTime: 0,
  servingSize: 0,

  ingredients: [
    { amount: 3, unit: '', name: 'salmon fillets', sub: [] },
    {
      amount: 0,
      unit: '',
      name: 'Orange glaze',
      sub: [
        { amount: 1, unit: 'tbsp', name: 'tahini or miso paste', sub: [] },
        { amount: 1, unit: 'tbsp', name: 'coconut sugar', sub: [] },
        { amount: 0, unit: '', name: 'rice vinegar', sub: [] },
        { amount: 0, unit: '', name: 'orange zest', sub: [] },
        {
          amount: 0,
          unit: '',
          name: 'orange juice (of half an orange)',
          sub: [],
        },
      ],
    },
    { amount: 0, unit: '', name: 'black sesame seeds to sprinkle', sub: [] },
  ],

  instructions: [],

  notes: [],

  tags: [],
};

const recipes = [misoOrangeSalmon];
module.exports = recipes;
