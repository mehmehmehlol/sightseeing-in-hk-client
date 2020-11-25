import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    
    state = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
    };
    
    handleChange = (e) => {
        const {name, value} =  e.target
        this.setState({ [name]: value })
    };

    
    handleSubmit = e => {
        e.preventDefault()
        this.props.handleSubmit(this.state)      
    }
        
       
    redirect = () => {
        this.props.history.push('/')
    }

    render() {
        const {first_name, last_name, username, password} = this.state
        return (
            <div>
                <h1>Sign Up</h1>

                <div>
                    or if you have an account, <Link to="/login">Log In</Link> here!
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>First Name </label>
                        <input 
                            name='first_name'
                            value={first_name} 
                            onChange={this.handleChange} 
                            type="text" 
                            placeholder="First Name" 
                        />
                    </div>
                    <div className="field">
                        <label>Last Name </label>
                        <input 
                            name='last_name'
                            value={last_name} 
                            onChange={this.handleChange} 
                            type="text" 
                            placeholder="Last Name" 
                        />
                    </div>
                    <div className="field">
                        <label>Username </label>
                        <input 
                            name='username'
                            value={username} 
                            onChange={this.handleChange} 
                            type="text" 
                            placeholder="Username" 
                        />
                    </div>
                    <div className="field">
                        <label>Password </label>
                        <input 
                            name='password'
                            value={password} 
                            onChange={this.handleChange} 
                            type="password" 
                            placeholder="Password" 
                        />
                    </div>
                    <button className="ui button" type="submit">Sign Up</button>
                </form>
                
            </div>
        )
    }
};

export default Signup;