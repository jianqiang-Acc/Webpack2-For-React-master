import React, {Component} from 'react'
import { Link } from 'react-router'
import {sendMsg} from 'Actions'
import {connect} from 'react-redux'
class MarkdownEditor extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {value: 'This some *markdown* here!'}
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    // getRawMarkup() {
    //     var md = new Remarkable()
    //     return { __html: md.render(this.state.value) }
    // }
    render(){
        return(
            <div className="wrapper MarkdownEditor">
                <h3>Input</h3>
                <textarea onchange={this.handleChange}
                          defaultValue={this.state.value} />
                <h3>Output</h3>
                {/*<div*/}
                    {/*className="content"*/}
                    {/*dangerouslySetInnerHTML={this.getRawMarkup()}*/}
                {/*/>*/}
                <Link className="route-link" to="TodoApp">Go to TodoApp page</Link>
            </div>
        )
    }
}
export default connect()(MarkdownEditor)