import React from "react";
import Launch from "./Launch";
import { useLaunchesQuery } from '../../generated/graphql';

const LaunchContainer = () => {
  const { data, error, loading } = useLaunchesQuery();
  if (loading) {
    return <div>Data is Loading</div>;
  }
  if (error || !data) {
    return <div>There was an error</div>;
  }
  return <Launch data={data} />;
};
export default LaunchContainer;
