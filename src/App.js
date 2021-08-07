import React from 'react';
import { useEffect, useState } from 'react';


const App = () => {

    const [state, setstate] = useState([])



    const getdata = async () => {


        const resp = await fetch("https://api.covid19india.org/data.json")
        const data = await resp.json()
        setstate(data.statewise);
        console.log(data.statewise);

    }


    useEffect(() => {
        getdata()

    }, [])

    return (
        <div id="container">



            <div id="center">
                <h1 id="heading"> INDIA COVID-19 Dashboard </h1>

                <table id="content-table">
                    <thead>
                        <tr>
                            <th id="m">STATE</th>
                            <th>CONFIRMED</th>
                            <th>RECOVERED</th>
                            <th>DEATH</th>
                            <th>ACTIVE</th>
                            <th>UPDATED</th>
                        </tr>
                    </thead>

                    <tbody>

                        {state.map((value, index) => {

                            const { state, confirmed, recovered, deaths, active, lastupdatedtime } = value;

                            return <tr key={index}>

                                <td>{state}</td>
                                <td>{confirmed}</td>
                                <td>{recovered}</td>
                                <td>{deaths}</td>
                                <td>{active}</td>
                                <td>{lastupdatedtime}</td>
                            </tr>
                        })

                        }
                    </tbody>

                </table>


            </div>
        </div>

    )
}
export default App;