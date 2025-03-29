import { useEffect, useState } from "react";
import "./App.css";
import { formatCountryDataDTO } from "./dto/CountryDataDTO";
import CountryCard from "./components/CountryCard";

function App() {
  const [countryDatas, setCountryDatas] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //callback hell
    // fetch("https://restcountries.com/v3.1/all")
    //   .then((vijay) => vijay.json())
    //   .then((data) => {
    //     setCountryDatas(data);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    //es-6 async/await
    //IIFE

    (async () => {
      try {
        let response = await fetch("htts://restcountries.com/v3.1/all");
        let datas = await response.json();

        const properCountrydatas = formatCountryDataDTO(datas).sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCountryDatas(properCountrydatas);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCountryDatas([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Country's Data12</h1>
          <div className="country-grid">
            {countryDatas.map((country) => {
              return <CountryCard name={country.name} flag={country.flag} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
