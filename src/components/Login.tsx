import * as React from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";

interface LogonProps {}

const Login: React.FunctionComponent<LogonProps> = () => {
  const [isLoginForm, setIsLoginForm] = React.useState<boolean>(true);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);

  const handleSubmitBtn = () => {
    if (emailRef.current && passwordRef.current && nameRef.current) {
      setErrorMessage(
        validateData({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          name: nameRef.current.value,
        })
      );
    }
  };

  console.log(errorMessage);

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg"
          alt="bg-img"
        />
      </div>
      <div className="absolute bg-black/60 p-10 mx-auto left-0 right-0 w-1/4 flex flex-col gap-y-5 mt-24">
        <div className="text-5xl text-white font-semibold">Sign In</div>
        <form onSubmit={(e) => e.preventDefault()}>
          {!isLoginForm && (
            <input
              ref={nameRef}
              type="text"
              placeholder="name"
              className="p-2 m-2 border w-full font-medium border-white rounded-sm text-white bg-gray-700/50"
            />
          )}

          <input
            ref={emailRef}
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 border w-full font-medium border-white rounded-sm text-white bg-gray-700/50"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="password"
            className="p-2 m-2 border w-full border-white rounded-sm text-white bg-gray-700/50 font-medium"
          />
          <p className="text-[#ff0914] font-medium m-2">{errorMessage}</p>
          <button
            className="px-4 py-2 m-2 w-full text-white bg-[#ff0914] rounded-sm hover:cursor-pointer"
            onClick={handleSubmitBtn}
          >
            {isLoginForm ? "Sign In" : "Sign Up"}
          </button>
          <span className="text-white m-2">
            {isLoginForm ? "New to Netflix? " : "Already on Netflix? "}
            <span
              className="font-medium hover:cursor-pointer"
              onClick={() => setIsLoginForm(!isLoginForm)}
            >
              {isLoginForm ? "Sign up Now" : "Sign in Now"}
            </span>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
