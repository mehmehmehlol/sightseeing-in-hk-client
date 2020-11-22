import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    
    state = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        password_confirmation: '',
        errors: ''
    };
    
    handleChange = (e) => {
        const {name, value} =  e.target
        this.setState({ [name]: value })
    };

    
    handleSubmit = e => {
        e.preventDefault()

        const {first_name, last_name, username, password, password_confirmation } = this.state
        
        let user = {
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: password,
            password_confirmation: password_confirmation
        }
        
        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        .then(res => {
            if (res.data.status === 'created') {
                this.props.handleLogin(res.data)
                this.redirect()
            } else {
                this.setState({
                    errors: res.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
    };

    redirect = () => {
        this.props.history.push('/')
    }

    handleError = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.map((error) => {
                        return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        const {first_name, last_name, username, password, password_confirmation} = this.state
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
                    <div className="field">
                        <label>Password Confirmation </label>
                        <input 
                            name='password_confirmation'
                            value={password_confirmation} 
                            onChange={this.handleChange} 
                            type="password" 
                            placeholder="Password Confirmation" 
                        />
                    </div>
                    <button className="ui button" type="submit">Sign Up</button>
                </form>

                <div>
                    {this.state.errors ? this.handleErrors() : null}
                </div>
                
            </div>
        )
    }
};

export default Signup;