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
        this.props.setCrystals();
    }

    render() {
        console.log("Crystals" + JSON.stringify(this.props.getCrystals));
        return (
            <div>
                {this.props.getCrystals && this.props.getCrystals.map((crystal, id) => {
                   
                return (<h1 key={id}>{crystal.name}</h1>) 
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getCrystals: state.crystals

});

const mapDispatchToProps = dispatch => ({
    setCrystals: async () => {
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