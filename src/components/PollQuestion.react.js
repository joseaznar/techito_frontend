import React from 'react';

type Props = $ReadOnly<{
  question: string,
  type: string,
  options: [],
  onChange: () => {},
}>;

export default function PollQuestion({
  question,
  type,
  options,
  onChange,
}: Props) {

  return (
    <div className="poll_question">
        <label className="poll_question_label">{question}</label>
        {type === 'Open' ? <input className="poll_input" onChange={onChange}></input> :
        <select className="poll_input">
          {options.map((option, id) => (
            <option key={id} value={option} onSelect={onChange}>{option.content}</option>
          ))}
        </select>
        }
    </div>
  );
}
