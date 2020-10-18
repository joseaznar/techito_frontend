import React, {useEffect, useState} from 'react';

type Props = $ReadOnly<{
  goBack: () => {},
  answers: [],
  luz: number,
}>;

export default function TechitoProductsContainer({
  goBack,
  answers,
  luz,
}: Props) {
  const [results, setResults] = useState([]);
  let reciboDeLuz;

  useEffect(() => {
    getResults();


  }, []);

  async function getResults () {
    try {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(answers)
      };

      const questionsResults = await fetch('http://18.218.135.180/questions/answer', requestOptions);

      const resultsJSON = await questionsResults.json();

      setResults(resultsJSON);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="products">
      <div>
        <div className="products_results">
          <div className="products_footprint">
            <p>
              <b>
                Tu huella de carbon es de: <span className="products_highlight">¡¡{results.carbonFootprint}!!</span>
              </b>
            </p>
          </div>
          <div className="products_equivalence">
            <p>
              <b>
                Esto equivale a:
              </b>
            </p>
            <p>
              <b>
                <span className="products_highlight">{(Number.parseInt(results.carbonFootprint) / 1000) * 64}</span> arboles
              </b>
            </p>
            <p>
              <b>
                <span className="products_highlight">{(Number.parseInt(results.carbonFootprint)) * 0.4}</span> metros cuadrados
              </b>
            </p>
          </div>
        </div>
        <div className="products_save_div">
          <div className="products_save_aprovechalo">
            <p>
              <b>
                Todos tenemos un techo. ¡APROVÉCHALO!
              </b>
            </p>
          </div>
          <div className="products_save_anual">
            <p>
              <b>
                Según nuestros cálculos podrás ahorrar <span className="products_highlight">${luz * 12 * 0.9}</span> anualmente con ayuda de TECHito.
              </b>
            </p>
          </div>
          <div className="products_save_button_text">
            <p>
              Da click aquí para saber más
            </p>
          </div>
          <div className="products_save_button_div">
            <button className="products_save_button" onClick={goBack}>
              QUIERO AHORRAR
            </button>
          </div>
          <div className="products_save_inspiration">
            <p>
              <b>
                ¡CAMBIATE A ENERGÍAS RENOVABLES Y LUCHEMOS JUNTOS CONTRA EL CALENTAMIENTO GLOBAL!
              </b>
            </p>
          </div>
        </div>
        <div className="products_bbva">
        </div>
        <div className="products_techito">
        </div>
      </div>
    </div>
  );
}
