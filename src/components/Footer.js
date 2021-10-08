import React from 'react'
import classes from './Footer.module.css'
function Footer() {
    return (
        <div className= {classes.footer}>
            <div>
                <ul className ={classes.menu}>
                    <li className ={classes.item}>Insta</li>
                    <li className ={classes.item}>Tweet</li>
                    <li className ={classes.item}>Whatsapp</li>
                </ul>
            </div>

            <div>
                <ul className ={classes.menu}>
                    <li className ={classes.item}>some</li>
                    <li className ={classes.item}>thing</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
