import React from "react";

const Skill = ({ className }: { className?: string }) => {
  return (
    <div className={`h-full grid place-content-center ${className}`}>
      <p className="text-6xl">My Skills</p>
    </div>
  );
};

export default Skill;
