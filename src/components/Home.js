import { useHistory } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import slider4 from "../images/slider4.jpg";
import slider5 from "../images/slider5.jpg";

const images = [
  { url: slider2 },
  { url: slider3 },
  { url: slider4 },
  { url: slider5 },
];


const Home = () => {

  
  let history = useHistory();

    return (
     
           <SimpleImageSlider
        width={1400}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      
    )
  }
  
  
  export default Home
  