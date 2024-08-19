import  React from 'react';
import Image from 'next/image';


type props ={

}

export default function page ({ }:props)  {
  return (
   
    <html lang="en">
      <body>
      <header>
     <nav className='bg-black h-28 flex justify-between'>
      <Image className='flex text-center relative  left-10' src='/images.jpg' alt='' width={150} height={150}></Image>
      <div className='flex justify-center text-center '>
        <u className='text-white text-center m-auto relative right-14 no-underline p-4 flex gap-10'>
          <a href='#'>Accueil</a>
          <a href='#'>Nos formations</a>
          <a href='#'>Nos campus</a>
          <a href='#'>A propos de nous</a>
          <a href='#'>Blog</a>
          <a href='#'>Contact</a>
        </u>
         <button className='bg-black rounded text-red-600 border-2 border-red-600  w-52 h-10 m-auto relative right-6' type="button">Postuler sur Libreville</button>
      </div>
    </nav>
     </header>
     <section className='flex mt-40 justify-around'>
      <div>
        <Image src='/Placeholder Image.png'alt='' width={500} height={500}></Image>
      </div>
      <div className='mt-44'>
        <h3>Formation en Développement Web-Web Mobile</h3>
        <p className='mt-8'>Embarquez pour une carrière passionnante avec notre formation <br /> en Développement Web-Web Mobile.</p>
        <button className='bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 ml-1 mt-14 leading-3' type="button">Unique au Gabon</button>
      </div>
     </section>
     <section className='flex justify-around mt-60 text-white bg-black p-28'>
      <div className='mr-40'>
        <Image src='/Placeholder Image (1).png' alt=''width={500} height={500}></Image>
      </div>
      <div className='mt-44'>
        <h3>Formation en Référent Digital</h3>
        <p className='mt-8'>Prenez les rênes de la stratégie digitale avec notre formation en <br /> Référent Digital. Apprenez à optimiser la présence en ligne d`une <br /> entreprise, à analyser </p>
        <button className='bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 ml-1 mt-14 leading-3' type="button">Unique au Gabon</button>
      </div>
     </section>
     <footer className='mt-36 bg-black flex text-white  text-sm gap-5 justify-around'>
        <div>
          <Image src='/images.jpg' alt=''width={200} height={200}></Image>
         
        </div>
      
        <div className='mt-12'>
          <a href="">A propos de nous</a><br />
          <a href="">Contacts</a><br />
          <a href="">Notre Impact</a>
        </div>

        <div className='mt-12' >
          <a href="">Devenir Formateur</a><br />
          <a href="">Devenir  Partenaire</a>
        </div> 

        <div className='mt-12' >
          <a href="">Formation Référent Digital</a><br />
          <a href="">Formation Developpeur Web</a>
        </div> 
      
        <div className='mt-12' >
          <a href="">Campus de Libreville</a><br />
          <a href="">Campus de Port-Gentil</a><br />
          <a href="">Campus de Moanda</a>
        </div>
       
      </footer>
      </body>
    </html>
  );
}
