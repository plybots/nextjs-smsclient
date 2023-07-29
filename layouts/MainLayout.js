// components/layouts/main
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => (
  <div className="container">
    <Header />
    <div className="main">{children}</div>
    <Footer />
  </div>
);

export default MainLayout;
