import type { FC } from "react";
import type { IShoe } from "../../types";

interface Props {
  shoe: IShoe;
}
const Badge: FC<Props> = ({ shoe }) => {
  return (
    (shoe.discount > 0 || shoe.isNew) && (
      <span
        className={`absolute text-white rounded-tl-xl rounded-br-xl lg:rounded-tl-3xl lg:rounded-br-3xl px-2 py-1 lg:px-4  ${shoe.discount ? "bg-my-yellow" : "bg-my-blue"}`}
      >
        {shoe.discount > 0 ? `${shoe.discount}%` : "New"}
      </span>
    )
  );
};

export default Badge;
