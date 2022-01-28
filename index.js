const Box = (props) => {
  const { bgColor, text } = props;
  return (
    <div className={`box ${bgColor}`}>
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  <div className="main-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box bgColor="box-yellow" text="small" />
      <Box bgColor="box-blue" text="Medium" />
      <Box bgColor="box-pink" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
