import { useState } from "react";

export default function App() {
  const [ radValues, setRadValues ] = useState(new Array(8).fill(0));

  console.log(radValues);
  let styles = "";
  radValues.forEach((value, index) => {
    if (index === 4) {
      styles = styles + " /"
    }
    styles += (" " + value + "px")
  })
  
  console.log(styles);

  function updateRadValues(e, index) {
    console.log({ index, target: e.target, current: e.currentTarget });
    const newVal = Number(e.currentTarget.value);

    setRadValues((prevRadValues) => {
      return prevRadValues.map((value, i) => (
        i === index ? newVal : value
      ))
    });
  };
  return (
    <main>
      <div className="css-edit-box"
        style={{
          borderRadius: styles
        }}>
        Mess around with this box!
      </div>
      <hr />
      <section>
      <div className="named-container">
          <h2>top-left:</h2>
          <h2>top-right:</h2>
          <h2>bottom-left:</h2>
          <h2>bottom-right:</h2>
        </div>
        <div className="horizontal-container">
          <h1>Horizontal</h1>
          <input type="number" 
            value={radValues[0]}
            onChange={(e) => updateRadValues(e, 0)}/>
          <input type="number" 
            value={radValues[1]}
            onChange={(e) => updateRadValues(e, 1)}/>
          <input type="number" 
            value={radValues[2]}
            onChange={(e) => updateRadValues(e, 2)}/>
          <input type="number" 
            value={radValues[3]}
            onChange={(e) => updateRadValues(e, 3)}/>
        </div>
        <div className="horizontal-container">
          <h1>Vertical</h1>
          <input type="number" 
            value={radValues[4]}
            onChange={(e) => updateRadValues(e, 4)}/>
          <input type="number" 
            value={radValues[5]}
            onChange={(e) => updateRadValues(e, 5)}/>
          <input type="number" 
            value={radValues[6]}
            onChange={(e) => updateRadValues(e, 6)}/>
          <input type="number" 
            value={radValues[7]}
            onChange={(e) => updateRadValues(e, 7)}/>
        </div>
      </section>
    </main>
  );
};