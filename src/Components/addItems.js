import axios from "axios";

import { useState } from "react";
import { DatePicker } from 'antd';
import useFetch from "./useFetch";


const AddItems = () => {

    const [title, setTitle] = useState(null);
    const [expiry, setExpiry] = useState(null);

   
    const URL = 'https://thefridge-api.karapincha.io/fridge';

    const {reload,setReload, handleSubmit, changeReload} = useFetch(title,expiry)


    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     axios.post(URL,{
    //         title,
    //         expiry
    //     })
    //     .then((res)=> {
    //         setUpdated(!updated)
    //         console.log(res);
    //     })
    //     .catch((err)=> console.log(err))
    // }


    function setDate(date, dateString) {
        console.log(dateString);
        setExpiry(dateString)
    }


    const [d1, setd1] = useState(null);
    const [d2, setd2] = useState(null);
    const diffrence = () =>{
        if(d1 && d2){
            console.log(d1);
            console.log(d2);

            const dateOne = new Date(d1);
            const dateTwo = new Date(d2);

            console.log(dateOne);
            console.log(dateTwo);

            const time = Math.abs(dateTwo - dateOne);
            const days = Math.ceil(time / (1000 * 60 * 60 * 24));
            console.log(days);

        }

    }

    

    return ( 
        <div>
            <button onClick={()=>changeReload()}>asdasdas</button>
            <h4>Add Items</h4>
            <p>{title}</p>
            <p>{expiry}</p>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} required/>
                <DatePicker onChange={setDate} />
                {/* <input type="date" onChange={(e)=>setExpiry(e.target.value)} required/> */}
                <button>ADD TO FRIDGE</button>
            </form>

            <br />
            <div>
                <input type="date" onChange={(e)=>setd1(e.target.value)} />
                <input type="date" onChange={(e)=>setd2(e.target.value)} />
                <button onClick={diffrence}>Get</button>
            </div>
            
        </div>
     );
}
 
export default AddItems;