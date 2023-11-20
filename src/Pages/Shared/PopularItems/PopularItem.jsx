

const PopularItem = ({item}) => {
    const {name,recipe,image,price}=item;
    return (
       <section>
         <div className="flex space-x-2">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px] px-5" src={image} alt="" />
            <div className="space-y-2">
                <h2 className="uppercase">{name}-----------</h2>
                <h2>{recipe}</h2>
            </div>
            <h1 className="text-[#BB8506]">${price}</h1>
            
        </div>
        
       </section>
    );
};

export default PopularItem;