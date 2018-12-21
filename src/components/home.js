import React from 'react';
import './my_styles.css';
import { keys, getLocalItem} from '../services/storage';

class Home extends React.Component {
    constructor(props) {
        super(props);

        let count = JSON.parse(getLocalItem(keys.count));
        let note = getLocalItem(keys.note);

        if (!count) {
            count = 0;
        }

        this.state = {
            count: count,
            note: note[count]
        };


    }

    componentDidMount() {
        this.getFormData();
    }

    getFormData() {
        let form = getLocalItem(keys.user_form);
        if (form) {
            this.setState({
                note: form.note
            });
        }
    }

    render() {
        let listItems = this.state.note.map((item) => <li>{item}</li>);
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default Home;