import './App.css';
import macron from "./mp.jpg"
import delice from "./delice.mp4"

function App() {
  return (
  <div className="App">  
    <h1 class="title red"> Khouloud Mekni </h1>
    <div className="pictures" style={{border:"solid 0px white",maxWidth:"100vw"}}>



      <br/>

      <img src={macron} alt="macron" className="image1" />

      <br/>

      <img src="/b.jpg" alt="brownies" className="image2"/>
      
    <video width="600" height="400" controls>

    <source src={delice} type="video/mp4" />

    </video>

    </div>


  </div>
  );
}

export default App;
