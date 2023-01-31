import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

export default function Home() {
    return (
        <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
                <img src='/avatar.png' layout="fill" objectFit="cover" />
            </div>
            <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>SANDESH POKHREL</h1>
            <h3 className='text-xl md:text-2xl'>Blockchain Developer</h3>
            <p className='text-md py-1 text-gray-800 md:text-xl'>I am enthusiastic learner and developer working on blockchain    currently and looking for opportunities to work and learn on new    technologies to build new platforms and products. I am from a    Computer Engineering background with conceptual level    understanding of programming. </p>
            <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
                <AiFillLinkedin />
                <AiFillGithub />
                <AiFillInstagram />
            </div>
        </section>
    )
}