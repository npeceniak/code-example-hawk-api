import React, { useEffect, useState } from 'react';
import "./Details.css";
import axios from 'axios';
import { connect } from 'react-redux';
import { deactivateDetails, setDetails, setHawkList } from '../../../redux/detailsActions';

const Details: React.FC = (props: any) => {
    const [name, setName] = useState("");
    const [size, setSize] = useState("SMALL");
    const [gender, setGender] = useState("MALE");
    const [length, setLength] = useState<{ from: number, to: number }>({ from: 0, to: 0 });
    const [wingspan, setWingspan] = useState<{ from: number, to: number }>({ from: 0, to: 0 });
    const [weight, setWeight] = useState<{ from: number, to: number }>({ from: 0, to: 0 });
    const [url, setUrl] = useState("");
    const [color, setColor] = useState("");
    const [behavior, setBehavior] = useState("");
    const [habitat, setHabitat] = useState("");

    const getHawkDetails = async () => {
        if(props.detailsId !== null) {
            try{
                const response = await axios.get(`http://localhost:8000/api/hawk/${props.detailsId}`);
                const details = response.data;
                setName(details.name);
                setSize(details.size);
                setGender(details.gender);
                setLength({ from: details.lengthBegin, to: details.lengthEnd });
                setWingspan({ from: details.wingspanBegin, to: details.wingspanEnd });
                setWeight({ from: details.weightBegin, to: details.weightEnd });
                setUrl(details.pictureUrl);
                setColor(details.colorDescription);
                setBehavior(details.behaviorDescription);
                setHabitat(details.habitatDescription);
            } catch(e) {
                console.error("API Fetch Called Failed", e);
            }
        }
    }

    useEffect(() => {
        getHawkDetails();
    }, []);

    const onSubmit = async (event: any) => {
        event.preventDefault();        
        const data = {
            "behaviorDescription": behavior,
            "colorDescription": color,
            "gender": gender,
            "habitatDescription": habitat,
            "lengthBegin": length.from,
            "lengthEnd": length.to,
            "name": name,
            "pictureUrl": url,
            "size": size,
            "weightBegin": weight.from,
            "weightEnd": weight.to,
            "wingspanBegin": wingspan.from,
            "wingspanEnd": wingspan.to
        }

        if(props.detailsId !== null) {
            const response = await axios.put(`http://localhost:8000/api/hawk/${props.detailsId}`, data);
            console.log(response);
        } else {
            const response = await axios.post(`http://localhost:8000/api/hawk`, data);
            console.log(response);
        }

        try{
            const response = await axios.get(`http://localhost:8000/api/hawk/list`);
            props.setHawkList(response.data.hawks)
        } catch(e) {
            console.error("API Fetch Called Failed", e);
        }

        props.deactivateDetails();
        props.setDetails(null);
    }

    return (
        <form className='detailsForm' onSubmit={onSubmit}>
            <label className="uniformLabel">Name</label>
            <input
                className="genericInput textInput"
                type='string'
                value={name}
                onChange={event => setName(event.target.value)}
            ></input><br />

            <label className="uniformLabel">Size</label>
            <select
                className="genericInput selectInput"
                value={size}
                onChange={event => setSize(event.target.value)}>
                <option value="SMALL">Small</option>
                <option value="MEDIUM">Medium</option>
                <option value="LARGE">Large</option>
            </select><br />

            <label className="uniformLabel">Gender</label>
            <select
                className="genericInput selectInput"
                value={gender}
                onChange={event => setGender(event.target.value)}>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </select><br />


            <label className="uniformLabel">Length</label><label>From</label>
            <input
                className='genericInput numberInput'
                type="number"
                value={length.from}
                onChange={event => setLength({ ...length, from: event.target.valueAsNumber })}
            ></input>
            <label>From</label>
            <input
                className='genericInput numberInput'
                type="number"
                value={length.to}
                onChange={event => setLength({ ...length, to: event.target.valueAsNumber })}
            ></input>
            <label>cm</label><br />

            <label className="uniformLabel">Wingspan</label><label>From</label>
            <input
                className='genericInput numberInput'
                type="number"
                value={wingspan.from}
                onChange={event => setWingspan({ ...wingspan, from: event.target.valueAsNumber })}
            ></input>
            <label>From</label>
            <input
                className='genericInput numberInput'
                type="number"
                value={wingspan.to}
                onChange={event => setWingspan({ ...wingspan, to: event.target.valueAsNumber })}
            ></input>
            <label>cm</label><br />

            <label className="uniformLabel">Weight</label><label>From</label>
            <input
                className='genericInput numberInput'
                type="number"
                value={weight.from}
                onChange={event => setWeight({ ...weight, from: event.target.valueAsNumber })}
            ></input>
            <label>From</label>
            <input
                className='genericInput numberInput'
                type="number"
                value={weight.to}
                onChange={event => setWeight({ ...weight, to: event.target.valueAsNumber })}
            ></input>
            <label>grams</label><br />

            <label className="uniformLabel">Url</label>
            <input
                className="genericInput textInput"
                type='string'
                value={url}
                onChange={event => setUrl(event.target.value)}
            ></input><br />

            <label className="descriptionLabel">Color Description</label><br />
            <textarea
                className="genericInput textAreaInput"
                value={color}
                onChange={event => setColor(event.target.value)}
            ></textarea><br />

            <label className="descriptionLabel">Behavior Description</label><br />
            <textarea
                className="genericInput textAreaInput"
                value={behavior}
                onChange={event => setBehavior(event.target.value)}
            ></textarea><br />

            <label className="descriptionLabel">Habitat Description</label><br />
            <textarea
                className="genericInput textAreaInput"
                value={habitat}
                onChange={event => setHabitat(event.target.value)}
            ></textarea><br />

            <button className="saveButton">Save</button>
        </form>
    );
}

const mapStateToProps = (state: any) => {
    return {
        detailsActive: state.detailsActive,
        detailsId: state.detailsId,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        deactivateDetails: () => dispatch(deactivateDetails()),
        setDetails: (id: number | null) => dispatch(setDetails(id)),
        setHawkList: (hawkList: any) => dispatch(setHawkList(hawkList))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);
