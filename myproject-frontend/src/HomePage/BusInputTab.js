import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import {Warning,EventBusy} from "@material-ui/icons"
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './CustomDatePicker.css'
import { useNavigate } from "react-router-dom";
import searchDatad from "../data/search.json"
import {DirectionsBus} from "@material-ui/icons"
import {useDispatch,useSelector} from "react-redux"

const BusInputTab = () => {
    const [date, setDate] = useState(null);
    const [focused, setFocused] = useState(false);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const [searchData, setSearchData] = useState(searchDatad);
    const [inputData, setInputData] = useState('');
    const [inputToData, setInputToData] = useState('');
    const [fromMenu, setFromMenu] = useState(false);
    const [toMenu, setToMenu] = useState(false);
    const [errMsgFrom , setErrMsgFrom] = useState('')
    const [errMsgTo , setErrMsgTo] = useState('')
    const [errMsgCal , setErrMsgCal] = useState('')

      const navigation = useNavigate()

    const handleDateFocusChange = () => {
        setFocused(!focused);
    };

        useEffect( () => {
             const filterSearchData = searchData.filter( (findData) => 
             {
                return findData.Stop.match(from)
            })

             console.log(filterSearchData,"filterSearchData")
        },[])
        const [fromBus, setFromBus] = useState()
        const [toBus, setToBus] = useState()

        const choosedMenudata = (getData) => {
        
              setFrom(getData.Stop)
              setFromBus(getData.busStand)
              if(from.length > 1){
                setErrMsgFrom('')
              }
              console.log(inputData,"inputData")
        }

        const choosedToMenudata = (getData) => {
           
            setTo(getData.Stop)
            setToBus(getData.busStand)
            console.log(to,"inputData")
            if (to.length > 1) {
                setErrMsgTo('')
            }
      }

      
    
       const submitInputDatas = (event) => {
                 event.preventDefault()
                 console.log(from,"from")
                 const InputFormDatas = {
                    fromLocation : from,
                    toLocation : to,
                    fromBusName : fromBus,
                    toBusName : toBus,
                    calendarInfo : date
                    
                 }
                 if(from == "" ){
                    console.log(from,"fromData")
                    setErrMsgFrom('Please choose from Location')
                    
                 }
                 if(to == "") {
                     setErrMsgTo('Please choose to Location')
                  }
                  if (from == '' && to == '') {
                    setErrMsgFrom('Please choose from Location')
                    setErrMsgTo('Please choose to Location')
                  }
                 if((from!== '' && to!== "") && from == to) {
                    setErrMsgFrom(`Don't set from and to location as same`)
                    setErrMsgTo(`Don't set from and to location as same`)
                  }
                 if (date == null) {
                     setErrMsgCal('Please Choose a date for your trip')
                  }
                  if (from !== '' && to!=='' && from !== to  && date !== null){
                    sessionStorage.setItem('InputFormDatas',JSON.stringify(InputFormDatas))
                    const url = `/busListing`
                    navigation(`${url}`)
                  }
                  
                 console.log(InputFormDatas,"InputFormDatas")
                 console.log(errMsgCal,"errMsgCal")
       }

    console.log(date, "datee")
    console.log(to,"tooooo")
    return (
        <div className="w-full mx-auto mt-16">
            <div className="w-[90%] mx-auto">
                <form className="flex items-center py-1" onSubmit={submitInputDatas}>
                    <div className="bg-white relative w-[30%] py-[0.56rem]">
                        <div className="ml-2">
                            <p>From</p>
                            <input
                                type="text"
                                className="capitalize outline-0 text-[20px] w-4/5 font-semibold cursor-pointer"
                                placeholder="Departure City"
                                onChange={
                                    (evet) => 
                                    {
                                    setFrom(evet.target.value) 
                                // if(from.length === 4){
                                //     setInputData('')
                               // }
                            }
                                }
                                value={  from }
                               onKeyDown={(event) => {
                                if(event.key === 'Backspace'){
                                  setInputData('')
                                }
                               }} 
                               onClick={() => setFromMenu(!fromMenu)}
                            />
                        </div>
                       {!!errMsgFrom && <p className="absolute top-20 flex items-center  text-yellow-500  border-2 border-yellow-400 rounded-lg px-1 py-1 bg-yellow-100"><Warning/>  {errMsgFrom}</p>} 
                       {fromMenu ?  <div className="absolute top-20">
                            <div className="pr-2 h-[23rem] bg-white  rounded-lg shadow-[0_0_5px_1px_rgba(0,0,0,0.2)]">
                                <div className="border h-full overflow-y-auto rounded-lg ">
                                    {searchData.map((seachedData) => (
                                        <div className="flex items-center gap-2 border-b mx-2 cursor-pointer" onClick={ () => choosedMenudata(seachedData)}>
                                            <DirectionsBus className="text-[#ff1a4f]" />
                                            <div>
                                                <p className="mt-1 font-semibold">{seachedData.Stop}</p>
                                                <p className="text-xs mt-1">{seachedData.busStand}</p>
                                                <p className="mt-1 font-semibold">{seachedData.State}</p>
                                                
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> : "" } 

                    </div>
                    <div className="bg-white w-[30%] relative py-[0.3rem]">
                        <div className="border-l-2 my-1 border-[#ff1a4f]">
                            <p className="ml-2">To</p>
                            <input
                                type="text"
                                className="outline-0 text-[20px] ml-2 w-4/5 font-semibold cursor-pointer"
                                placeholder="Arrival City"
                                onChange={(evet) => {setTo(evet.target.value)
                                    console.log(to,"tooooooo")
                                    if(evet.target.value.length < 1) {
                                        setErrMsgTo('')
                                        console.log(errMsgTo,"onChangeToo")
                                    }
                                
                                
                                }}
                                onKeyDown={(event) => {
                                    console.log(event,"keyboardKey")
                                    if (event.key === 'Backspace') {
                                      setInputToData('');
                                    }
                                  }}
                                value={ to}
                                onClick={() => setToMenu(!toMenu)}
                            />
                        </div>
                       {!!errMsgTo && <p className="absolute top-20 flex items-center  text-yellow-500  border-2 border-yellow-400 rounded-lg px-1 py-1 bg-yellow-100"><Warning/>  {errMsgTo}</p>} 
                      {toMenu ? <div className="absolute top-20">
                            <div className="pr-2 h-[23rem] bg-white  rounded-lg shadow-[0_0_5px_1px_rgba(0,0,0,0.2)]">
                                <div className="border h-full overflow-y-auto rounded-lg ">
                                    {searchData.map((seachedData) => (
                                        <div className="flex items-center gap-2 border-b mx-2 cursor-pointer" onClick={ () => choosedToMenudata(seachedData)}>
                                            <DirectionsBus className="text-[#ff1a4f]" />
                                            <div>
                                                <p className="mt-1 font-semibold">{seachedData.Stop}</p>
                                                <p className="mt-1 text-xs">{seachedData.busStand}</p>
                                                <p className="mt-1 font-semibold">{seachedData.State}</p>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> : "" }  
                    </div>
                    <div className="w-[20%]">
                        <div className="bg-white p-[0.3rem] py-[13px]">

                            <SingleDatePicker
                                date={date}
                                onDateChange={(date) => {
                                    setDate(date);
                                }}
                                onFocusChange={handleDateFocusChange}
                                focused={focused}
                                noBorder
                                hideKeyboardShortcutsPanel
                                showClearDate
                                reopenPickerOnClearDate
                                verticalHeight={630}
                                calendarInfoPosition="bottom"
                                placeholder="Fix a date"
                                isTodayEnabled
                                numberOfMonths={1}
                                block
                                showClearDates
                            />
                        </div>
                       {!!errMsgCal && <p className="absolute top-5 border-2 border-yellow-400 bg-yellow-100 px-1 py-1 rounded-lg text-yellow-500"><EventBusy/> { errMsgCal}</p>}  
                    </div>
                    <div className="w-[20%] py-1 px-1 bg-white">
                    <Button className="w-full text-xl text-center hover:bg-black" onClick={submitInputDatas} variant="contained" style={{ color: "#ff1a4f", fontWeight: "bold", padding: "18px 0px", background: "white", borderRadius: "0px", boxShadow:"none" , transition:"background-color 0.3s" , border:"2px solid #ff1a4f" }}
                    onMouseEnter={(e) => (e.target.style.background = "#ff1a4f", e.target.style.color = 'white') }
                    onMouseLeave={ (e) => (e.target.style.background = 'white', e.target.style.color = '#ff1a4f' )}
                    >search</Button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default BusInputTab;
