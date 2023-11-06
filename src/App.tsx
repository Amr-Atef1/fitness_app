import {Routes,Route} from 'react-router-dom'
import { ExerciseDetail, Footer, Home, Navbar } from './component'
import { Box } from '@mui/material'
import { ContextProvider } from './context/ContextProvider'

function App() {
  
  return (
    <ContextProvider>
    <Box>
    <Navbar/>
    <Routes>
      <Route caseSensitive path='/' element={<Home/>}/>
      <Route  path="/exercises/:id" element={<ExerciseDetail/>}/>
    </Routes>
    <Footer/>
    </Box>
    </ContextProvider>
  )
}

export default App
