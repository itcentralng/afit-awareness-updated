import styles from "./home.module.css";
import "@splidejs/react-splide/css";
import climatePic from "../assets/climate.jpg";
import cyberPic from "../assets/cyber.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.contain}>
        <div className={styles.container}>
          <h1>
            Welcome to the Airforce Institute of Technology Awareness App
            (Explore. Learn. Act)
          </h1>
          <p>
            Ready to challenge yourself, climb leaderboards, and become a
            champion of both the digital and environmental spheres. AFIT
            Awareness - Your Launchpad to a Smarter, Greener Tomorrow.
          </p>
        </div>
      </div>
      <div className={styles.imageSlider}>
        <Splide
          options={{
            rewind: true,
            width: 500,
          }}
        >
          <SplideSlide>
            <img src={climatePic} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={cyberPic} alt="" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Home;
