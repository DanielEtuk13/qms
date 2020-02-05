import Head from "next/head";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/index.scss";

const Index = props => {
  return (
    <div className="app">
      <Head>
        <title>Queue Management System | Kuango Tech Ltd</title>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.0-beta.3/default/snipcart.css"
        />
        <meta
          name="description"
          content="QMS by Kuango."
        />
      </Head>
      <Header />
      <main className="main">
        <ProductList products={props.products} />
      </main>
      
      <Footer />
      <script src="https://cdn.snipcart.com/themes/v3.0.0-beta.4/default/snipcart.js"></script>
      <div
        hidden
        id="snipcart"
        data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"
      ></div>
    </div>
  );
};

Index.getInitialProps = async () => {
  return {
    products: [
      {
        id: "nextjs-seo_carpet1",
        name: "KuangoQMS Revision 2",
        price: 350000.0,
        image: "static/straight-and-narrow.jpg",
        description:
          "."
      }
    ]
  };
};

export default Index;
