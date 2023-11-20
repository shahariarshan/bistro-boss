

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='mx-auto text-center space-y-2'>
            <h1 className='text-[#D99904] text-xl  '>---{subHeading}---</h1>
            <h2 className='border-b-4 text-black mt-2 md:w-4/12 mx-auto'></h2>
            <h1 className=' text-3xl uppercase'>{heading}</h1>
            <h2 className='border-b-4 md:w-4/12 mx-auto mt-2'></h2>
        </div>
    );
};

export default SectionTitle;