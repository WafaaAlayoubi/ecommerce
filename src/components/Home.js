import homePic from "../images/home.jpg"
import AnimationButton from "./AnimationButton";

const Home = () => {

    return (
     
      <div className="homeContainer">
        <img src={homePic} alt="Snow" className="homePic"/>
        <div className="centered">
          <div >Text Title</div>
          <div >Sample Long Headline To Change With Your Text</div>
          <AnimationButton name="View Products" link="/products" />
        </div>
      </div>
    )
  }
  
  export default Home
  