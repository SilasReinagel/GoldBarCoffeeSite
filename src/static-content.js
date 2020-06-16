const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});

export default ({
  name: 'Gold Bar Espresso',
  phone: '+1 480 839 3082',
  logo: '/images/gblogo.png',
  address: address(
    '3141 S McClintock Dr',
    'Tempe',
    'AZ',
    '85282',
    'http://mapq.st/2FMsDxP'
  ),
  social: {
    facebook: 'http://www.facebook.com/pages/Gold-Bar-Espresso/46920370784',
    twitter: 'https://twitter.com/#!/GoldBarEspresso',
    yelp: 'http://www.yelp.com/biz/gold-bar-espresso-tempe'
  }
});

const page = (href, name) => ({ href, name });
export const pages = [
  page('/', 'Home'),
  page('index.html?page=menu', 'Menu'),
  page('index.html?page=about', 'About Us'),
  page('index.html?page=contact', 'Contact Us')
];

const format = (v) => v > 0 ? '$' + v.toFixed(2) : '';
const hotDrinkPrices = (short, tall, grande, uber) => ({ short, tall, grande, uber, toString: () => `${format(short)} / ${format(tall)} / ${format(grande)} / ${format(uber)}` });
const coldDrinkPrices = (short, grande, uber) => ({ short, grande, uber, toString: () => `${format(short)} / ${format(grande)} / ${format(uber)}` });

export const menu = ({
  hotDrinks: [
    { name: 'Cafe Mocha', prices: hotDrinkPrices(3.95, 4.45, 4.95, 5.20), description: "espresso, Hershey's chocolate, steamed milk" },
    { name: 'Mocha Especiale', prices: hotDrinkPrices(4.75, 5.20, 5.45, 5.95), description: "espresso, dark chocolate, steamed half-and-half" },
    { name: 'Mocha Breve', prices: hotDrinkPrices(4.75, 5.50, 5.45, 5.95), description: "espresso, Hershey's chocolate, steamed half-and-half"},
    { name: 'Cappuccino', prices: hotDrinkPrices(3.65, 4.20, 4.45, 4.95), description: "equals parts espresso, steamed milk, milk foam" },
    { name: 'Latte', prices: hotDrinkPrices(3.65, 4.20, 4.45, 4.95), description: "espresso and steamed milk topped with milk foam" },
    { name: 'Breve', prices: hotDrinkPrices(4.20, 4.75, 5.20, 5.75), description: "espresso and steamed half-and-half" },
    { name: 'Red Eye', prices: hotDrinkPrices(3.15, 3.60, 3.85, 4.35), description: "brewed coffee and espresso" },
    { name: 'Americano', prices: hotDrinkPrices(2.85, 3.40, 3.60, 3.90), description: "espresso and water - a full-flavored cup" },
    { name: 'Drip Coffee', prices: hotDrinkPrices(2.00, 2.50, 2.75, 3.10), description: "simple drip coffee" },
    { name: 'Espresso', prices: hotDrinkPrices(2.00, 2.50), description: "espresso" },
    { name: 'Hot Chocolate', prices: hotDrinkPrices(2.95, 3.45, 3.70, 4.20), description: "Hershey's chocolate, steamed milk, whipped cream" },
    { name: 'Chocolate Especiale', prices: hotDrinkPrices(3.70, 4.20, 4.45, 4.95), description: "dark chocolate, steamed half-and-half, whipped cream" },
    { name: 'Chocolate Breve', prices: hotDrinkPrices(3.70, 4.20, 4.45, 4.95), description: "Hershey's chocolate, steamed half-and-half, whipped cream" },
    { name: 'Tea', prices: hotDrinkPrices(2.00, 2.25, 2.75, 3.00), description: "various flavors of hot tea" },
    { name: 'Chai', prices: hotDrinkPrices(3.90, 4.45, 4.95, 5.20), description: "chai" }
  ],
  coldDrinks: [
    { name: 'Iced Mocha', prices: coldDrinkPrices(4.20, 4.70, 5.20), description: "espresso, Hershey's chocolate, milk" },
    { name: 'Iced Mocha Especiale', prices: coldDrinkPrices(4.95, 5.45, 5.95), description: "espresso, dark chocolate, half-and-half" },
    { name: 'Iced Mocha Breve', prices: coldDrinkPrices(4.95, 5.45, 5.95), description: "espresso, Hershey's chocolate, half-and-half" },
    { name: 'Iced Latte', prices: coldDrinkPrices(3.95, 4.45, 4.95), description: "espresso and milk" },
    { name: 'Iced Breve', prices: coldDrinkPrices(4.50, 5.20, 5.65), description: "espresso and half-and-half" },
    { name: 'Iced Red Eye', prices: coldDrinkPrices(3.35, 3.85, 4.35), description: "brewed coffee and espresso on ice" },
    { name: 'Iced Americano', prices: coldDrinkPrices(2.90, 3.40, 3.90), description: "espresso and water" },
    { name: 'Iced Coffee', prices: coldDrinkPrices(2.25, 2.75, 3.10), description: "iced brewed coffee" },
    { name: 'Iced Hot Chocolate', prices: coldDrinkPrices(3.20, 3.70, 4.20), description: "Hershey's chocolate, milk, whipped cream" },
    { name: 'Iced Chocolate Especiale', prices: coldDrinkPrices(3.95, 4.45, 4.95), description: "dark chocolate, half-and-half, whipped cream" },
    { name: 'Iced Chocolate Breve', prices: coldDrinkPrices(3.95, 4.45, 4.95), description: "Hershey's chocolate, half-and-half, whipped cream" },
    { name: 'Granita', prices: coldDrinkPrices(4.75, 5.20, 5.45), description: "frozen fruit dessert made from fresh fruit and water" },
    { name: 'Iced Tea', prices: coldDrinkPrices(2.50, 3.00, 3.25), description: "various flavors of iced tea" },
    { name: 'Iced Chai', prices: coldDrinkPrices(4.20, 4.70, 5.20), description: "iced chai" }
  ],
  flavors: [
    'Vanilla',
    'Sugarfree Vanilla',
    'French Vanilla',
    'Caramel',
    'Sugarfree Caramel',
    'Irish Cream',
    'Hazelnut',
    'Sugarfree Hazelnut',
    'Toffee Crunch',
    'Almond',
    'Sugarfree Almond',
    'Macademia',
    'Coconut',
    'Pistachio',
    'Peanut Butter',
    'Cinnamon',
    'Peppermint',
    'Maple',
    'Lavendar',
    'Raspberry',
    'Strawberry',
    'Cherry',
    'Blueberry',
    'Mango',
    'Passionfruit',
    'Orange',
    'Lime',
    'Peach',
    'Banana',
    'Pomegranate',
    'Seasonal Flavors'
  ]
});
