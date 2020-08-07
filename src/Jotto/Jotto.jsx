import React from 'react'
import Congrats from './Congrats/Congrats'

class Jotto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }
    
    render() {
        return (
            <div data-test="component-jotto">
                <div>This is Jotto App</div>
                <Congrats success ={this.state.success}/>
            </div>
        )
    }
}

export default Jotto