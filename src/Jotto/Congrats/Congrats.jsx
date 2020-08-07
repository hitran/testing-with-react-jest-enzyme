import React from 'react'
import PropTypes from 'prop-types';

/**
 * React functional component to render congratulations message
 * @param {object} props
 * @returns {JSX.Element} 
 */
const Congrats = ({success}) => {
    if (success) {
        return (
            <div data-test="component-congrats">
                <div data-test="congrats-message">
                    Congratulations! You guessed the word!
                </div>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        )
    }
}

export default Congrats

Congrats.propTypes = {
    success : PropTypes.bool
}