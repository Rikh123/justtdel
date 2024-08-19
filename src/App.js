import './App.css';
import Navigation from './Customer/components/Navigation/Navigation'; // Fixed component name
// import HomePage from './Customer/pages/HomePage/HomePage'; // Uncomment if needed
import Footer from './Customer/components/Footer/Footer';
import Product from './Customer/components/Product/Product';

function App() {
  return (
    <div className="app-container"> {/* Added a meaningful className */}
      <Navigation />
      <main>
        {/* <HomePage /> Uncomment if you want to display HomePage */}
        <Product />
      </main>
      <Footer />
    </div>
  );
}

export default App;
