import "../styles/globals.css";
import Header from "../components/Header";

const Layout = ({ children }) => {
  <div className=" bg-black">{children}</div>;
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="flex justify-center  bg-black text-green-700">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;