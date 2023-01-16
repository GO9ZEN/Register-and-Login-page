import './App.css';
import FooterPart from './FooterPart/FooterPart';
import Header from './Header/Header';
import SignInUp from './SignIn-and-up/SignIn-and-up';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="image">
        <SignInUp />
      </div>
      <FooterPart />
    </div>
  );
}

export default App;
