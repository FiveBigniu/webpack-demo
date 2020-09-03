import React, { Component } from 'react'
import BreadCrumb from '../../components/breadCrumb/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setPerson, delPerson } from '../../../store/action/person-action'
import './page3.less'

class Page3 extends Component {
    constructor() {
        super();
        this.state = {
            item: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }
    onSubmit = (e) => {
        let { item } = this.state;
        this.props.actions.setPerson(item);
        this.setState({
            item: ''
        })
    }
    removePeople = (index) => {
        this.props.actions.delPerson(index)
    }

    render() {
        const { item } = this.state;
        const { itemLists } = this.props.info;
        return (
            <div>
                <BreadCrumb />
                <div>
                    <h2>添加你的名字</h2>
                    <div className='add-container'>
                        <input type="text" onChange={this.handleChange} value={item} />
                        <button
                            type='button'
                            onClick={this.onSubmit}
                            disabled={item.length > 0 ? false : true}
                        >
                            +
                        </button>
                    </div>
                    <div className='lists-box'>
                        <h5> 总共 {itemLists.length} 人</h5>
                        <div className='person-lists'>
                            <RenderPerson
                                itemLists={itemLists}
                                removePeople={this.removePeople}
                            ></RenderPerson>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class RenderPerson extends Component {
    render() {
        // console.log(this.props.itemLists)
        return (
            <div>
                {this.props.itemLists.map((item, index) => {
                    return (
                        <li key={index} className='lists'>
                            <span>{item}</span>
                            <div
                                className='close'
                                onClick={this.props.removePeople.bind(this, index)}>
                                x
                            </div>
                        </li>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        info: state.setPerson
    }
}

const mapDispatchTOProps = dispatch => {
    return {
        actions: bindActionCreators({
            setPerson,
            delPerson
        }, dispatch)
    }

    // return {
    //     setPerson: (data) => dispatch({
    //         type: 'SET_PERSON',
    //         data,
    //     })
    // }

}

export default connect(mapStateToProps, mapDispatchTOProps)(Page3);
