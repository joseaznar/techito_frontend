import React from 'react';

type Props = $ReadOnly<{
  goBack: () => {},
}>;

export default function TechitoProductsContainer({
  goBack,
}: Props) {

  return (
    <div>
      <h1>
        Products!
      </h1>
      <button onClick={goBack}>
        Encuesta
      </button>
    </div>
  );
}
