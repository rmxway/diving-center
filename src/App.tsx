import { useRef } from 'react';
import { Header, ServicesBlock, TextUs, Footer, Locations } from '@/components';
import { InputContext } from './InputContext';
import './styles.css';

function App() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    return (
        <InputContext.Provider value={inputRef}>
            <Header />
            <ServicesBlock />
            <TextUs />
            <Locations />
            <Footer />
        </InputContext.Provider>
    );
}

export default App;
