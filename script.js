document.addEventListener("DOMContentLoaded", () => {
    const painterIcon = document.getElementById("painterIcon");
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");

    // Canvas-Größe an die Fenstergröße anpassen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let painting = false;

    // Funktionen für das Malen
    const startPosition = (e) => {
        painting = true;
        draw(e);
    };

    const endPosition = () => {
        painting = false;
        ctx.beginPath(); // Zeichnungspfad zurücksetzen
    };

    const draw = (e) => {
        if (!painting) return;

        ctx.lineWidth = 5; // Breite des Pinsels
        ctx.lineCap = "round"; // Runde Pinselspitze
        ctx.strokeStyle = "black"; // Schwarze Farbe

        ctx.lineTo(e.clientX, e.clientY); // Linie zum Mauszeiger
        ctx.stroke(); // Linie zeichnen
        ctx.beginPath(); // Pfad zurücksetzen
        ctx.moveTo(e.clientX, e.clientY); // Startpunkt verschieben
    };

    // Pinsel aktivieren/deaktivieren
    painterIcon.addEventListener("click", () => {
        canvas.style.display = canvas.style.display === "none" ? "block" : "none";
    });

    // Event-Listener für das Zeichnen
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

    // Canvas beim Start verstecken
    canvas.style.display = "none";
});
