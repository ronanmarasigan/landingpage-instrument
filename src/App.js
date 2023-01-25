import { Navbar, Hero, About, Explore, Footer, Contact } from './components';

function App() {
  return (
    <div className="bg-black text-white sm:px-[100px] p-5  w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
