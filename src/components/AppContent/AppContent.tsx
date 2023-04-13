import './AppContent.scss';
import { Footer } from '../footer';
import Header from '../header';
import { Pages } from '../pages/Pages';

function AppContent() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Pages/>
      </main>
      <Footer/>
    </div>
  );
}

export default AppContent;
