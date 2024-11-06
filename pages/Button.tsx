import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function ButtonPage() {
  return (
    <>
      <Button
        disabled={true}
        text="click here"
        className="bg-blue-500 py-1 px-1"
      />
      <Button disabled={false} text="test" />
      <Button
        className="bg-pink-500"
        disabled={false}
        isLoading={true}
        text="JJJ"
      />
    </>
  );
}

type CustomButtonProps = {
  text: string;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ text, className, isLoading, ...rest }: CustomButtonProps) {
  const buttonClass = twMerge(
    "py-3 px-10 bg-red-500 text-white",
    className,
    isLoading && "bg-gray-500"
    
  );

  return (
    <button className={buttonClass} {...rest}>
      {text}
    </button>
  );
}

// daba katKTB CODE CLEAN
