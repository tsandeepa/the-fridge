import axios from "axios";
import { useEffect, useState } from "react";
import itemsList from '../styles/itemsList/itemsList.module.css'
import Item from "./item";
import useFetch from "./useFetch";

const ItemsList = () => {
    
    // const [data, setData] = useState();
    // const [isLoading, setisLoading] = useState(false);
    // const URL = 'https://thefridge-api.karapincha.io/fridge/';
    
    // useEffect(() => {
    //     setisLoading(true)
    //     axios.get(URL).then(response => {
    //         console.log(response.data)
    //         setData(response.data)
    //         setisLoading(false)
    //     });
    // }, []);

    
    // const handleDelete = (id) =>{
    //         console.log(id);
    //         axios.delete(URL+id).then(res=> console.log(res))
    // }

    const {data, isLoading, reload ,handleDelete,getData} = useFetch()

    
    useEffect(() => {
        getData()
        console.log('called ufe');
    }, [reload]);

    return ( 
        <div className={itemsList.list__contaainer}>
            {isLoading && <div>LOADING</div>}
            {
                <div className={itemsList.list}>
                    {   data &&
                        data.map((item,i)=>(
                            // <Item item={item} handleDelete={handleDelete} key={i}/>
                            <Item handleDelete={handleDelete} item={item} key={i}/>
                        ))
                    }
                </div>
            }
        </div>
     );
}
 
export default ItemsList;