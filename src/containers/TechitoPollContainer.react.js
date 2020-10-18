import React, {useEffect, useState} from 'react';
import PollQuestion from '../components/PollQuestion.react';

type Props = $ReadOnly<{
  goForward: () => {},
  goBack: () => {},
}>;

export default function TechitoPollContainer({
  goForward,
  goBack,
}: Props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions () {
    try {
      const questionsRequest = await fetch('http://18.218.135.180/questions');
      const questionsJSON = await questionsRequest.json();

      setQuestions(questionsJSON);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>
        Esta muy cerca de descrubrir como puedes ahorrar
      </h1>
      <form>
      {questions.map((question, index) => (
        <PollQuestion key={index} question={question.content}/>
      ))}
      </form>
      <button onClick={goBack}>
        Volver
      </button>
      <button onClick={goForward}>
        submit
      </button>
    </div>
  );
}
