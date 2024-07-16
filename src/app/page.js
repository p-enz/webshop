import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Headline</h1>
      <h2>Headline</h2>
      <h3>Headline</h3>
      <h4>Headline</h4>

      <div class="container">DIV</div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
        it amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <a href="https://google.de" target="_blank">beyond</a>
      <article>
        I can stand alone
      </article>

      <section>
        I need a Headline and cant be left alone
        <button>Klick Me</button>
      </section>
      
      <form>
      <label htmlFor="input_text">Enter Name</label>
          <input type="text" id="input_text"/>

        <label htmlFor="input_radio">Dance</label>
        <input type="radio" id="input_radio"/>
        <label htmlFor="input_radio"> No Dance</label>
        <input type="radio" id="input_radio"/>

        <label htmlFor="input_checkbox">Party</label>
        <input type="checkbox" id="input_checkbox"/>
      </form>

    </main>
  );
}
