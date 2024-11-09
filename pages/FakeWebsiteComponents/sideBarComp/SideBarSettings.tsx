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
    <div className="flex gap-4">
      <RoundedCheckbox
        checked={showSidebar}
        onChange={handleSidebarToggle}
        label="Sidebar"
      />
      <RoundedCheckbox
        checked={sideBarShowing === 1}
        onChange={() => setSideBarShowing(1)}
        label="v1"
      />
      <RoundedCheckbox
        checked={sideBarShowing === 2}
        onChange={() => setSideBarShowing(2)}
        label="v2"
      />
      <RoundedCheckbox
        checked={sideBarShowing === 3}
        onChange={() => setSideBarShowing(3)}
        label="v3"
      />
    </div>
  );
};

export default SideBarSettings; 