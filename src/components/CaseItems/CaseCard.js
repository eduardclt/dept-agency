import React, { useState } from 'react';

import './case-card.sass';
import { ReactComponent as Arrow } from '../../assets/images/icons/icon-dropdown.svg';

function CaseCard(props) {
  const [descriptionVisible, setDescriptionVisible ] = useState(false)

  function onExpandClick(event) {
    let elem =  event.target.parentElement
    if (elem.classList.contains('is-expanded')){
      elem.classList.remove('is-expanded')
    }else{
      elem.classList.add('is-expanded')
    }

    setDescriptionVisible(!descriptionVisible)
  }

  return (
    <div className='case-card'>
      {props.withImage == true && <img className={`case-card__image + ${props.largeCard == true ? 'large-card' : ''}`} src={props.company.image.default} />}
      <p className='case-card__name'>{props.company.name}</p>
      <p className='case-card__heading'>{props.company.heading}</p>
      <p onClick={onExpandClick} className='case-card__link'><span className='arrow'><Arrow /></span>View Case</p>
      {descriptionVisible && <p className='case-card__description'>{props.company.description}</p>}
    </div>
  );
}

export default CaseCard;
