import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product"
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing"
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
const Url="http://localhost:3030"

export default function App() {
    const [cities, setcities] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(function () {
        async function fetchcities() {
            try {
                setloading(true);
                const res = await fetch(`${Url}/cities`);
                const data = await res.json();
                setcities(data);
            } catch {
                alert("there was an error loading data")
            }
            finally {
                setloading(false);
            }
        }
        fetchcities();
    },[])
    return <>
        <BrowserRouter>
            <Routes>
        
                <Route index element={<Homepage />} />
                <Route path="Product" element={<Product />} />
                <Route path="Pricing" element={<Pricing />} />
                <Route path="login"   element={<Login/>}/>
                <Route path="app" element={<AppLayout />} >
                    <Route index element={<CityList cities={cities} loading={loading} /> } />
                    <Route path="cities" element={<CityList cities={cities} loading={loading} />} />
                    <Route path="contries" element={<p>list of contries</p> } />
                    <Route path="form" element={<p>form</p>} />
                </Route>
                <Route path="*" element={<PageNotFound/>}/>
              </Routes>
        </BrowserRouter></>
}