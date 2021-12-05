import React, { useState } from 'react';

import './App.sass';
import CaseFilter from './components/CaseFliter/CaseFilter';
import CaseItems from './components/CaseItems/CaseItems';
import Clients from './components/Clients/Clients';
import ContactUs from './components/ContactUs/ContactUs';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const [companies, setCompanies ] = useState(
   [
      {
        id: 0,
        name: 'bol.com',
        heading: 'A summer island in the Netherlands',
        image: require("./assets/images/companies/bolcom.png"),
        category: 'advertising',
        industry: 'travel-leisure-hosp',
        description: 'A summer island in the Netherlands'
      },
      {
        id: 1,
        name: 'Kempen',
        heading: 'Not some average banking website',
        image: require("./assets/images/companies/kempen.png"),
        category: 'technology',
        industry: 'banking-finance-food',
        description: 'Not some average banking website'
      },
      {
        id: 2,
        name: 'Philips',
        heading: 'Beautiful design meets innovative technology',
        image: require("./assets/images/companies/philips.png"),
        category: 'design',
        industry: 'energy-utility',
        description: 'Beautiful design meets innovative technology'
      },
      {
        id: 3,
        name: 'Gemeentemuseum',
        heading: 'A 100 years of Mondriaan & De Stijl',
        image: require("./assets/images/companies/gemeentemuseum.png"),
        category: 'design',
        industry: 'travel-leisure-hosp',
        description: 'A 100 years of Mondriaan & De Stijl'
      },
      {
        id: 4,
        name: 'Florensis',
        heading: 'Rethinking the entire online ecosystem',
        image: require("./assets/images/companies/florensis.png"),
        category: 'technology',
        industry: 'energy-utility',
        description: 'Rethinking the entire online ecosystem'
      },
      {
        id: 5,
        name: 'Microsoft',
        heading: "Tapping into Ireland's unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
        image:  require("./assets/images/companies/florensis.png"),
        category: 'technology',
        industry: 'travel-leisure-hosp',
        description: "Tapping into Ireland's unique gaming culture and bringing a fresh flavour to their Xbox social media channels"
      },
      {
        id: 6,
        name: "O'Neill",
        heading: 'Integrating existing content into O’Neill’s new e-commerce platform',
        image: '',
        category: 'design',
        industry: 'travel-leisure-hosp',
        description: 'Integrating existing content into O’Neill’s new e-commerce platform'
      },
      {
        id: 7,
        name: 'Be Lighting',
        heading: 'Delivering clarity on a global scale',
        image: require("./assets/images/companies/lightning.png"),
        category: 'media',
        industry: 'travel-leisure-hosp',
        description: 'Delivering clarity on a global scale'
      },
      {
        id: 8,
        name: 'Tui',
        heading: 'Swipe to find your next holiday destination',
        image: require("./assets/images/companies/tui.png"),
        category: 'design',
        industry: 'travel-leisure-hosp',
        description: 'Swipe to find your next holiday destination'
      },
      {
        id: 9,
        name: 'Florensis',
        heading: 'Rethinking the entire online ecosystem',
        image: require("./assets/images/companies/florensis.png"),
        category: 'design',
        industry: 'energy-utility',
        description: 'Rethinking the entire online ecosystem'
      },
      {
        id: 10,
        name: 'Butlins',
        heading: 'Enhancing customer experience for personalised holiday planning using real time data',
        image: 'technology',
        category: 'design',
        industry: 'travel-leisure-hosp',
        description: 'Enhancing customer experience for personalised holiday planning using real time data'
      },
      {
        id: 11,
        name: 'Vacanseselect',
        heading: 'Predicting booking behavior for holidays with smart data, voice search and machine learning',
        image: 'media',
        category: 'design',
        industry: 'travel-leisure-hosp',
        description: 'Predicting booking behavior for holidays with smart data, voice search and machine learning'
      },
      {
        id: 12,
        name: 'Chocomel',
        heading: 'A campaign for the limited edition letter packs',
        image: require("./assets/images/companies/chocomel.png"),
        category: 'design',
        industry: 'banking-finance-food',
        description: 'A campaign for the limited edition letter packs'
      },
      {
        id: 13,
        name: 'Jbl',
        heading: 'Live like a champion with Jerome Booteng',
        image: require("./assets/images/companies/jbl.png"),
        category: 'design',
        industry: 'tech-media-tel',
        description: 'Live like a champion with Jerome Booteng'
      },
      {
        id: 14,
        name: 'Zalando',
        heading: 'Innovative SEO and content strategy for Zalando',
        image: require("./assets/images/companies/zalando.png"),
        category: 'media',
        industry: 'tech-media-tel',
        description: 'Innovative SEO and content strategy for Zalando'
      },
      {
        id: 15,
        name: 'Koninklijke Bibliotheek',
        heading: 'The search for the most influential book ever',
        image: require("./assets/images/companies/koninklijke-bibliotheek.png"),
        category: 'media',
        industry: 'tech-media-tel',
        description: 'The search for the most influential book ever'
      },
      {
        id: 16,
        name: 'Liberty Global',
        heading: 'Delivering complex commerce solutions',
        image: require("./assets/images/companies/liberty-global.png"),
        category: 'technology',
        industry: 'tech-media-tel',
        description: 'Delivering complex commerce solutions'
      },
      {
        id: 17,
        name: 'Arla',
        heading: 'Swipe to find your next holiday destination',
        image: require("./assets/images/companies/arla.png"),
        category: 'technology',
        industry: 'banking-finance-food',
        description: 'Swipe to find your next holiday destination'
      }
    ]
  );
  const [categoryFilter, setCategoryFilter ] = useState('all')
  const [industryFilter, setIndustryFilter ] = useState('all')
  const [filterOn, setfilterOn ] = useState(false)

  function filterCategory(filter) {
    setCategoryFilter(filter);
    if (filter == 'all' && industryFilter == 'all'){
      setfilterOn(false)
    }else{
      setfilterOn(true)
    }
  }
  
  function filterIndustry(filter) {
    setIndustryFilter(filter);
    if (filter == 'all' && categoryFilter == 'all'){
      setfilterOn(false)
    }else{
      setfilterOn(true)
    }
  }
    
  function filteredCompanies() {
    return companies.filter((company) => {
      if ((categoryFilter == 'all' || company.category === categoryFilter) && (industryFilter == 'all' || company.industry === industryFilter)) {
        return company;
      }
    });
  }
  
  return (
    <div className="App">
      <Header />
      <CaseFilter filterCategory={filterCategory} filterIndustry={filterIndustry}/>
      <CaseItems filterOn={filterOn} companies={filteredCompanies()} />
      <Clients />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
