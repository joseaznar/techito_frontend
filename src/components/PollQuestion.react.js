import React from 'react';

type Props = $ReadOnly<{
  question: string,
  type: string,
  options: [],
  onChange: () => {},
  id: string;
}>;

export default function PollQuestion({
  question,
  type,
  options,
  onChange,
  id,
}: Props) {

  return (
    <div className="poll_question">
        <label className="poll_question_label">{question}</label>
        {type === 'Open' ? <input className="poll_input" id={id} onChange={id === "5" ? onChange(1000) : onChange(1000, id)}></input> :
        <select className="poll_input" id={id}>
          {options.map((option, index) => (
            <option value={option} onSelect={onChange("Vegetariano", id)}>{option.content}</option>
          ))}
        </select>
        }
    </div>
  );
}
