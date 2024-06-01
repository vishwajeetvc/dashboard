
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'


function BarChart({ userData }) {
    return (
        <div><Bar
            height={"270px"}
            options={{ maintainAspectRatio: false }}
            data={userData} /></div>
    )
}

export default BarChart
