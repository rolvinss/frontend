import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import history from "services/history";

import { logoutHandler } from "store/auth/action";



class Home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    // logoutHandler = () => {
    //     localStorage.removeItem("token");
    //     window.location.href = "/"
    // }

    render() {
        return (
            <div>
                Home
                <button onClick={this.props.logoutHandler}>logout </button>
            </div>
        )
    }
}

export default connect(null,{logoutHandler}) (Home);

