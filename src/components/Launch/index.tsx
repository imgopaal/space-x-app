import React from "react";
import Launch, { OwnProps } from "./Launch";
import { useLaunchesQuery } from "../../generated/graphql";

const LaunchContainer = (props: OwnProps) => {
  const { data, error, loading } = useLaunchesQuery();
  if (loading) {
    return <div>Data is Loading</div>;
  }
  else if(error||!data){
    return<div>Click Any Mission For It's Details</div>
  }
  return <Launch data={data} {...props}/>;
};
export default LaunchContainer;
