import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class Layout extends React.Component {
    
    constructor() {
        super();
        // this.name = "Amitesh";
        this.state = {
            name: "Amitesh",
            title: "Welcome",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        const title = "Welcome back";

        return (
            <div>
                <h1>It works {this.state.title}</h1>

                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>

                <Footer />
            </div>
        );
    }
}
export default Layout;
 