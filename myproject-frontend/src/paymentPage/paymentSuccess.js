import React, { useContext, useEffect, useState } from "react"
import SuccessGIF from "../images/Payment method success.gif"
import { Context } from "../App"
import { useSelector } from "react-redux"
import { deails } from '../feature/busDetails'
import {Email} from "@material-ui/icons"
import SuccessIcn from "../images/starSuccess.png"
const PaymentSuccess = () => {
    const [update] = useContext(Context)
    const [seats, setSeats] = useState()
    const cardData = useSelector((state) => state.bus.busData)
    useEffect(() => {
        setSeats(update)
    }, [update])
    console.log(seats, "datass")
    let seatNum = sessionStorage.getItem('seatNum')
    seatNum = JSON.parse(seatNum)
    let BusInfo = sessionStorage.getItem('InputFormDatas')
    BusInfo = JSON.parse(BusInfo)
    console.log(seatNum, BusInfo, "dataaa")
    let tripInfo = sessionStorage.getItem('BusInfo')
    tripInfo = JSON.parse(tripInfo)
    return (
        <>
            <div className="flex items-center mx-auto gap-2 py-2 bg-green-400 w-1/4 justify-center ">
                <h1 className="text-white text-lg">Payment Successful !</h1>
                <img src={SuccessIcn} className="w-10" />
            </div>
            <h1 className="text-center tracking-wider mt-4 font-semibold text-xl">Thank you! Your Payment of Rs. {tripInfo.price} has beed received.</h1>
            <h1 className="px-32 text-center mt-3 text-sm text-neutral-600">Thank you for choosing <span className="text-[#ff1a4f] font-semibold">Godwit</span> for your travel needs. We're excited to confirm that your payment has been successfully processed, and your booking is now complete. You're all set to embark on your journey with us!</h1>
            <div className="flex items-center">
                <div className="w-3/5  bg-neutral-100 h-[70vh] mt-2 flex items-center justify-center">
                    <div className="border border-[#ff1a4f] bg-[#ff1a4f] bg-opacity-[0.7] rounded-2xl w-2/5 px-3 py-3 shadow-[0_0_5px_1px_rgba(0,0,0,0.2)]">
                        <div className="flex items-center gap-2 ">
                            <h1 className="text-base text-white font-semibold">{tripInfo.busName}</h1>
                            <h1 className="text-sm text-white tracking-wider">{tripInfo.busType}</h1>
                        </div>
                        <div className="flex items-center gap-2 justify-between my-2">
                            <h1 className="text-base font-semibold">From</h1>
                            <h1 className="text-sm text-white tracking-wider font-semibold">{BusInfo.fromLocation}</h1>
                        </div>
                        <div className="flex items-center gap-2 justify-between my-2">
                            <h1 className="text-base font-semibold">To</h1>
                            <h1 className="text-sm text-white tracking-wider font-semibold">{BusInfo.toLocation}</h1>
                        </div>
                        <div className="flex items-center gap-2 justify-between my-2">
                            <h1 className="text-base font-semibold">Seat Number</h1>
                            <h1 className="text-sm text-white tracking-widest font-semibold">{seatNum.slice(10)}</h1>
                        </div>
                        <div className="flex items-center gap-2 justify-between my-2">
                            <h1 className="text-base font-semibold">Price</h1>
                            <h1 className="text-sm bg-[#ff1a4f] px-3 py-[0.05rem] rounded-lg"><sup className=" text-xs font-semibold text-white">₹</sup> <span className="text-xl font-semibold text-white">{tripInfo.price}</span></h1>
                        </div>
                    </div>
                </div>
                <div className="w-2/5">
                    <img src={SuccessGIF} />
                </div>

            </div>
            <div className="mb-4 flex justify-center items-center gap-2 mt-3">
                <h1 className="text-center text-neutral-500 font-semibold">Get your comfirmation ticket via your mail : </h1>
                <button className="text-[#ff1a4f] text-center hover:bg-neutral-200 px-2 hover:rounded-xl py-1"> Email <Email/></button>
            </div>
        </>
    )


}

export default PaymentSuccess;