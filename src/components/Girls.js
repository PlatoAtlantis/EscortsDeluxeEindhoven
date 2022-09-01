import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Girls = () => {

  return (
    <>
      <div className="">
        <div className="container">
    <div className="columns has-text-centered">

      <div className="column">
        <Link to="/natasha">
          <div
            className="girlcontainer pulse"
            style={{
              backgroundImage: `url('/img/natasha1.png')`,
            }}
          >
            <div className="girlinfo has-text-warning">
              <div className="girlcontainer">
                <i className="is2 fadename">👑</i>
                <FontAwesomeIcon icon="faCrown"/>
                <h2 className="title mb-0 fadename has-text-warning">Natasha</h2>
                <p className="fadenameslow">Leeftijd: 27 jaar</p>
              </div>
            </div>
          </div>
        </Link>
      </div>


      <div className="column">
        <Link to="/agustina">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/agustina1.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
          <h2 className="title mb-0 fadename has-text-warning">Augustina</h2>
            <p className="fadenameslow">Leeftijd: 25 jaar</p>
          </div>
          </div>
        </div>
        </Link>
      </div>

      <div className="column">
        <Link to="/shirley">
          <div
            className="girlcontainer pulse"
            style={{
              backgroundImage: `url('/img/shirley3.png')`,
            }}
          >
            <div className="girlinfo has-text-warning">
              <div className="infocontainer">
                <i className="is2 fadename">👑</i>
                <FontAwesomeIcon icon="faCrown"/>
                <h2 className="title mb-0 fadename has-text-warning">Shirley</h2>
                <p className="fadenameslow">Leeftijd: 23 jaar</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

    </div>

  <div className="columns has-text-centered centered">

    <div className="column">
      <Link to="/roxana">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/roxana2.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Roxana</h2>
              <p className="fadenameslow">Leeftijd: 28 jaar</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

    <div className="column">
      <Link to="/laura">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/laura1.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Laura</h2>
              <p className="fadenameslow">Leeftijd: 22 jaar</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

    <div className="column">
      <Link to="/viviana">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/viviana1.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Viviana</h2>
              <p className="fadenameslow">Leeftijd: 21 jaar</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

  </div>

        </div>
      </div>
    </>
);
};

export default Girls;
