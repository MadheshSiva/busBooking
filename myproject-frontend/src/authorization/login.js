import React, { useState } from "react";
import Logo from "../images/godwitLogo.png";
import { Visibility ,VisibilityOff} from "@material-ui/icons";
import {ColorRing} from "react-loader-spinner"
const LoginPage = () => {
  const [text, setText] = useState(false);
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [passData, setPassData] = useState("");
  const [showpassData, setShowPassData] = useState(false);
  const [showpassErr, setShowPassErr] = useState(false);
const [passErr, setPassErr] = useState('')
const [loading, setLoading] = useState(false)

  const sizefix = () => {
    setText(!text);
    console.log(text);
  };
  
  const submitData = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(email, "email");
    console.log(passData, "password"); // Fixed this line
   if(passData.length >= 8) {
    setPassErr('Limit of 8 characters for input.') 
    setShowPassErr(true)
   } 
      setLoading(true)


  };
  

  const showPassword = () => {
    setShowPassData(!showpassData)
  }
   
  setTimeout( () => {
    setLoading(false)
    console.log('setTimeOut_fn')
  },2800)

  return (
    <div className="container mx-auto">
      <div className="mt-28">
        <img src={Logo} className="flex mx-auto w-10" alt="Logo" />
        <h1 className="font-semibold text-[#f52f7e] text-center text-4xl mb-5">Log in</h1>
        <div className="border w-2/5 mx-auto pl-5 pb-10 rounded-xl shadow-lg">
          <form onSubmit={submitData}>
            <div className={`border-b-2 w-3/4 ${text ? "border-[#f52f7e]" : "border-[#eed9e2] "}`} onClick={() => sizefix()}>
              <p className={`text-lg text-[#f52f7e] font-family Work Sans sans-serif ${text ? "  mt-4 duration-500 text-xs " : "  duration-500 mt-3 "} font-semibold mb-1`}>
                Email              </p>
              <input type="email" className="bg-white focus:ring-0 outline-0 w-52" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex items-center gap-6">
              <div className={`border-b-2 w-3/4 ${password ? "border-[#f52f7e] " : "border-[#eed9e2] "}`} onClick={() => setPassword(!password)}>
                <p className={`text-lg text-[#f52f7e] ${password ? "  mt-4 duration-500 text-xs " : "  duration-500 mt-3"} font-semibold mb-1`}>
                  Enter Password
                </p>
                <input type={showpassData ? "text" :"password"} className="bg-blue- focus:ring-0 outline-0 w-52 "  onChange={(e) => {setPassData(e.target.value);
               if( passData.length ==4){
                setShowPassErr(false)
               } 
                }} />
              </div>
              <div className="mt-auto cursor-pointer" onClick={() => showPassword()}>
              {showpassData ? <VisibilityOff className="text-[#f52f7e]"/> : <Visibility className="text-[#f52f7e]" />} 
              </div>
            </div>
            <div>
                {showpassErr?
                <div className="border mt-2 w-3/4 py-2 border-l-4 border-l-red-600 border-red-600 rounded-lg bg-red-50 ">
                <h1 className="text-red-500 text-sm ml-3">{passErr}</h1>
                </div>
                :""}
              </div>
            <div className="mt-10">
   
              <button type="submit" className={`border flex justify-between mx-auto rounded-xl px-5 py-1 font-semibold cursor-pointer duration-500 ${loading?"bg-white":"bg-[#f52f7e]"} text-[#ffb6c1] hover:border-[#f52f7e] hover:bg-white`}>
             {loading?
             <ColorRing
             visible={true}
             height="25"
             width="80"
             ariaLabel="blocks-loading"
             wrapperStyle={{}}
             wrapperClass="blocks-wrapper"
             colors={['#f52f7e', '#f52f7e', '#f52f7e', '#f52f7e', '#f52f7e']}
           />:""} 
             {loading? " ":"Login"}  </button> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
