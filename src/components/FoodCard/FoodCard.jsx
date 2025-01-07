/* eslint-disable react/prop-types */
import { useContext,useState ,useCallback} from 'react';
import { CartContext } from '../../context/CartContext';
// import  { FoodContext } from '../../context/FoodContext'
import {food_list} from '../../context/foodList'
import './FoodCard.css'
import  Pop  from '../pop-up/pop'

export default function FoodCard({foodId})
{
    // const list=useContext(FoodContext);
    const item=food_list.find((item)=>item.id===foodId);

    const {addToCart}=useContext(CartContext);
    const [isPopUpVisible, setPopUpVisible] = useState(false);

    const handleOpenPopUp = useCallback(() => {
        setPopUpVisible(true);
        setTimeout(() => {
            setPopUpVisible(false);
        }, 3000); // Pop-up will close after 3 seconds
    }, []);

    const handleAddToCart = useCallback(() => {
        try {
            addToCart({ id: foodId, name: item.name, image: item.image, price: item.price });
            handleOpenPopUp();
        } catch (error) {
            alert('Oops! There was an error, Try again!');
        }
    }, [addToCart, foodId, item, handleOpenPopUp]);

    return (
        <div className='container'>
            <div className='imgContainer'>
                <img src={item.image} alt="" className='image'/>
            </div>
            <div className='contentContainer'>
                <div className='name'>{item.name}</div>
                <div className='price'>Price: ₹ {item.price}</div>
                <button onClick={handleAddToCart} className='add'>Add to cart</button>
                <Pop isVisible={isPopUpVisible} onClose={() => setPopUpVisible(false)}>
                    <p>Item added successfully to the cart!</p>
                </Pop>
            </div>
        </div>
    )
}