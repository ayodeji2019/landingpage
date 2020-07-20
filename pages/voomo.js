import Head from "next/head";
import VoomoCard from "../components/voomoCard";

const Voomo = () => {
  return (
    <div>
      <Head>
        <title>
          Voomo - the Smart Contract made from the community for the community.
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta
          name="description"
          content="You always wondered how so many people were able to build up independancy and self-employment without having to worry about financial aspects anymore? I will teach you right here!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VoomoCard />
    </div>
  );
};

export default Voomo;
