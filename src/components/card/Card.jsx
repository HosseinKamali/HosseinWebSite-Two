const Card = ({ image, title, price }) => {
  return (
    <>
      <img src={image} alt="" className=" h-full rounded-2xl w-[90%]"/>
      <p className="text-center mt-2">{title}</p>
      <p className="text-center mt-2">{price} </p>
    </>
  );
};

export default Card;
