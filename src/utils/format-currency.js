function formatCurrencyToIDR(amount) {
  const currencyFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return currencyFormatter.format(amount);
}

export default formatCurrencyToIDR;
