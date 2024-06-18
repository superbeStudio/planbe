export const formatStrPrice = (price: string | number | undefined) => {
  if (price === undefined) return "-";

  const priceNum = Number(priceToNumber(price));

  if (Number.isNaN(priceNum)) {
    return "NaN";
  }

  return new Intl.NumberFormat("ko", {
    currency: "KRW",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(priceNum);
};

export const priceToNumber = (
  price: string | number | undefined,
  strict = false
) => {
  if (price === undefined) return 0;

  const res = Number(
    typeof price === "string" ? price.replaceAll(",", "") : price
  );
  if (Number.isNaN(res)) {
    if (strict) {
      return NaN;
    }
    return 0;
  }
  return Number(res);
};
