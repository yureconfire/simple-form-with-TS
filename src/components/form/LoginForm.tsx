import React from "react";

const LoginForm: React.FC = () => {
  return (
    <form>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <div className="mt-2">
            <div className="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block flex-1 border-0 bg-transparent py-3 pl-5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Name*"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block flex-1 border-0 bg-transparent py-3 pl-5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Email*"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="phone"
                className="block flex-1 border-0 bg-transparent py-3 pl-5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Phone Number*"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="desc"
                id="desc"
                autoComplete="desc"
                className="block flex-1 border-0 bg-transparent py-3 pl-5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="How did you find us?"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="w-full mt-5  bg-rose-500 shadow-sm py-3 text-white font-semibold uppercase sm:max-w-md ">
        Send
      </button>
    </form>
  );
};

export default LoginForm;
