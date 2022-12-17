import './App.css';
import Navbar from './Component/Navbar';
import './Component/Projet/Projet.css';
import Projet from './Component/Projet';
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Aboutus />
     <Projet />
     <Contactus />
     <Footer />
    </div>
  );
}

export default App;
