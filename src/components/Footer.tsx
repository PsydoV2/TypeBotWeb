"use client"

import Image from "next/image";

export default function Footer() {
    return <footer className="footer">
        <div className="footerLeftSide">
            <Image src="/bot.png" alt="TypeBot" height={100} width={100} />
            <h4>TypeBot</h4>
        </div>
        <div className="footerRightSide">
            <ul>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>

        <div className="footerBottom">
            <h4>&copy; {new Date().getFullYear()} Sebastian Falter</h4>
        </div>
    </footer>
}