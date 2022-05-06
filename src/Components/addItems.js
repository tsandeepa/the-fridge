import axios from "axios";
import { useState } from "react";

const AddItems = () => {

    const [title, setTitle] = useState(null);
    const [expiry, setExpiry] = useState(null);
    const [createdAt, setCreatedAt] = useState(null);
    const [updatedtAt, setUpdatedtAt] = useState(null);
    const URL = 'https://thefridge-api.karapincha.io/fridge';


    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(URL,{
            title,
            expiry
        })
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
    }


    return ( 
        <div>
            <h4>Add Items</h4>
            <p>{title}</p>
            <p>{expiry}</p>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} required/>
                <input type="text" onChange={(e)=>setExpiry(e.target.value)} required/>
                <button>ADD TO FRIDGE</button>
            </form>
            
        </div>
     );
}
 
export default AddItems;