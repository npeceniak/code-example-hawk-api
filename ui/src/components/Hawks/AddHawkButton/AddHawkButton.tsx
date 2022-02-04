import React from 'react';
import { connect } from 'react-redux';
import { activateDetails, setDetails } from '../../../redux';
import "./AddHawkButton.css";

const AddHawkButton: React.FC = (props: any) => {
    const onClick = () =>  {
        props.activateDetails();
        props.setDetails();
    }
    return (
        <div>
            <button onClick={onClick} className="addHawkButton">+ Add Hawk</button>
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
        activateDetails: () => dispatch(activateDetails()),
        setDetails: () => dispatch(setDetails(null))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddHawkButton);
