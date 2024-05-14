import React, { FormEvent, ChangeEvent } from "react";
import { Element } from "react-scroll";

import { PsignInFormData } from "@/app/interfaces/FormData";

interface TheFormProps {
  formData: PsignInFormData;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  errors: { [key: string]: string };
}

export default function SignInForm({
  formData,
  handleInputChange,
  handleSubmit,
  errors,
}: TheFormProps) {
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <label className="text-sm mb-2 block">Username</label>
          <Element name="email">
            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                required
                className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#1553A4]"
                onChange={handleInputChange}
                placeholder="Email Address"
                value={formData.email}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-4"
                viewBox="0 0 24 24"
              >
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
          </Element>
          {errors.email && (
            <p className="text-base leading-relaxed text-red-500">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label className="text-sm mb-2 block">Password</label>
          <Element name="password">
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#1553A4]"
                placeholder="Enter password"
                onChange={handleInputChange}
                value={formData.password}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
            {errors.password && (
              <p className="text-base leading-relaxed text-red-500">
                {errors.password}
              </p>
            )}
          </Element>
        </div>
        {/* <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label for="remember-me" className="ml-3 block text-sm">
                  I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                </label>
              </div> */}
      </div>
    </form>
  );
}
