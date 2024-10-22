

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import OurRecipes from './components/Our Recipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
 

  return (
    <div className='container mx-auto px-5'>
      {/*header section  */}
      <Header></Header>
      {/* banner section */}
      <Banner></Banner>
      {/* Our Recipes */}
      <OurRecipes></OurRecipes>
     <section className='flex flex-col md:flex-row gap-6'>
     <Recipes></Recipes>
     <Sidebar></Sidebar>

     </section>
      
     
    </div>
  )
}

export default App
