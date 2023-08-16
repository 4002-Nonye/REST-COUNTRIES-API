import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Details from "./pages/Details/Details";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = useState("Filter by Region");
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  useEffect(() => {
    const getCountries = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,flags,population,cca2,region`);

        const data = await response.json();
        // console.log(data)

        setCountries(data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    getCountries();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
        
          path="/"
          element={
            <Home
              countries={countries}
              isLoading={isLoading}
              setCountries={setCountries}
              region={region}
              setRegion={setRegion}
              query={query}
              setQuery={setQuery}
              setSelectedCountry={setSelectedCountry}
            />
          }
        />

        <Route
          path="/:name"
          element={<Details />}
        />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
