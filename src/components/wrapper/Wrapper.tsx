import React from "react";

interface Props {
  children: JSX.Element | string;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="container flex gap-12 xl:mx-auto bg-white mt-40 rounded-3xl py-28 bg-gradient-to-r from-gray-50 from-75% to-sky-900 to-25%">
      {children}
    </div>
  );
};

export default Wrapper;
