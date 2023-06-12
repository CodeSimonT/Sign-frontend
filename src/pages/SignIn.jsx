import React, { useEffect, useState } from "react";
import { wheel } from "../assits";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/feature/authSlice";
const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState(initialState);
  const { loading, error } = useSelector((state) => state.auth);
  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const valicdate = ["User not Found", "Password is incorrect"];
  const errorEmail = error === valicdate[0];
  const errorPassword = error === valicdate[1];
  useEffect(() => {
    console.log(error);
  }, [error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formData, navigate }));
    }
    console.log(`this is the log ${formData}`);
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  return (
    <section className="w-full h-[100vh] flex justify-center items-center">
      <div className="absolute w-full top-0 left-0 h-[100vh] z-1 flex">
        <span className="w-[35%] h-[100vh] bg-primary" />
        <span className="w-[65%] h-[100vh] bg-white" />
      </div>
      <div className="w-[80%] h-[500px] flex container-Shadow z-10">
        {/* left content */}
        <div className="w-[30%] flex flex-col justify-center items-center bg-primary">
          <img src={wheel} alt="" />
          <h1 className="font-bold text-[20px]">CleanMyCar</h1>
          <p className="mt-[20px] text-center font-semibold text-[14px]">
            Naga's first wireless
            <br />
            car cleaning company
          </p>
        </div>
        {/* right content */}
        <div className="w-[70%] flex items-center justify-center ">
          <div className="w-[65%] ">
            <h4 className="text-center mb-[50px] font-bold">Sign-In</h4>
            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Email Input */}
              <h5 className="mb-1">Email</h5>
              <input
                type="email"
                value={email}
                name="email"
                required={true}
                placeholder="Example@email.com"
                onChange={onInputChange}
                className={`border-[1.5px] border-grey rounded-[3px] px-3 py-2  outline-none ${
                  !errorEmail && "mb-6"
                }`}
              />
              {/* end email input */}
              {error && errorEmail && (
                <h5 className="text-[red] pl-2">User not Found</h5>
              )}
              {/* Password Input */}
              <h5 className="mb-1 mt-2">Password</h5>
              <input
                type="password"
                value={password}
                name="password"
                required={true}
                placeholder="Enter your Password"
                onChange={onInputChange}
                className={`border-[1.5px] border-grey rounded-[3px] px-3 py-2  outline-none ${
                  !errorPassword && "mb-6"
                }`}
              />
              {error && errorPassword && (
                <h5 className="text-[red] pl-2">Password is incorrect</h5>
              )}
              {/* end password input */}
              {/* login button */}
              <button
                type="submit"
                className="cursor-pointer rounded-[3px] bg-primary px-3 py-2 mt-[50px]"
              >
                Login
              </button>
              {/* end login button */}
              {/* register link */}
              <div className="text-center text-[gray] mt-5">
                <span>Don't have an account? </span>
                <span>
                  <Link to={"/signup"} className="hover:text-primary transist">
                    Register
                  </Link>
                </span>
              </div>
              {/* end register link */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
