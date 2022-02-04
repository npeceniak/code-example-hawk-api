import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./DisplayContainer.css";

enum gender {
    male = "MALE",
    female = "FEMALE"
}

enum size {
    small = "SMALL",
    medium = "MEDIUM",
    large = "LARGE"
}

interface IHawk {
    behaviorDescription: string,
    colorDescription: string,
    gender: gender,
    habitatDescription: string,
    id: number,
    lengthBegin: number,
    lengthEnd: number,
    name: string,
    size: size,
    weightBegin: number,
    weightEnd: number,
    wingspanBegin: number,
    wingspanEnd: number
}

const Details: React.FC = () => {
    return (
        <button className='viewButton'>
            View &gt;&gt;
        </button>
    )
}

const Table: React.FC = () => {
    const [state, setState] = useState<IHawk[]>([]);
    const getHawkList = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/api/hawk/list`);
            console.log(response);
            setState(response.data.hawks)
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
                {state.map(hawk => (
                    <tr key={hawk.id}>
                        <td>{hawk.name}</td>
                        <td>{hawk.size}</td>
                        <td>{hawk.gender}</td>
                        <td><Details /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const DisplayContainer: React.FC = () => {
    return (
        <div className="displayContainer">
            <Table />
        </div>
    );
}

export default DisplayContainer;
