function Counter() {
  // styling

  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  };
  const main = {
    width: "500px",
    height: "400px",
    backgroundColor: "#f0f0f0",
    paddingTop: "25px",
  };
  const number = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  };
  const Para = {
    backgroundColor: "#6e00ff",
    color: "white",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  };
  const btn = {
    backgroundColor: "#6e00ff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
  };
  return (
    <div style={container}>
      <div style={main}>
        <div style={number}>
          <p style={Para}>1</p>
          <p style={Para}>2</p>
          <p style={Para}>3</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2>Step 1: Learn react</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "25px",
          }}
        >
          <button style={btn}>Previous</button>
          <button style={btn}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
