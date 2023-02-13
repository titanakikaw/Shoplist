import React from "react";
import { useErrorContext } from "../../context/errorContext";

const Error = () => {
  // const { error } = useErrorContext();
  // console.log(error);
  return (
    <>
      {/* {error.map((x, i) => (
        <div
          key={i}
          class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 fixed left-10 min-w-[320px]"
          style={{
            bottom: i * 90 + 10,
          }}
        >
          <p class="font-bold">{x.title}</p>
          <p>{x.message}</p>
        </div>
      ))} */}
    </>
  );
};

export default Error;
