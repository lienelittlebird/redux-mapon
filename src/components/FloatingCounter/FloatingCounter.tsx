import { useAppSelector } from "../../state/hooks/hooks";

import "./FloatingCounter.scss";

interface Props {}

const FloatingCounter = (props: Props) => {
  const currentCount = useAppSelector((state) => state.counter.value);

  return <div className="FloatingCounter">{currentCount}</div>;
};

export default FloatingCounter;
