import { useAppDispatch, useAppSelector } from "../../state/hooks/hooks";
import {
  toOrangesAndBack
} from "../../state/slices/fruitSlice";

import "./FruitChange.scss";

interface Props {}

const FruitChange = (props: Props) => {
  const currentFruit = useAppSelector((state) => state.fruit.value);
  const dispatch = useAppDispatch();

  return (
    <div className="FruitChange">
      <h2>Fruit</h2>
      <h3>Fruit: {currentFruit}</h3>
      <div className="Fruit-container">
        <button onClick={() => {
            dispatch(toOrangesAndBack());
          }}>Fruit</button>
      </div>
    </div> )
};

export default FruitChange;
