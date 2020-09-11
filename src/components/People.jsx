import React, { useState, useEffect } from 'react';
import theSexiestManOnThePlanet from '../images/obi.jpeg';
import axios from 'axios';

const People = (props) => {
    const [display, setDisplay] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const idChange = props.currentId;

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/${props.currentId}`,
            )
            .then((res) => setDisplay(res.data))
            .catch((err) => setErrorMessage(err.message));
    }, [idChange]);

    // const phoneHome = () => {
    //     axios
    //         .get(`${display.homeworld}`)
    //         .then((res) => console.log(res))
    //         .catch((err) => setErrorMessage(err.message));
    // };

    return (
        <>
            {errorMessage && (
                <div>
                    <h3 className="text-danger text-center mb-4">
                        These are not the droids you're looking for.
                    </h3>
                    <img
                        src={theSexiestManOnThePlanet}
                        alt="Obi Wan Kenobi"
                        className="img-fluid"
                    />
                </div>
            )}

            {idChange && (
                <div>
                    <h1>{display.name}</h1>
                    <p>Height: {display.height}</p>
                    <p>Mass: {display.mass}</p>
                    <p>Hair Color: {display.hair_color}</p>
                    <p>Skin Color: {display.skin_color}</p>
                    {/* <p>Homeworld: {display.homeworld}</p> */}
                </div>
            )}
        </>
    );
};

export default People;
