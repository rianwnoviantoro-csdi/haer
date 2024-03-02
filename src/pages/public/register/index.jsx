import React, { useState } from "react";
import { GOOGLE, LOGO } from "../../../constant";
import { SharedComp } from "../../../components";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  function FirstNameHandler(e) {
    setFirstName(e);
  }

  function LastNameHandler(e) {
    setLastName(e);
  }

  function EmailHandler(e) {
    setEmail(e);
  }

  function PasswordHandler(e) {
    setPassword(e);
  }

  function ConfirmHandler(e) {
    setConfirm(e);
  }

  function MoveToDashboad() {
    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="max-w-xl mx-auto bg-white min-h-screen">
      <div className="p-6">
        <img src={LOGO} alt="" />
        <div className="my-6">
          <h1 className="text-3xl font-semibold leading-snug">
            Register Account <br /> to{" "}
            <span className="text-[#3085FE]">HR Attendee</span>
          </h1>
          <p className="font-light text-[#ACAFB5]">
            Hello there, register to continue
          </p>
        </div>
        <form autoComplete="off">
          <SharedComp.Input
            label="First Name"
            placeholder="first name"
            type="text"
            value={firstName}
            onChange={FirstNameHandler}
          />
          <SharedComp.Input
            label="Last Name"
            placeholder="last name"
            type="text"
            value={lastName}
            onChange={LastNameHandler}
          />
          <SharedComp.Input
            label="Email Address"
            placeholder="email address"
            type="email"
            value={email}
            onChange={EmailHandler}
          />
          <SharedComp.Input
            label="Password"
            placeholder="password"
            type="password"
            value={password}
            onChange={PasswordHandler}
          />
          <SharedComp.Input
            label="Confirm Password"
            placeholder="confirm password"
            type="password"
            value={confirmPassword}
            onChange={ConfirmHandler}
          />
          <div className="relative mt-3 mb-6 flex gap-2 place-items-baseline">
            <input type="checkbox" />
            <label className="font-light text-sm">
              I agree to the <Link to="/" className="text-[#3085FE]">Terms & Condition</Link> &{" "}
              <Link to="/" className="text-[#3085FE]">Privacy Policy</Link> set out by this site.
            </label>
          </div>
          <SharedComp.Button
            background="bg-[#ACAFB5]/15"
            label="Register"
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
            background="bg-white"
            color="text-slate-800"
            label="Google"
          />
        </div>
        <div className="mt-6 flex justify-around place-items-center">
          <p className="font-light">
            Already have an account?{" "}
            <Link to="/" className="text-[#3085FE] cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
