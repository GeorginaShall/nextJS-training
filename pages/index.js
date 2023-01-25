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

      <h1 className="text-titlesdark pb-5 text-center">HomePage</h1>
        <p className="text-textgray ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className="text-textgray ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/students/" className="block w-40 py-2 my-4 mx-auto rounded bg-blue text-white text-center">See Students Listing</Link>


      </div>
    </>

  );
}
