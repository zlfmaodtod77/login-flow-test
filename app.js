const express = require('express');

const app = express();
const port = 8085;

app.get('/articles', (req, res) => {
    res.send('게시글 페이지')
});

app.post('/login', (req, res) => {
    res.send('로그인')
});

app.listen(port, () => {
    console.log(port, "서버가 열렸어요");
});

