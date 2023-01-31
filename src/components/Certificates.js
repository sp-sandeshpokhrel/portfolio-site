import Certificate from "./Certificate"
import { useState, useEffect } from "react";

export default function Certificates() {

    const [certificat, setCertificates] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/?collection=certificates")
            .then((res) => res.json())
            .then((data) => setCertificates(data.documents));

    }, []);

    const certificates = [
        {
            "name": "Bitcoin and CryptoCurrencies",
            "items": "University of California, Berkeley(eDX.org)",
            "year": "December 2022",
            "image": './images/bitcoin.png'
        },
        {
            "name": "Full Stack Web3 development",
            "items": "FreeCodeCamp.org",
            "year": "May 2022",
            "image": './images/web3.jpg'
        },
        {
            "name": "Blockchain: Foundation and Use Cases",
            "items": "Consensys Academy(Coursera)",
            "year": "June 2022",
            "image": './images/foundation.jpg'
        }
    ]


    return (
        <section id='license' className='mt-10'>
            <h1 className='text-xl font-medium'>Courses & Certifications</h1>
            <p className='mt-1 text-md'>Here are some of the certifications and courses I have done.</p>

            <div className='flex flex-col md:flex-row gap-8 mt-4'>
                {certificates.map(certificate => <Certificate key={certificate.name} certificate={certificate} />)}

            </div>

        </section>

    )
}