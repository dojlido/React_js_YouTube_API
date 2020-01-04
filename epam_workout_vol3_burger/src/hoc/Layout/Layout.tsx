import  React, { PureComponent, useMemo } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

interface AppState {
    showSideDrawer: boolean
}

interface AppProps {
}

class Layout extends PureComponent<AppProps,AppState> {

    state = {
        showSideDrawer:  false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    drawerToggleClickedHandler = () => {
        this.setState((prevState) => {
          return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.drawerToggleClickedHandler}  />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={'Content'}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }


}

export default Layout;