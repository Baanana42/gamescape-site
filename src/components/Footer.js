import React from 'react'

const Footer = () => {
    return (
        <div className='footer-wrapper container-fluid'>
            <div className='container'>
                <div className='footer-div1 d-flex justify-content-center'>
                    <p className='ft-text'>Home</p>
                </div>
                <div className='footer-div1 d-flex justify-content-center'>
                    <p className='ft-text'>Android Portfolio</p>
                </div>
                <div className='footer-div1 d-flex justify-content-center'>
                    <p className='ft-text'>About</p>
                </div>
                <div className='footer-div1 d-flex justify-content-center'>
                    <p className='ft-text'>Privacy</p>
                </div>
                <div className='footer-div1 d-flex justify-content-center'>
                    <p className='ft-text'>Contact</p>
                </div>

                <div className='footer-div2 d-flex justify-content-center'>
                    <img src="https://img.icons8.com/material-outlined/18/ffffff/facebook.png" alt='social' className='ft-social' />
                    <img src="https://img.icons8.com/material-outlined/18/ffffff/twitter.png" alt='social' className='ft-social' />
                    <img src="https://img.icons8.com/material-outlined/18/ffffff/youtube-play--v1.png" alt='social' className='ft-social' />
                    <img src="https://img.icons8.com/material-outlined/18/ffffff/instagram-new--v1.png" alt='social' className='ft-social' />
                    <img src="https://img.icons8.com/material-outlined/18/ffffff/twitch.png" alt='social' className='ft-social' />
                </div>

            </div>
            <div onClick={() => window.scrollTo(0,0)} className='backtotop'>^</div>

        </div>
    )
}

export default Footer