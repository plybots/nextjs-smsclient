import Sidenav from './Sidenav';
import Contentheader from './Contentheader';

const DefaulLayout = ({ children }) => (
  <>
    <div className="sidenav">
      <Sidenav />
    </div>
    <div className="content">{children}</div>
    <Contentheader />

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}</style>
  </>
);

export default DefaulLayout;
