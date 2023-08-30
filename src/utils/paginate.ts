export const paginate = (page: number, rowCount = 10) => {
  if (page <= 0) {
    page = 1;
  }
  const take = rowCount;
  const skip = take * page - take;
  return { take, skip };
};
