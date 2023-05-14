import { useEffect } from "react";
import {fetchDataFromApi} from "./utils/api"
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Details from "./pages/details/details";
import PageNotFound from "./pages/404/pageNotFound";
import SearchResult from "./pages/searchResult/searchResult";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home)

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      const url = {
        backdrop: res?.images?.secure_base_url + "original",
        poster: res?.images?.secure_base_url + "original",
        profile: res?.images?.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url))
    })
  }

  useEffect(() => {
    fetchApiConfig()
  }, [])

  console.log(url?.results);
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Details/>}/>
      <Route path="/search/:query" element={<SearchResult/>}/>
      <Route path="/explore/:mediaType" element={<Explore/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
