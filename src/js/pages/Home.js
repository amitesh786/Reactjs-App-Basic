import React from "react";

class Home extends React.Component {

    render() {
        this.Home = () => (
            <p>
                A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
                that matches. A <code>&lt;Route></code> with no <code>path</code> always
                matches.
             </p>
        );

        return (
            <this.Home/>
        );
    }
}
export default Home;