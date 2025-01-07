/* eslint-disable react/prop-types */
import './MenuItems.css';
import { menu_list } from '../../assets/assets';

export default function MenuItems({setCategory})
{   
    return (
        <div id='menuRef'>
        <div className="menuList" >
            <h1 className='heading' >Expore Our Menu</h1>
            <div className='list' >
            {menu_list.map((item,index)=>
            {
                return(
                    <div key={index} className="item" onClick={()=>setCategory(item.category) } >
                        <img src={item.menu_image} alt=""  />
                        <p>{item.menu_item}</p>
                    </div>
                )
            })}
            </div>
            <hr />
        </div>
        </div>
    )
}