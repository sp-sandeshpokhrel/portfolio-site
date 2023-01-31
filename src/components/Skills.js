
import Skill from './Skill'

export default function Skills() {
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
                {skills.map(skill => <Skill skill={skill} />)}

            </div>

        </section>
    )
}