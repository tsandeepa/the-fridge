const Item = ({item}) => {
    return ( 
        <div className=''>
            <div>
                <h3>Name: {item?.title}</h3>
                <label>Expiry date — {item?.expiry}</label>
            </div>
            <div>
                <span></span>
            </div>
        </div>
     );
}
 
export default Item;