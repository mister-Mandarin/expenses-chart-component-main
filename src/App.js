import './App.module.css';
import Cup from "./Cup/Cup";
import styles from './App.module.css'
import {ContextDataProvider} from "./Context/Data.context";
import Graf from "./Graf/Graf";

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