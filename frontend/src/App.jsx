import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);
  useEffect(() => {
    //向後端請求資料
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
      <h1>Vite + React + Express.js</h1>
      <p>{message || "Loading..."}</p>
    </div>
  )
}

export default App;
