export function FormattedDate({ date, className }) {
  const dateObj = new Date(date);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formatDate = new Intl.DateTimeFormat("en-GB", options).format(dateObj);

  return (
    <>
      <p className={className}>{formatDate}</p>
    </>
  );
}
