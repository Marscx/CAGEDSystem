// =============================================================================
// Instrumentengrafiken: Ukulele, Keyboard, Gitarre (1. Lage) und ganzer Gitarrenhals
// =============================================================================
// Alle Grafiken werden hier als SVG gezeichnet (gleicher Stil wie die Diagramme im Würfel).
// Bedienung: Farbe wählen (Pinsel), dann Töne anklicken. Nochmals klicken = Farbe wieder weg.
// Farbschema wie im Unterricht: Akkordtöne blau (Grundton mit Ring), Pentatonik hellblau,
// Leitton rot, Gleitton grün.
// Jede Grafik lässt sich als PNG speichern oder in die Zwischenablage kopieren (Notiz-Apps).
// Kein jQuery, keine fremden Dateien.

var FARBEN = {
    linie: "#0b1220", papier: "#ffffff", gedaempft: "#5a6785", hell: "#dbe1ee",
    akk:   { fill: "#2f6fde", text: "#ffffff", name: "Akkordton" },
    grund: { fill: "#2f6fde", text: "#ffffff", name: "Grundton", ring: true },
    penta: { fill: "#9fd0f7", text: "#0b1220", name: "Pentatonik" },
    leit:  { fill: "#d9483b", text: "#ffffff", name: "Leitton" },
    gleit: { fill: "#3fae6a", text: "#ffffff", name: "Gleitton" }
};
var PINSEL = ["akk", "grund", "penta", "leit", "gleit"];
var SCHRIFT = 'font-family="Avenir Next, Helvetica Neue, Arial, sans-serif"';

// Tonnamen (Tonklasse 0 = C). "B" = H, wie im Würfel.
var NAMEN_KREUZ = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var NAMEN_B     = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

// Saiten von oben nach unten gezeichnet (oben = höchste Saite, wie in den Würfel-Diagrammen)
var INSTRUMENTE = {
    ukulele: { titel: "Ukulele", saiten: [9, 4, 0, 7], saitenNamen: ["A", "E", "C", "G"], buende: 4 },
    gitarre: { titel: "Gitarre", saiten: [4, 11, 7, 2, 9, 4], saitenNamen: ["e", "B", "G", "D", "A", "E"], buende: 4 },
    hals:    { titel: "Gitarre – ganzer Hals", saiten: [4, 11, 7, 2, 9, 4], saitenNamen: ["e", "B", "G", "D", "A", "E"], buende: 15, echt: true },
    keyboard:{ titel: "Keyboard", tasten: true }
};

// Zustand je Grafik: welche Töne welche Farbe haben, und die Anzeige-Optionen
var zustand = {};
Object.keys(INSTRUMENTE).forEach(function (k) {
    zustand[k] = { farben: {}, pinsel: "akk", namen: "aus", leereAus: false };
});

function tonName(tk, art) {
    return (art === "b" ? NAMEN_B : NAMEN_KREUZ)[((tk % 12) + 12) % 12];
}

// Ein Tonpunkt: farbig, leer (weiss) oder ausgeblendet; optional mit Tonnamen
function punkt(k, schluessel, x, y, r, tk) {
    var z = zustand[k], f = FARBEN[z.farben[schluessel]];
    var t = [];
    if (!f && z.leereAus) {
        // unsichtbar, aber anklickbar
        t.push('<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="transparent"/>');
    } else if (f) {
        t.push('<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f.fill + '" stroke="' + FARBEN.linie + '" stroke-width="' + (f.ring ? 3.2 : 1.4) + '"/>');
    } else {
        t.push('<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + FARBEN.papier + '" stroke="' + FARBEN.linie + '" stroke-width="1.4"/>');
    }
    if (z.namen !== "aus" && (f || !z.leereAus)) {
        var name = tonName(tk, z.namen);
        t.push('<text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle" ' + SCHRIFT + ' font-size="' + (name.length > 1 ? 9 : 10.5) + '" font-weight="700" fill="' + (f ? f.text : FARBEN.gedaempft) + '" pointer-events="none">' + name + '</text>');
    }
    return '<g class="ton" data-ton="' + schluessel + '" role="button" aria-label="' + tonName(tk, "#") + '">' + t.join("") + '</g>';
}

// Griffbrett (Ukulele, Gitarre, ganzer Hals)
function griffbrettSvg(k) {
    var ins = INSTRUMENTE[k];
    var n = ins.saiten.length, B = ins.buende;
    var x0 = 58, y0 = 22, dy = 24;
    // Bundpositionen: gleichmässig (1. Lage) oder wie auf einer echten Gitarre (ganzer Hals)
    var bx = [];
    var laenge = ins.echt ? 1500 : 0;
    for (var b = 0; b <= B; b++) bx.push(ins.echt ? x0 + laenge * (1 - Math.pow(2, -b / 12)) : x0 + b * 54);
    var breite = Math.round(bx[B] + 18), hoehe = y0 + (n - 1) * dy + 40;
    var t = [];
    t.push('<rect width="' + breite + '" height="' + hoehe + '" rx="14" fill="' + FARBEN.papier + '"/>');
    // Saitennamen links
    ins.saitenNamen.forEach(function (name, s) {
        t.push('<text x="14" y="' + (y0 + s * dy + 4) + '" ' + SCHRIFT + ' font-size="11" font-weight="600" fill="' + FARBEN.gedaempft + '">' + name + '</text>');
    });
    // Saiten
    for (var s = 0; s < n; s++) {
        t.push('<line x1="' + (x0 - 22) + '" y1="' + (y0 + s * dy) + '" x2="' + bx[B] + '" y2="' + (y0 + s * dy) + '" stroke="' + FARBEN.linie + '" stroke-width="' + (1.1 + s * 0.15) + '"/>');
    }
    // Sattel und Bünde
    for (var b2 = 0; b2 <= B; b2++) {
        t.push('<line x1="' + bx[b2] + '" y1="' + y0 + '" x2="' + bx[b2] + '" y2="' + (y0 + (n - 1) * dy) + '" stroke="' + FARBEN.linie + '" stroke-width="' + (b2 === 0 ? 6 : 1.6) + '"' + (b2 === 0 ? ' stroke-linecap="round"' : '') + '/>');
    }
    // Bundnummern unten (Lagepunkte wie auf dem Instrument)
    var marken = [3, 5, 7, 9, 12, 15];
    marken.forEach(function (m) {
        if (m > B) return;
        var mx = (bx[m - 1] + bx[m]) / 2, my = y0 + (n - 1) * dy + 24;
        t.push('<text x="' + mx + '" y="' + my + '" text-anchor="middle" ' + SCHRIFT + ' font-size="11" font-weight="' + (m === 12 ? 800 : 600) + '" fill="' + FARBEN.gedaempft + '">' + m + '</text>');
    });
    // Töne: Leersaite links vom Sattel, sonst in der Mitte des Bundes
    for (var s2 = 0; s2 < n; s2++) {
        for (var b3 = 0; b3 <= B; b3++) {
            var x = b3 === 0 ? x0 - 18 : (bx[b3 - 1] + bx[b3]) / 2;
            var r = b3 === 0 ? 9 : Math.min(10, (bx[b3] - bx[b3 - 1]) / 2.7);
            t.push(punkt(k, s2 + "-" + b3, x, y0 + s2 * dy, r, ins.saiten[s2] + b3));
        }
    }
    return svgHuelle(breite, hoehe, ins.titel, t);
}

// Klaviatur: c bis e'' (17 weisse Tasten)
function keyboardSvg() {
    var k = "keyboard", z = zustand[k];
    var weiss = [0, 2, 4, 5, 7, 9, 11], w = 36, h = 150, x0 = 12, y0 = 12;
    var anzahl = 17, t = [];
    var breite = x0 * 2 + anzahl * w, hoehe = y0 + h + 14;
    t.push('<rect width="' + breite + '" height="' + hoehe + '" rx="14" fill="' + FARBEN.papier + '"/>');
    var schwarze = [];
    for (var i = 0; i < anzahl; i++) {
        var okt = Math.floor(i / 7), tk = weiss[i % 7] + okt * 12, x = x0 + i * w;
        var f = FARBEN[z.farben["k" + tk]];
        t.push('<g class="ton" data-ton="k' + tk + '" role="button" aria-label="' + tonName(tk, "#") + '"><rect x="' + x + '" y="' + y0 + '" width="' + w + '" height="' + h + '" rx="4" fill="' + FARBEN.papier + '" stroke="' + FARBEN.linie + '" stroke-width="1.4"/>' +
            tastenPunkt(f, z, x + w / 2, y0 + h - 22, tk) + '</g>');
        // schwarze Taste rechts davon (nicht nach E und B, nicht nach der letzten Taste)
        if (i < anzahl - 1 && [0, 1, 3, 4, 5].indexOf(i % 7) >= 0) schwarze.push({ x: x + w - 11, tk: tk + 1 });
    }
    schwarze.forEach(function (s) {
        var f = FARBEN[z.farben["k" + s.tk]];
        t.push('<g class="ton" data-ton="k' + s.tk + '" role="button" aria-label="' + tonName(s.tk, "#") + '"><rect x="' + s.x + '" y="' + y0 + '" width="22" height="92" rx="3" fill="' + FARBEN.linie + '"/>' +
            tastenPunkt(f, z, s.x + 11, y0 + 72, s.tk, true) + '</g>');
    });
    return svgHuelle(breite, hoehe, "Keyboard", t);
}
function tastenPunkt(f, z, x, y, tk, schwarz) {
    var t = "";
    if (f) t += '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + f.fill + '" stroke="' + (schwarz ? FARBEN.papier : FARBEN.linie) + '" stroke-width="' + (f.ring ? 3.2 : 1.4) + '"/>';
    if (z.namen !== "aus" && (f || !z.leereAus)) {
        var name = tonName(tk, z.namen);
        var farbe = f ? f.text : (schwarz ? FARBEN.papier : FARBEN.gedaempft);
        t += '<text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle" ' + SCHRIFT + ' font-size="' + (name.length > 1 ? 9 : 10.5) + '" font-weight="700" fill="' + farbe + '" pointer-events="none">' + name + '</text>';
    }
    return t;
}

function svgHuelle(breite, hoehe, titel, teile) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + breite + ' ' + hoehe + '" width="' + breite + '" height="' + hoehe +
        '" role="img" aria-label="' + titel + '">' + teile.join("") + '</svg>';
}
function grafikSvg(k) { return k === "keyboard" ? keyboardSvg() : griffbrettSvg(k); }

// ---------- Bedienung ----------
function zeichnen(k) {
    document.querySelector('#' + k + 'Panel .grafik').innerHTML = grafikSvg(k);
}

// Werkzeugleiste unter jeder Grafik aufbauen
function werkzeuge(k) {
    var panel = document.getElementById(k + "Panel");
    var z = zustand[k];
    var html = '<div class="pinsel" role="group" aria-label="Farbe wählen">' +
        PINSEL.map(function (p) {
            var f = FARBEN[p];
            return '<button type="button" class="farbe" data-pinsel="' + p + '" aria-pressed="' + (z.pinsel === p) + '">' +
                '<span class="klecks' + (f.ring ? ' ring' : '') + '" style="background:' + f.fill + '"></span>' + f.name + '</button>';
        }).join("") + '</div>' +
        '<div class="optionen">' +
        '<label>Tonnamen <select data-option="namen"><option value="aus">aus</option><option value="#">mit #</option><option value="b">mit b</option></select></label>' +
        '<button type="button" class="btn" data-aktion="leere" aria-pressed="false">Leere ausblenden</button>' +
        '<button type="button" class="btn" data-aktion="loeschen">Alles löschen</button>' +
        '<button type="button" class="btn" data-aktion="speichern">Bild speichern</button>' +
        '<button type="button" class="btn" data-aktion="kopieren">Kopieren</button>' +
        (teilenMoeglich() ? '<button type="button" class="btn" data-aktion="teilen">Teilen</button>' : '') +
        '</div>';
    panel.querySelector(".werkzeuge").innerHTML = html;

    panel.querySelector(".grafik").addEventListener("click", function (e) {
        var ton = e.target.closest(".ton");
        if (!ton) return;
        var s = ton.dataset.ton;
        z.farben[s] = z.farben[s] === z.pinsel ? undefined : z.pinsel;
        if (!z.farben[s]) delete z.farben[s];
        zeichnen(k);
    });
    panel.querySelectorAll("[data-pinsel]").forEach(function (knopf) {
        knopf.addEventListener("click", function () {
            z.pinsel = knopf.dataset.pinsel;
            panel.querySelectorAll("[data-pinsel]").forEach(function (b) { b.setAttribute("aria-pressed", b === knopf); });
        });
    });
    panel.querySelector('[data-option="namen"]').addEventListener("change", function () { z.namen = this.value; zeichnen(k); });
    panel.querySelectorAll("[data-aktion]").forEach(function (knopf) {
        knopf.addEventListener("click", function () {
            var a = knopf.dataset.aktion, datei = INSTRUMENTE[k].titel.replace(/ – /g, "-").replace(/\s+/g, "-") + ".png";
            if (a === "leere") { z.leereAus = !z.leereAus; knopf.setAttribute("aria-pressed", z.leereAus); zeichnen(k); }
            if (a === "loeschen") { z.farben = {}; zeichnen(k); }
            if (a === "speichern") bildSpeichern(grafikSvg(k), datei);
            if (a === "kopieren") bildKopieren(grafikSvg(k), datei, knopf);
            if (a === "teilen") bildTeilen(grafikSvg(k), datei, INSTRUMENTE[k].titel);
        });
    });
}

// ---------- Export als PNG (wie im Würfel) ----------
function svgBild(svg, faktor) {
    faktor = faktor || 3;
    return new Promise(function (fertig, fehler) {
        var bild = new Image();
        bild.onload = function () {
            var c = document.createElement("canvas");
            c.width = bild.width * faktor; c.height = bild.height * faktor;
            var g = c.getContext("2d");
            g.fillStyle = FARBEN.papier; g.fillRect(0, 0, c.width, c.height);   // weiss bis in die Ecken
            g.scale(faktor, faktor); g.drawImage(bild, 0, 0);
            c.toBlob(function (blob) { blob ? fertig(blob) : fehler(new Error("Bild fehlgeschlagen")); }, "image/png");
        };
        bild.onerror = fehler;
        bild.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    });
}
function bildSpeichern(svg, dateiname) {
    svgBild(svg).then(function (blob) {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob); a.download = dateiname;
        document.body.appendChild(a); a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    });
}
function teilenMoeglich() {
    return !!(navigator.canShare && navigator.canShare({ files: [new File([""], "x.png", { type: "image/png" })] }));
}
function bildTeilen(svg, dateiname, titel) {
    svgBild(svg).then(function (blob) {
        return navigator.share({ files: [new File([blob], dateiname, { type: "image/png" })], title: titel });
    }).catch(function () { /* abgebrochen */ });
}
function bildKopieren(svg, dateiname, knopf) {
    function melden(text) {
        var alt = knopf.dataset.text || knopf.textContent;
        knopf.dataset.text = alt; knopf.textContent = text;
        setTimeout(function () { knopf.textContent = alt; }, 1800);
    }
    function ersatz() { bildSpeichern(svg, dateiname); melden("Gespeichert ⬇"); }
    if (!navigator.clipboard || !window.ClipboardItem) { ersatz(); return; }
    // Safari verlangt das Bild als Promise
    navigator.clipboard.write([new ClipboardItem({ "image/png": svgBild(svg) })])
        .then(function () { melden("Kopiert ✓"); }, ersatz);
}

// ---------- Start: Instrument-Knöpfe ein-/ausblenden ----------
Object.keys(INSTRUMENTE).forEach(function (k) {
    zeichnen(k);
    werkzeuge(k);
    var knopf = document.querySelector('[data-instrument="' + k + '"]');
    knopf.addEventListener("click", function () {
        var an = knopf.getAttribute("aria-pressed") !== "true";
        knopf.setAttribute("aria-pressed", an);
        document.getElementById(k + "Panel").hidden = !an;
    });
});
