import { Link } from 'react-router-dom'

import './Home.css'

function Home() {





    return (
        <div className='homepage'>
            <Link className='links' to="/foods">Calories and Foods</Link>
            {/* <Link className='links' to="/pets">Cats and Dogs Adoption</Link> */}
            <a className='links' href='https://karenokasaki.github.io/memory/'>Memory Game</a>
            <a className='links' href='https://www.linkedin.com/in/karen-okasaki/'>Linkedin</a>
            <a className='links' href='https://profiles.ironhack.com/karen-okasaki'>Curriculum</a>
            <a className='links' href='https://karenokasaki.github.io'>Github</a>
        </div>
    );
}

export default Home;