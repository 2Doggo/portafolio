import React from 'react';
import './Projects.css';

function Projects() {
    // Simulamos algunos datos de proyectos
    const projects = [
        {
            id: 1,
            title: 'Proyecto 1',
            description: 'Descripción breve del proyecto. Este es un ejemplo de lo que podría ser un proyecto real.',
            tech: 'HTML, CSS, JavaScript',
            image: 'https://via.placeholder.com/300x200?text=Proyecto+1'
        },
        {
            id: 2,
            title: 'Proyecto 2',
            description: 'Otro proyecto interesante con diferentes tecnologías y funcionalidades.',
            tech: 'React, CSS Modules',
            image: 'https://via.placeholder.com/300x200?text=Proyecto+2'
        },
        {
            id: 3,
            title: 'Proyecto 3',
            description: 'Un proyecto más que demuestra otras habilidades y técnicas.',
            tech: 'JavaScript, API REST',
            image: 'https://via.placeholder.com/300x200?text=Proyecto+3'
        }
    ];

    return (
        <section id="proyectos" className="section projects">
            <h2>Mis proyectos</h2>
            <p>Aquí hay algunos proyectos en los que he trabajado recientemente:</p>

            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p className="tech-stack"><strong>Tecnologías:</strong> {project.tech}</p>
                            <div className="project-links">
                                <a href="#" className="btn btn-demo">Demo</a>
                                <a href="#" className="btn btn-code">Código</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;