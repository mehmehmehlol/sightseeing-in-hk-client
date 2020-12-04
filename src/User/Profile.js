import React from 'react'

class Profile extends React.Component {
    state = {
        editable: false
    }

    handleEdit = () => {
        if(this.state.editable) {
            let id = this.props.user.id
            let place = this.props.user.places
            let first_name = this.first_name.value
            let last_name = this.last_name.value
            let username = this.username.value
            let password = this.password.value
            let profile = { id, place, first_name, last_name, username, password }
            this.props.updateProfile(profile)
        }
        
        this.setState({
            editable: !this.state.editable
        })
    }

    render() {
        const { user } = this.props
        // const { first_name, last_name, username } = user
        // console.log(user)

        let first_name = this.state.editable ? 
        <div>
            First Name: 
            <input type='text' ref={input => this.first_name = input} defaultValue={user.first_name}/>
        </div>
        :
        <h5>First Name: {user.first_name}</h5>

        let last_name = this.state.editable ? 
        <div>
            Last Name: 
            <input type='text' ref={input => this.last_name = input} defaultValue={user.last_name}/>
        </div>
        :
        <h5>Last Name: {user.last_name}</h5>

        let username = this.state.editable ? 
        <div>
            Username: 
            <input type='text' ref={input => this.username = input} onChange={this.handleChange} defaultValue={user.username}/>
        </div>
        :
        <h5>Username: {user.username}</h5>

        let password = this.state.editable ?
        <div>
        Password: 
        <input type='password' ref={input => this.password = input} onChange={this.handleChange} defaultValue={user.password}/>
        </div>
        :
        <h5>Password: Click the "Update Profile" to change password</h5>


        return (
            <div>
                <h2>Hi, {user.first_name}! Here's your profile!</h2>
                <div>
                    {username}
                    {first_name}
                    {last_name}
                    {password}
                </div>
                <span>
                    <div>
                        <button className="profile-edit" onClick={() => this.handleEdit()}>{this.state.editable ? 'Submit': 'Update Profile'}</button>
                    </div>
                </span>

            </div>
        )
    }
}

export default Profile;