"use client"

import Image from "next/image";
import {FaGithub} from "react-icons/fa";

export default function Navbar() {
    return <nav>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Image src={"/icon.png"} alt={"Logo"} height={80} width={80}/>
            <h1>TypeBot</h1>
        </div>
        <button><FaGithub /><a href="https://github.com/PsydoV2/TypeBot" target={"_blank"}>View Sourcecode</a></button>
    </nav>
}