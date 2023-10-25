import React,{useEffect} from "react";
import BusCard from "./BusCards";
import { useParams } from 'react-router-dom';
import BusnavTap from "./BusnavTaps";
import {dataThunk} from '../feature/busDataCard'
import {useDispatch,useSelector} from 'react-redux'
const BusListingPage = () => {
const {fromTo} = useParams()
console.log(fromTo)

const dispatch = useDispatch()

useEffect(()=>{
dispatch(dataThunk())


},[])

const cardData = useSelector( (state) => {
return state.card
})
return(
    <div className="bg-neutral-50">
    <div className="flex w-[90%] mx-auto  ">
        
        <div className="w-[25%]">
            <BusnavTap/>
        </div>
        
        <div className="w-[75%]">
        <BusCard  datas={cardData}/>
      
        </div>
        
    </div>
    </div>
)


}

export default BusListingPage;