interface Props {
  params: {
    topicId: number;
  };
}

const CurrentTopic = ({ params: { topicId } }: Props) => {
  return <h1>Topic ID = {topicId}</h1>;
};

export default CurrentTopic;
