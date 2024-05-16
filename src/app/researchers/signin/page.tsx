"use client";
import React, { FormEvent, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

import NavBar from "@/app/components/navbar";
import signInFormSchema from "@/app/schema/researchers/signInFormSchema";
import useForm from "@/app/hooks/useForm";
import SignInForm from "@/app/components/forms/researchers/SignInForm";

const initialFormData = {
  email: "",
  password: "",
};

export default function RSIGNIn() {
  const [showpop, setShowpop] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [disableClientValidation, setDisableClientValidation] =
    useState<boolean>(false);
  const handleSubmit = async (e: FormEvent) => {
   
    e.preventDefault();
    const formData = getFormData();
    console.log(formData);

    // Validate form
    if (!disableClientValidation) {
      if (!(await validateForm())) return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", formData);
      setLoading(false);
      router.push("/researchers/profile");
    } catch (error: any) {
      setLoading(false);
      console.log("SignIn failed", error.message);
    }
  };

  const { render, getFormData, setFormData, validateForm, resetForm } = useForm(
    {
      FormComponent: SignInForm,
      initialFormData: initialFormData,
      schema: signInFormSchema,
      handleSubmit: handleSubmit,
      isLoading: isLoading,
    }
  );

  const router = useRouter();

  return (
    <>
      <div className="font-[sans-serif] text-[#333] bg-white min-h-screen  items-center justify-center ">
        <NavBar />
        {loading && (
          <>
            <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
              <button
                type="button"
                className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#1553A4] hover:bg-[#1553A4] active:[#1553A4]"
              >
                Signing in
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  fill="#fff"
                  className="ml-2 inline animate-spin"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
        <div className="text-center  bg-blue-100 min-h-[160px] sm:p-6 p-4">
          <h4 className="md:text-4xl text-3xl font-extrabold mb-6">
            Sign In to your account
          </h4>
        </div>
        <div className="mx-4 mb-4 -mt-16 ">
         
           
           <div className="space-y-6 max-w-md m-auto  w-full border-black border p-10 bg-white rounded-2xl">
              {/* <h3 className="md:text-4xl text-3xl font-extrabold mb-6 mb-8 max-md:text-center">
                Sign in
              </h3> */}
              {render()}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label for="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label> */}
                </div>
                {/* <div className="text-sm">
                  <a
                    href="jajvascript:void(0);"
                    className="text-[#1553A4] hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div> */}
              </div>
              <div className="!mt-1">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="w-full shadow-xl py-2.5 px-4 font-semibold rounded-full text-white hover:text-[#1553A4] bg-[#1553A4] border hover:border-[#1553A4] hover:bg-blue-100 focus:outline-none"
                >
                  Log in
                </button>
              </div>
              {/* <p className="my-10 text-sm text-center">or continue with</p>
              <div className="space-x-6 flex justify-center">
                <button type="button" className="border-none outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    className="inline"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fbbd00"
                      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                      data-original="#fbbd00"
                    />
                    <path
                      fill="#0f9d58"
                      d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                      data-original="#0f9d58"
                    />
                    <path
                      fill="#31aa52"
                      d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                      data-original="#31aa52"
                    />
                    <path
                      fill="#3c79e6"
                      d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                      data-original="#3c79e6"
                    />
                    <path
                      fill="#cf2d48"
                      d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                      data-original="#cf2d48"
                    />
                    <path
                      fill="#eb4132"
                      d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                      data-original="#eb4132"
                    />
                  </svg>
                </button>
                <button type="button" className="border-none outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0078d4"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                    ></path>
                    <path
                      d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                      opacity=".05"
                    ></path>
                    <path
                      d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                      opacity=".07"
                    ></path>
                    <path
                      fill="#fff"
                      d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                    ></path>
                  </svg>
                </button>
              </div> */}
              <p className="text-base leading-relaxed mt-6 text-center">
              Don't have an account{" "}
              <a
                href="/researchers/signup"
                className="text-[#1553A4] font-semibold hover:underline ml-1"
              >
                Register here
              </a>
            </p>
            </div>
            {/* <div className="!mt-10">
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full shadow-xl py-2.5 px-4 font-semibold rounded-full text-white hover:text-[#1553A4] bg-[#1553A4] border hover:border-[#1553A4] hover:bg-blue-100 focus:outline-none"
              >
                Sign up
              </button>
            </div> */}
            
          </div>
        </div>
        
    </>
  );
}
