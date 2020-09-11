import React, { useState, useEffect } from 'react';
import theSexiestManOnThePlanet from '../images/obi.jpeg';
import axios from 'axios';

const Planets = (props) => {
    const [display, setDisplay] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const idChange = props.currentId;

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/planets/${props.currentId}`,
            )
            .then((res) => setDisplay(res.data))
            .catch((err) => setErrorMessage(err.message));
    }, [idChange]);

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
                    <p>
                        Climate: <em>{display.climate}</em>
                    </p>
                    <p>Terrain: {display.terrain}</p>
                    <p>Surface Water: {display.surface_water}</p>
                    <p>Population: {display.population}</p>
                </div>
            )}
        </>
    );
};

export default Planets;
