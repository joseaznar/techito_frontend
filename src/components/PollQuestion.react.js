import React from 'react';

type Props = $ReadOnly<{
  question: string,
  type: string,
  options: [],
}>;

export default function PollQuestion({
  question,
  type,
  options,
}: Props) {

  return (
    <div>
        <label>{question}</label>
        {type === 'Open' ? <input onChange={() => {}}></input> :
        <select>
          {options.map((option, id) => (
            <option key={id} value={option}>{option.content}</option>
          ))}
        </select>
        }
    </div>
  );
}
