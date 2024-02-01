import Message from "../layout/Message";
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Container from '../layout/Container'
import Loading from '../layout/Loading'
import styles from "./Projects.module.css"
import LinkButton from '../layout/LinkButton'

import ProjectCard from "../project/ProjectCard";

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch(err => console.log(err))
    }, [])

    const location = useLocation();
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />

            </div>
            {message &&
                <Message msg={message} type="success" />}
            <Container customClass="start">
                {projects.length > 0 && 
                projects.map((project) =>(
                    <ProjectCard name={project.name}
                    id={project.id}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    />
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0}
            </Container>
        </div>
    )
}

export default Projects;