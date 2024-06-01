
import { Line } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js'

function LineChart({ userData }) {
    return (
        <div>
            <Line
                height={"270px"}
                options={{ maintainAspectRatio: false }}
                data={userData} />
        </div>
    )
}
export default LineChart
