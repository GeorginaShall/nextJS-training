import Footer from "comps/footer.js"
import Navbar from "comps/navbar.js"

const Layout = ({ children }) => {
  return (
    <div >
      <Navbar />
      <div className="border-b border-borderb  mb-16 "></div>
      <div className="container max-w-4xl   mx-auto my-0    ">
      { children }
      </div>
      <div className="border-t border-bordercolor mt-14"></div>
      <Footer />
    </div>
  );
}
 
export default Layout;