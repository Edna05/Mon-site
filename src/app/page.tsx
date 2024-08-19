import  React from 'react';
import Image from 'next/image';
import background from '../../public/bye-moanda.jpg';
import backgrounds from '../../public/pog.webp';
import backgrounda from '../../public/boulevard.jpg';
import link from 'next/link';


type props ={
}

export default function home ({ }: props) {
  return (
    <html lang='fr'>
      <body className='m-0 p-0'>
      <header className='flex justify-between h-16  text-center'>
     <div className='flex ml-7 mt-2'>
      <p className='border-2 border-black w-28 h-8 m-3 justify-center text-center'>Alumni</p>
      <p className='border-2 border-black w-96 h-8 justify-center text-center m-3 relative  right-3'>Participer au réunion d’information en ligne</p>
     </div>
     <div className='flex'>
      <div className='flex mr-28 gap-4 text-xs' >
      <Image src='/facebook-circle-fill (1).svg' alt='img' width={30} height={30}></Image>
      <Image src='/twitter-fill.svg' alt='voici mon logo' width={30} height={30} />
      <Image src='/linkedin-box-fill (1).svg' alt='voici mon' width={30} height={30} />
      </div>
      <div className='flex w-20 h-10 justify-center text-center m-auto relative right-10'>
      <Image src='/21495917-google-traduction-logo-symbole-noir-conception-mobile-app-vecteur-illustration-gratuit-vectoriel-removebg-preview.png' alt='' width={100} height={40}></Image>
      <p className='flex justify-center text-center m-auto'> FR</p>
      <Image src='/arrow-down-s-line (1).svg' alt='' width={20} height={20}></Image>
     </div>
     </div>
    </header>
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
         <button className='bg-black rounded text-red-600 border-2 border-red-600  w-52 h-10 m-auto relative right-6  '  type="button">Postuler sur Libreville</button>
      </div>
    </nav>
     <section className='flex'>
    <div className='m-6 block' >
    <p className='text-6xl mt-10 ml-10 flex'>Ecole 241,  Plus qu’une <br /> formation un métier</p>
    <p className='ml-10 mt-8' >Ecole 241 forme au métier du numérique dans tout le Gabon. Rejoignez un <br /> réseau de plus de 25 000 apprenants  et apprentes. Vous souhaitez vous <br /> aussi intégrer un parcours de formqtion Simplon au être conseillé-e dans <br /> votre parcours ?
      </p> 
      <button className='bg-red-600 w-52 h-14 text-white border-2 rounded border-red-600 ml-10 mt-8 leading-3' type="button">Contactez-nous</button>
    </div>
    <div className=' m-auto relative left-20' >
    <button type="button"> <Image src='/femme.jpg' alt='' width={175} height={175}></Image></button> 
    <p className='flex gap-1 relative top-20'>Nos article de blog <Image src="/arrow-right-line.svg" alt='' width={15} height={15}></Image></p>
    </div>

    <div className='flex flex-col m-auto gap-3 relative right-14'>
      <button  type="button"><Image src='/femme2.jpg' alt='' width={120} height={120}></Image></button>
      <button type="button"><Image src='/homme.jpg' alt=''width={120} height={120}></Image></button>
    </div>
    </section>
    <section className='bg-black text-white  h-80'>
      <div className='ml-20 mt-8 '>
        <h1 className='text-4xl font-bold relative top-8'>Notre programme</h1>
        <p className='text-xs mt-10'>Ecole 241, c’est une formation en informatique d’excellence pour tous et toutes. Au programme de cette école <br />
différente et innovante : une approche par projets pour progresser et développer des compétances techniques <br />
et humaines recherchées sur le marché du travail.</p>
      </div>
      <div className='flex mt-16 justify-around'>
      <div>
        <h6>PAS DE COURS.</h6>
        <h6>PAS DE PROFS.</h6> 
      </div>

      <div>
        <h6>UNE PEDAGOGIE PAR <br /> PROJETS</h6>
      </div>

      <div>
        <h6>UN APPRENTISSAGE <br />
        PEER-TO-PEER</h6>
      </div>

      <div>
        <h6>APPRENDRE EN <br /> S’AMMUSANT</h6>
      </div>
      </div>
    </section>
      <section className='w-max flex h-96'>
        <div>
          <h1 className='text-4xl font-bold mt-20 ml-14'>Nos valeurs</h1>
          <p className=' text-xs mt-5 ml-14'>La position de Ecole 241 est une première et unique au Gabon, elle repose sur <br />
      des valeur fortes pour une insertion profesionnelle durable sur le marché de <br /> 
      l’emploi.Pourquoi Ecole 241 est-elle si différente ?</p>
        <button className='bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 ml-14 mt-8 leading-3' type="button">Unique au Gabon</button>
        </div>

        <div className='mt-20 relative left-56'>
          <h6>GRATUITE</h6>
        </div>
        <div className='mt-60 relative left-32'>
          <h6>POUR TOUS, <br />POUR TOUTES</h6>
        </div>
         
        <div className='mt-20 relative left-96'>
          <h6>AUCUN DIPLOME <br />REQUIS</h6>
        </div>
        <div className='mt-60 ml-40 relative left-20'>
          <h6>PAS BESOIN DE SAVOIR <br /> DEJA CODER D’AIMER LES <br /> MATHS</h6>
        </div>
      </section>
      <section className='flex h-96 '>
        <div>
        <h1 className='text-4xl font-bold relative left-16 '>Nos  cohortes</h1>
        <p className='relative left-16 '>se former à un métier</p>
        </div>
       
        <div className='relative right-44 bg-zinc-400 p-9 h-96 mt-20'>
        <h4 className='text-3xl font-bold'>Développeur Web et Web <br />  Mobile</h4>
        <p  className='text-sm relative top-3' >Le développeur web mobile a pour mission de créer et de <br />
 mettre en œuvre des applications mobiles exploitables sur <br />
 smartphone et tablette.</p>
          <p className='mt-9 text-sm'>Dans le cadre de son travail, il code et élabore des logiciels pour <br /> 
traiter les données. Il est aussi chargé de construire des sites web, des <br />
applications en ligne, des outils interactifs et autres <br />
produits accomplis selon les demandes du client.</p>
        <button className='bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 ml-10 mt- leading-3 relative right-10 top-5' type="button">En savoir plus</button>  
        </div>
        <div className=' bg-zinc-400 p-9 h-96 mt-20 '>
          <h4 className='text-3xl font-bold '>Référent Digital</h4>
          <p className='mt-3 text-sm'>Le Référentiel Digital est une approche stratégique qui vise à <br /> tirer parti du potentiel des médias numériques pour atteindre <br /> ses objectifs commerciaux ou de communication.</p>
          <p className=' mt-9 text-sm'>Cela implique une utilisation des outils et de plateformes en ligne <br />
pour atteindre un public ciblé, engager les utilisateurs et générer <br />
des résultats mesurables.</p>
          <button className='bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 ml-10 mt-8 leading-3 relative right-10 top-7' type="button">En savoir plus</button>
        </div>
      </section>
      <section className='mt-44 bg-zinc-300 p-10  h-96'>
        <div className='relative top-10'>
          <h4 className='text-4xl font-bold relative left-10' >Status des promos formations</h4>
          <p  className='relative left-10'>Nous vous listons les promotions en cours et celle avenirs</p>
        </div>
        <div className='flex mt-24 justify-around relative left-9'>
        <div className='bg-slate-100 relative right-10 w-80 p-4'>
          <p className='text-sm font-bold'>Développement web et web mobile</p>
          <p className='text-sm font-bold'>Promo 5 2023 - 2024</p>
          <div className='flex'>
          <p className='text-sm'>Ville: Libreville</p>
          <p className='relative left-12 text-sm'>PROMO EN COURS <button  className='bg-red-600 rounded-full w-5 h-4' type="button"></button></p>
          </div>
        </div>
      
        <div className='bg-slate-100  relative right-10 w-80 p-4'>
          <p className='text-sm font-bold'>Développement web et web mobile</p>
          <p className='text-sm font-bold'>Promo 5 2023 - 2024</p>
          <div className='flex'>
          <p className='text-sm'>Ville: Moanda</p>
          <p className='relative left-12 text-sm'>PROMO EN COURS <button  className='bg-green-600 rounded-full  w-5 h-4' type="button"></button></p>
          </div>
        </div>

        <div className='bg-slate-100  relative right-10 w-80 p-4 '>
          <p className='text-sm font-bold' >Réferent Digital</p>
          <p  className='text-sm font-bold'>Promo 5 2023 - 2024</p>
          <div className='flex  '>
          <p  className='text-sm'>Ville: Libreville</p>
          <p className='relative left-12 text-sm'>PROMO EN COURS <button  className='bg-red-600 rounded-full  w-5 h-4' type="button"></button></p>
          </div>
          </div>
        </div>
      </section>
      <section >
        <div className='m-auto ml-20 mt-16'>
          <h4 className='text-4xl font-bold '>Nous sommes à</h4>
          <p className='mt-5'>École 241 possède à nos deux campus notamment sur les villes de Libreville et <br /> Port-Gentil, cette année nous nous déployons du côté de la ville de Moanda.</p>
        </div>

      <div className='flex justify-around'>

        <div className='relative right-16 w-96 '>

         <div className='absolute -z-10 w-96 mt-6  bg-black  break-before-all'>
          <Image src={backgrounda} alt='backgrounda image'className='w-screen h-slw opacity-30' width={1000} height={1000}></Image>
         </div>
         <div className=' justify-around '>
            <p className='flex m-5 text-white mt-6'>120 ETUDIANTS FORMES A CE JOUR</p>
            <h5 className='m-auto flex justify-center text-3xl text-white relative top-32 right-24 font-bold'>Libreville</h5>
          </div>
        </div>

      <div className='relative right-16'>
      <div className='relative w-96 '>
         <div className='absolute -z-10 w-96 bg-black  break-before-all'>
          <Image src={backgrounds} alt='backgrounds image'className='w-full opacity-30' width={1000} height={1000}></Image>
         </div>
         <div className=' justify-around '>
            <p className='flex m-5 text-white mt-6'>120 ETUDIANTS FORMES A CE JOUR</p>
            <h5 className='m-auto flex justify-center text-white relative top-32 right-24 font-bold text-2xl'>PORT-GENTIL</h5>
          </div>
        </div>
        
        <div className='relative w-96 mt-52'>
         <div className='absolute -z-10 w-96  bg-black  break-before-all'>
          <Image src={background} alt='background image'className='w-full opacity-30' width={1000} height={1000}></Image>
         </div>
         <div className=' justify-around '>
            <p className='flex m-5 text-white mt-6'>120 ETUDIANTS FORMES A CE JOUR</p>
            <h5 className='m-auto flex justify-center text-white relative top-32 right-24 font-bold text-2xl'>MOANDA</h5>
          </div>
        </div>
       </div>
        </div>
      </section>
      <section className=' mt-48 bg-zinc-400 p-8'>
        <div>
          <h1  className='text-5xl font-bold relative ml-6'>Témoignage des alumnis</h1>
        </div>

       <div className='flex p-8 gap-40 mt-10'>
        <div className='text-sm bg-slate-100 p-4'>
          <p>L`Ecole 241 m`a permit de continuer à développer 
           mes compétences et à apprendre de nouvelles choses 
           passionnantes. J`ai eu l`opportunité de rencontrer des 
           enseignants inspirants et des camarades de classe bienveillants 
           Grâce à cette école, j`ai pu explorer différents domaines d`apprentissage 
           et découvrir mes passions. Je suis reconnaissant(e) pour tout ce que j`ai 
           appris et toutes les expériences enrichissantes que j`ai vécues à l`école 241.</p>
       <div className='flex gap-3 mt-3'>
        <Image className='rounded-full bg-black' src='/homme.jpg'alt=''width={60}height={60}></Image>
        <div>
        <p className='font-bold'>Mark</p>
        <p className='text-red-500'>Freelancer developpeur web</p>
        </div>
       </div>
      </div>

      <div className='text-sm bg-slate-100 p-4 '>
          <p>L`ecole 241 m`a permit de explorer de nouveaux horizons,
          de rencontrer des personnes inspirantes et de développer
          mes compétences. J`ai eu l`opportunité d`apprendre dans un
          environnement dynamique et bienveillant, ce qui m`a permis de
          m`épanouir pleinement. Je suis reconnaissant(e) pour tout ce que
         j`ai pu vivre et apprendre grâce à cette école.</p>
       <div className='flex gap-3 mt-3'>
        <Image className='rounded-full bg-black' src='/img1.png'alt=''width={60} height={60}></Image>
        <div>
        <p className='font-bold'>Julie</p>
        <p className='text-red-500'>Freelancer developpeur web</p>
        </div>
       </div>
      </div>

      <div className='text-sm bg-slate-100 p-6 '>
          <p>L`ecole 241 m`a permit de  découvrir ma passion pour les
          sciences et la technologie. Grâce à ses enseignants passionnés,
          j`ai pu explorer de nouveaux domaines et développer mes
          compétences. Aujourd`hui, je suis reconnaissant envers cette
          école qui m`a ouvert de nouvelles perspectives et m`a aidé à me
          réaliser pleinement.</p>
       <div className='flex gap-3 mt-3'>
        <Image className='rounded-full bg-black' src='/img2.png'alt='' width={60} height={60}></Image>
        <div>
        <p className='font-bold'>Sabile</p>
        <p className='text-red-500'>Référent Digital</p>
        </div>
       </div>
      </div>
      </div>
      </section>
      <section className='flex justify-around'>
          <div className='p-4 leading-6  mt-8'>
            <h1 className='text-4xl font-bold m'>Les compagnies <br />qui nous <br />fonts confiance</h1>
            <p className='mt-4'>Vous souhaitez devenir partenaire de l`école cliquer <br />
            sur le bouton ci-dessous</p>
        <button className='bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 ml-10 mt- leading-3 relative right-10 top-16 ' type="button">En savoir plus</button>  
          </div>
          <div className='flex mt-16 gap-20'>
          <div>
            <Image className='mb-3' src='/cnamgsc-removebg-preview 1.png'alt=''width={150}height={150}></Image>
            <Image className='mt-16' src='/ogooue.png'alt=''width={150}height={150}></Image>
            <Image className='mt-20'  src='/eramet.png'alt=''width={150}height={150}></Image>
          </div>
          <div className='m-4'>
            <Image className='mb-3' src='/comilog_1-removebg-preview 1.png'alt=''width={150}height={150}></Image>
            <Image className='mt-16' src='/pnpe-removebg-preview 1.png'alt=''width={150}height={150}></Image>
            <Image className='mt-20' src='/simplon-removebg-preview 1.png'alt=''width={150}height={150}></Image>
          </div>
          </div>
      </section >
      <div className='bg-zinc-400 h-28 w-96 flex justify-center text-center m-auto mt-32 '></div>
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
