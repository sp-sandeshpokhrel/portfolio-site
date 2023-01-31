import Project from "./Project"
import { useEffect, useState } from "react";


export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/?collection=projects")
            .then((res) => res.json())
            .then((data) => setProjects(data.documents));

    }, []);


    const projec = [
        {
            "name": "E-Commerce Website",
            "items": ["Built backend of E-commerce website", "Coded using Django framework"]
        },
        {
            "name": "NFT COLLECTION AND MINTING SITE",
            "items": ["Built Smart Contract using ERC721 standard in Solidity", "Built frontend with React and integrated contract using Ethers"]
        },
        {
            "name": "Decentralized Storage System",
            "items": ["Built using Solidity, React and IPFS", "Utilized various cryptographic algorithm like AES, ECC(Public Key Cryptography) for secure file storage in IPFS", "Used Smart Contract for saving File Identifier, and used Ethers for frontend integration"]
        }
    ]

    return (
        <section id='honor' className='mt-10'>
            <h1 className='text-xl font-medium'>Projects</h1>
            <p className='mt-1 text-md'>Here are some of the projects I have done.</p>

            <div className='bg-zinc-200 flex rounded shadow-md flex-col md:flex-row px-2 py-4'>
                {projects.map(project => <Project key={project.name} project={project} />)}


            </div>

        </section>

    )
}

