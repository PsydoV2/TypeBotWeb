"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerLeftSide">
        <Image
          src="/typebotguy/typebotsummer.png"
          alt="TypeBot"
          height={100}
          width={100}
        />
        <h4>TypeBot</h4>
      </div>
      <div className="footerRightSide">
        <ul>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms of Use</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#start">Home</a>
          </li>
          <li>
            <a href="#functions">Features</a>
          </li>
          <li>
            <a href="https://discord.com/oauth2/authorize?client_id=1383532014267007046&permissions=564445071895638&integration_type=0&scope=bot">
              Add to Discord
            </a>
          </li>
        </ul>
      </div>

      <div className="footerBottom">
        <h4>&copy; {new Date().getFullYear()} Sebastian Falter</h4>
      </div>
    </footer>
  );
}
