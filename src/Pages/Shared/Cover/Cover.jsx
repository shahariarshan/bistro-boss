import { Parallax } from 'react-parallax';

const Cover = ({img,title,descip}) => {
    return (

        

        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
       <div className="hero h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-black bg-opacity-20 w-9/12 h-4/6">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl text-white font-extralight uppercase ">{title}</h1>
                        <p className="mb-4 font-medium uppercase">{descip}</p>
                    </div>
                </div>
            </div>
    </Parallax>

            
        
    );
};

export default Cover;