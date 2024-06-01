

import { Doughnut } from "react-chartjs-2"
import {Chart as ChartJs} from 'chart.js/auto'

function DoughnutChart({userData}) {
  return (
    <div>
      <Doughnut data={userData}/>
    </div>
  )
}

export default DoughnutChart