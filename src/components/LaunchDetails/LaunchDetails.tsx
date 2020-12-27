import React from "react";
// import LaunchDetailsContainer from ".";
import { LaunchInfoQuery } from "./../../generated/graphql";
import "./style.css";

interface Props {
  data: LaunchInfoQuery;
}
const LaunchDetails: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>Launch unavailable</div>;
  }
  return (
    <div className="LaunchProfile">
      <div className="LaunchProfile__status">
        <span>Flight: <b>{data.launch.flight_number}</b></span>
      </div>
      <h1 className="LaunchProfile__title">
        {data.launch.mission_name}-{data.launch.rocket?.rocket_name}
      </h1>
      <p>
        Launched from: {data.launch.launch_site?.site_name} in{" "}
        {data.launch.launch_year}
      </p>
      <p>{data.launch.details}</p>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div >
          {data.launch.links.flickr_images.map((image) =>
            image ? <img className="LaunchImages" src={image} /> : null
          )}
        </div>
      )}
    </div>
  );
};
export default LaunchDetails;
