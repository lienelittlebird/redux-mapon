import "./App.scss";
import VehicleDropdown from "./components/VehicleDropdown/VehicleDropdown";

import { useEffect } from "react";
import axios from "axios";
import { unit_list_API } from "../src/components/constants";
import { useAppDispatch } from "../src/state/hooks/hooks";
import { setItems } from "../src/state/slices/unitSlice";

const App: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    axios({
      method: "get",
      url: `${unit_list_API}/unit/list`,
    }).then((response: any) => {
      dispatch(setItems(response.data));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <VehicleDropdown />
    </div>
  );
};

export default App;
