import React from "react";
import { connect } from "react-redux";
import * as crystalActions from "../../state/crystalActions";
import {bindActionCreators} from "redux";

class Crystals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.crystalActions.loadCrystals().catch(error => {
            alert("Loading crystals failed: " + error)
        });
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
    crystalActions: bindActionCreators(crystalActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Crystals);