import { useAppSelector } from "../../state/hooks/hooks";

import "./VehicleDropdown.scss";

interface Props {}

const VehicleDropdown = (props: Props) => {
  const currentUnit = useAppSelector((state: any) => state.unit.value);

  return (
    <div className="vehicle-container">
      <h2>Route report</h2>
      <div className="data-selection">
        <div className="select-vehicle">
          <div>
            <h4 className="selection-name">Vehicle number:</h4>
          </div>
          <div className="select-car">
            <select name="vehicle" id="vehicle">
              <option value="volvo">{currentUnit}</option>
            </select>
          </div>
        </div>
        <div className="select-period">
          <h4 className="selection-name">Period:</h4>
          <div className="date-from">
            <h4>From</h4>
            <input type="date"></input>
          </div>
          <div className="date-to">
            <h4>To</h4>
            <input type="date"></input>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button id="generate-btn">Generate</button>
      </div>
    </div>
  );
};

export default VehicleDropdown;
