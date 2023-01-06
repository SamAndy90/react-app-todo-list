import React, {Component} from "react";
import './AddItemForm.css';

export default class AddItemForm extends Component {
    state = {
        label: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }


    render() {
        return (
            <form className="add-item-form d-flex"
                onSubmit={this.onSubmit}>
                <input  type='text'
                        className="form-control"
                        placeholder="What needs to be done"
                        onChange={this.onLabelChange}
                        value={this.state.label} />
                <button className="btn btn-outline-secondary" >
                    Add Item</button>
            </form>
        )
    }
};