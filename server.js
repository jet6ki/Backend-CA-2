const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Express server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const users = [
    { username : 'ayman', age : 20, email : 'ayman@gmail.com' },
    { username : 'noufal', age : 19, email : 'noufal@gmail.com'},
    { username : 'shahid', age : 21, email : 'shahid@gmail.com'}
];

app.get('/user', (req, res) => {
    const { username } = req.query;

    if (!username) {
        return res.status(400).json({ message: "User parameter cannot be empty" });
    }

    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());

    if (user) {
        return res.json({ message: "User found", data: user });
    } else {
        return res.status(404).json({ message: "User not found" });
    }
});
