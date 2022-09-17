import React from "react";

const About = ({ className }: { className?: string }) => {
  return (
    <div
      className={`container mx-auto h-full grid place-content-center ${className}`}
    >
      <p className="text-6xl text-center">About Me</p>
      <div className="m-10">
        <p className="mx-auto w-8/12 text-xl">
          現在Webエンジニアを目指している大学生。大学では情報系と社会系の分野を学びつつ、ゼミでWebアプリケーションをチーム開発しています。個人では、主にフロントエンドを勉強しており、Reactを得意としています。
        </p>
      </div>
    </div>
  );
};

export default About;
