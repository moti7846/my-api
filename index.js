const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // כדי ש־POST יוכל לקבל JSON

// GET - שליחת מידע
app.get('/api/hello', (req, res) => {
    res.json({ message: 'שלום מה-API!' });
});

// POST - קבלת מידע
app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log('נתונים שהתקבלו:', data);
    res.json({ success: true, received: data });
});

app.listen(port, () => {
    console.log(`ה-API רץ על http://localhost:${port}`);
});


// - npm install express -// 