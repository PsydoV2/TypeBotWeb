"use client"

import Image from "next/image";
import {FaGithub} from "react-icons/fa";

export default function Navbar() {
    return <nav>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Image src={"/icon.png"} alt={"Logo"} height={80} width={80}/>
            <h1>TypeBot</h1>
        </div>
        <button onClick={() => window.open("https://github.com/PsydoV2/TypeBot", "_blank")} id="gitBtnSmall"> <FaGithub /></button>
    </nav>
}