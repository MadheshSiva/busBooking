import React,{useContext, useEffect, useState} from "react"
import SuccessGIF from "../images/Payment method success.gif"
import { Context } from "../App"
import {useSelector} from "react-redux"
import {deails} from '../feature/busDetails'
import SuccessIcn from "../images/starSuccess.png"
const PaymentSuccess = () => {
const [update] = useContext(Context)
const [seats, setSeats] = useState()
const cardData = useSelector((state) => state.bus.busData)
useEffect( () => {
setSeats(update)
},[update])
console.log(seats,"datass")
let seatNum = sessionStorage.getItem('seatNum')
seatNum = JSON.parse(seatNum)
let BusInfo = sessionStorage.getItem('InputFormDatas')
BusInfo = JSON.parse(BusInfo)
console.log(seatNum,BusInfo,"dataaa")
let tripInfo = sessionStorage.getItem('BusInfo')
tripInfo = JSON.parse(tripInfo)
return(
    <>
    <div className="flex items-center mx-auto gap-2 py-2 bg-green-400 w-1/4 justify-center ">
      <h1 className="text-white text-lg">Payment Successfully Sent</h1>  
        <img src={SuccessIcn} className="w-10"/>
    </div>
    <div className="flex items-center">
        <div className="w-3/5 flex items-center justify-center">
         <div className="border rounded-lg w-1/3 px-3 py-2 shadow-[0_0_5px_1px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-2 ">
            <h1>{tripInfo.busName}</h1>
            <h1>{tripInfo.busType}</h1>
            </div> 
            <div className="flex items-center gap-2 justify-between my-1">   
            <h1>From</h1>
            <h1>{BusInfo.fromLocation}</h1>
            </div>
            <div className="flex items-center gap-2 justify-between my-1">
            <h1>To</h1>
            <h1>{BusInfo.toLocation}</h1>
            </div>
            <div className="flex items-center gap-2 justify-between my-1">
            <h1>Seat Number</h1>
            <h1>{seatNum.slice(10)}</h1>
            </div>
            <div className="flex items-center gap-2 justify-between my-1">
            <h1>Price</h1>
            <h1>{tripInfo.price}</h1>
            </div>
         </div>
        </div>
    <div className="w-2/5">
    <img src={SuccessGIF} />
    </div>
   
    </div>
    </>
)


}

export default PaymentSuccess;