"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <main className="heroSection">
            <div>
                <Image
                    src="/bot.png"
                    alt="TypeBot Logo"
                    width={400}
                    height={400}
                    priority
                />

                <div className="heroTextSide">
                    <h2>
                        TypeBot – Dein All-in-One Discord Sidekick
                    </h2>
                    <p>
                        Übersetze, informiere, rechne & unterhalte – direkt im Chat.
                    </p>

                    <button id="inviteBtn">
                        <a
                            href="https://discord.com/oauth2/authorize?client_id=1383532014267007046"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🤖 Bot einladen
                        </a>
                    </button>

                    <button id="viewFuncsBtn">
                        <a href="#functions">
                            📖 Funktionen ansehen
                        </a>
                    </button>
                </div>
            </div>
        </main>
    );
}
