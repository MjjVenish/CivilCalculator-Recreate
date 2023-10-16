import React from "react";
import { GoInfo } from "react-icons/go";
import "../style.css";

function Mains() {
  return (
    <div className="container-fluid mt-4">
      <div className="col-md-12 py-1 bg-white">
        <div className="main">
          <h5>
            <GoInfo />
            &nbsp;How to determine the Specific Gravity of Soil ?
          </h5>
          <hr />
          <div className="main-item">
            <h6>Procedures</h6>
            <ol>
              <li>
                The complete density bottle with stopper shall be dried at 105
                to 110°C, cooled in the desiccator and weighed to the nearest
                0.001 g (m1).
              </li>
              <li>
                The 50 g sample obtained as described in the procedure for the
                preparation of disturbed samples for testing shall, if
                necessary, be ground to pass a 2-mm IS test sieve.
              </li>
              <li>
                A 5 to 10 g subsample shall be obtained by riffling, and
                oven-dried at 105 to 1100 C.
              </li>
              <li>
                This sample shall be transferred to the density bottle direct
                from the desiccator in which it has been cooled.
              </li>
              <li>
                The bottle and contents together with the stopper shall be
                weighed to the nearest 0.001 g (m2).
              </li>
              <li>
                The stoppered bottle shall then be taken out of the bath, wiped
                dry and the whole weighed to the nearest 0.001 g (m3).
              </li>
              <li>
                The bottle shall then be taken out of the bath, wiped dry and
                the whole weighed to the nearest 0.001 g (m4).
              </li>
              <li>
                Two determinations of the specific gravity of the same soils
                sample shall be made.
              </li>
            </ol>
          </div>
          <hr />
          <div className="main-field">
            <p>
              The specific gravity of the soil particles G shall be measured at
              room temperature. If water has been used as the air-free liquid,
              then the following equation shall be used
            </p>
          </div>
          <div className="main-group">
            <h6>
              The specific gravity of soil shall be calculated as follows:
            </h6>
            <p>
              <math>
                <mi>G</mi>
                <mo>=</mo>
                <mfrac>
                  <mrow>
                    <mi>Density of water at</mi>
                    <mo></mo>
                    <mn>27</mn>
                    <mi>C</mi>
                  </mrow>
                  <mrow>
                    <mi>Weight of soil of equal volume</mi>
                  </mrow>
                </mfrac>
              </math>
            </p>
            <p>
              <math>
                <mi>G</mi>
                <mo>=</mo>
                <mfrac>
                  <mrow>
                    <mo>(</mo>
                    <mi>M2</mi>
                    <mo>-</mo>
                    <mi>M1</mi>
                    <mo>)</mo>
                  </mrow>
                  <mrow>
                    <mo>(</mo>
                    <mi>M4</mi>
                    <mo>-</mo>
                    <mi>M1</mi>
                    <mo>)</mo>
                    <mo>-</mo>
                    <mo>(</mo>
                    <mi>M3</mi>
                    <mo>-</mo>
                    <mi>M2</mi>
                    <mo>)</mo>
                  </mrow>
                </mfrac>
              </math>
            </p>
          </div>
          <div className="main-list">
            <p>Where,</p>
            <ul>
              <li>G is Specific Gravity</li>
              <li>M1 is mass of density bottle in gram</li>
              <li>M2 is mass of bottle and dry soil in gram</li>
              <li>M3 is mass of bottle, soil and liquid in gram</li>
              <li>M3 is mass of bottle when full of liquid only in gram</li>
            </ul>
          </div>
          <div className="main-note">
            <p>
              <strong>Note:</strong>The specific gravity of the soil particles
              lie with in the range of 2.65 to 2.85. Soils containing organic
              matter and porous particles may have specific gravity values below
              2.0. Soils having heavy substances may have values above 3.0.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mains;
