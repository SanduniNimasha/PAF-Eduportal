import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import backgroundImg from "../images/bck1.jpg";

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8).matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one special symbol"
  ),
});

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting }, trigger } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleGoogleLogin = async () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`http://localhost:8080/users/login`, user);
      if (res.status === 200) {
        toast.success("Login successfully");
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      }
    } catch (error) {
      if (error?.response) {
        toast.error(error.response.data);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen w-full" style={{
      background: "linear-gradient(135deg, #e0e7ff 0%, #bae6fd 40%, #bbf7d0 80%, #fef9c3 100%)"
    }}>
      <section className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl shadow-2xl border border-blue-200 bg-white/90 p-8 flex flex-col items-center" style={{backdropFilter: 'blur(6px)'}}>
              {/* Education-Themed SVG Illustration */}
              <div className="mb-6">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="30" width="60" height="30" rx="6" fill="#2563eb"/>
                  <rect x="20" y="20" width="40" height="15" rx="4" fill="#facc15"/>
                  <rect x="30" y="45" width="20" height="12" rx="3" fill="#22c55e"/>
                  <path d="M40 20V10" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                  <ellipse cx="40" cy="68" rx="18" ry="4" fill="#dbeafe"/>
                  <text x="40" y="60" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">EDU</text>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2 tracking-tight">Welcome Back!</h2>
              <p className="text-blue-700 mb-6 text-sm">Login to your education portal</p>
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <TEInput
                  type="email"
                  label="Email address"
                  size="lg"
                  className="mb-2"
                  {...register("email")}
                  isInvalid={errors.email || (!errors.email && errors.email?.message)}
                  onChange={() => trigger("email")}
                />
                {errors.email && (
                  <p className="mb-2 text-xs text-red-500">{errors.email?.message}</p>
                )}
                <TEInput
                  type="password"
                  label="Password"
                  className="mb-2"
                  size="lg"
                  {...register("password")}
                  isInvalid={errors.password || (!errors.password && errors.password?.message)}
                  onChange={() => trigger("password")}
                />
                {errors.password && (
                  <p className="mb-2 text-xs text-red-500">{errors.password?.message}</p>
                )}
                <TERipple rippleColor="light" className="w-full mb-2">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 px-7 py-3 text-base font-semibold uppercase tracking-wide text-black shadow-md transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Loading..." : "Sign In"}
                  </button>
                </TERipple>
                <TERipple rippleColor="light" className="w-full mb-2">
                  <button
                    onClick={() => navigate("/register")}
                    type="button"
                    className="w-full rounded-xl bg-yellow-400 px-7 py-3 text-base font-semibold uppercase tracking-wide text-blue-900 shadow-sm transition duration-150 ease-in-out hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                  >
                    Sign Up
                  </button>
                </TERipple>
                <div className="my-3 flex items-center">
                  <div className="flex-1 border-t border-blue-200"></div>
                  <span className="mx-3 text-xs text-blue-400 font-semibold">OR</span>
                  <div className="flex-1 border-t border-blue-200"></div>
                </div>
                <TERipple rippleColor="light" className="w-full">
                  <div
                    className="flex w-full items-center justify-center rounded-xl bg-green-500 px-7 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-sm transition duration-150 ease-in-out hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 cursor-pointer "
                    onClick={handleGoogleLogin}
                    style={{ backgroundColor: "#22c55e" }}
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888-9.888 0 0 1-2.868-7.118 9.947-9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9-6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </div>
                </TERipple>
              </form>
        </div>
      </section>
    </div>
  );
}
