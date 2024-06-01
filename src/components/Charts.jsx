import BarChart from "./Charts/BarChart"
import PieChart from "./Charts/PieChart"
import LineChart from "./Charts/LineChart"
import Data from './Charts/Data'
import { useState } from "react"
import DoughnutChart from "./Charts/DoughnutChart"


function Charts({ type }) {

    const [userData, setUserData] = useState({
        labels: Data.map(data => data.year),
        datasets: [{
            label: "hello",
            data: Data.map(data => data.subscribers),
            backgroundColor: ['orange', 'green', 'red'],
            pointRadius: 1,
            borderJoinStyle: 'bevel',
            tension: 0.3,

        }]
    })
    if (type == 'bar') {
        return (

                <div className="w-[500px] border">
                    <BarChart userData={userData} />
                </div>
        )
    } else if( type== 'line'){
        return (
                <div className="w-[500px] border">
                    <LineChart userData={userData} />
                </div>
        )

    } else if( type == 'don'){

        return (

                <div className="w-[200px] border">
                    <DoughnutChart userData={userData} />
                </div>
        )
    } else {
        return (
            <div>

                <div className="w-[200px] border">
                    <PieChart userData={userData} />
                </div>

            </div>
        )
    }
}

export default Charts