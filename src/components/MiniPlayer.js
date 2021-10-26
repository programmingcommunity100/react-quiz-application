import React from 'react'
import classes from "../styles/MiniPlayer.module.css"
import image from "../assets/images/3.jpg"

const MiniPlayer = () => {
    return (
        <>
            <div class={`${classes.miniPlayer} ${classes.floatingBtn}`}>classes
                <span class={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
                <span class={`material-icons-outlined ${classes.close}`}> close </span>
                <img src={image} alt="Alt tag" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            </div>
        </>
    )
}

export default MiniPlayer
