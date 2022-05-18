import "./styles.scss";
const TableListings = () => {
  const listings = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const columnOne = listings.slice(0, 3).map((item) => <h1>{item}</h1>);
  const columnTwo = listings.slice(3, 6).map((item) => <h1>{item}</h1>);
  const columnThree = listings.slice(6, 9).map((item) => <h1>{item}</h1>);
  return (
    <div className="tablelistings">
      <div>{columnOne}</div>
      <div>{columnTwo}</div>
      <div>{columnThree}</div>
    </div>
  );
};

export default TableListings;
