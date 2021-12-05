import React from 'react';

import './case-filter.sass';

function CaseFilter(props) {

  function onFilterCategoriesChange(event){
    props.filterCategory(event.target.value)
  }

  function onFilterIndustryChange(event){
    props.filterIndustry(event.target.value)
  }

  return (
    <div className="component case-filter">
      <div>
        <label className='case-filter__label'>Show me</label>
        <select className='category-select' name="category" id="category" onChange={onFilterCategoriesChange}>
          <option value="all">all work</option>
          <option value="advertising">Advertising</option>
          <option value="branding">Branding </option>
          <option value="commerce">Commerce </option>
          <option value="content">Content </option>
          <option value="data">Data & Intelligence </option>
          <option value="design">Design </option>
          <option value="digital-marketing">Digital Marketing </option>
          <option value="marketing">Marketing </option>
          <option value="media">Media </option>
          <option value="strategy">Strategy </option>
          <option value="technology">Technology </option>
        </select>
      </div>

      <div>
        <label className='case-filter__label'>in</label>
        <select className='industry-select' name="industry" id="industry" onChange={onFilterIndustryChange}>
          <option value="all">all industries</option>
          <option value="agriculture-food">Agriculture & Food</option>
          <option value="banking-finance-food">Banking, Finance & Insurance</option>
          <option value="consumer-goods-services">Consumer Goods & Services</option>
          <option value="energy-utility">Energy & Utilities</option>
          <option value="fashion-lifestyle">Fashion & Lifestyle</option>
          <option value="health-life-science">Health & Life Science</option>
          <option value="manufacture-industrials">Manufacturing & Industrials</option>
          <option value="public-service-non-profit">Public Service & Non-Profit</option>
          <option value="retail-commerce">Retail & Commerce</option>
          <option value="tech-media-tel">Tech, Media & Telecommunications</option>
          <option value="travel-leisure-hosp">Travel, Leisure & Hospitality</option>
        </select>
      </div>
    </div>
  );
}

export default CaseFilter;










