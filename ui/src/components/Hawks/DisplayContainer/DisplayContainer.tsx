import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./DisplayContainer.css";
import { activateDetails, setDetails, setHawkList } from '../../../redux/detailsActions';
import { connect } from 'react-redux';

const Details: React.FC<{id: number, store: any}> = (props: any) => {
    const onClick = () => {
        props.store.setDetails(props.id);
        props.store.activateDetails();
    }
    return (
        <button onClick={onClick} className='viewButton'>
            View &gt;&gt;
        </button>
    )
};

const Table: React.FC<{store: any}> = (props: any) => {
    const getHawkList = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/api/hawk/list`);
            props.store.setHawkList(response.data.hawks)
        } catch(e) {
            console.error("API Fetch Called Failed", e);
        }
    }

    useEffect(() => {
        getHawkList();
    }, []);

    return (
        <table className="displayTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Gender</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.store.hawkList.map((hawk: any) => (
                    <tr key={hawk.id}>
                        <td>{hawk.name}</td>
                        <td>{hawk.size}</td>
                        <td>{hawk.gender}</td>
                        <td><Details id={hawk.id} store={props.store}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const DisplayContainer: React.FC = (props: any) => {
    return (
        <div className="displayContainer">
            <Table store={props}/>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        hawkList: state.hawkList
    }
};


const mapDispatchToProps = (dispatch: any) => {
    return {
        activateDetails: () => dispatch(activateDetails()),
        setDetails: (id: number) => dispatch(setDetails(id)),
        setHawkList: (hawkList: any) => dispatch(setHawkList(hawkList))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayContainer);
