import Navbar from "./Components/Navbar"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Movies from "./Pages/Movies.jsx"
import Favourite from "./Pages/Favourite.jsx"
import MyBookings from "./Pages/MyBookings.jsx"
import SeatLayout from "./Pages/SeatLayout.jsx"
import MovieDetails from "./Pages/MovieDetails.jsx"
import Footer from "./Components/Footer.jsx"
import {Toaster} from "react-hot-toast"


const App = () => {
   
  const isAdminRoute =  useLocation().pathname.startsWith("/admin");



  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App