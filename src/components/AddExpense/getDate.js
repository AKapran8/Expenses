const getCurrentDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const maxDate = `${year}-${month}-${day}`;

  return maxDate;
};

const getMinDate = () => {
  const today = new Date(2019, 0, 1);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const minDate = `${year}-${month}-${day}`;

  return minDate;
};

export { getCurrentDate, getMinDate };
