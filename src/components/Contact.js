import { AiFillMail, AiFillEnvironment, AiFillPhone } from 'react-icons/ai'



export default function Contact() {
    return (

        <section id="footer" className='mt-5 rounded bg-black py-8 px-8'>
            <div className='text-white md:text-center'>
                <h1 className='font-medium text-lg'>Contact Me</h1>


                <ul className='md:flex justify-center gap-4'>
                    <li className='flex items-center gap-2'>
                        <AiFillMail />
                        <p>sandesh.pokhrel33@gmail.com</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <AiFillEnvironment />
                        <p>Kathmandu</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <AiFillPhone />
                        <p>9847536666</p>
                    </li>
                </ul>






            </div>

        </section>
    )
}