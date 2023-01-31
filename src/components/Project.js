export default function Project({ project }) {
    return (
        <div className='pl-4 mt-2 md:w-3/6'>
            <p className="font-bold">{project.name}</p>
            <ul className='list-disc pl-4'>
                {project.items.map(item => <li>{item}</li>)}

            </ul>
        </div>
    )
}