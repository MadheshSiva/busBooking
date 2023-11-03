import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App"
import { useSelector } from "react-redux"
import moment from "moment";
import {Button} from "@mui/material"

const BookingDetails = () => {

    const [update] = useContext(Context)
    // setdatas(cardData)
    // setSeat(update)
    //console.log(update,"cardDattaa")
    const [sets, setSets] = useState()
    
    useEffect( () => {
        setSets(update)
    },[update])
     
    let busDrop = sessionStorage.getItem('InputFormDatas')
    busDrop = JSON.parse(busDrop)

    
    const cardData = useSelector((state) => state.bus.busData)
    // console.log(cardDatass,"cardDattaa")
    console.log(cardData, "cardDattaa")
    return (
        <>
            <div className="pl-3 mt-14">
                <h1 className="text-[15px] font-semibold">Pick Up & Drop Points</h1>
                <div className="w-full mt-2">
                    <div className="flex items-center gap-4">
                        <div className="">
                            <h1 className="capitalize text-sm text-neutral-500">{busDrop.fromBusName.toLowerCase()}</h1> {/*if you have fully capital letters like APPLY you couldn't change this format like Apple but you change that once you change the entire letter to lower case then you can change it. in here also same method used i changed the lowercase and used the css Capitalize  */}
                        </div>
                        <div>
                            <h1 className="text-sm text-neutral-500">{cardData.startTime}</h1>
                        </div>
                    </div>

                    <h1 className=" border-l-2 border-l-neutral-400 border-dotted  h-[3rem] w-1"></h1>
                    <div className="flex items-center gap-2">
                        <div className="">
                            <h1 className="capitalize text-sm  text-neutral-500">{busDrop.toBusName.toLowerCase()}</h1>
                        </div>
                        <div>
                            <h1 className="text-sm text-neutral-500">{cardData.endTime}</h1>
                        </div>
                        <h1 className="text-[#ff1a4f] font-semibold">({moment(busDrop.calendarInfo.slice(0,10)).format('DD MMM') })</h1>
                    </div>
                </div>

            </div>
            <div className="ml-3 mt-4 flex items-center justify-between py-3 border-t border-b">
                <h1 className=" text-[15px] text-neutral-800">Seat No.</h1>
                <h1 className="text-[14px]">{sets !== undefined && sets.length > 0 ? sets.slice(0,-1) : " "}</h1>
            </div>
            <div>
                <h1 className="font-semibold text-[15px] ml-3 mt-3">Fare Details</h1>
                <div className="ml-3 mt-2 flex items-center justify-between">
                    <h1 className="text-sm text-neutral-500">Amount</h1>
                    <h1 className="text-sm font-bold">INR {cardData.price}.00</h1>
                </div>
                <h1 className="text-[10px] ml-3 text-neutral-500">Taxes will be calculated during payment </h1>
            </div>
            <div className="mt-6 ml-3 flex justify-center">
                <Button style={{border: "1px solid #fa4d68", background:"#fa4d68", color:"white" , fontWeight :"bold"}}>Proceed to Book</Button>
            </div>
        </>
    )

}

export default BookingDetails