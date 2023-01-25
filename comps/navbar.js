
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="mt-2.5  mb-20 py-2.5 px-0 flex justify-end items-end border-b border-borderb">
      <div className="mr-auto">
        <Image src="/logo.png" alt="site logo" width={128} height={77}  />
      </div>
            <Link href="/" className="ml-3">Home</Link>
            <Link href="/about" className="ml-3">About</Link>
            <Link href="/students/" className="ml-3">students Listing</Link>
      </nav>
     );
}
 
export default Navbar;