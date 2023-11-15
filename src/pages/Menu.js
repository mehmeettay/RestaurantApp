import React from 'react'
import {MenuList1} from '../components/MenuList1'
function Menu() {
  return (
    
    <div className='menu'>
        <h1 className='MenuTitle'>Our Menu</h1>
        <div className='MenuList'>
            {MenuList1.map((menuItems,key)=>{
                return <div className='menuItem'>
                    <div> <img src={menuItems.Image}/> </div>
                    <h3>{menuItems.name}</h3>
                    <p>{menuItems.price} $ </p>

                </div>
                    
            })}
        </div>
    </div>
  )
}

export default Menu