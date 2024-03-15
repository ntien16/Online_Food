import React, {useState,useEffect}from 'react';

function Clock(props) {
    let [days,setDays]=useState();
    let [hours,setHours]=useState();
    let [minutes,setMinutes]=useState();
    let [seconds,setSeconds]=useState();
    let interval;
    let CountDown=()=>{
        let destination=new Date('Aug 30,2023').getTime();
        interval=setInterval(() => {
            let now=new Date().getTime();
            let different=destination-now;
            let days=Math.floor(different/(1000*60*60*24))

            let hours =Math.floor(different %(1000*60*60*24)/(1000*60*60))
            let minutes =Math.floor(different %(1000*60*60)/(1000*60))
            let seconds=Math.floor(different %(1000*60)/1000)
            if(destination<0)clearInterval(interval.current)
            else
        {
            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)    
        }
        }, interval);
    }

    useEffect(()=>{
        CountDown();
    },[])
    return (
        <div className='clock_wrapper d-flex align-items-center gap-5'>
            <div className='clock_data d-flex align-items-center gap-5'>
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{days}</h1>
                    <h1 className='text-white fs-6'>Days</h1>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>
            <div className='clock_data d-flex align-items-center gap-5'>
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{hours}</h1>
                    <h1 className='text-white fs-6'>Hours</h1>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>
            <div className='clock_data d-flex align-items-center gap-5'>
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{minutes}</h1>
                    <h1 className='text-white fs-6'>Minutes</h1>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>
            <div className='clock_data d-flex align-items-center gap-5'>
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{seconds}</h1>
                    <h1 className='text-white fs-6'>Seconds</h1>
                </div>
               
            </div>
        </div>
    );
}

export default Clock;