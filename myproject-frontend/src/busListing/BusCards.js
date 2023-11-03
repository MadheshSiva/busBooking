import React, { useEffect, useState , useContext} from "react";
import { DepartureBoard, LocationOn, StarBorder, PhoneAndroid, ConfirmationNumber, Power, BatteryChargingFull, WbIncandescent, GpsFixed, Usb, Close } from "@material-ui/icons"
import { useDispatch, useSelector } from 'react-redux'
import { dataThunk } from '../feature/busDataCard'
import axios from "axios";
import { Button } from "@mui/material"
import CCTV from "../images/CCTV.png"
import pillow from "../images/pillow.png"
import Blankets from "../images/Blankets.png"
import water from "../images/water.png"
import SeatsBooking from "./seatBooking";
import moment from "moment"
import BookingDetails from "./bookingDetails";
import {Context} from "../App"

import {deails} from '../feature/busDetails'
const BusCard = (props) => {

  const { datas } = props
  const [moreDeals, setMoreDeals] = useState(30)
  const [berth, setBerth] = useState(false)
  const [id, setId] = useState('')
  const [berthCount, setBerthCount] = useState('')
  let getLocation = sessionStorage.getItem('InputFormDatas')
  getLocation = JSON.parse(getLocation)
  //const dispatch = useDispatch()
  //         useEffect(() => {
  //            dispatch(dataThunk())
  // //            const getData = async() => {
  // // await axios.get(`http://localhost:3060/getCardDatas`).then( (response) => {
  // //                console.log(response.data,"level2check")
  // //          }).catch((error)=>{
  // //          console.log(error)
  // //          })
  // //            }
  // //           getData()
  //         },[])
  console.log(datas, "datas")
  let fromdatas = sessionStorage.getItem('InputFormDatas')
  fromdatas = JSON.parse(fromdatas)
  const [update,setUpdate] = useContext(Context)

  const dispatch = useDispatch()
const view  = useSelector( (state) => state.bus.busData )
  const viewSeats = (getDatas) => {
  console.log(getDatas,"seats") 
  getDatas.seatCount.length > 0 &&  setBerth(true)
  setId(getDatas._id)
  setBerthCount(getDatas)
  dispatch(deails(getDatas))
  console.log(getDatas,"getDatas")

  } 

  return (
    <div className="mb-6">
      {datas.data.slice(0, moreDeals).map((cardDatas, index) => (
        <div className="border bg-white relative w-full grid grid-rows-1 my-5 transition duration-300  hover:border-[#ec476e]  py-2 px-2 ">
          
          
            
          <div className="flex items-center ">
            <div className="w-1/4">
              <p className="text-[14px] font-bold">{cardDatas.busName}</p>
              <div className="flex items-center gap-2">
                <p className="text-[14px] ">{cardDatas.busType}</p>
                <p className="text-[14px] text-neutral-500 font-semibold">{cardDatas.layout}</p>
              </div>
              <div className="xl:w-[22%] 2xl:w-[17%] my-1 ">
                <span className="text-[13px] flex items-center bg-[#FFFFED]  text-black font-semibold rounded-lg">
                  <StarBorder className="text-[13px]" /> {cardDatas.rating}
                </span>

              </div>

            </div>
            <div className="w-[15%] flex items-center justify-end">
              
              <div >
              
                <p className="text-right text-[14px] font-semibold">{cardDatas.startTime}</p>

                <div className="flex items-center">
                  <LocationOn />
                  <p className="text-[14px] font-semibold text-yellow-400">{fromdatas.fromLocation}</p>
                </div>

              </div>

            </div>
            <div className="w-1/5 ">
              <div className="flex justify-center items-center ">
                <DepartureBoard />
                <p className="text-center text-xs">{cardDatas.duration}</p>
              </div>

              <p className="w-full h-[0.18rem]  border-transparent bg-gradient-to-r from-yellow-300 to-[#ff1a4f]"></p> 
              

            </div>
            <div className="w-1/5">
              <p className="text-[14px] font-semibold">{cardDatas.endTime}</p>
              <div className="flex items-center">
                <p className="text-[14px] font-semibold text-[#ff1a4f]">{fromdatas.toLocation}</p>
                <LocationOn />

              </div>

            </div>
            <div className="w-1/5 flex justify-center">
              <p className="text-[14px] font-semibold">₹ <span className="text-[20px] font-semibold">{cardDatas.price}</span> </p>
            </div>

          </div>
         
          <div className="relative">
            <p className="text-[14px] font-semibold">Amenities</p>
            {cardDatas.Amenities.map((amenities) => (
              <div className="w-[80%] grid grid-cols-3 items-center gap-1">
                {amenities.EMG_contact ? <p><PhoneAndroid /> <span className="text-[10px] text-neutral-400 hover:underline ">{amenities.EMG_contact}</span></p> : ""}
                {amenities.M_ticketStatus ? <p><ConfirmationNumber /> <span className="text-[10px] text-neutral-400 hover:underline">{amenities.M_ticketStatus}</span></p> : ""}
                {amenities.chargStatus ? <p><Power /> <span className="text-[10px] text-neutral-400 hover:underline">{amenities.chargStatus}</span></p> : ""}
                {amenities.readingLightStatus ? <p><WbIncandescent /> <span className="text-[10px] text-neutral-400 hover:underline">{amenities.readingLightStatus}</span></p> : ""}
                {amenities.trakingBusStatus ? <p><GpsFixed /> <span className="text-[10px] text-neutral-400 hover:underline">{amenities.trakingBusStatus}</span></p> : ""}
                {amenities.USBStatus ? <p><Usb /> <span className="text-[10px] text-neutral-400 hover:underline">{amenities.USBStatus}</span></p> : ""}
                {amenities.CCTVStatus ? <p className="flex items-center gap-1"><img src={CCTV} className="w-7 h-6" /> <span className="text-[10px] text-neutral-400 hover:underline">{amenities.CCTVStatus}</span></p> : ""}
                {amenities.bottleStatus ? <p className="flex items-center gap-1"><img src={water} className="w-7 h-6" /> <span className="text-[10px] text-neutral-400 hover:underline">{amenities.bottleStatus}</span></p> : ""}
                {amenities.pillowStatus ? <p className="flex items-center gap-1"><img src={pillow} className="w-7 h-6" /> <span className="text-[10px] text-neutral-400 hover:underline">{amenities.pillowStatus}</span></p> : ""}
                {amenities.blanketsStatus ? <p className="flex items-center gap-1"><img src={Blankets} className="w-7 h-6" /> <span className="text-[10px] text-neutral-400 hover:underline">{amenities.blanketsStatus}</span></p> : ""}
              </div>
            ))}
            
          </div>
        { berth !== true ? <div>
              <button className="absolute transition duration-300 bottom-0 right-0 border px-4 hover:bg-[#ff1a4f] border-[#ff1a4f] hover:text-white bg-white text-[#ff1a4f] text-sm py-[0.15rem]" onClick={()=>viewSeats(cardDatas)}>View Seats</button>
            </div> : 
            cardDatas._id == id &&
            <div>
              <button className="absolute  duration-100 top-56 right-1  border rounded-full text-[#ff1a4f] text-sm p-[0.20rem] hover:bg-[#ff1a4f] hover:text-white border-[#ff1a4f]" onClick={()=> {setBerth(false); setUpdate('')}}><Close/></button> </div>}
            
         { berth &&
        
        cardDatas._id == id &&
        <div className="flex">
          <div>
          <SeatsBooking berthCount={berthCount}/>
          </div>
          <div className="w-[48%]">
          <BookingDetails/>
          </div>
          </div>
         }  
        </div>
      ))}
      <div className="flex justify-center">
        <Button style={{ fontWeight: "bold", color: "#ff1a4f", border: "1px solid #ff1a4f" }} onClick={() => {
          setMoreDeals((datas) => datas + 10)
        }}>Show more</Button>
      </div>

    </div>
  )

}

export default BusCard;