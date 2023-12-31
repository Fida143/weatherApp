import axios from "axios";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { useEffect, useState } from "react";

//  *****************************************************************


function App() {
 

  const [resp,setResp] = useState(null); 
  const [curCity,setCurCity]= useState("boston");

 
  let city = curCity;

  async function fetchApi() {
     // fetch Api  and take response
    // let resp = null;
    const options = {
      method: "GET",
      url: "API url",
      params: { q: `${city}` },
      headers: {
        "x-apiName-Key": "past api key",
        "x-apiName-Host": "past api host",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("try", response.data);
      // resp = response.data;
      setResp(response.data);
    } catch (error) {
      console.error(error);
    }
    return resp;
  }

  useEffect(() => {
    fetchApi();
  }, [curCity]);

  console.log(curCity,"rettttt");

  return (
    <>
      <div className="App">
        <LandingPage res={resp} city={setCurCity}></LandingPage>
      </div>
    </>
  );
}

export default App;
