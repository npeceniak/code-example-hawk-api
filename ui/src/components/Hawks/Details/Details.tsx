import React, { useState } from 'react';
import "./Details.css";
import axios from 'axios';

const Details: React.FC = () => {
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



    const onSubmit = async (event: any) => {
        event.preventDefault();

        // Logic for creating or updateing existing hawk

        console.log("Name:", name);
        console.log("Size:", size);
        console.log("gender:", gender);
        console.log("length:", length);
        console.log("wingspan:", wingspan);
        console.log("weight:", weight);
        console.log("url:", url);
        console.log("color:", color);
        console.log("behavior:", behavior);
        console.log("habitat:", habitat);

        const idToUpdate = 3;
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

        const response = await axios.put(`http://localhost:8000/api/hawk/${idToUpdate}`, data);
        console.log(response);

        // reset form...
        setName("");
        setSize("SMALL");
        setGender("MALE");
        setLength({ from: 0, to: 0 });
        setWingspan({ from: 0, to: 0 });
        setWeight({ from: 0, to: 0 });
        setUrl("");
        setColor("");
        setBehavior("");
        setHabitat("");


        // if new send create request if updating send update request.

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

export default Details;
