"use client";

import { notFound } from "next/navigation";

interface Props {
  params: {
    topicId: number;
    exampleId: number;
  };
}

const randomInt = (n: number = 3) => {
  return Math.floor(Math.random() * n);
};

const CurrentExample = ({ params: { topicId, exampleId } }: Props) => {
  // generating error at random to handle it;
  if (randomInt() === 2) {
    throw new Error("Some loading error occur");
  }

  if (exampleId > 1000) {
    notFound();
  }

  return (
    <>
      <h1>Topic Id = {topicId}</h1>
      <h1>Example Id = {exampleId}</h1>
    </>
  );
};

export default CurrentExample;
