import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)
    return (
        <div>
            <SectionTitle subHeading='GetWay'
                heading='Payment'></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;