import { CartContext } from '../../context/CartContext';
import './cart.css'
// import useCart from '../../context/CartContext';
import { useContext } from 'react';

export default function Cart()
{
    const {cart,decreaseQuantity,removeFromCart,increaseQuantity}=useContext(CartContext);


    var total=0;
    if(cart.length!=0)
        {
            cart.map(item=>
                {
                    total+=item.price*item.quantity;
                }
            );
        }
    return(
        <div className='cartContainer'>
            {cart.length==0?
            (
                <h2>Oops!Your Cart is empty</h2>
            ):
            (
                <>
                <table className='table'> 
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    {cart.map((item)=>
                    {
                        return(
                            <tbody key={item.id}>
                               
                                <tr >
                                    <td><img src={item.image} alt="" className='itemImage'/></td>
                                    <td>{item.name}</td>
                                    <td>₹ {item.price}</td>
                                    <td className='quantity'>
                                    <span className='quant minus' onClick={()=>decreaseQuantity(item.id)}>-</span>
                                    {item.quantity}
                                    <span className='quant plus' onClick={()=>increaseQuantity(item.id)}>+</span>
                                    </td>
                                    <td>₹ {item.price*item.quantity}</td>
                                    <td><button onClick={()=>{
                                        removeFromCart(item.id);
                                        }}>Remove</button></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
                <div className='cartTotal'>
                    <h3>Cart Total</h3>
                    <div className="details">
                        <p>Total :</p>
                        <p>₹ {total}</p>
                    </div>
                    <div className="details">
                        <p>Delivery Fee :</p>
                        <p>₹ {20}</p>
                    </div>
                    <hr className='break' />
                    <div className="details">
                        <p className='grand'> Grand Total : </p>
                        <p>₹ {total+20}</p>
                    </div>
                    <button>
                        Proceed To Payment
                    </button>
                </div>
                </>

            )
        }

        </div>
    )
}