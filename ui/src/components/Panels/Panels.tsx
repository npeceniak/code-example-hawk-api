import React from 'react';
import './Panels.css';

import { connect } from 'react-redux';
import { activateDetails } from '../../redux';

import AddHawkButton from '../Hawks/AddHawkButton/AddHawkButton';
import Filter from '../Hawks/Filter/Filter';
import DisplayContainer from '../Hawks/DisplayContainer/DisplayContainer';
import Details from '../Hawks/Details/Details';

const LeftPanel: React.FC = () => {
    return (
        <div className="leftPanel">
            <AddHawkButton />
            <Filter />
            <DisplayContainer />
        </div>
    )
};

const RightPanel: React.FC = (props: any) => {
    if(props.detailsActive) {
        return (
            <div className="rightPanel">
                <Details />
            </div>
        )
    }else {
        return (
            <></>
        )
    }
};

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

export const Left = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanel);

export const Right = connect(
    mapStateToProps,
    mapDispatchToProps
)(RightPanel);