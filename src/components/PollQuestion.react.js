import React from 'react';

type Props = $ReadOnly<{
  question: string,
}>;

export default function PollQuestion({
  question,
}: Props) {

  return (
    <div>
        <label>{question}</label>
        <input value="Respuesta" onChange={() => {}}></input>
    </div>
  );
}
