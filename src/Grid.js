import "./styles.css";
import Col from "./Col";
import Row from "./Row";

export default function Grid({ rows, cols }) {
  let elems = [];
  for (var i = 0; i < rows; i++) {
    let columns = [];
    for (var j = 0; j < cols; j++) {
      columns.push(<Col value={i * rows + j + 1} />);
    }
    elems.push(<Row index={i}>{columns}</Row>);
  }
  return <div className="grid">{elems}</div>;
}
