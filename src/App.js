import './App.css';
import image from './asset/hero-image.jpg'
import Layout from './Components/Layout';
import styles from './Stylesheet/Outerdiv.module.css'
function App() {

  return (
    <div className={styles.bgimage} style={{ backgroundImage:`url(${image})`}}>

      <Layout/>
    </div>
  );
}

export default App;
