import React from "react";
import Godwit from '../images/updated_logo.png'
import {DirectionsBus, Headset, AccountCircle} from "@material-ui/icons"
import {Link} from "react-router-dom";

const HeaderPage = () => {

    return (
        <>
            <div className="border-b py-1">
                <nav className="w-90 mx-auto container mt-1">
                    <div className="flex items-center justify-between">
                    <div className="w-[11rem] ">
                   <a href="/"> <img src={Godwit} className="h-[4rem]" alt="Godwit Image" /> </a>
                    
                    </div>
                    <ul>
                        <li className="duration-500 hover:bg-[#ff1a4f] hover:text-white hover:border-2 hover:border-white rounded-xl px-5 py-5 font-medium cursor-pointer">
                            <DirectionsBus/>
                            Bus Tickets</li>
                    </ul>
                    
                        <ul className="flex items-center justify-between w-[20%]">
                            <li className="duration-500 hover:bg-[#ff1a4f] hover:text-white hover:border-2 hover:border-white rounded-xl px-5 py-5 font-medium cursor-pointer"> <Headset/> Help</li>
                            <li className="duration-500 hover:bg-[#ff1a4f] hover:text-white hover:border-2 hover:border-white rounded-xl px-5 py-5 font-medium cursor-pointer"> <AccountCircle/> Account</li>
                        </ul> 
                    
                    </div>
                </nav>
            </div>
        </>
    )

}

export default HeaderPage;