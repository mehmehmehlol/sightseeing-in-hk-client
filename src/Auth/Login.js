import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
    }

    style = {
        margin: 15,
    };

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Login"/>
                        <TextField 
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={this.handleChange}
                        />
                        <br/>
                        <TextField 
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={this.handleChange}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={this.style} onClick={this.handleSubmit} />
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
    
    
};

export default Login;