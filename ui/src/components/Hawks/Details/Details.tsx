import React, { useState } from 'react';
import "./Details.css";

const Details: React.FC = (props) => {
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [gender, setGender] = useState("");
    const [length, setLength] = useState<{ from: number, to: number }>({ from: 0, to: 0 });
    const [wingspan, setWingspan] = useState<{ from: number, to: number }>({ from: 0, to: 0 });
    const [weight, setWeight] = useState<{ from: number, to: number }>({ from: 0, to: 0 });
    const [url, setUrl] = useState("");
    const [color, setColor] = useState("");
    const [behavior, setBehavior] = useState("");
    const [habitat, setHabitat] = useState("");



    const onSubmit = (event: any) => {
        event.preventDefault();
        // console.log(event);
        // console.log(filter);

        // Logic for creating or updateing existing hawk

        console.log("Name:", name);
        console.log("Size:", size);
        console.log("length:", length);

        // reset form...
        setName("");
        setSize("");
        setLength({ from: 0, to: 0 });

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
