import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./style.css";
interface Props {
  data: LaunchesQuery;
}
const Launch: React.FC<Props> = ({ data }) => {
  return (
    <div className="LaunchList">
      <h3>All Space X Launches</h3>
      <ol className="LaunchList__list">
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <li key={i} className="LaunchList__item">
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
