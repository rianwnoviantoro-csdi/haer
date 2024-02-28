import React, { useState } from "react";
import { GOOGLE, LOGO } from "../../../constant";
import { SharedComp } from "../../../components";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function emailHandler(e) {
    setEmail(e);
  }

  function PasswordHandler(e) {
    setPassword(e);
  }

  function MoveToDashboad() {
    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="max-w-xl mx-auto bg-white min-h-screen">
      <div className="p-6">
        <img src={LOGO} alt="" />
        <div className="my-6">
          <h1 className="text-4xl font-semibold leading-snug">
            Welcome Back 👋 <br /> to{" "}
            <span className="text-[#3085FE]">HR Attendee</span>
          </h1>
          <p className="font-light text-[#ACAFB5]">
            Hello there, login to continue
          </p>
        </div>
        <form autoComplete="off">
          <SharedComp.Input
            label="Email Address"
            placeholder="email address"
            type="email"
            value={email}
            onChange={emailHandler}
          />
          <SharedComp.Input
            label="Password"
            placeholder="password"
            type="password"
            value={password}
            onChange={PasswordHandler}
          />
          <div className="mt-3 mb-6">
            <p className="tracking-wide text-right text-[#3085FE] cursor-pointer">
              Forgot Password ?
            </p>
          </div>
          <SharedComp.Button
            background="bg-[#3085FE]"
            color="text-white"
            label="Login"
            onClick={MoveToDashboad}
          />
        </form>
        <div className="mt-6 flex justify-around place-items-center">
          <div className="w-1/12 border-b border-[#ACAFB5]"></div>
          <p className="font-light text-[#ACAFB5]">
            Or continue with social account
          </p>
          <div className="w-1/12 border-b border-[#ACAFB5]"></div>
        </div>
        <div className="mt-6">
          <SharedComp.Button
            icon={GOOGLE}
            border="border border-slate-100"
            background="bg-slate-100/20"
            color="text-slate-700"
            label="Google"
          />
        </div>
        <div className="mt-6 flex justify-around place-items-center">
          <p className="font-light">
            Didn’t have an account?{" "}
            <span className="text-[#3085FE] cursor-pointer">Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
