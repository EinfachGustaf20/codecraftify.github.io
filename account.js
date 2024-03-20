const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Hier kannst du den Benutzernamen und das Passwort überprüfen
  // Zum Beispiel könntest du eine Datenbankabfrage durchführen

  if (username === 'admin' && password === 'pass') {
    res.send('Anmeldung erfolgreich!');
  } else {
    res.send('Falscher Benutzername oder Passwort!');
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
