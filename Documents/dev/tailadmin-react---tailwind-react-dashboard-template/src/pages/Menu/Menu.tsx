import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState('Christmas Menu 2024');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const aLaCarteMenu = [
    {
      section: 'Appetizers',
      title: 'Appetizers',
      items: [
        {
          name: 'Olive caserecce',
          description:
            'Sicilian olives, marinated in garlic, fresh chillies, parsley & extra virgin olive oil.',
          price: '£6.00',
        },
        {
          name: 'Bruschetta ai pomodorini',
          description:
            'Super sweet, fresh ripe Neapolitan cherry tomatoes, garlic, extra virgin olive oil, oregano & fresh basil on a slice of home-made char grilled bread.',
          price: '£7.50',
        },
        {
          name: 'Crostino al prosciutto',
          description: 'Pizza bread with mozzarella, ham & garlic.',
          price: '£9.50',
        },
        {
          name: 'Garlic bread',
          description:
            'Pizza bread with tomato, garlic & extra virgin olive oil.',
          price: '£9.50',
        },
        {
          name: 'Zucchine e melanzane fritte',
          description:
            'Crispy deep fried organic courgettes & aubergine batons served with tartar sauce.',
          price: '£10.50',
        },
        {
          name: 'Polpette della nonna',
          description:
            'Traditional beef meatballs in home-made tomato sauce served with Parmesan cheese & fresh basil.',
          price: '£11.00',
        },
      ],
    },
    {
      section: 'Starters',
      title: 'Starters',
      items: [
        {
          name: 'Melanzane alla Parmigiana',
          description:
            'Oven baked aubergines with tomato, Parmesan, mozzarella & basil.',
          price: '£13',
        },
        {
          name: 'Frittura di Calamari',
          description:
            'Deep fried baby squid served with home-made tartar sauce.',
          price: '£12',
        },
        {
          name: 'Caprese di Bufala',
          description:
            'Fresh mozzarella di buffalo served with sliced tomatoes, fresh basil leaves and dressed with extra virgin olive oil.',
          price: '£11.50',
        },
        {
          name: 'Antipasto Pagliaccio',
          description:
            'Parma ham, fresh “Mozzarella di Bufala”, a selection of salami, Parmigiano cheese, olives, served with “bruschetta” bread & rocket salad.',
          price: '£22',
        },
        {
          name: 'Zuppa di Cozze',
          description:
            'Fresh mussels cooked with extra virgin olive oil, garlic, parsley and a touch of tomato sauce.',
          price: '£12',
        },
        {
          name: 'Gamberoni allo Spumante',
          description:
            'Pan fried prawns cooked with fresh garlic, extra virgin olive oil & a touch of Prosecco.',
          price: '£16',
        },
        {
          name: 'Burrata e Prosciutto di Parma',
          description:
            'Fresh burrata from Campania topped with a home-made pesto sauce, fresh rocket & prosciutto di Parma.',
          price: '£14',
        },
      ],
    },
    {
      section: 'Vitello',
      title: 'Vitello',
      items: [
        {
          name: 'Vitello al Gorgonzola',
          description:
            'Pan fried veal escalope, cooked with Greco di Tufo white wine, finished with a delicious gorgonzola sauce.',
          price: '£23.50',
        },
        {
          name: 'Scaloppina ai Funghi',
          description:
            'Pan fried veal escalope, cooked in a porcini sauce with a touch of demi-glace, served with roast potatoes & seasonal vegetables.',
          price: '£23.50',
        },
        {
          name: 'Schiacciata Milanese',
          description:
            'Dutch topside of veal coated in breadcrumbs, pan-fried, served with spaghetti Napoli.',
          price: '£23.50',
        },
      ],
    },
    {
      section: 'Bistecca',
      title: 'Bistecca',
      items: [
        {
          name: 'Tagliata di Manzo',
          description:
            'Char grilled rib eye steak, sliced into strips served on a bed of wild rocket salad topped with Parmesan shavings.',
          price: '£28.50',
        },
        {
          name: 'Rib Eye Steak',
          description:
            'Char grilled rib eye steak served with seasonal vegetables & roast potatoes.',
          price: '£28.50',
        },
      ],
    },
    {
      section: 'Pesce',
      title: 'Pesce',
      items: [
        {
          name: 'Salmone Grigliato',
          description:
            'Fresh salmon marinated with mixed herbs, chargrilled, served with mixed salad.',
          price: '£21',
        },
        {
          name: 'Spigola alla Griglia',
          description:
            'Whole grilled fresh sea bass from Billingsgate fish market, served with potatoes & mixed salad.',
          price: '£21',
        },
        { name: 'Chips', description: 'Crispy chips.', price: '£5' },
      ],
    },
    {
      section: 'Pasta',
      title: 'Pasta',
      items: [
        {
          name: 'Traditional Italian Pasta',
          description:
            'All traditional Italian pastas are available. (Bolognese, Carbonara, Arrabiata, Amatriciana)',
          price: '£15',
        },
        {
          name: 'Lasagna',
          description:
            'Home-made oven baked meat lasagna topped with Parmesan cheese.',
          price: '£15',
        },
        {
          name: 'Penne al Salmone',
          description:
            'Penne pasta with fresh salmon, onions, cherry tomatoes, tomato sauce & a touch of cream.',
          price: '£16',
        },
        {
          name: 'Penne Sophia Loren',
          description:
            'Penne pasta served with pancetta, artichokes, onions, tomato sauce & a touch of cream, topped with Parmesan cheese & parsley.',
          price: '£15',
        },
        {
          name: 'Penne all’Ortolana',
          description:
            'Penne pasta served with aubergines, courgettes, peppers, home-made tomato sauce & a touch of cream.',
          price: '£16',
        },
        {
          name: 'Spaghetti all’Avellinese',
          description:
            'Spaghetti pasta served with beef meatballs, basil, parmigiana melanzane, mozzarella, cherry tomatoes & Parmesan cheese.',
          price: '£16',
        },
        {
          name: 'Spaghetti alle Vongole Veraci',
          description:
            'Spaghetti pasta served with fresh clams, garlic, parsley, cherry tomatoes & olive oil.',
          price: '£21',
        },
        {
          name: 'Linguine al Golfo di Napoli',
          description:
            'Linguine pasta served with fresh clams, mussels, calamari, king prawns, cherry tomatoes, parsley, extra virgin olive oil & Pinot white wine.',
          price: '£23.50',
        },
        {
          name: 'Spaghetti al Gamberi',
          description:
            'Spaghetti with king prawns, cherry tomatoes, garlic, Code Di Volpe white wine topped with baby rocket leaves.',
          price: '£21',
        },
        {
          name: 'Tagliatelle Pagliaccio',
          description:
            'Tagliatelle pasta served with pancetta, mushrooms, onions & a touch of tomato & cream sauce.',
          price: '£16',
        },
      ],
    },
  ];

  const setMenu35 = [
    {
      title: 'Appetizers',
      items: [
        {
          name: 'Garlic Pizza Bread',
          description:
            'Pizza bread with tomato, garlic, and extra virgin olive oil',
        },
        {
          name: 'Olive Caserecce',
          description:
            'Sicilian olives, marinated in garlic, chillies, parsley, and olive oil',
        },
      ],
    },
    {
      title: 'Starters',
      items: [
        {
          name: 'Gamberoni Prezzemolati',
          description:
            'Fresh King Prawns with garlic, chilli, cherry tomatoes and parsley served with Bruschetta.',
        },
        {
          name: 'Rolle’ di Mozzarella di Bufala e Prosciutto',
          description:
            'Fresh Mozzarella di Bufala rolled with Parma ham and served with rocket salad and cherry tomatoes.',
        },
        {
          name: 'Antipasto Vegetariano',
          description:
            'A Selection of grilled aubergines, courgettes, red peppers, mushrooms, served with shavings of Parmesan cheese.',
        },
      ],
    },
    {
      title: 'Main Courses',
      items: [
        {
          name: 'Pollo Tricolore',
          description:
            'Pan fried chicken breast with courgettes, artichokes, cream, fresh parsley and a touch tomato, served with potatoes and spinach.',
        },
        {
          name: 'Branzino al Timo',
          description:
            'Fresh sea bass fillets, pan fried with cherry tomatoes, fresh parsley, fresh thyme, Coda di Volpe white wine and extra virgin olive oil, served with potatoes and spinach.',
        },
        {
          name: 'Pizza Vegetariana',
          description:
            'Tomato, grilled aubergines, courgettes, Mozzarella, green peppers, onions and mushrooms.',
        },
        {
          name: 'Pizza Regina Elisabetta',
          description: 'Tomato, mozzarella, ham, mushrooms and olives.',
        },
      ],
    },
    {
      title: 'Dessert',
      items: [
        {
          name: 'Tiramisu',
          description:
            'Homemade Italian tiramisu’ layered with Savoiardi fingers, soaked in Tia Maria and Amaretto coffee topped with Mascarpone and a light dusting of Cacao.',
        },
      ],
    },
  ];

  const setMenu25 = [
    {
      title: 'Appetizers (To Share on the Table)',
      items: [
        {
          name: 'Garlic Pizza Bread',
          description:
            'Pizza bread with tomato, garlic, and extra virgin olive oil',
        },
        {
          name: 'Olive Caserecce',
          description:
            'Sicilian olives, marinated in garlic, chillies, parsley, and olive oil',
        },
      ],
    },
    {
      title: 'Starters (To Share on the Table)',
      items: [
        {
          name: 'Funghi Trifolati',
          description:
            'Sautéed mushrooms with garlic, white wine, and parsley served with fresh rocket salad.',
        },
        {
          name: 'Caprese',
          description:
            'Tomato, Mozzarella with fresh mixed salad, extra virgin olive oil and fresh basil.',
        },
      ],
    },
    {
      title: 'Main Courses (THE CHOICE OF ONE)',
      items: [
        {
          name: 'Penne Sophia Loren',
          description:
            'Penne pasta with Italian Pancetta, artichoke hearts, Parmesan cheese, cream, parsley and a touch of tomato.',
        },
        {
          name: 'Gnocchi Taleggio e Prosciutto',
          description:
            'Gnocchi pasta served with Taleggio cheese and Parma ham.',
        },
        {
          name: 'Rigatoni ai Pomodorini Freschi',
          description:
            'Rigatoni pasta with fresh mixed vine and cherry tomato, mozzarella, extra virgin olive oil and fresh basil.',
        },
        {
          name: 'Pizza Vegetariana',
          description:
            'Tomato, grilled aubergines, courgettes, Mozzarella, green peppers, onions and mushrooms.',
        },
        {
          name: 'Diavola',
          description: 'Tomato, Mozzarella, spicy sausages, onions and chilli.',
        },
        {
          name: 'Calzone',
          description:
            'Calzone pizza, filled with mozzarella, tomato, ham and Italian sausages.',
        },
      ],
    },
    {
      title: 'Dessert',
      items: [
        {
          name: 'Tiramisu',
          description:
            'Homemade Italian tiramisu’ layered with Savoiardi fingers, soaked in Tia Maria and Amaretto coffee topped with Mascarpone and a light dusting of Cacao.',
        },
      ],
    },
  ];

  const christmasMenu = [
    {
      title: 'Appetizers (To Share on the Table)',
      items: [
        {
          name: 'Garlic Pizza Bread',
          description:
            'Pizza bread with tomato, garlic, and extra virgin olive oil',
          price: '£5.00',
        },
        {
          name: 'Olive Caserecce',
          description:
            'Sicilian olives, marinated in garlic, chillies, parsley, and olive oil',
          price: '£4.50',
        },
      ],
    },
    {
      title: 'Starters',
      items: [
        {
          name: 'Caprese di Bufala',
          description:
            'Fresh mozzarella di bufala, served with sliced vine tomatoes and fresh basil',
          price: '£8.00',
        },
        {
          name: 'Terrina di Montagna',
          description:
            'Homemade duck terrine with Italian sausages, served with chargrilled brioche',
          price: '£10.00',
        },
      ],
    },
    {
      title: 'Main Courses',
      items: [
        {
          name: 'Pesce Spada Valdostano',
          description:
            'Fresh swordfish chargrilled topped with cherry tomatoes and olives',
          price: '£15.00',
        },
        {
          name: 'Tacchino Rolle',
          description:
            'Turkey breast rolled with spinach and mushrooms served with a homemade blueberry jus',
          price: '£16.00',
        },
      ],
    },
  ];

  const renderMenuSection = (section) => {
    return (
      <div className="menu-section" key={section.title}>
        <h3>{section.title}</h3>
        {section.items.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-body">
              <span className="name">{item.name}</span>
              <span className="description">{item.description}</span>
              {item.price && <span className="price">{item.price}</span>}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="menu-container">
      <div className="tabs">
        <button
          className={selectedTab === 'Christmas Menu 2024' ? 'active' : ''}
          onClick={() => handleTabClick('Christmas Menu 2024')}
        >
          Christmas Menu 2024
        </button>
        <button
          className={selectedTab === 'Set Menu £25.00' ? 'active' : ''}
          onClick={() => handleTabClick('Set Menu £25.00')}
        >
          Set Menu £25.00
        </button>
        <button
          className={selectedTab === 'Bar Menu' ? 'active' : ''}
          onClick={() => handleTabClick('Bar Menu')}
        >
          Bar Menu
        </button>
        <button
          className={selectedTab === 'A la Carte' ? 'active' : ''}
          onClick={() => handleTabClick('A la Carte')}
        >
          A la Carte
        </button>
        <button
          className={selectedTab === 'Set Menu £35.00' ? 'active' : ''}
          onClick={() => handleTabClick('Set Menu £35.00')}
        >
          Set Menu £35.00
        </button>
      </div>

      <div className="content">
        {selectedTab === 'Christmas Menu 2024' && (
          <>{christmasMenu.map(renderMenuSection)}</>
        )}

        {selectedTab === 'Set Menu £25.00' && (
          <>{setMenu25.map(renderMenuSection)}</>
        )}

        {selectedTab === 'Set Menu £35.00' && (
          <>{setMenu35.map(renderMenuSection)}</>
        )}

        {selectedTab === 'A la Carte' && (
          <>{aLaCarteMenu.map(renderMenuSection)}</>
        )}
      </div>
    </div>
  );
};

export default Menu;
