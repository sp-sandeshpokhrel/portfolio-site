export default function Certificate({ certificate }) {
    return (
        <div className='bg-zinc-200 w-full md:w-2/6 shadow-md rounded '>
            <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
                <img src={certificate.image} layout="fill" objectFit="cover" />
            </div>
            <div className='p-4'>
                <h1 className='text-xl font-medium'>{certificate.name}</h1>
                <p className=''>{certificate.items}</p>
                <p className='text-sm text-gray-500'>{certificate.year}</p>
            </div>
        </div>
    )
}