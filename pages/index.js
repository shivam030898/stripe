import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import Image from "next/image";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const HomePage = () => {
  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log("Order placed! You will receive an email confirmation.");
      }

      if (canceled) {
        console.log(
          "Order canceled -- continue to shop around and checkout when you’re ready."
        );
      }
    }
  }, [success, canceled]);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <section>
        <div>
          <Image
            src="https://d1wqzb5bdbcre6.cloudfront.net/8c4abef3182fb797a7c7c948977122ab63f0de6365f3801d140a815c5b6ce54f/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387854557045596b6454524468476333524e6247784666475a735833526c6333526655564673655459774e5642685a314a776230453356336448554568365756465830305a6b7a3237494a54"
            alt="Whey Protien"
            width={150}
            height={150}
          />
          <div className="description">
            <h3 className="heading">Whey Protein Powder</h3>
            <h5 className="price">$79.99</h5>
          </div>
        </div>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          .description {
            float: right;
            margin-left: 10px;
          }
          .image {
            float: left;
          }
          .heading {
            font-size: 28px;
            font-weight: 200;
          }
          .price {
            font-size: 18px;
            font-weight: bold;
          }
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 450px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 45px;
            padding: 10px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
};

export default HomePage;
