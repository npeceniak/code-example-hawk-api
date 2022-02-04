import React from 'react';
import { connect } from 'react-redux';
import { activateDetails } from '../../../redux';
import "./AddHawkButton.css";

const AddHawkButton: React.FC = (props: any) => {
    return (
        <div>
            <button onClick={props.activateDetails} className="addHawkButton">+ Add Hawk</button>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        detailsActive: state.detailsActive
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        activateDetails: () => dispatch(activateDetails())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddHawkButton);
