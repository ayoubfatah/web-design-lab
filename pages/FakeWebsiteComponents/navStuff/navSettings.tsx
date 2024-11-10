import React, { Dispatch, SetStateAction } from "react";
import { RoundedCheckbox } from "../RoundedCheckbox";

type NavSettingsTypes = {
  setNavbarVersion1: Dispatch<SetStateAction<number>>;
  setNavbarVersion2: Dispatch<SetStateAction<number>>;
  setNavBarSHowing: Dispatch<SetStateAction<number>>;
  navBarSHowing: number;
  navbarVersion2: number;
  navbarVersion1: number;
};
export default function navSettings({
  setNavbarVersion1,
  setNavbarVersion2,
  setNavBarSHowing,
  navBarSHowing,
  navbarVersion2,
  navbarVersion1,
}: NavSettingsTypes) {
  return (
    <div className="flex  gap-1  text-[18px] justify-between items-center">
      {navBarSHowing === 2 && (
        <NavBar2Options
          navbarVersion2={navbarVersion2}
          setNavbarVersion2={setNavbarVersion2}
        />
      )}
      {navBarSHowing === 1 && (
        <NavBar1Options
          setNavbarVersion1={setNavbarVersion1}
          navbarVersion1={navbarVersion1}
        />
      )}
    </div>
  );
}

// NAV OPTIONS
//
//
function NavBar2Options({
  setNavbarVersion2,
  navbarVersion2,
}: {
  setNavbarVersion2: Dispatch<SetStateAction<number>>;
  navbarVersion2: number;
}) {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <RoundedCheckbox
          checked={navbarVersion2 === 2}
          onChange={() => {
            setNavbarVersion2(2);
          }}
          label="Lite"
        />
        <RoundedCheckbox
          checked={navbarVersion2 === 1}
          onChange={() => {
            setNavbarVersion2(1);
          }}
          label="Plus"
        />
        <RoundedCheckbox
          checked={navbarVersion2 === 3}
          onChange={() => {
            setNavbarVersion2(3);
          }}
          label="Max"
        />
      </div>
    </div>
  );
}

function NavBar1Options({
  setNavbarVersion1,
  navbarVersion1,
}: {
  setNavbarVersion1: Dispatch<SetStateAction<number>>;
  navbarVersion1: number;
}) {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <RoundedCheckbox
          checked={navbarVersion1 === 1}
          onChange={() => {
            setNavbarVersion1(1);
          }}
          label="Lite"
        />
        <RoundedCheckbox
          checked={navbarVersion1 === 2}
          onChange={() => {
            setNavbarVersion1(2);
          }}
          label="Plus"
        />
        <RoundedCheckbox
          checked={navbarVersion1 === 3}
          onChange={() => {
            setNavbarVersion1(3);
          }}
          label="Max"
        />
      </div>
    </div>
  );
}
