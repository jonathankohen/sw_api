import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import People from './components/People';
import Planets from './components/Planets';

function App() {
    const [category, setCategory] = useState('');
    const [currentId, setCurrentId] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        category == 'people' ? navigate('/people') : navigate('/planets');
        !isSubmitted ? setIsSubmitted(true) : setIsSubmitted(false);
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row my-5">
                    <div className="d-flex justify-content-center col">
                        <form className="form-inline" onSubmit={handleSubmit}>
                            <select
                                className="custom-select mb-2 mr-sm-2"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option defaultValue>Search Category</option>
                                <option value="people">People</option>
                                <option value="planets">Planets</option>
                            </select>

                            <input
                                type="text"
                                value={currentId}
                                onChange={(e) => setCurrentId(e.target.value)}
                                className="form-control mb-2 mr-sm-2"
                                placeholder="Enter ID"
                            />

                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center col">
                        <Router>
                            <People
                                path="/people"
                                category={category}
                                currentId={currentId}
                                isSubmitted={isSubmitted}
                            />
                            <Planets
                                path="/planets"
                                category={category}
                                currentId={currentId}
                                isSubmitted={isSubmitted}
                            />
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
