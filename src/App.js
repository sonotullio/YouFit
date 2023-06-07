import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import {Footer, Navbar} from "./components";
import {ExerciseDetail, ExercisesPage, Home} from "./pages";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '100%' } }}>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/exercises/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  );
}

export default App;
