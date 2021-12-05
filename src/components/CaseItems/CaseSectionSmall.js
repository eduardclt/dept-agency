import React from 'react';

import './case-section-small.sass';
import CaseCard from './CaseCard';

function CaseSectionSmall(props) {
  return (
    <div className='case-section-small'>
      {props.companies.map((company) => (
        <div className='case-section-small__case'>
          <CaseCard withImage={true} company={company} />
        </div>
        
      ))}

    </div>
  );
}

export default CaseSectionSmall;
