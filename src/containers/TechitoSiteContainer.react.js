import React, {useState} from 'react'
import TechitoLandingPageContainer from './TechitoLandingPageContainer.react.js';
import TechitoPollContainer from './TechitoPollContainer.react.js';
import TechitoProductsContainer from './TechitoProductsContainer.react.js';

export default function TechitoSiteContainer() {
  const [currentPage, setCurrentPage] = useState('landing');

  let currentPageContainer;

  switch (currentPage) {
    case 'landing':
      currentPageContainer = (<TechitoLandingPageContainer goForward={() => setCurrentPage('poll')}/>);
      break;
    case 'poll':
      currentPageContainer = (<TechitoPollContainer goForward={() => setCurrentPage('products')} goBack={() => setCurrentPage('landing')}/>);
      break;
    case 'products':
      currentPageContainer = (<TechitoProductsContainer goBack={() => setCurrentPage('poll')}/>);
      break;
    default:
      currentPageContainer = null;
      break;
  }

  return (
    currentPageContainer
  );
}
