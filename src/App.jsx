/*
import Header from "./components/header/index.jsx";


function App() {
  return (
    <>
        <div className="wrapper">
           <Header />
        </div>
    </>
  )
}
*/
import {Component, Fragment} from "react";


class WhoAmI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            years: 27,
            position: ''
        }
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state

        this.nextYear = () => {
            this.setState(state => ({
                years: state.years + 1
            }))
        }

        this.commitInputChanges = (e, color) => {
            console.log(color)
            this.setState({
                position: e.target.value
            })
        }

        return (
            <>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name} , surname - {surname}, age - {years},
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Enter position</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'color')}/>
                </form>
            </>
        )
    }
}

export const App = () => {
    return (
        <div className="App">
            <WhoAmI name='John' surname='Smith' link='facebook.com'/>
            <WhoAmI name='Alex' surname='Lalala' link='insta.com'/>
        </div>
    )
}


