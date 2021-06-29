import logo from './logo.svg';
import './App.css';
import { useState } from "react"
function App() {
    const [city, setCity] = useState("")
    const axios = require('axios');
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState("")

    const search = async () => {
        console.log(city)
        // Make a request for a user with a given ID
        axios.get(`https://api.weatherapi.com/v1/current.json?key=cd9fd4e263504efaa18152229212606&q=${city}`)
            .then(function (response) {
                // handle success
                console.log(response);
                setData(response.data.location)
                setData2(response.data.current.condition)
                setData3(response.data.current)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        axios.get(`https://pixabay.com/api/?key=22268105-6a32d9d853b2c66ad24670fac&q=${data4}&image_type=photo`)
            .then(function (response) {
                // handle success
                console.log(response);


                if (Math.floor(Math.random() * 10) < 2) {

                    setData4(response.data.hits[0].webformatURL)
                }
                else if (Math.floor(Math.random() * 10) < 6) {
                    setData4(response.data.hits[5].webformatURL)
                }
                else
                    setData4(response.data.hits[8].webformatURL)



            })

            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }

    return (
        <div className="top" >


            <div class="container">
                <div class="col-sm-12 col-md-12 col-lg-12 col-12 ">
                    <input class="form-control" onChange={(e) => setCity(e.target.value)} id="input" type="text" placeholder="ENTER THE NAME OF A PLACE" aria-label="default input example" style={{ borderRadius: 150, position: 'absolute', top: 60, width: 290 }} />
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 col-12 ">
                    <button type="button" onClick={() => search()} class="btn btn-info" style={{ borderRadius: 100, position: 'absolute', top: 120, width: 100, left: 120 }} >FIND</button>
                </div>
            </div>
            {city?<div class="container">
                <div class="col-sm-12 col-md-12 col-lg-12 col-12 ">
                    <div class="card" style={{ top: 200, position: 'absolute', width: 320, left: 40 }}>
                        <img src={data4} class="card-img-top" style={{ height: 220 }} />
                        <div class="card-body" >
                            <h3 class="card-title">{data2.text} in {data.name} </h3>
                            <h1 class="card-title"> {data3.temp_c} degree Celcius</h1>
                            <h5 class="card-title"> HUMIDITY={data3.humidity}<br />PRECIPITATION={data3.precip_in}inch <br />FEELS LIKE={data3.feelslike_c} Celcius</h5>
                            <p class="card-text">  WINDSPEED={data3.wind_kph}kph  <br />  WINDDEGREE={data3.wind_degree} DEGREE  <br /> UPDATED {data3.last_updated}</p>

                        </div>
                    </div>
                </div>

            </div>
               : <div></div>}

        </div>

    );
}

export default App;