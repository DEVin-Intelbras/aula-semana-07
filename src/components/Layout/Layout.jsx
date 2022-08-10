import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import '../../App.css';

export const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
