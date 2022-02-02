import React, { useEffect, useState } from 'react';
import axios from "axios";

enum gender {
    "MALE",
    "FEMALE"
}

enum size {
    "SMALL",
    "MEDIUM",
    "LARGE"
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

const Details: React.FC = (props: any) => {
    return (
        <button>
            Details
        </button>
    )
}

const Table: React.FC = () => {
    const [state, setState] = useState<IHawk[]>([]);
    const getHawkList = async () => {
        const response = await axios.get(`http://localhost:8000/api/hawk/list`);
        console.log(response);
        setState(response.data.hawks)
    }

    useEffect(() => {
        getHawkList();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Gender</th>
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
        <div className="dispayContainer">
            <Table />
        </div>
    );
}

export default DisplayContainer;
