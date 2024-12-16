const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

//啟用cors支援前後端通信
app.use(cors());

// 定義一個簡單的API路徑
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from the backend!"})
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`)
});