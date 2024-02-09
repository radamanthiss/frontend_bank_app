import React, { ReactElement } from "react";

interface PropsToggleItem {
  active: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>> | null;
  disabled?: boolean;
}

export const ToggleItemBlue = ({
  active,
  setActive,
  disabled,
}: PropsToggleItem): ReactElement => {
  return (
    <div
      className={`w-[71px] h-8 rounded-full  border-dark-blue border-2 flex items-center transition duration-300 focus:outline-none shadow hover:cursor-pointer mt-4 mb-6 ${
        active ? "bg-toggle-blue bg-opacity-70" : "bg-white "
      }`}
      onClick={() => {
        if (!disabled) setActive ? setActive(!active) : null;
      }}
      title="toggleItem"
    >
      <div
        className={`w-6 h-6 relative rounded-full transition duration-500 transform bg-dark-blue p-1 text-white ${
          active ? "translate-x-10" : "translate-x-1 "
        }`}
      ></div>
    </div>
  );
};
