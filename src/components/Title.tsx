import React from "react";

const Title = ({ className }: { className?: string }) => {
  return (
    <div className={`h-full grid place-content-center ${className}`}>
      <div>
        <p className="text-6xl">KOSEI FUJISAKI</p>
        <p className="pt-2 text-3sm text-right">Web Developer</p>
      </div>
    </div>
  );
};

export default Title;
