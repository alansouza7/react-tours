import { useEffect, useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

function App() {
  const url = "https://course-api.com/react-tours-project";

  const [dataApi, setDataApi] = useState([]);

    const userFetch = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setDataApi(data);
      } catch (error) {
        console.log(error);
      }
    };
   
  useEffect(()=>{
    userFetch();
  }, [])


  const getTour = (id) => {
    const tourSelected = dataApi.filter((tour) => tour.id !== id);
    setDataApi(tourSelected);
  };

  return (
    <main>
     {dataApi.length > 0? <Tours getTour={getTour} data={dataApi} />: <Loading fetchTour={userFetch} />} 
    </main>
  );
}

export default App;
