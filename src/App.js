import React from "react"

function handleClick(){
    this.setState(prevState => {
        return {
            isLoggedIn: !prevState.isLoggedIn
        }
    })
}

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            isLoggedIn: true
        }
        handleClick = handleClick.bind(this)
    }

    isLoggedInOrOut() {
        if (this.state.isLoggedIn) {
            return "Sí"
        } else {
            return "No"
        }
    }

    render () {
        let variable = this.isLoggedInOrOut()
        let cadenaBoton = this.state.isLoggedIn ? "Log Out" : "Log In"

        return (
            <div>
                <h1>¿Se encuentra el usuario conectado? {variable}</h1>
                <button onClick={handleClick}>{cadenaBoton}</button>
            </div>
        )
    }
    
}

export default App
