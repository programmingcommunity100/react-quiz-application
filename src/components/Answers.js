import React from 'react'
import classes from "../styles/Answers.module.css"
import Checkbox from './Checkbox'

const Answers = () => {
    return (
        <>
            <div className={classes.answers}>
                <Checkbox
                    className={classes.answers}
                    text="Test answer"
                />
            </div>
        </>
    )
}

export default Answers
