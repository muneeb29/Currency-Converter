import { useState } from "react";
import axios from "axios";

function Home() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const apikey = "EG7V4K8KzYdbTmXpL23hcUBPYchUphC8";

  console.log(value, from, to);

  const convertReq = () => {
    axios
      .get("https://api.apilayer.com/currency_data/convert/")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
