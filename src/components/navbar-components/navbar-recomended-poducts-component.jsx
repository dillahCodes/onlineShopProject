import { Link } from "react-router-dom";

const recomended = [
  {
    id: 1,
    title: "hp samsung",
  },
  {
    id: 2,
    title: "hp xiaomi",
  },
  {
    id: 3,
    title: "hp gaming",
  },
];

const NavbarRecomendedProductsComponent = () => {
  return (
    <div className="flex gap-x-2 ">
      {recomended.map((item) => (
        <Link className="text-black" key={item.id} to="/">
          {item.title}
        </Link>
      ))}
    </div>
  );
};
export default NavbarRecomendedProductsComponent;
