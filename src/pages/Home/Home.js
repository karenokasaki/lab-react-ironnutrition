import { Link } from 'react-router-dom'

import './Home.css'

function Home() {





    return (
        <div className='homepage'>
            <Link className='links' to="/foods" >App de Foods</Link>
            <Link className='links' to="/pets">App de Pets</Link>
        </div>
        );
}

export default Home;