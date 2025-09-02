import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  amount: number;
  className?: string;
}
const PriceFormatter = ({ className, amount }: Props) => {
  const price = new Number(amount).toLocaleString("en-Us", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return <div className={twMerge("px-0 font-bold", className)}>{price}</div>;
};

export default PriceFormatter;
