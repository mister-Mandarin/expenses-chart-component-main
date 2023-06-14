import './App.module.css';
import Cup from "./Cup/Cup";
import styles from './App.module.css'
import Graf from "./Graf/Graf";
import {ContextDataProvider} from "./Context/Data.context";

export default function App() {
    return (
        <div className={styles.container}>
            <ContextDataProvider>
                <Cup/>
                <Graf/>
            </ContextDataProvider>
        </div>
    );
}