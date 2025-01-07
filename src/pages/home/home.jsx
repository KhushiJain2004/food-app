import MenuItems from '../../components/menuItems/MenuItems'
import './home.css'
import MenuDisplay from '../../components/menuDisplay/menuDisplay'
import { useState } from 'react';
import Footer from '../../components/Footer/Footer.jsx'


// import {image} from '../../assets/assets'

export default function Home()
{
    // const menuRef=useRef(null);
    const [category,setCategory]=useState('all');
    return(
        <div>
            <div className='header' >
                <div className='content' id='header'>
                <span>Discover Deliciousness at Your Fingertips!</span>
                <button onClick={()=>{
                const element=document.getElementById('menuRef');
                element?.scrollIntoView(
                    {behavior:'smooth'
                    }
                )}}>Order Now</button>
                </div>
            </div>
                <MenuItems  setCategory={setCategory}/>
                <MenuDisplay category={category}/>

            <Footer/>
        </div>
    )
}