import { WiHumidity } from "react-icons/wi";
import { GiWindyStripes } from "react-icons/gi";
import { GiWindSlap } from "react-icons/gi";
import { BsFillCloudsFill } from "react-icons/bs";
import ResultCard from "./result_card";
import { useSelector } from "react-redux";

const MoreDetails = () => {
  const Pack = useSelector((state) => state.getData);
  const current = Pack.data.current;

  return (
    <div className="details">
      <ResultCard
        icon={<GiWindyStripes size="2.8rem" />}
        title="Wind"
        value={current?.wind_speed}
        unit="mph"
      />
      <ResultCard
        icon={<GiWindSlap size="2.8rem" />}
        title="Pressure"
        value={current?.pressure}
        unit="Pa"
      />
      <ResultCard
        icon={<WiHumidity size="3.5rem" />}
        title="Humidity"
        value={current?.humidity}
        unit="%"
      />
      <ResultCard
        icon={<BsFillCloudsFill size="3.5rem" />}
        title="Cloud"
        value={current?.cloudcover}
        unit="%"
      />
    </div>
  );
};

export default MoreDetails;
