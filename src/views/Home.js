import { useState } from "react";
import axios from "axios";
import currency from "../images/currency.svg";
import exchange from "../images/exchange.png";
import question from "../images/question.svg";

function Home() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [results, setResult] = useState("");
  const apikey = "EG7V4K8KzYdbTmXpL23hcUBPYchUphC8";

  const toInputUppercase = (e) => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

  const convertReq = () => {
    axios
      .get(
        `https://api.apilayer.com/currency_data/convert?from=${from}&to=${to}&amount=${value}`,
        {
          headers: {
            apikey: apikey,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setResult(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contain bg-white shadow text-center border border-1 py-3 my-5 rounded">
      <div className="container">
        <img
          src={currency}
          alt="currency"
          width="50"
          height="54"
          className="d-inline-block align-text-top"
        />
        <h1>Convert Currency</h1>
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                min="1"
                placeholder="Enter Value: "
              />
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
                minLength="3"
                maxLength="3"
                onInput={toInputUppercase}
                placeholder="Enter From: "
              />
            </div>

            <div className="mx-auto my-2">
              <button
                onClick={convertReq}
                className="btn btn-success border-1 "
              >
                <img src={exchange} alt="Convert" height="20" />
              </button>
            </div>

            <div className="form-floating">
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
                minLength="3"
                maxLength="3"
                onInput={toInputUppercase}
                placeholder="Convert To: "
              />
            </div>

            <img
              src={question}
              alt=""
              height="20"
              className="quest"
              style={{ cursor: "pointer" }}
              title="Enter Currency Code Such As GBP"
            />
          </div>
          <div className="py-4">
            <span>
              {from} {value} = {results?.query?.to} {results?.result}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
