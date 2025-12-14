import React from "react";
import "./style.css";

export function Footer() {
return (
<footer className="footer">
<p>
© {new Date().getFullYear()} Muhammad Moazam ·
<a
href="https://github.com/moazamshigri"
target="_blank"
rel="noopener noreferrer"
>
github.com/moazamshigri
</a>
</p>
</footer>
);
}