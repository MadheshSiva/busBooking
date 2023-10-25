import React from "react";
import bgBusImg from "../images/bus_image.png"
import BusInputTab from "./BusInputTab";
import busVideo from '../images/bus_bg_video.mp4'
const BusSearch = () => {

return(
    <>
    <div className="relative ">
        <div className="w-full h-f">
        <video  autoPlay loop muted  className="h-full w-full"  >
        <source  src={busVideo}/>
       </video>
        </div>
       
        <div className="absolute top-5 w-full">
            <div className="">
            <BusInputTab/>
            </div>
         
    </div>
    </div>
    
    </>
)


}

export default BusSearch;