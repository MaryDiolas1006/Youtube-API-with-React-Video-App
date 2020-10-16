import React from 'react';


class SearchBar extends React.Component {

    state = { text: '' };

    onInputChange = e => {
        console.log(e.target.value);

        this.setState({text: e.target.value})
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui from">
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