import Logo from "./Components/Header/Logo.jsx";
import NavBar from "./Components/Header/NavBar.jsx";
import ContactUsForm from "./Components/Main/ContactUsForm.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <section className="bg-zinc-50 flex flex-col font-poppins font-[400] text-[16px]">
      <header className="self-center flex w-full max-w-[1240px] items-start justify-between gap-5 mt-10 px-5 max-md:max-w-full max-md:flex-wrap">
        <Logo />
        <NavBar />
      </header>
      <h2 className="text-black text-4xl font-bold self-center mt-24">
        Contact Us
      </h2>
      <p className="text-neutral-500 text-center text-lg font-medium self-center mt-8 max-md:max-w-full">
        Any question or remarks? Just write us a message!
      </p>
      <ContactUsForm />
      <Footer />
    </section>
  );
}

export default App;
