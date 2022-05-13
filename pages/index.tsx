import type { NextPage } from 'next'
import Head from 'next/head'
import  Header  from '../Components/Header/Header'
import Content from '../Components/Content/Content'
import League from '../Components/PacksHeading'
import Footer from '../Components/Footer/Footer'
import Faq from '../Components/Faq/Faq';
import Packs from '../Components/Packs/packs'
const Home: NextPage = () => {
  return (<>
  <div>
    <Head>
    <title>Packs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
  </div>
    <div className='main-div'>
      <Header />
      <Content />
      <League  
      name=" Lanka Premier League"
      desc="Top Packs from the Lanka Premier Leagie"
      />
      <Packs name="lanka" />
      <hr></hr>
      <League  
      name="Current & Upcoming Packs"
      desc="Reserve yours before the sell out"
      />
      <Packs  name="sale"/>
      <League  
      name="Sold Out Packs"
      desc="Collectors have already claimed these packs. You can purchase individual moments from these packs in the marketplace"
      />
       <Packs  name="soldout"/>
      <Faq />
      </div>
      <Footer />

   </>
  )
}

export default Home
