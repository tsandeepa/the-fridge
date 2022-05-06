// import styles from '../styles/gr.css'
import greeings from '../styles/greetings/greetings.module.css'

const Greetings = () => {
    return ( 
        <div className={greeings.greetBox}>
            <h1 className={greeings.greetBox__title}>Good Morning, Johny!</h1>
            <p className={greeings.greetBox__tagLine}>🌤   It's better to go shopping before this friday</p>
        </div>
     );
}
 
export default Greetings;