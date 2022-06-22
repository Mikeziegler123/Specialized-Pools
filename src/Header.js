import React from "react";
import Menu from "./Menu";
import HomeContent from "./HomeContent";

class Header extends React.Component {
        state = {
            view: 'Hello'
        }

    changeState = (newView) => {
        this.setState({
            view: newView
        });
    }

    render() {
        return (
            <React.Fragment>
                <HomeContent view={this.state.view} />
            </React.Fragment>
        )
    }
}
export default Header;