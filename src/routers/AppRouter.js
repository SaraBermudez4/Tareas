import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Container } from '../container/Container';
import { cargarDatos } from '../helpers/getData';
import { DetalleTarea } from '../components/DetalleTarea';

export const AppRouter = () => {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setTareas(await cargarDatos())
        }
        fetchData()
    }, []);

    return <div>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Container tareas={tareas} />} />
                <Route path='/detalle/:id' element={<DetalleTarea tareas={tareas} />} />
            </Routes>
        </Router>
    </div>;
};