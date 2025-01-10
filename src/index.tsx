import React from "react";
import ReactDOM from "react-dom/client"; // Обратите внимание на 'react-dom/client'
import "./styles.css"; // Если вы хотите добавить стили
const App = () => {
  return (
    <div>
      <h1>Hello, React with Webpack!</h1>
    </div>
  );
};
const doc: any = document.getElementById("root");
const root: any = ReactDOM.createRoot(doc);
root.render(<App />);
