export const getDayCounts = ({
  month,
  year,
}: {
  month: number;
  year: number;
}) => new Date(year, month, 0).getDate();
