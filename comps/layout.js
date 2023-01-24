import Navbar from '@/comps/Navbar.js'
import Footer from '@/comps/footer.js'

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;