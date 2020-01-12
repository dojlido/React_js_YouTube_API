import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    //class factory - anonymus class
    return class extends Component {
        state = {
          error:null
        };

        componentWillMount() {
            this.storeRequestIntercept = axios.interceptors.request.use(null, req => {
                this.setState({error:null});
                return req;
            });
            this.storeResponseIntercept = axios.interceptors.response.use(res => res, error => {
                this.setState({error:error});
            });
        }

        componentWillUnmount() {
            //clear interceptors action - called in each action of child jsx elements -> look BurgerBuilder withErrorHandler() wrapper
            axios.interceptors.request.eject(this.storeRequestIntercept);
            axios.interceptors.response.eject(this.storeResponseIntercept);
        }

        errorConfirmedHandler = () => {
          this.setState({error: null});
        };

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default withErrorHandler;