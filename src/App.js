import './App.css';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
