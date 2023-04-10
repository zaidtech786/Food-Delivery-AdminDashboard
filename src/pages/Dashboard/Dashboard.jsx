import React from 'react'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'

const Dashboard = () => {
  return (
    <div className="charts">
    <Featured />
    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
  </div>
  )
}

export default Dashboard