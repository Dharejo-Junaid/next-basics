interface Props {
  params: {
    docsId: number;
  };
}

const Docs = ({ params }: Props) => {
  const docsId: number = params.docsId;

  console.log(docsId);

  return <h1>Current Docs id = {docsId}</h1>;
};

export default Docs;
