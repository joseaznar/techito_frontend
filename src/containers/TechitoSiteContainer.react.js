import React, {useState} from 'react'
import TechitoLandingPageContainer from './TechitoLandingPageContainer.react.js';
import TechitoPollContainer from './TechitoPollContainer.react.js';
import TechitoProductsContainer from './TechitoProductsContainer.react.js';

export default function TechitoSiteContainer() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [luz, setLuz] = useState(1100);

  let currentPageContainer;

  switch (currentPage) {
    case 'landing':
      currentPageContainer = (<TechitoLandingPageContainer goForward={() => setCurrentPage('poll')}/>);
      break;
    case 'poll':
      currentPageContainer = (<TechitoPollContainer goForward={() => setCurrentPage('products')} questions={questions} setQuestions={setQuestions} setAnswers={setAnswers} setLuz={setLuz}/>);
      break;
    case 'products':
      currentPageContainer = (<TechitoProductsContainer goBack={() => setCurrentPage('poll')} answers={answers} luz={luz}/>);
      break;
    default:
      currentPageContainer = null;
      break;
  }

  return (
    currentPageContainer
  );
}
