import "./styles.css";

export default function Col({ value }) {
  const type = value % 2 === 0 ? "black" : "white";
  return <div className={`col ${type}`}>{value}</div>;
}
