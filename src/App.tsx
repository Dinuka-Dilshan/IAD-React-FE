import { Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Grades from "./Views/Grades";

function App() {
  return (

    <><div>
      <Router>
        <Routes>
          <Route path="/grades" element={<Grades />} />
        </Routes>
      </Router>
    </div><Box
      height={"100vh"}
      width={"100vw"}
      display={"flex"}
      justifyContent="center"
      alignItems="center"
    >

      </Box></>
  );
}

export default App;
