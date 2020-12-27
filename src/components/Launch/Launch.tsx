import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./style.css";
export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: LaunchesQuery
}


const Launch: React.FC<Props> = ({ data ,handleIdChange}) => {
  return (
    <div className="LaunchList">
      <h3>All Space X Launches</h3>
        
      <ol className="LaunchList__list">
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                
                  <li key={i} onClick={() => handleIdChange(launch.flight_number!)} className="LaunchList__item">
                  {launch.mission_name}- ({launch.launch_year})
                  <br />
                  {launch.launch_success ? (
                    <span style={{ color: "green" }}>SUCCESSFULL</span>
                  ) : (
                    <span style={{ color: "red" }}>FAILED</span>
                    )}
                    </li>
                  
              )
          )}
      </ol>
    </div>
  );
};

export default Launch;
