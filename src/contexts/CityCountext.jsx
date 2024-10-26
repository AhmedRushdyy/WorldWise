import { createContext, useContext, useEffect, useState } from "react";
const BASE_URL = "http://localhost:9000";

const CityContext = createContext();
function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function getCityList() {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getCityList();
  }, []);

  async function getCity(id) {
    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CityContext.Provider value={{ cities, loading, getCity, currentCity }}>
      {children}
    </CityContext.Provider>
  );
}
function useCity() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error("CityContext used outside the provider");
  return context;
}

export { useCity, CityProvider };
