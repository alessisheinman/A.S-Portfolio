import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaGlassMartini, FaIceCream } from 'react-icons/fa';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Dinner');

  const menuCategories = [
    {
      category: 'Dinner',
      icon: 'dinner',
      subsections: [
        {
          title: 'Antipasti',
          items: [
            {
              name: 'Burrata e Prosciutto',
              description: 'Creamy burrata, San Daniele prosciutto, heirloom tomatoes, basil oil',
              price: '$24',
            },
            {
              name: 'Carpaccio di Manzo',
              description: 'Thinly sliced beef tenderloin, arugula, parmigiano, white truffle oil',
              price: '$26',
            },
            {
              name: 'Polpo alla Griglia',
              description: 'Grilled octopus, cannellini beans, cherry tomatoes, lemon',
              price: '$28',
            },
            {
              name: 'Bruschetta Mista',
              description: 'Toasted crostini, trio of toppings: tomato basil, ricotta honey, wild mushroom',
              price: '$18',
            },
          ],
        },
        {
          title: 'Primi',
          items: [
            {
              name: 'Tagliatelle al Tartufo',
              description: 'Fresh egg pasta, black truffle, butter, parmigiano reggiano',
              price: '$38',
            },
            {
              name: 'Linguine alle Vongole',
              description: 'Manila clams, white wine, garlic, calabrian chili, parsley',
              price: '$32',
            },
            {
              name: 'Pappardelle al Ragù',
              description: 'Wide ribbon pasta, slow-braised veal and pork ragù, pecorino',
              price: '$34',
            },
            {
              name: 'Risotto ai Funghi',
              description: 'Carnaroli rice, porcini mushrooms, mascarpone, thyme',
              price: '$30',
            },
            {
              name: 'Gnocchi Sorrentina',
              description: 'Handmade potato gnocchi, San Marzano tomato, mozzarella, basil',
              price: '$28',
            },
          ],
        },
        {
          title: 'Secondi',
          items: [
            {
              name: 'Osso Buco',
              description: 'Braised veal shank, saffron risotto, gremolata',
              price: '$52',
            },
            {
              name: 'Branzino al Forno',
              description: 'Whole roasted Mediterranean sea bass, lemon, herbs, olive oil',
              price: '$48',
            },
            {
              name: 'Bistecca alla Fiorentina',
              description: '32 oz dry-aged porterhouse, rosemary, sea salt, serves two',
              price: '$125',
            },
            {
              name: 'Pollo al Mattone',
              description: 'Brick-pressed chicken, salsa verde, roasted fingerling potatoes',
              price: '$36',
            },
            {
              name: 'Vitello Milanese',
              description: 'Breaded veal cutlet, arugula, cherry tomatoes, lemon',
              price: '$42',
            },
          ],
        },
        {
          title: 'Contorni',
          items: [
            {
              name: 'Broccolini Aglio e Olio',
              description: 'Charred broccolini, garlic, olive oil, calabrian chili',
              price: '$14',
            },
            {
              name: 'Funghi Trifolati',
              description: 'Sautéed wild mushrooms, garlic, parsley, white wine',
              price: '$16',
            },
            {
              name: 'Patate Arrosto',
              description: 'Crispy roasted potatoes, rosemary, sea salt',
              price: '$12',
            },
            {
              name: 'Spinaci Saltati',
              description: 'Sautéed spinach, garlic, lemon, extra virgin olive oil',
              price: '$12',
            },
          ],
        },
      ],
    },
    {
      category: 'Drinks',
      icon: 'drinks',
      subsections: [
        {
          title: 'Signature Cocktails',
          items: [
            {
              name: 'Negroni Sbagliato',
              description: 'Campari, sweet vermouth, prosecco, orange twist',
              price: '$18',
            },
            {
              name: 'Aperol Spritz',
              description: 'Aperol, prosecco, soda water, orange slice',
              price: '$16',
            },
            {
              name: 'Limoncello Martini',
              description: 'Vodka, house-made limoncello, lemon juice, prosecco float',
              price: '$19',
            },
            {
              name: 'Espresso Martini',
              description: 'Vodka, coffee liqueur, fresh espresso, coffee beans',
              price: '$18',
            },
            {
              name: 'The Bella',
              description: 'Gin, elderflower, cucumber, basil, champagne',
              price: '$20',
            },
          ],
        },
        {
          title: 'Italian Wines',
          items: [
            {
              name: 'Chianti Classico Riserva',
              description: 'Castello di Ama, Tuscany 2019',
              price: '$95',
            },
            {
              name: 'Barolo',
              description: 'Vietti, Castiglione Falletto 2018',
              price: '$165',
            },
            {
              name: 'Brunello di Montalcino',
              description: 'Biondi-Santi, Tuscany 2017',
              price: '$285',
            },
            {
              name: 'Amarone della Valpolicella',
              description: 'Allegrini, Veneto 2016',
              price: '$185',
            },
            {
              name: 'Prosecco Superiore',
              description: 'Nino Franco, Valdobbiadene',
              price: '$65',
            },
            {
              name: 'Franciacorta',
              description: "Ca' del Bosco, Lombardy",
              price: '$125',
            },
          ],
        },
        {
          title: 'Amari & Digestivi',
          items: [
            {
              name: 'Amaro Nonino',
              description: 'Friuli-Venezia Giulia, herbal bitter liqueur',
              price: '$16',
            },
            {
              name: 'Fernet-Branca',
              description: 'Milan, aromatic bitter digestif',
              price: '$14',
            },
            {
              name: 'Limoncello',
              description: 'House-made, Amalfi coast lemons',
              price: '$12',
            },
            {
              name: 'Grappa di Barolo',
              description: 'Marolo, aged in oak barrels',
              price: '$22',
            },
          ],
        },
      ],
    },
    {
      category: 'Dessert',
      icon: 'dessert',
      subsections: [
        {
          title: 'Dolci',
          items: [
            {
              name: 'Tiramisù',
              description: 'Espresso-soaked ladyfingers, mascarpone cream, cocoa powder',
              price: '$16',
            },
            {
              name: 'Panna Cotta',
              description: 'Vanilla bean cream, seasonal berry compote, almond tuile',
              price: '$14',
            },
            {
              name: 'Cannoli Siciliani',
              description: 'Crispy shells, sweet ricotta, candied orange, pistachios',
              price: '$15',
            },
            {
              name: 'Torta al Cioccolato',
              description: 'Flourless chocolate cake, espresso gelato, hazelnut praline',
              price: '$16',
            },
            {
              name: 'Affogato',
              description: 'Vanilla gelato drowned in hot espresso, amaretti cookie',
              price: '$12',
            },
            {
              name: 'Sfogliatelle',
              description: 'Flaky pastry, sweet ricotta filling, candied citrus',
              price: '$14',
            },
            {
              name: 'Gelato & Sorbetto',
              description: 'Selection of house-made flavors, ask your server',
              price: '$10',
            },
            {
              name: 'Torta della Nonna',
              description: 'Pine nut tart, lemon pastry cream, powdered sugar',
              price: '$15',
            },
          ],
        },
      ],
    },
  ];

  const getIcon = (iconType) => {
    if (iconType === 'dinner') return <FaUtensils className="text-xl" />;
    if (iconType === 'drinks') return <FaGlassMartini className="text-xl" />;
    if (iconType === 'dessert') return <FaIceCream className="text-xl" />;
    return null;
  };

  return (
    <div className="pt-16 bg-primary-900">
      {/* Hero Section */}
      <section className="bg-black pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/food-and-drink.png"
              alt="Food & Drink"
              className="h-20 md:h-20 w-auto mx-auto -mb-8"
              style={{ transform: 'scaleX(1.3)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="pt-8 pb-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 md:gap-8">
            {menuCategories.map((category) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`relative px-10 py-3 font-serif text-lg tracking-widest transition-all italic ${
                  selectedCategory === category.category
                    ? 'bg-[#f5f0e8] text-primary-900 font-bold border-2 border-accent-500 shadow-lg'
                    : 'bg-transparent text-gray-300 hover:text-accent-400 border-2 border-accent-500/40 hover:border-accent-500/60'
                }`}
              >
                <span className="relative z-10">{category.category}</span>
                {selectedCategory === category.category && (
                  <div className="absolute inset-0 border-2 border-accent-500/60 -m-2"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-8 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Menu Paper Container */}
          <div className="bg-[#f5f0e8] shadow-2xl">
            <div className="p-12 md:p-16 space-y-24">
              {menuCategories.filter(category => category.category === selectedCategory).map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-16"
                >
                  {/* Category Header - Centered */}
                  <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-24 h-px bg-accent-500"></div>
                      <h2 className="text-5xl font-serif font-bold text-primary-900 tracking-wider">
                        {category.category}
                      </h2>
                      <div className="w-24 h-px bg-accent-500"></div>
                    </div>
                  </div>

                  {/* Subsections */}
                  {category.subsections.map((subsection, subsectionIndex) => (
                    <div key={subsectionIndex} className="space-y-8">
                      {/* Subsection Title */}
                      <h3 className="text-2xl font-serif font-semibold text-primary-800 text-center tracking-wide">
                        {subsection.title}
                      </h3>

                      {/* Menu Items - Two Columns */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {subsection.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                            className="border-b border-primary-300/40 pb-5"
                          >
                            <div className="flex justify-between items-start gap-4">
                              <div className="flex-1">
                                <h3 className="text-lg font-serif text-primary-900 mb-2 font-semibold italic">
                                  {item.name}
                                </h3>
                                <p className="text-primary-700 font-light text-xs leading-relaxed italic">
                                  {item.description}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-px bg-accent-500"></div>
                                <span className="text-accent-600 font-light text-base whitespace-nowrap tracking-wide italic">
                                  {item.price}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}

              {/* Preparation Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-8 pt-10 border-t-2 border-accent-500/30 text-center"
              >
                <p className="text-primary-700 font-light text-sm leading-relaxed max-w-3xl mx-auto italic">
                  Our pasta is made fresh daily in-house. We source the finest imported Italian ingredients including
                  DOP San Marzano tomatoes, Parmigiano Reggiano, and extra virgin olive oil from Tuscany.
                  Please inform your server of any dietary restrictions or allergies.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-accent-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif font-bold text-white mb-6">Reserve Your Table</h2>
          <p className="text-xl mb-10 leading-relaxed text-gray-300 font-light">
            Experience these exceptional offerings in our distinguished dining room.
          </p>
          <a
            href="tel:+12125551234"
            className="inline-block bg-accent-500 text-black px-12 py-4 font-semibold hover:bg-accent-400 transition-colors tracking-wide mr-4"
          >
            CALL (212) 555-1234
          </a>
          <a
            href="/contact"
            className="inline-block bg-transparent border-2 border-accent-500 text-accent-400 px-12 py-4 font-semibold hover:bg-accent-500 hover:text-black transition-colors tracking-wide"
          >
            RESERVE ONLINE
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;
