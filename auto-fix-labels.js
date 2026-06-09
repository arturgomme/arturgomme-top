
const fs = require("fs");
const path = require("path");

// percorso del file da modificare
const filePath = path.join(__dirname, "App.jsx");

// leggi file
let content = fs.readFileSync(filePath, "utf8");

// backup sicurezza
fs.writeFileSync(filePath + ".backup", content);
console.log("Backup creato ✅");

// modifica 1: rimuove placeholder
content = content.replace(/placeholder={field\.label}/g, 'placeholder=""');

// modifica 2: wrappa input con label sopra
content = content.replace(
  /(<input[\s\S]*?\/>)/g,
  `
<div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
  <label style={{ fontSize: 13, color: "#9FB0C2" }}>
    {field.label}
  </label>
  $1
</div>
`
);

// modifica select
content = content.replace(
  /(<select[\s\S]*?<\/select>)/g,
  `
<div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
  <label style={{ fontSize: 13, color: "#9FB0C2" }}>
    {field.label}
  </label>
  $1
</div>
`
);

// salva file modificato
fs.writeFileSync(filePath, content);

console.log("Modifica completata ✅");
