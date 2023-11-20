import SectionTitle from '../../../../SectionTitle';
import try1 from '../../../../assets/home/slide1.jpg'

const MustTry = () => {
    return (
      <section>
        <SectionTitle 
        subHeading={'Should Try'}
        heading={'CHEF RECOMMENDS'}
        ></SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mt-10">
          <div className="card  bg-gray-200 shadow-xl ">
        <figure><img src={try1} alt="" /></figure>
        <div className="card-body">
          <h2 className=" text-center font-bold text-lg">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-center">
            <button className="btn  text-[#BB8506] border-0 border-b-4 btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
          <div className="card   shadow-xl bg-gray-200">
        <figure><img src={try1} alt="" /></figure>
        <div className="card-body">
          <h2 className=" text-center font-bold text-lg">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-center">
            <button className="btn  text-[#BB8506] border-0 border-b-4 btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
          <div className="card  bg-gray-200 shadow-xl text-center">
        <figure><img src={try1} alt="" /></figure>
        <div className="card-body">
          <h2 className=" text-center font-bold text-lg">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-center">
            <button className="btn  text-[#BB8506] border-0 border-b-4 btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
      </div>
      </section>
    );
};

export default MustTry;