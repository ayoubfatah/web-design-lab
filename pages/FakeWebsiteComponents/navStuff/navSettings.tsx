import React, { Dispatch, SetStateAction } from "react";
import { RoundedCheckbox } from "../RoundedCheckbox";

type NavSettingsTypes = {
  setNav1v: Dispatch<SetStateAction<number>>;
  setNav2v: Dispatch<SetStateAction<number>>;
  setNavBarSHowing: Dispatch<SetStateAction<number>>;
  navBarSHowing: number;
  nav2v: number;
  nav1v: number;
};
export default function navSettings({
  setNav1v,
  setNav2v,
  setNavBarSHowing,
  navBarSHowing,
  nav2v,
  nav1v,
}: NavSettingsTypes) {
  return (
    <>
      <div className="flex gap-1 mr-4">
        <RoundedCheckbox
          onChange={() => {
            setNav1v(1);
            setNavBarSHowing(1);
          }}
          checked={navBarSHowing === 1}
          label="Nav 1"
        />
        <RoundedCheckbox
          onChange={() => {
            setNav2v(1);
            setNavBarSHowing(2);
          }}
          checked={navBarSHowing === 2}
          label="Nav 2"
        />
      </div>
      {navBarSHowing === 2 && (
        <NavBar2Options nav2v={nav2v} setNav2v={setNav2v} />
      )}
      {navBarSHowing === 1 && (
        <NavBar1Options setNav1v={setNav1v} nav1v={nav1v} />
      )}
    </>
  );
}

// NAV OPTIONS
//
//
function NavBar2Options({
  setNav2v,
  nav2v,
}: {
  setNav2v: Dispatch<SetStateAction<number>>;
  nav2v: number;
}) {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <RoundedCheckbox
          checked={nav2v === 1}
          onChange={() => {
            setNav2v(1);
          }}
          label="v1"
        />
        <RoundedCheckbox
          checked={nav2v === 2}
          onChange={() => {
            setNav2v(2);
          }}
          label="v2"
        />
        <RoundedCheckbox
          checked={nav2v === 3}
          onChange={() => {
            setNav2v(3);
          }}
          label="v3"
        />
      </div>
    </div>
  );
}

function NavBar1Options({
  setNav1v,
  nav1v,
}: {
  setNav1v: Dispatch<SetStateAction<number>>;
  nav1v: number;
}) {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <RoundedCheckbox
          checked={nav1v === 1}
          onChange={() => {
            setNav1v(1);
          }}
          label="v1"
        />
        <RoundedCheckbox
          checked={nav1v === 2}
          onChange={() => {
            setNav1v(2);
          }}
          label="v2"
        />
        <RoundedCheckbox
          checked={nav1v === 3}
          onChange={() => {
            setNav1v(3);
          }}
          label="v3"
        />
      </div>
    </div>
  );
}
