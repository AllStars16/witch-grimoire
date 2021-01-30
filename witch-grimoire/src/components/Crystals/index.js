import React from "react";
import { connect } from "react-redux";
import * as crystalActions from "../../state/crystalActions";
import { bindActionCreators } from "redux";

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
            <div class="card-columns">
                {this.props.getCrystals && this.props.getCrystals.map((crystal, id) => {

                    return (
                        // <div key={id}>{crystal.name} {crystal.description}</div>
                        // <div key={id} class="card-deck">
                            <div key={id} class="card bg-light">
                                <div class="card-body text-center">
                                    <p class="card-text">{crystal.name}</p>
                                    <p class="card-text">{crystal.description}</p>

                                </div>
                            </div>
                        // </div>


                    )
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