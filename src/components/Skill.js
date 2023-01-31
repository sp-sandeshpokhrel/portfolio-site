export default function Skill({ skill }) {
    return (
        <div className='bg-zinc-200 w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
            <h2 className='text-xl'>{skill.name}</h2>

            <ul>{skill.items.map(item => <li>{item}</li>)}

            </ul>
        </div>
    )
}

//            <img src='software.png' className='w-48' />
