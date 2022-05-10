import oneItem from '../styles/item/item.module.css'
import useFetch from './useFetch';

const Item = ({item,handleDelete}) => {


    return ( 
        <div className={oneItem.item}>
            <div>
                <h3>Name: {item?.title}</h3>
                <label>Expiry date — {item?.expiry}</label>
            </div>
            <div>
                <span>Expire</span>
                <button onClick={()=>handleDelete(item._id)}>Delete</button>
            </div>
        </div>
     );
}
 
export default Item;