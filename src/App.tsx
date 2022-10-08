import { Box, Typography } from "@mui/material";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Announcement from './Views/Announcement2'
import Navbar from './Components/Navbar'
import "./App.css";
import Teacher from "./Views/Teacher";
import AllTeachers from "./Views/AllTeachers";

function App() {
  return (
    
    //  !Commited by Avishka 
    // <Box
    //   height={"100vh"}
    //   width={"100vw"}
    //   display={"flex"}
    //   justifyContent="center"
    //   alignItems="center"
    // >
      // <Typography fontSize={'2rem'}>Hi!</Typography>
    // </Box>
      
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route 
            path={"/annoucement"}
            element={<Announcement/>}
          />
          <Route 
            path={"/teacher/add"}
            element={<Teacher/>}
          />
          <Route 
            path={"/teachers"}
            element={<AllTeachers/>}
          />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
