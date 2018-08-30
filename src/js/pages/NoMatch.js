import React from "react";

class NoMatch extends React.Component {    
    render() {
        this.NoMatch = ({ location }) => (
            <div>
                <h3>
                    No match for <code>{location.pathname}</code>
                </h3>
            </div>
        );
        return (
            <this.NoMatch />
        );
    }
}
export default NoMatch;
