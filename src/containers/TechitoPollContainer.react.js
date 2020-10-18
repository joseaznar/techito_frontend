import React, {useEffect, useState} from 'react';
import PollQuestion from '../components/PollQuestion.react';

type Props = $ReadOnly<{
  goForward: () => {},
  setQuestions: () => {},
  setAnswers: () => {},
  setLuz: () => {},
  questions: [],
}>;

export default function TechitoPollContainer({
  goForward,
  setQuestions,
  setAnswers,
  questions,
  setLuz,
}: Props) {
  let answers = {"answers": [
    {
      "content": "2",
      "question": 4
    },
    {
      "content": "800",
      "question": 5
    },
    {
      "content": "1020",
      "question": 6
    },
    {
      "content": "2",
      "question": 7
    },
    {
      "content": "Vegetariano",
      "question": 8
    },
    {
      "content": "12",
      "question": 9
    }
  ],
  "email": "hello@example.com"};

  useEffect(() => {
    getQuestions();
  }, []);

  function changeVal( value, id ) {
   for (var i in answers.answers) {
     if (answers.answers[i].id === id) {
        answers.answers[i].content = value;
        break; //Stop this loop, we found it!
     }
   }
  }

  function changeEmail(email, id) {
   answers.email = email;
  }

  function submit () {
    setAnswers(answers);
    goForward();
  }

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
          <PollQuestion key={index} question={question.content} type={question.type} options={question.options} id={question.id} onChange={question.id === 5 ? setLuz : changeVal}/>
        ))}
        <PollQuestion question="Dejanos tu correo electronico" type="Open" options={[]} questionId="" onChange={changeEmail}/>
        <div className="poll_button_div">
          <button
            className="poll_button"
            onClick={
                submit
              }
            >
            <strong>
              TERMINAR
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
}
