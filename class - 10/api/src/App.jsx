import React, { useState, useEffect, Suspense } from "react";

import "./App.css";

// Lazy load the CountryCard component
const CountryCard = React.lazy(() => import("./components/CountryCard"));

// Functional Error Boundary Hook
function useErrorBoundary() {
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  const ErrorBoundary = ({ children }) => {
    if (error) {
      return (
        <div>
          <h1>Error: {error}</h1>
          <button onClick={resetError}>Retry</button>
        </div>
      );
    }
    return children;
  };

  const handleError = (errorMessage) => setError(errorMessage);

  return { ErrorBoundary, handleError };
}

function App() {
  const [loading, setLoading] = useState(true);
  const [countryDatas, setCountryDatas] = useState([]);
  const { ErrorBoundary, handleError } = useErrorBoundary();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const datas = await response.json();
        setCountryDatas(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
        handleError(error.message); // Pass specific error message
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>Country's Data</h1>
            <div className="country-grid">
              <Suspense fallback={<div>Loading country cards...</div>}>
                {countryDatas.map((country) => (
                  <CountryCard
                    key={country.name}
                    name={country.name}
                    flag={country.flag}
                  />
                ))}
              </Suspense>
            </div>
          </>
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;
