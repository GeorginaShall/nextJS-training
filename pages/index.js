import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
      <Head>
        <title>students List | HomePage</title>
        <meta name="keywords" content="students"/>
        
      </Head>

    
      <div>

      <h1 className="text-titlesdark font-raleway text-5xl font-extrabold mb-10 sm:text-4xl text-center">HomePage</h1>
        <p className="text-textgray ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className="text-textgray ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/students/" className="block w-80 mx-auto outline-none border-none font-bold font-raleway px-12 py-4 mt-6 rounded-sm bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white text-center">See Students Listing</Link>


      </div>
    </>

  );
}
