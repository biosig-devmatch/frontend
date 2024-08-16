import React from "react";

type AllTransaction = {
  name: string;
  amount: string;
  time: string;
  status: string;
};

const brandData: AllTransaction[] = [
  {
    name: "Asset Name",
    amount: "0.00",
    time: "time",
    status: "status",
  },
  {
    name: "Asset Name",
    amount: "0.00",
    time: "time",
    status: "status",
  },
  {
    name: "Asset Name",
    amount: "0.00",
    time: "time",
    status: "status",
  },
  {
    name: "Asset Name",
    amount: "0.00",
    time: "time",
    status: "status",
  },
  {
    name: "Asset Name",
    amount: "0.00",
    time: "time",
    status: "status",
  },
];

const AssetBalance = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        Transaction History
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-4">
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Assets
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Time
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-4 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-8">
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-green-light-1">${brand.amount}</p>
            </div>
            <div className="flex items-center justify-center px-2 py-4">
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                {brand.time}
              </p>
            </div>
            <div className="flex items-center justify-center px-2 py-4">
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                {brand.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetBalance;
