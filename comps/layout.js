import Footer from "comps/footer.js"
import Navbar from "comps/navbar.js"

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