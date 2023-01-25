
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="mt-2.5  mb-2 py-2.5 px-0 flex justify-end items-end container max-w-4xl   mx-auto my-0">
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