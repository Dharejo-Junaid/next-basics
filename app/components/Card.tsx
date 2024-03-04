const Card = ({ text }: { text: string }) => {
  return (
    <div className="flex m-4 justify-center align-middle shadow-xl shadow-black min-h-56 min-w-10">
      <p>{text}</p>
    </div>
  );
};

export default Card;
