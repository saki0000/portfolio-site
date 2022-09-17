import React from "react";

const Work = ({ className }: { className?: string }) => {
  return (
    <div className={`h-full grid place-content-center ${className}`}>
      <p className="text-6xl">Works</p>
    </div>
  );
};

export default Work;
