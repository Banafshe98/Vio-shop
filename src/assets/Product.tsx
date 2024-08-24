import img1 from "../assets/Bracelet.jpg";
export const Product = () => {
  return (
    <div>
      <img src={img1} alt="" />
      <div>
        <h1> عنوان محصول</h1>
        <span>99$</span>
      </div>
    </div>
  );
};
