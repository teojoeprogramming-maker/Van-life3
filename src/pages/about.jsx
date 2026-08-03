import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About(){
  return(
  <>
    <Navbar></Navbar>
    <div id='Juli'></div>
    <div id='underJuliTextbox'>
      <h1 id='dont'>Don't squeeze in a sedan when you could relax in a van.</h1>
      <h3 id='our'>Our mission is to enliven your road trip with the perfect travel can rental. Our cans are recertified before each trip to ensure your tracel plans can go off without a hitch.</h3>
      <h3 id='hitch'>&#40; Hitch costs extra &#41;</h3>
      <div id='yourDiv'>
        <h1 id='your'>Your Destination is waiting. 
        <br/>
        Your van is waitng
        </h1>
        <button id='explore'>Explore our vans</button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default About;