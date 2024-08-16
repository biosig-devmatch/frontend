import React from "react";
import DashboardButton from "@/components/Dashboard/DashboardButton";

const TransactionQueue = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        Transaction Queue
      </h4>

      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-3.5 px-2 py-4">
            <div className="flex flex-col">
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                No transactions queue for now
              </p>
            </div>
          </div>
          <div className="mx-4 flex justify-between">
            <DashboardButton text="New Transaction" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionQueue;
