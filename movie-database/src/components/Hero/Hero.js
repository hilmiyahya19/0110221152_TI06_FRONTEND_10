/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Hero.module.css";
import { useEffect,useState } from "react";
import Button from "../Button/ui/Button";

function Hero() {
  // Membuat state movie
  const [movie, setMovie]= useState("");

  async function fetchMovie(){
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    );

    const data = await response.json();

    //set movie dengan data movie hasil fetch
    setMovie(data);

  }

  useEffect(fetchMovie,[] );

  console.log(movie);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>
            {movie.Genre}
          </h3>
          <p className={styles.hero__description}>
          {movie.Plot}
          </p>
          <Button variant="secondary">Watch</Button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;