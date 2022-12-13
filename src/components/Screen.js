function Screen({ equation, result }) {
  return (
    <div id="screen">
      <div className="formula">{equation || ""}</div>
      <div className="result">{result || 0}</div>
    </div>
  );
}

export default Screen;
