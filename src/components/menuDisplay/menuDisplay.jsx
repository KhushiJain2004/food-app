/* eslint-disable react/prop-types */
// import  { FoodContext } from '../../context/FoodContext'
import FoodCard from '../FoodCard/FoodCard';
import {useMemo} from 'react';
import './MenuDisplay.css'
import {food_list} from '../../context/foodList'

export default function MenuDisplay({category})
{
    // const foodList=useContext(FoodContext);
   const filtered_list=useMemo(()=>
    {
        console.log('menu');
        if (category === 'all') {
            return food_list;   
        }
        return food_list.filter(item => item.category === category);
       
    }
    ,[category]);
    return(
        <div className='menu-display'>
            {filtered_list.map((item)=>
            {
                return(<FoodCard key={item.id} foodId={item.id}/>)
            })}
        </div>
    )
}