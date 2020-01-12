import React, {Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';

import Aux from '../../../hoc/Auxiliary/Auxiliary';


interface ModalInterfaceState {
}

interface ModalInterfaceProps {
    children?:any;
    show:boolean;
    modalClosed:any;
}

class Modal extends Component<ModalInterfaceProps,ModalInterfaceState> {
    shouldComponentUpdate(nextProps: Readonly<ModalInterfaceProps>, nextState: Readonly<ModalInterfaceState>, nextContext: any): boolean {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div className={'Modal'}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;