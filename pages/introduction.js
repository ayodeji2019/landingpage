import Head from "next/head";
import ContentCard from "../components/contentCard";

const Introduction = () => {
  return (
    <div>
      <Head>
        <title>
          Introduction into Ethereum, Blockchain and the Usage of Smart
          Contracts.
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
          content="Here we are going to learn how to buy crypto currencies, transfer them and especially how to interact with profitable Smart Contract, so we can build up our own independant online income."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentCard />
    </div>
  );
};

export default Introduction;
