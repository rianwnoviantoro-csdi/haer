import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GOOGLE, LOGO } from "../../../constant";
import { SharedComp } from "../../../components";
import { doLogin } from "../../../redux/apis/auth.api";
import { setCredentials } from "../../../redux/features/auth/auth.slice";
import UsePersist from "../../../hooks/use-persist";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accountRef = useRef();
  const errRef = useRef();
  const [login, { isLoading: loadingLogin }] = doLogin();

  let [isPersist, setIsPersist] = UsePersist();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    accountRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMessage("");
  }, [email, password]);

  async function Loginhandler(e) {
    e.preventDefault();

    try {
      const account = await login({ email, password }).unwrap();

      dispatch(setCredentials(account));
      setEmail("");
      setPassword("");

      navigate("/dashboard");
    } catch (err) {
      console.log(err);

      if (!err?.originalStatus) {
        setErrMessage("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMessage("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMessage("Unauthorized");
      } else {
        setErrMessage("Login Failed");
      }
      errRef.current.focus();
    }
  }

  function emailHandler(e) {
    setEmail(e);
  }

  function PasswordHandler(e) {
    setPassword(e);
  }

  function PersistToggle(e) {
    setIsPersist((prev) => !prev);
  }

  return (
    <div className="max-w-xl mx-auto bg-white min-h-screen">
      <div className="p-6">
        <img src={LOGO} alt="" />
        <div className="my-6">
          <h1 className="text-3xl font-semibold leading-snug">
            Welcome Back 👋 <br /> to{" "}
            <span className="text-[#3085FE]">HR Attendee</span>
          </h1>
          <p className="font-light text-[#ACAFB5]">
            Hello there, login to continue
          </p>
        </div>
        {loadingLogin ? (
          <p>Loading</p>
        ) : (
          <>
            <p ref={errRef} aria-live="assertive">
              {errMessage}
            </p>
            <form autoComplete="off" ref={accountRef} onSubmit={Loginhandler}>
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
              <div className="flex mt-3 mb-6 justify-between place-items-center">
                <div className="">
                  <input
                    className="bg-white px-3 py-2 placeholder-gray-500 border border-indigo-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    checked={isPersist}
                    onChange={PersistToggle}
                    type="checkbox"
                  />
                  <label className="text-sm ml-2 tracking-wide">Keep Login</label>
                </div>
                <div className="">
                  <p className="text-sm tracking-wide text-right text-[#3085FE] cursor-pointer">
                    Forgot Password ?
                  </p>
                </div>
              </div>
              <SharedComp.Button
                background="bg-[#3085FE]"
                color="text-white"
                label="Login"
              />
            </form>
          </>
        )}
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
            Didn’t have an account?{" "}
            <Link to="/register" className="text-[#3085FE] cursor-pointer">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
