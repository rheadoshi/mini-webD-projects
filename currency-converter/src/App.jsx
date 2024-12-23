import { useState } from "react";
import "./App.css";
import { InputBox } from "./index"; // Assuming InputBox component is correctly imported
import useCurrencyInfo from "./hooks/useCurrencyInfo"; // Corrected hook

function App() {
  const [amt, setAmt] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amt2, setAmt2] = useState(0);

  // Fetch currency data using the custom hook
  const currencyInfo = useCurrencyInfo(from);

  // Handle loading state when currency data is not yet available
  if (!currencyInfo || Object.keys(currencyInfo).length === 0) {
    return <div>Loading currency data...</div>;
  }

  // Currency options for dropdown
  const options = Object.keys(currencyInfo);

  // Convert currency
  const convert = () => {
    if (currencyInfo[to]) {
      setAmt2(amt * currencyInfo[to]);
    }
  };

  // Swap "from" and "to" currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmt(amt2);
    setAmt2(amt);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-slate-800">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* Input Box for "From" Currency */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currencies={options}
                amount={amt}
                selectCurr={from}
                onAmtChange={(amount) => setAmt(amount)}
                onCurrChange={(cur) => setFrom(cur)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>

            {/* Input Box for "To" Currency */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={amt2}
                currencies={options}
                selectCurr={to}
                amtDisable
                onCurrChange={(cur) => setTo(cur)}
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
