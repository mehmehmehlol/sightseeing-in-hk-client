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
        console.log(user)

        let first_name = this.state.editable ? 
        <div className="profile-edit"> 
            <input type='text' ref={input => this.first_name = input} defaultValue={user.first_name}/>
        </div>
        :
        <div>
            <h5>First Name:</h5>
            {user.first_name}
        </div>

        let last_name = this.state.editable ? 
        <div className="profile-edit"> 
            <input type='text' ref={input => this.last_name = input} defaultValue={user.last_name}/>
        </div>
        :
        <div>
            <h5>Last Name:</h5>
            {user.last_name}
        </div>

        let username = this.state.editable ? 
        <div className="profile-edit">
            <input type='text' ref={input => this.username = input} onChange={this.handleChange} defaultValue={user.username}/>
        </div>
        :
        <div>
            <h5>Username:</h5>
            {user.username}
        </div>

        let password = this.state.editable ?
        <div className="profile-edit">
        <input type='password' ref={input => this.password = input} onChange={this.handleChange} defaultValue={user.password} placeholder="Password"/>
        </div>
        :
        <div> 
            <h5>Password:</h5>
            Click the "Update Profile" to change password
        </div>


        return (
            <div className="profile-page">
                <h2 className="profile-bar">Hi, {user.first_name}! Here's your profile!</h2>
                <div className="profile-info">
                    {username}<br/>
                    {first_name}<br/>
                    {last_name}<br/>
                    {password}<br/>
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