import React, { useEffect, useState } from "react";
import { wheel } from "../assits";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../redux/feature/authSlice";
const initialState = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const [condition, setCondition] = useState("");
  const { error } = useSelector((state) => state.auth);
  const { email, password, firstname, lastname, confirmPassword } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const valicdate = "Email already exist";
  const errorEmail = error === valicdate;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log(false);
      setCondition(true);
      console.log(`this is in the useState condition ${condition}`);
      return;
    }
    setCondition(false);
    if (email && password && firstname && lastname && confirmPassword) {
      dispatch(register({ formData, navigate }));
    }
    console.log(`this is the log ${formData}`);
  };
  useEffect(() => {
    console.log(`this is in the useEffect ${condition}`);
    console.log(error);
  }, [error, formData, handleSubmit]);
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  return (
    <section className="w-full h-[100vh] flex justify-center items-center relative">
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
        <div className="w-[70%] flex items-center justify-center">
          <div className="w-[65%] ">
            <h4 className="text-center mb-[15px] font-bold">Sign-Up</h4>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex">
                {/* firstname input */}
                <span className="flex-1">
                  <h5 className="mb-1">Firstname</h5>
                  <input
                    type="text"
                    value={firstname}
                    name="firstname"
                    required={true}
                    placeholder="firstname"
                    onChange={onInputChange}
                    className={`w-full border-[1.5px] border-grey rounded-[3px] px-3 py-2  outline-none `}
                  />
                </span>
                {/* end firstname */}
                {/* lastname input */}
                <span className="flex-1 pl-4">
                  <h5 className="mb-1">Lastname</h5>
                  <input
                    type="text"
                    value={lastname}
                    name="lastname"
                    required={true}
                    placeholder="lastname"
                    onChange={onInputChange}
                    className={`w-full border-[1.5px] border-grey rounded-[3px] px-3 py-2  outline-none`}
                  />
                </span>
                {/* end lastname */}
              </div>
              {/* Email Input */}
              <h5 className="mb-1 mt-2">Email</h5>
              <input
                type="email"
                value={email}
                name="email"
                required={true}
                placeholder="Example@email.com"
                onChange={onInputChange}
                className={`border-[1.5px] border-grey rounded-[3px] px-3 py-2  outline-none `}
              />
              {/* end email input */}
              {error && errorEmail && (
                <h5 className="text-[red] pl-2">Email is already exist</h5>
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
                className={`border-[1.5px] border-grey rounded-[3px] px-3 py-2  outline-none`}
              />
              {/* end password */}
              {/* confirm password */}
              <h5 className="mb-1 mt-2">Confirm Password</h5>
              <input
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                required={true}
                placeholder="Confirm your Password"
                onChange={onInputChange}
                className={`border-[1.5px] border-grey rounded-[3px] px-3 py-2  outline-none`}
              />
              {condition && (
                <h5 className="text-[red] pl-2">Password didn't match</h5>
              )}
              {/* end confirm password */}
              {/* login button */}
              <button
                type="submit"
                className="cursor-pointer rounded-[3px] bg-primary px-3 py-2 mt-[30px]"
              >
                Register
              </button>
              {/* end login button */}
              {/* register link */}
              <div className="text-center text-[gray] mt-3">
                <span>Already have an account? </span>
                <span>
                  <Link to={"/signin"} className="hover:text-primary transist">
                    Login
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

export default SignUp;
