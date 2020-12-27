import React, { useEffect } from "react";
import { useLaunchInfoQuery } from "./../../generated/graphql";
import LaunchDetails from "./LaunchDetails";
import load from "./loading.svg";
interface OwnProps {
  id: number;
}
const LaunchDetailsContainer = ({ id }: OwnProps) => {
  const { data, error, loading, refetch } = useLaunchInfoQuery({
    variables: { id: String(id) },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);
  if (loading) {
    return (
      <div >
        <img style={{width:'80px'}} src={load} alt=""/>
          
      </div>
    );
  } else if (error || !data) {
    return <div style={{fontSize:"30px",margin:'20px 30px'}}>Click Any Mission For It's Details</div>;
  }
  if (!data) {
    return <div>Please select any mission for it's details</div>;
  }
  return <LaunchDetails data={data} />;
};
export default LaunchDetailsContainer;
