import React, { useState } from 'react';
import "./style.css";

export function Calculator() {
const [result, setResult] = useState(8760);
const [input, setInput] = useState(24);


return (
<div className="calculator">
<h2 className="calc-title">Simplest Working Calculator</h2>


<div className="result">{result}</div>


<input
type="number"
value={input}
onChange={(e) => setInput(e.target.value)}
className="calc-input"
/>


<div className="btn-group">
<button onClick={() => setResult(result + Number(input))}>add</button>
<button onClick={() => setResult(result - Number(input))}>subtract</button>
<button onClick={() => setResult(result * Number(input))}>multiply</button>
<button onClick={() => setResult(result / Number(input))}>divide</button>
<button className="danger" onClick={() => setInput(0)}>reset input</button>
<button className="danger" onClick={() => setResult(0)}>reset result</button>
</div>
</div>
);
}