import React from "react";
import { Circles } from "react-loader-spinner";
const Loader = () => {
  return (
    <>
      <div className="circle">
        <Circles
          height="200"
          width="200"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      ;
    </>
  );
};

export default Loader;
