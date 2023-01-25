import Footer from "comps/footer.js"
import Navbar from "comps/navbar.js"

const Layout = ({ children }) => {
  return (
    <div className="   max-w-4xl mx-auto my-0    ">
      <Navbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;