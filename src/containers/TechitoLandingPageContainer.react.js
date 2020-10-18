import React from 'react';

type Props = $ReadOnly<{
  goForward: () => {},
}>;

export default function TechitoLandingPageContainer({
  goForward,
}: Props) {

  return (
    <div>
      <h1>
        Descubre como ahorrar dinero cuidando el medio ambiente!
      </h1>
      <p>
      Contesta 10 sencillas preguntas para descubrir como
      </p>
      <button onClick={goForward}>
        Encuesta
      </button>
    </div>
  );
}
