import { useState } from 'react';
import './Dark.css';

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
    };

    return (
        <div className='darkMode'>
            <h1>{darkMode ? 'Dark Mode Activated!' : 'Light Mode Activated!'}</h1>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}
