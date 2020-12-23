import React from "react";
import { connect } from "react-redux";
import * as operations from "../../state/operations";
import * as actions from "../../state/actions";
import * as httpConstants from "../../utils/httpConstants";

class Crystals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getCrystals();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    getCrystals: state.crystals

});

const mapDispatchToProps = dispatch => ({
    getCrystals: async () => {
        const response = await fetch(httpConstants.CRYSTALS_ENDPOINT, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        console.log("REsponse: " + response);
        if (response.ok) {
            let respJson = response.json();

            respJson.then(function (json) {
                dispatch(actions.setCrystals(json));
            });
        }




    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Crystals);