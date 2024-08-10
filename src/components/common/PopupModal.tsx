import { Dispatch, SetStateAction } from "react";

type AuthModelProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const PopupModal = ({ show, setShow }: AuthModelProps) => {
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 ${show ? "flex" : "hidden"} h-[calc(100%-1rem)] max-h-full w-full items-end justify-end overflow-y-auto overflow-x-hidden md:inset-0`}
    >
      <div
        className="relative mb-6 me-6 max-h-full w-full max-w-[330px] rounded-lg shadow dark:bg-gray-700 border-2"
        style={{
          background:
            "linear-gradient(156deg, #F8F0FF 3.55%, #FFF 49.39%, #E2F0FF 98.07%)",
        }}
      >
        <div className="flex flex-col items-center justify-between rounded-lg px-6 pt-4 md:px-12 md:pt-4">
          <button
            type="button"
            onClick={() => setShow(false)}
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <h3 className="mb-2 font-semibold">Just one sec!</h3>
          <h5>Which do you prefer?</h5>
        </div>
        <div>
          <p>You participation will help us improve Poneyape for better.</p>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
