import React, { useState, useEffect } from 'react';
import api from './services/api';


import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';


function App() {
    //const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end Web']);
    const [projects, setProjects] = useState([]);

    useEffect(() => {                               // qual função disparar, quando dispara
        api.get('projects').then(response => {      // arrow function
            setProjects(response.data);                  //
        });                                         //
    }, []);                                         // 

    async function handleAddProject() {
        //  projects.push(`Novo projeto ${Date.now()}`);

        // setProjects([...projects, `Novo projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'André Vinicius'
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>

            <Header title="Projects" />

            <img width={300} src={backgroundImage} />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;