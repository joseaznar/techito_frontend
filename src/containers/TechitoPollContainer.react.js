import React, {useEffect, useState} from 'react';
import PollQuestion from '../components/PollQuestion.react';

type Props = $ReadOnly<{
  goForward: () => {},
}>;

export default function TechitoPollContainer({
  goForward,
}: Props) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

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
    <div className="poll">
      <div className="poll_questions_container">
        <p className="poll_h1">
          <b>
            Responde las siguientes preguntas
          </b>
        </p>
        {questions.map((question, index) => (
          <PollQuestion key={index} question={question.content} type={question.type} options={question.options} onChange={setAnswers}/>
        ))}
        <PollQuestion question="Dejanos tu correo electronico" type="Open" options={[]} onChange={setAnswers}/>
        <div className="poll_button_div">
          <button className="poll_button" onClick={goForward}>
            <strong>
              TERMINAR
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
}
