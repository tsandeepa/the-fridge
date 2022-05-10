import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (title,expiry) => {

    const [data, setData] = useState();
    const [reload, setReload] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const URL = 'https://thefridge-api.karapincha.io/fridge/';
    
    // useEffect(() => {
        
        
    // }, [reload]);

    const getData = () =>{
        setisLoading(true)
        axios.get(URL).then(response => {
            console.log(response.data)
            setData(response.data)
            setisLoading(false)
        });
    }

    const changeReload = () =>{
        setReload(!reload)
        getData()

        console.log('reload called');
    }

    const handleDelete = (id) =>{
        setisLoading(true)
        console.log(id);
        axios.delete(URL+id).then(res=> {
            console.log(res)
            setReload(!reload)
            getData()

            console.log(reload);
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(URL,{
            title,
            expiry
        })
        .then(res => {
            console.log(res.status)
            setTimeout(() => {
                getData()
                console.log('timeot called');
            }, 5000);
            setReload(!reload)
            console.log(reload + ' added');

        })
        .catch((err)=> console.log(err))
    }
    
    

    


    

        

    



    return {data, isLoading, handleDelete, handleSubmit, reload, setReload, changeReload, getData}
}

export default useFetch;
