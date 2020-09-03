import React, { Component } from 'react'
import { connect } from 'react-redux'

const PageTest = ({ info, setPerson }) => {
    return (
        <div>
            {info}
            <button onClick={setPerson}>Roll dice</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        info: state.setPerson
    }
}

const mapDispatchTOProps = dispatch => {
    // return {
    //     actions: bindActionCreators({
    //         setPerson,
    //         delPerson
    //     }, dispatch)
    // }

    return {
        setPerson: (data) => dispatch({
            type: 'SET_PERSON',
            data,
        })
    }

}

export default connect(mapStateToProps, mapDispatchTOProps)(PageTest);
