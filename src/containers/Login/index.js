import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { login } from "store/auth/action";
import history from "services/history"
import { toast } from 'react-toastify';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }
    static propTypes = {
        prop: PropTypes
    }


    onSubmit = () => {
        let { username, email, password } = this.state;
        let data = { 
            username: email,
             email, password }
        this.props.login(data).then((e) =>{
           history.push("/home")
        })
        .catch(err => {
            toast.error(err);
            history.push("/");
            localStorage.removeItem("token")
        });
    }

    textHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                login
                {/* <input type="text" name="username" onChange={this.textHandler} /> */}
                <input type="text" name="email" onChange={this.textHandler}/>
                <input type="text" name="password" onChange={this.textHandler} />
                <button onClick={this.onSubmit}>submit</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = {
    login
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)