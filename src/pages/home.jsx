import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home(){
  return(
        <>
          <Navbar></Navbar>
          <div id='imageDiv'>
            <h1 id='you'>You got the travel plans, we got the travel vans</h1>
            <h3 id='add'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h3>
            <button id='findButton'>Find your van</button>
            </div>
            <Footer></Footer>
        </>
  );
}

export default Home;