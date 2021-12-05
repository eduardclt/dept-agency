import React from 'react';

import './case-section-large.sass';
import CaseCard from './CaseCard';

function CaseSectionLarge(props) {
  return (
    <div className={`case-section-large ${props.reverse == true ? 'reverse-direction' : ''}`} >
      <div className='case-section-large__with-image'>
        <CaseCard withImage={true} largeCard={true} company={props.companies[0]} />
      </div>
      <div className='case-section-large__details'>
        <div className='card-container'>
          <CaseCard company={props.companies[1]} withImage={false} />
        </div>
        <div className='card-container'>
          <CaseCard company={props.companies[2]} withImage={false} />
        </div>      
      </div>
      

    </div>
  );
}

export default CaseSectionLarge;
