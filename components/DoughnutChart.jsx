"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }) => {
      const accountNames = accounts.map((a) => a.bankName);
      const balances = accounts.map((a) => a.amount)
    console.log(balances, 'accounts')

    const data = {
        datasets: [
            {
                label: 'Amount',
                data: balances ,
                backgroundColor: ['#0B698B', '#0396A6', '#9CD3D8']
            }
        ],
        labels: accountNames
    }

    return (
        <div className=" w-[120px] max-sm:w-[80px] max-md:w-[100px]">
            <Doughnut
                data={data}
                options={{
                    cutout: '65%',
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    )
}

export default DoughnutChart