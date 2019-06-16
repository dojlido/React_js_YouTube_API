import React, {Component} from 'react';

export default class Recipe extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.recipe !== undefined) {
            const {
                image_url,
                title,
                publisher,
                source_url,
                recipe_id,
            } = this.props.recipe;

            const{handleDetails} = this.props;
            const details_index = 0;

            return (
                <React.Fragment>
                    <div className="col-10 mx-auto col-md-6 ol-lg-4 my-3 ">
                        <div className="card">
                            <img
                                src={image_url}
                                className="img-card-top"
                                style={{height: "14rem"}}
                                alt="recipe"
                            />
                            <div className="card-body text-capitalize">
                                <h6>{title}</h6>
                                <h6 className="text-warning text-slanted">
                                    provided by {publisher}
                                </h6>
                            </div>
                            <div className="card-footer">
                                <button
                                    className="btn btn-primary text-capitalize"
                                    type="button"
                                    onClick={()=>handleDetails(details_index,recipe_id)}
                                >
                                    details
                                </button>
                                <a href={source_url}
                                   className="btn btn-success mx-2 text-capitalize"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >recipe url</a>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                </React.Fragment>
            )
        }

    }


}