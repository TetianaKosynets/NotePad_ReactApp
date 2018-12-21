import React from 'react';
import { keys, setLocalItem, getLocalItem } from '../services/storage';

class Add extends React.Component {
    constructor(props) {
        super(props);

        let count = JSON.parse(getLocalItem(keys.count));
        if (!count) {
            count = 0;
        }

        this.state = {
            note: [],
            count: count
        };
    }

    onAddClick() {
        let note = this.state.note;
        let count = this.state.count + 1;
        this.setState({
            note: note,
            count: count
        });
        setLocalItem(keys.note[count], note[count]);
        setLocalItem(keys.count, count);
    }

    onChange(event) {
        this.setState({
            note : event.target.value
        },
            this.setFormData
        );

    }

    setFormData() {
        let form = {
            note: this.state.note
        };
        setLocalItem(keys.user_form, form);
    }

    render() {
        return (
            <form>
                <fieldset>
                  <div>
                        <label>New note: </label>
                        <input value={this.state.note} onChange={this.onChange.bind(this)} />
                    <button onClick={this.onAddClick.bind(this)}>Add</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}
export default Add;