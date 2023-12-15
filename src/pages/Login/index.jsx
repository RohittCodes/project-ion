import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import Cookies from "js-cookie";
import { useAuth } from "../../AuthContext";



const Login = () => {
  const navigate = useNavigate();
  const {login,logUser} = useAuth()
  useEffect(() => {
    let logStatus = Cookies.get("Login");
    if (logStatus) {
      navigate("/");
    }
  }, []);

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  const [status, setStatus] = useState(true);
  const [data, setData] = useState({
    collegename: "",
    state: "",
    city: "",
    email: "",
    password: "",
  });
  const [pass, setPass] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [loader, setLoader] = useState(false);
  const [position, setPos] = useState("Admin");

  const setCollege = (e) => {
    data.collegename = e.target.value;
  };

  const setState = (e) => {
    data.state = e.target.value;
  };

  const setCity = (e) => {
    data.city = e.target.value;
  };
  const setEmail = (e) => {
    data.email = e.target.value;
  };
  const setPassword = (e) => {
    data.password = e.target.value;
  };
  const setConPassword = (e) => {
    setPass(e.target.value);
  };

  const setLogin = (e) => {
    setStatus(false);
    setErrorStatus(false);
  };
  const setSignup = () => {
    setStatus(true);
    setErrorStatus(false);
  };
  const SubmitForm = (e) => {
    e.preventDefault();
  };
  const setRegister = async () => {
    setLoader(true);
    if (pass === data.password) {
      let url = "http://localhost:3001/adminReg";
      console.log(data);
      let requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      console.log(requestOptions);
      const res = await fetch(url, requestOptions);
      const data1 = await res.json();
      if (res.status == 400) {
        setErrorStatus(true);
        setError(data1);
      } else {
        setErrorStatus(false);
        setStatus(false);
      }
      console.log(data1);
    } else {
      alert("Password must be same");
    }
    setLoader(false);
  };
  const loginEmail = (e) => {
    loginData.email = e.target.value;
  };
  const loginPass = (e) => {
    loginData.password = e.target.value;
  };

  const setPosition = (e) => {
    setPos(e.target.value);
  };

  const goLogin = async () => {
    setLoader(true);
    if(position == "Admin"){
      let url = "http://localhost:3001/adminLog";
      let requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      };
      console.log(loginData)
      const res = await fetch(url, requestOptions);
      
      const data1 = await res.json();
     
      if (res.status == 400) {
        setErrorStatus(true);
        setError(res);
      } else {
        setErrorStatus(false);
        console.log("Comming");
        Cookies.set("Auth", "/admin", { expires: 7 });
        Cookies.set("Login", true, { expires: 7 });
        
        navigate("/admin");
      }
    }else{
          let url = "http://localhost:3001/studentLog"
          let requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
          };
          const res = await fetch(url, requestOptions);
          const data1 = await res.json();
          if (res.status == 400) {
            setErrorStatus(true);
            setError(data1);
          } else {
            console.log(data1.name)
            setErrorStatus(false);
            Cookies.set("Auth", "/student", { expires: 7 });
            Cookies.set('User',data1.name,{expires:7})
            Cookies.set("Login", true, { expires: 7 });
            login(data1)
            
            navigate("/student");
            
          }
    }
    
    setLoader(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div style={{ color: "white" }}>
        {loader ? (
          <Triangle
            height="80"
            width="80"
            color="white"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <form
            onSubmit={SubmitForm}
            style={{
              borderStyle: "inset",
              borderWidth: "1px",
              borderColor: "white",
              borderRadius: "12px",
            }}
            className="p-5"
          >
            <div style={{ textAlign: "center" }}>
              <button
                className={`btn ${
                  status ? "btn-light" : "btn-outline-light"
                } mb-3 pl-5 pr-5`}
                onClick={setSignup}
              >
                Signup
              </button>
              <button
                className={`btn ${
                  !status ? "btn-light" : "btn-outline-light"
                } mb-3 ml-3 pl-5 pr-5`}
                onClick={setLogin}
              >
                Loin
              </button>
            </div>

            {status ? (
              <div>
                <input
                  type="text"
                  className="form-control mb-4  mt-3"
                  onChange={setCollege}
                  placeholder="College Name"
                />
                <select className="mb-4 form-control" onChange={setState}>
                  {indianStates.map((each) => (
                    <option>{each}</option>
                  ))}
                </select>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="City"
                  onChange={setCity}
                />
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Email"
                  onChange={setEmail}
                />
                <input
                  type="password"
                  className="form-control mb-4"
                  placeholder="Password"
                  onChange={setPassword}
                />
                <input
                  type="password"
                  className="form-control mb-4"
                  placeholder="Confirm Password"
                  onChange={setConPassword}
                />
                <div style={{ textAlign: "center" }}>
                  <button
                    className="btn btn-outline-light"
                    onClick={setRegister}
                  >
                    Register
                  </button>
                </div>
                {errorStatus && (
                  <p
                    style={{ color: "white", textAlign: "center" }}
                    className="mt-3"
                  >
                    {error}
                  </p>
                )}
              </div>
            ) : (
              <div style={{width:'40vh'}}>
                <label>Role</label>
                <select className="form-control" onChange={setPosition}>
                  <option>Admin</option>
                  <option>Student</option>
                </select>
                <label className="mt-3">Enter Email</label>
                <input
                  type="text"
                  className="form-control mb-3 "
                  placeholder="Email"
                  onChange={loginEmail}
                />
                <label className="mt-3">Enter Password</label>
                <input
                  type="password"
                  className="form-control mb-4"
                  placeholder="Password"
                  onChange={loginPass}
                />
                <div style={{ textAlign: "center" }}>
                  <button className="btn btn-outline-light" onClick={goLogin}>
                    LOGIN
                  </button>
                </div>
                {errorStatus && (
                  <p style={{ color: "white", textAlign: "center" }}>{error}</p>
                )}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
