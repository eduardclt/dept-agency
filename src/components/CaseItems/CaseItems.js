import React from 'react';

import './case-items.sass';
import CaseSectionLarge from './CaseSectionLarge';
import CaseSectionSmall from './CaseSectionSmall';

function CaseItems(props) {
  let oneCompanies;
  let twoCompanies;
  let threeCompanies;
  let fourCompanies;
  let fiveCompanies;
  let sixCompanies;

  
  if (props.filterOn == false){
    oneCompanies = props.companies.slice(0, 4);
    twoCompanies = props.companies.slice(4, 7);
    threeCompanies = props.companies.slice(7, 9);
    fourCompanies = props.companies.slice(9, 12);
    fiveCompanies = props.companies.slice(12, 16);
    sixCompanies = props.companies.slice(16, props.companies.length);
  }

  return (
    <div className='case-items component'>
      {props.filterOn && <CaseSectionSmall companies={props.companies} /> }
      {(props.filterOn && props.companies == 0) && <h1>No results found</h1> } 

      {!props.filterOn && <CaseSectionSmall companies={oneCompanies} /> }
      {!props.filterOn && <CaseSectionLarge reverse={false} companies={twoCompanies} /> }
      {!props.filterOn && <CaseSectionSmall companies={threeCompanies} /> }
      {!props.filterOn && <CaseSectionLarge reverse={true} companies={fourCompanies} /> }
      {!props.filterOn && <CaseSectionSmall companies={fiveCompanies} /> }

      <div className='case-items__quote '>
        <p className='quote'>“Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.”</p>
        <p className='reference'>MATTIJS TEN BRINK – CEO, TRANSAVIA</p>
      </div>

      {!props.filterOn && <CaseSectionSmall companies={sixCompanies} /> }
    </div>
  );
}

export default CaseItems;
