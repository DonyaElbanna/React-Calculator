function Screen({ value }) {
  return (
    <div id="screen">
      <div className="formula">formula</div>
      <div className="result">{value}</div>
    </div>
  );
}

export default Screen;
