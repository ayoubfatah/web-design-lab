import React from "react";
import { RoundedCheckbox } from "../RoundedCheckbox";

interface SidebarToggleProps {
  showSidebar: boolean;
  sideBarShowing: number;
  handleSidebarToggle: () => void;
  setSideBarShowing: (value: number) => void;
}

const SideBarSettings: React.FC<SidebarToggleProps> = ({
  showSidebar,
  sideBarShowing,
  handleSidebarToggle,
  setSideBarShowing,
}) => {
  return (
    <div className="flex justify-between text-[18px]">
      <div className="flex items-center gap-2">
        <RoundedCheckbox
          checked={sideBarShowing === 1}
          onChange={() => setSideBarShowing(1)}
          label="Normal"
        />
        <RoundedCheckbox
          checked={sideBarShowing === 2}
          onChange={() => setSideBarShowing(2)}
          label="Nested"
        />
        <RoundedCheckbox
          checked={sideBarShowing === 3}
          onChange={() => setSideBarShowing(3)}
          label="Icons only"
        />
      </div>
    </div>
  );
};

export default SideBarSettings;
