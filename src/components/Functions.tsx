"use client"

export default function Functions() {
    return <section id="functions" className="functionSection">
        <h2>🔧 Funktionen von TypeBot</h2>
        <div className="functionGrid">
            <div className="functionCard">
                <h3>🌦 /weather</h3>
                <p>Zeigt das aktuelle Wetter für jeden Ort – direkt im Discord-Chat.</p>
            </div>
            <div className="functionCard">
                <h3>🌍 /translate</h3>
                <p>Übersetze Texte blitzschnell in über 100 Sprachen mit einem Befehl.</p>
            </div>
            <div className="functionCard">
                <h3>😂 /joke</h3>
                <p>Bringt deine Community mit nerdigen IT-Witzen zum Lachen.</p>
            </div>
            <div className="functionCard">
                <h3>🧮 /currency</h3>
                <p>Rechne live Währungen um – mit tagesaktuellen Wechselkursen.</p>
            </div>
            <div className="functionCard">
                <h3>🧰 /tools</h3>
                <p>UUID-Generator, JSON-Formatter, Lorem Ipsum & mehr nützliche Tools.</p>
            </div>
        </div>
    </section>

}