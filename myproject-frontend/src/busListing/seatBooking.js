import React,{useState, useContext} from "react";
import BusWheel from "../images/busWheel.png"
import SleeperBerth from "../images/sleeperBerth.png"
import SeatingBerth from '../images/seatingBerth.png'
import {Context} from '../App'

const SeatsBooking = ({ berthCount }) => {
    console.log(berthCount, "berthCount")


    // for(let i= 1; i <= berthCount.numberOfBerth; i++ ) {
    //     numberOfBerth.push(i)
    // }


    const [update,setUpdate] = useContext(Context)

    const SeatandSleepeer = ({ berthCount }) => {
       
        const count = berthCount.numberOfBerth + berthCount.numberOfSeats
        console.log(count, "count")
        let numberOfSeat = [];
        for (let i = 1; i <= count; i++) {
            berthCount.numberOfSeats && numberOfSeat.push(i)
        }
        let seatCount;
        const seatNumber = (seatNum) => {
            
             
            setUpdate((prev) => prev += `${seatNum},`)
            console.log(update, "seatNum")
        }
        return (
            <>
                <h1 className="mt-4">Lower Deck</h1>
                <div className="border-l-4 border-black pl-2  flex">
                    <div>
                        <img src={BusWheel} className="w-5 h-5 -rotate-90" />

                    </div>
                    <div className="border-l pl-3 ml-1">
                        <div className="flex items-center my-2 gap-2">
                            {numberOfSeat.slice(0, 12).map((seats) => (
                                <div className="w-full cursor-pointer relative" onClick={() => seatNumber(`L${seats}`)}>
                                    <img src={SeatingBerth} className="w-7 h-7" />
                                    <p className="absolute top-[0.4rem] left-[0.28rem] text-[10px]">L{seats}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt-2 gap-2">
                            {numberOfSeat.slice(12, 24).map((seats) => (
                                <div className="w-full cursor-pointer  relative" onClick={() => seatNumber(`L${seats}`)}>
                                    <img src={SeatingBerth} className="w-7 h-7" />
                                    <p className="absolute top-[0.4rem] left-[0.23rem] text-[10px]">L{seats}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt-5 gap-2">
                            {numberOfSeat.slice(24, 30).map((seats) => (
                                <div className="w-full cursor-pointer relative" onClick={() => seatNumber(`L${seats}`)}>
                                    <img src={SleeperBerth} className="w-16 h-14" />
                                    <p className="absolute top-5 left-3 text-xs">L{seats}</p>
                                </div>
                            ))}
                        </div>



                    </div>
                </div>


                <h1 className="mt-6">Upper Deck</h1>
                <div className="border-l-4 border-black pl-2 flex">
                    <div>
                        <img src={BusWheel} className="w-5 h-5 -rotate-90" />

                    </div>
                    <div className="border-l pl-3 ml-1">
                        <div className="flex items-center mt- gap-2">
                            {numberOfSeat.slice(30, 36).map((seats) => (
                                <div className="w-full cursor-pointer relative" onClick={() => seatNumber(`U${seats}`)}>
                                    <img src={SleeperBerth} className="w-16 h-14" />
                                    <p className="absolute top-5 left-3 text-xs">U{seats}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt- gap-2">
                            {numberOfSeat.slice(36, 42).map((seats) => (
                                <div className="w-full cursor-pointer relative " onClick={() => seatNumber(`U${seats}`)}>
                                    <img src={SleeperBerth} className="w-16 h-14" />
                                    <p className="absolute top-5 left-3 text-xs">U{seats}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt-1 gap-2">
                            {numberOfSeat.slice(42, 48).map((seats) => (
                                <div className="w-full cursor-pointer relative" onClick={() => seatNumber(`U${seats}`)}>
                                    <img src={SleeperBerth} className="w-16 h-14" />
                                    <p className="absolute top-5 left-3 text-xs">U{seats}</p>
                                </div>
                            ))}
                        </div>



                    </div>
                </div>

            </>
        )
    }

    const Sleeper = ({ sleeper }) => {
        
        console.log(sleeper, "sleeperr")
        let berthCount = []
        for (let i = 1; i <= sleeper.numberOfBerth; i++) {
            berthCount.push(i)
        }
        let seatCount
        const seatNumber = (seatNum) => {
            console.log(seatNum, "seatNum")
            
            //seatCount+=seatNum
            setUpdate((prev) => prev += `${seatNum},`)
        }
        return (
            <>
                <h1 className="mt-4">Lower Deck</h1>
                <div className="border-l-4 border-black pl-2 flex">
                    <div>
                        <img src={BusWheel} className="w-5 h-5 -rotate-90" />

                    </div>
                    <div className="border-l pl-3 ml-1">
                        <div className="flex items-center  gap-2">
                            {berthCount.slice(0, 7).map((seats) => (
                                <div className="w-full  relative cursor-pointer   " onClick={() => seatNumber(`L${seats}`)}>
                                    <img src={SleeperBerth} className="w-12 h-10" />
                                    <p className="absolute top-3 left-2 text-xs">L{seats}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center  gap-2">
                            {berthCount.slice(7, 14).map((seats) => (
                                <div className="w-full cursor-pointer relative" onClick={() => seatNumber(`L${seats}`)}>
                                    <img src={SleeperBerth} className="w-12 h-10" />
                                    <p className="absolute top-3 left-2 text-xs">L{seats}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt-5 gap-2">
                            {berthCount.slice(14, 21).map((seats) => (
                                <div className="w-full cursor-pointer relative" onClick={() => seatNumber(`L${seats}`)}>
                                    <img src={SleeperBerth} className="w-12 h-10" />
                                    <p className="absolute top-3 left-2 text-xs">L{seats}</p>
                                </div>
                            ))}
                        </div>



                    </div>
                </div>


                <h1 className="mt-6">Upper Deck</h1>
                <div className="border-l-4 border-black pl-2 flex">
                    <div>
                        <img src={BusWheel} className="w-5 h-5 -rotate-90" />

                    </div>
                    <div className="border-l pl-3 ml-1">
                        <div className="flex items-center mt- gap-2">
                            {berthCount.slice(21, 28).map((seats) => (
                                <div className="w-full cursor-pointer relative" onClick={() => seatNumber(`U${seats}`)}>
                                    <img src={SleeperBerth} className="w-12 h-10" />
                                    <p className="absolute top-3 left-2 text-xs">U{seats}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt- gap-2">
                            {berthCount.slice(28, 35).map((seats) => (
                                <div className="w-full cursor-pointer relative " onClick={() => seatNumber(`U${seats}`)}>
                                    <img src={SleeperBerth} className="w-12 h-10 " />
                                    <p className="absolute top-3 left-2 text-xs ">U{seats}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt-5 gap-2">
                            {berthCount.slice(35, 42).map((seats) => (
                                <div className="w-full cursor-pointer  relative" onClick={() => seatNumber(`U${seats}`)}>
                                    <img src={SleeperBerth} className="w-12 h-10" />
                                    <p className="absolute top-3 left-2 text-xs">U{seats}</p>
                                </div>
                            ))}
                        </div>



                    </div>
                </div>
            </>
        )

    }

    return (
        <>
            {berthCount.numberOfBerth + berthCount.numberOfSeats == 48 && <SeatandSleepeer berthCount={berthCount} />}
            {berthCount.numberOfBerth == 42 && <Sleeper sleeper={berthCount} />}
        </>
    )
}

export default SeatsBooking;