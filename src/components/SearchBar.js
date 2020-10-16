import React from 'react';


class SearchBar extends React.Component {

    state = { text: '' };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onTextSubmit(this.state.text);
    }

    onInputChange = e => {
        console.log(e.target.value);

        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Videos Search</label>
                        <input
                            onChange={this.onInputChange}
                            value={this.state.text}
                            type="text"
                            name="text"
                            className="form-control form-control-sm"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;