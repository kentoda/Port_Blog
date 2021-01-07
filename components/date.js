import { parseISO, format } from "date-fns";

// date-fnsのparseISO, formatで日付を文字列に変換
const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
