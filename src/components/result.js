import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from "firebase";
import {Link} from "react-router";
import {RaisedButton} from "material-ui";

const style = {
    height: 400,
    width: 320,
    padding: 20,
    margin: "20px 0px 20px 0px",
};

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Score: ""

        }
    }

     componentWillMount() {

        firebase.database().ref('Score').on('value', (data) => {
            console.log(data.val().S)
            this.setState({
                Score: data.val().S
            })
        })

    }

    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <center>
                        <div>
                            <h1>Quiz Finished</h1>
                            <h1>Your Score {this.state.Score}</h1>
                            <Link to="/Start"><RaisedButton primary={true} ><span style={style}>Home</span></RaisedButton></Link>
                        </div>
                    </center>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Result;

// render() {
//     console.log(this.state.don)
//     return (
//         <div>
//             <MuiThemeProvider>
//                 <center>
//                     <div>
//
//                         <h1 ref="val">Quiz App</h1>
//
//                         <Link to="/CreatQuiz"><RaisedButton primary={true} ><span style={style}>Create Quiz</span></RaisedButton></Link>
//                         <RaisedButton onClick={this.next} type="submit" primary={true} style={{ margin: 12 }}><span style={style}>Attemt Quiz</span></RaisedButton>
//                         <Link to="/signup"><RaisedButton primary={true} ><span style={style}>Random Quiz</span></RaisedButton></Link>
//
//                     </div>
//                 </center>
//             </MuiThemeProvider>
//         </div>
//     )
// }
