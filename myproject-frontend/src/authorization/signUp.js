import React, { useState } from "react";

const SignUp = () => {

const [userName, setUserName] =useState(false)
const [email, setEmail] =useState(false)
const [password, setPassword] =useState(false)

return(
    <>
    <div className="container w-1/2 mx-auto">
    <from>
          <div onClick={() => setUserName(!userName)}>
            <p className={` ${userName ? "text-sm mt-4 duration-500":"text-lg mt-3 duration-500"}`}>UserName</p>
            <input type="text" name="userName" className="outline-0 w-1/2"/>
          </div>
          <div onClick={() => setEmail(!email)}>
            <p className={` ${email ? "text-sm mt-4 duration-500":"text-lg mt-3 duration-500"}`}>Email</p>
            <input type="email" name="userName"  className="outline-0 w-1/2"/>
          </div>
          <div onClick={() => setPassword(!password)}>
            <p className={` ${password ? "text-sm mt-4 duration-500":"text-lg mt-3 duration-500"}`}>Password</p>
            <input type={`password`} name="userName" className="w-1/2 outline-0"/>
          </div>
          <button>Sign Up</button>
    </from>
    </div>
    </>
)

}

export default SignUp;