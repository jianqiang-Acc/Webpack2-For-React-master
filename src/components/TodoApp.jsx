import React, { Component } from 'react'
import { Link } from 'react-router'
import { sendMsg } from 'Actions'
import { connect } from 'react-redux'
import {ButtonToolbar,Button,SplitButton,MenuItem,Popover,Tooltip,Modal} from 'react-bootstrap'
//引入bootstrap 样式
import 'bootstrap/dist/css/bootstrap.css'

import css from './app.less'

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)

        this.state = {items: [], text: ''}
    }
    getInitialState() {
        return { showModal: false }
    }

    close() {
        this.setState({ showModal: false })
    }

    open() {
        this.setState({ showModal: true })
    }
    handleChange(e) {
        this.setState({text: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        var newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }))
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        )
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        )

        return (
            <div className="wrapper">
                <div>
                    {/* Standard button */}
                    <Button>Default</Button>

                    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                    <Button bsStyle="primary">Primary</Button>

                    {/* Indicates a successful or positive action */}
                    <Button bsStyle="success">Success</Button>

                    {/* Contextual button for informational alert messages */}
                    <Button bsStyle="info">Info</Button>

                    {/* Indicates caution should be taken with this action */}
                    <Button bsStyle="warning">Warning</Button>

                    {/* Indicates a dangerous or potentially negative action */}
                    <Button bsStyle="danger">Danger</Button>

                    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                    <Button bsStyle="link">Link</Button>
                    <div>{BUTTONS.map(renderDropdownButton)}</div>
                </div>
                <div>
                    <p>Click to get the full Modal experience!</p>

                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={this.open}
                    >
                        Launch demo modal
                    </Button>

                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>This is text in a modal</h4>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
                <Link className="route-link" to="/">AppPage</Link>
            </div>
        )
    }


}

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}
//下拉菜单组件
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger']

function renderDropdownButton(title, i) {
    return (
            <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
    )
}
//模态框组件

// ReactDOM.render(buttonsInstance, mountNode)

// ReactDOM.render(<TodoApp />, mountNode)

/* 只注入 dispatch，不监听 store */
export default connect()(TodoApp)