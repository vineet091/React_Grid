import "./styles.css";

export default function Row({ children, index }) {
  const direction = index % 2 === 0 ? "normal" : "reverse";
  return <div className={`row ${direction}`}>{children}</div>;
}
