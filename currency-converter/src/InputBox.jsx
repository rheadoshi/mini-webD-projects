function InputBox({
    label,
    amount,
    onAmtChange,
    onCurrChange, 
    currencies = [],
    selectCurr = "usd",
    amtDisable = false,
    currDisable = false
}){
    return (
        <>
        <div className="bg-white text-slate-400 rounded-lg flex">
            <label className="text-black">{label}</label>
            <input type="number" placeholder="Amount" className="w-full bg-transparent" 
            disabled={amtDisable} value={amount} onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))}/>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
                    <option value="usd">
                            usd
                    </option>
                
                </select>
            </div>
        </div>
        </>
    )
}

export default InputBox;