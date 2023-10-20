const getRange = (page: number) => {
  const itemPerPage = 4;
  let from = page * itemPerPage;
  let to = from + itemPerPage;
  if (page > 0) {
    from += 1;
    to += 1;
  }
  return { from, to };
};

export default getRange;
