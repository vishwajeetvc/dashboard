
import {Pie} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'


function PieChart({userData}) {
  return (
    <div><Pie data={userData}/></div>
  )
}

export default PieChart