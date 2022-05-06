import axios from "axios";
import { useEffect, useState } from "react";
import itemsList from '../styles/itemsList/itemsList.module.css'
import Item from "./item";

const ItemsList = () => {
    
    const [data, setData] = useState();
    const [isLoading, setisLoading] = useState(false);
    const URL = 'https://thefridge-api.karapincha.io/fridge';
    
    useEffect(() => {
        setisLoading(true)
        axios.get(URL).then(response => {
            console.log(response.data)
            setData(response.data)
            setisLoading(false)
        });
    }, []);

    return ( 
        <div className={itemsList.list__contaainer}>
            <h4>Item List</h4>
            {isLoading && <div>LOADING</div>}

            {
                <div className={itemsList.list}>
                    {   data &&
                        data.map((item,i)=>(
                            <Item item={item} key={i}/>
                        ))
                    }
                </div>
            }
        </div>
     );
}
 
export default ItemsList;