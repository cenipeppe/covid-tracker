import React from 'react'

const Header = () => {
    const urlImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1200px-SARS-CoV-2_without_background.png'

    return (
        <div className='Header'>
            <img className='Header__img' src={urlImg} alt='covid19'/>
            <h1 className='Header__title'>COVID 19 - TRACKER</h1>
        </div>
    )
}

export default Header
