
import Skill from './Skill'
import { useState, useEffect } from "react";

export default function Skills() {

    const [skil, setSkills] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/?collection=skills")
            .then((res) => res.json())
            .then((data) => setSkills(data.documents));

    }, []);


    const skills = [
        {
            "name": "Programming",
            "items": ["C, C++", "Solidity", "Python, Javascript"]
        },
        {
            "name": "Development Frameworks",
            "items": ["Django", "React", "Brownie"]
        },
        {
            "name": "Version Control",
            "items": ["GIT"]
        }
    ]
    return (
        <section id='service' className=''>
            <h1 className='text-xl font-medium'>SKILLS</h1>

            <div className='mt-4 flex flex-col md:flex-row gap-8'>
                {skills.map(skill => <Skill key={skill.name} skill={skill} />)}

            </div>

        </section>
    )
}