const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());


const projects = [];

function logRequests(request, response, next) {
    const {method, url} = request;
    
    const loglabel = `[${method.toUpperCase()}] ${url}`;

    console.log(loglabel);

    return next(); //próximo middleware
}

app.use(logRequests);

app.get('/projects', (request, response) => {
    const { title} = request.query;

    const results = title
        ? projects.filter(project => project.title.includes(title)) // se achar titulo com filtro
        : projects;                                               // senão exibe todos

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id == id); //realiza busca percorrendo array e retorna posição

    if (projectIndex < 0) {
        return response.status(400).json({ error: 'project not found.' })
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id == id); //realiza busca percorrendo array e retorna posição

    if (projectIndex < 0) {
        return response.status(400).json({ error: 'project not found.' })
    }


    projects.splice(projectIndex, 1) //splice é um metodo para retirar uma informação de um array (posição e quantidade)

    return response.status(204).send();
});





app.listen(3333, () => {
    console.log('🚀 back-end started');
});