import React, {Component } from 'react';
import { connect} from 'react-redux';



class Logout extends Component {

    componentWillUnmount() {
        this.props.dispatch(this.props.history.push('/'))
    }

    render(){

    return (
        <div className="logout_container">
            <h1>
                Bye:)
            </h1>
        </div>
    )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Logout)