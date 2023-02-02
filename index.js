const rootElement = document.getElementById("root");
const fullName = "Royal Rocky Ranjan";

const element = (
  <div>
    <h1 className="greeting"> Hello {fullName} </h1>
    <p>
      {" "}
      <b> Nice To See You Again </b>{" "}
    </p>
  </div>
);

ReactDOM.render(element, rootElement);
