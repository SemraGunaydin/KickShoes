import { useState, type FC } from "react";
import { colorsList } from "../../utils/constants";

interface Props {
  colors: string;
}

const Color: FC<Props> = ({ colors }) => {
  const [selected, setSelected] = useState<string>("");

  const toggle = (id: string) => {
    setSelected(selected === id ? "" : id);
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Select Colour</h2>

      <div className="flex gap-5">
        {colors.split(",").map((id) => {
          // find colors in your colors list
          const color = colorsList.find((i) => i.id === id);

          // is item selected on the color
          const isSelected = selected === id;

          return (
            <div
              key={id}
              className={isSelected ? "ring-3 ring-my-blue rounded-full" : ""}
            >
              <div
                onClick={() => toggle(id)}
                className="m-1 size-9 rounded-full cursor-pointer"
                style={{ background: color?.code }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
