import React from 'react'
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AllTransactions from "@/components/Dashboard/AllTransactions";

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