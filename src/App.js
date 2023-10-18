import "./styles.css";

import Grid from "./Grid";

export default function App() {
  let rows = 8;
  let cols = 8;
  return (
    <div className="App">
      <Grid cols={cols} rows={rows} />
    </div>
  );
}
