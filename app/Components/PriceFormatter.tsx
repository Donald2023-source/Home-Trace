import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  amount: Number;
  className?: string;
}
const PriceFormatter = ({ className, amount }: Props) => {
  const price = new Number(amount).toLocaleString("en-Us", {
    style: "currency",
    currency: "NGN",
  });
  return <div className={twMerge("px-0 font-bold", className)}>{price}</div>;
};

export default PriceFormatter;
