import  React from 'react';
import Image from 'next/image';
import { HtmlContext } from 'next/dist/shared/lib/html-context.shared-runtime';


type props ={

}

export default function inscription ({ }:props)  {
    return (
      
       <html lang="en">
       <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
       </head>
       <body className='bg-black'>
       <header>
     <nav className='bg-black h-28 flex justify-between'>
      <Image className='flex text-center relative  left-10' src='/images.jpg' alt='' width={150} height={150}></Image>
      <div className='flex justify-center text-center '>
        <u className='text-white text-center m-auto relative right-14 no-underline p-4 flex gap-10'>
          <a href=''>Accueil</a>
          <a href=''>Nos formations</a>
          <a href=''>Nos campus</a>
          <a href=''>A propos de nous</a>
          <a href=''>Blog</a>
          <a href=''>Contact</a>
        </u>
         <button className='bg-black rounded text-red-600 border-2 border-red-600  w-52 h-10 m-auto relative right-6  '  type="button">Postuler sur Libreville</button>
      </div>
    </nav>
     </header>
     <main className='mt-60'>
        <form className=' justify-center text-center  m-auto bg-white  w-4/12  h-screen mb-10 rounded     p-10' action="">
            <h2>Sign Up</h2>
            <input className='w-80  h-8 border-2 border-black mt-7 rounded-full p-5' type="email" name="email" id=""placeholder='Email' /><br />
            <input  className='w-80  h-8 border-2 border-black mt-7 rounded-full p-5' type="password" name="password" id=""placeholder='Password' /><br />
          
        </form>

     </main>
       </body>
       </html>
    )
}
