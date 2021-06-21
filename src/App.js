import "./styles.css";

import Grid from "./Grid";

export default function App() {
  let rows = 5;
  let cols = 5;
  return (
    <div className="App">
      <Grid cols={cols} rows={rows} />
    </div>
  );
}
