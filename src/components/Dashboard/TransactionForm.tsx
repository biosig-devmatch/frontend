import InputGroup from "../FormElements/InputGroup";


const TransactionForm = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="rounded-[10px] bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="px-6.5 py-4 dark:border-dark-3">
          <h3 className="text-xl font-semibold text-dark dark:text-white">
            Sign Form
          </h3>
        </div>
        <form action="#">
          <div className="p-6.5">

            <InputGroup
              label="From"
              type="text"
              placeholder=""
              customClasses="mb-4.5"
            />

            <InputGroup
              label="To"
              type="text"
              placeholder=""
              customClasses="mb-4.5"
            />

            <InputGroup
              label="Asset"
              type="text"
              placeholder=""
              customClasses="mb-4.5"
            />

            <InputGroup
              label="Amount"
              type="text"
              placeholder=""
              customClasses="mb-4.5"
            />

            <button className="mt-12 flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
              Sign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
