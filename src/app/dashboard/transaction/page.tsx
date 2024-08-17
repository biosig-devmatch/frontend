import AllTransactions from '@/app/components/Dashboard/AllTransactions'
import DefaultLayout from '@/app/components/Layouts/DefaultLayout'
import React from 'react'


const page = () => {
  return (
      <DefaultLayout>
        <div className="col-span-12">
          <AllTransactions />
        </div>
      </DefaultLayout>
  )
}

export default page