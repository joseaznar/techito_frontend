import React from 'react';

type Props = $ReadOnly<{
  goForward: () => {},
}>;

export default function TechitoLandingPageContainer({
  goForward,
}: Props) {

  return (
    <div className="landingPage">
      <div className="landingPage_header">
        <div className="landingPage_header_logo"/>
      </div>
      <div className="landingPage_principal">
        <p>
          <b>
            Mejora tu economía, reduciendo tu huella de carbón
          </b>
        </p>
      </div>
      <div className="landingPage_button_div">
        <button onClick={goForward} className="landingPage_button">
          CALCULAR
        </button>
      </div>
      <div className="landingPage_footer">
        <p className="landingPage_footer_sabiasque">
          Sabías que…
        </p>
        <p className="landingPage_footer_li">
          ☞ Cada <strong>SEGUNDO</strong> se talan 4 hectáreas de árboles
        </p>
        <p className="landingPage_footer_li">
          ☞ La generación de energía es la fuente más grande de CO2
        </p>
        <p className="landingPage_footer_li">
          ☞ Puedes ahorrar hasta el 90% de tus facturas de luz usando paneles solares
        </p>
      </div>
    </div>
  );
}
