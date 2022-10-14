import React from 'react';
import "./Style/style.scss";

export  function Menu() {
  return (
    <div className='menu'>
        <div className='continer'>
                <div className='items'>
                    <div className='sec1'>
                        <p>LOGO</p>
                    </div>
                    <div className='sec2'>
                        <p>HOME</p>
                        <p>ABOUT</p>
                        <p>SERVICES</p>
                        <p>CONTACT</p>
                    </div>
                </div>
        </div>
    </div>
  )
}
