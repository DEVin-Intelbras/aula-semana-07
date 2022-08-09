import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';

export function App() {
  return (
    <div className='container'>
      <Header />

      <Post />

      <Footer />
    </div>
  );
}
