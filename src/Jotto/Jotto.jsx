import React from 'react'

import Congrats from './Congrats/Congrats'
import GuessedWords from './GuessedWords/GuessedWords'

class Jotto extends React.Component {
    
    render() {
        return (
            <div className="container" data-test="component-jotto">
                <h1>This is Jotto App</h1>
                <Congrats success = { true }/>
                <GuessedWords guessedWords={[
                    { 
                        guessedWord: 'train',
                        letterMatchCount: 3
                    }
                ]}/>
            </div>
        )
    }
}

export default Jotto