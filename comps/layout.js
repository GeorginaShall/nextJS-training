import Footer from "comps/footer.js"
import Navbar from "comps/navbar.js"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen" >
      <Navbar />

      <div className="container max-w-4xl   mx-auto my-0 mb-auto ">
      { children }
      </div>
      
      <Footer />
    </div>
  );
}
 
export default Layout;