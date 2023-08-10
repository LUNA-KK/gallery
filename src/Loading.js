import React from "react";
import { CircleLoader, ClipLoader, PropagateLoader } from "react-spinners";

export const Loading = ({ loading }) => {
  return (
    <div className="loading-container">
      <PropagateLoader
        display="flex"
        color="green"
        loading={loading}
        size={20}
      />
    </div>
  );
};

export default Loading;
