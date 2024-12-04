import BasicDatePicker from '@/components/datepicker'
import StyledTable from '@/components/leadManagmentTable'
import TaskAndTeamManagementTable from '@/components/taskAndTeamManagementTable'
import TodaySummary from '@/components/todaySummary'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <div className='bg-white p-4 flex justify-between rounded-md shadow-xl'>
            <div>
                <p className='text-2xl font-semibold pb-2'>Good morning,Jack</p>
                <p className='text-gray-500 text-sm'>Here are Alert for new leads, pending approvals, or updates from July 19 - July 25.</p>
            </div>
            <div>
                <BasicDatePicker/>
            </div>
        </div>
        {/* summary */}
        <TodaySummary/>
        {/* leadManagmentTable */}
        <StyledTable/>
        {/* task and team management table */}
        <TaskAndTeamManagementTable/>
    </div>
  )
}

export default Dashboard