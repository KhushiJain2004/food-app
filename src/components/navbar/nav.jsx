// import {useState} from 'react'
import './nav.css';
import {image} from '../../assets/assets'
import {  Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
export default function Navbar()
{
    const navigate=useNavigate();
    const [nav,setNav]=useState('home');
    const {getUniqueItemCount}=useContext(CartContext);
    const count=getUniqueItemCount();
    return(
        <div className="navbar">
            <div className='logo'>
                MunchMate
            </div>
            <ul className='menu'>
                <Link to='/' className={nav==='home'?'active':''} onClick={()=>{setNav('home'); window.scrollTo(0,0)}}><li >Home</li></Link>
                <Link to='' className={nav==='menu'?'active':''} 
                onClick={()=>
                {
                    setNav('menu');
                    const element=document.getElementById('menuRef');
                    element?.scrollIntoView({behavior:'smooth'});
                }}
                ><li  >Menu</li></Link>
                <Link to='' className={nav==='contact'?'active':''} 
                onClick={()=>
                {
                    setNav('contact');
                    const element=document.getElementById('contactRef');
                    element?.scrollIntoView({behavior:'smooth'})
                }}
                ><li  >Contact Us</li></Link>
            </ul>
            <div className='right'>
                <img src={image.search} alt="" className='search'/>
                <div className='basket'>
                    <Link to='/cart' className={nav==='cart'?'active':''} onClick={()=>{setNav('cart'); window.scrollTo(0,20)}}>
                        <img src={image.cart} alt="" className='cart' />
                        {count > 0 && <div className='dot'>{count}</div>}
                    </Link>
                </div>
                <button className='signin' onClick={()=>navigate('/auth')}>Sign in</button>
            </div>
        </div>
    )
}