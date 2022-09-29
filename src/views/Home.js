import { useState } from "react";

function Home() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  console.log(value, from, to);

  const convertReq = () => {};

  return (
    <div>
      <div className="container py-3 my-3 bg-light">
        <h1>Convert Currency</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="value"
        />
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From: "
        />
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To: "
        />
        <button onClick={convertReq} className="btn btn-secondary mx-2">
          Convert
        </button>
      </div>
    </div>
  );
}

export default Home;
