import React from 'react';

class SendMessageForm extends React.Component {
    

    render() {
        return (
            <form className="send-message-form" onSubmit={this.handleSubmit}>
                <input
                    placeholder="Type message and hit ENTER"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.message}
                    disabled={this.props.disabled} />
            </form>
        )
    }
}

export default SendMessageForm;