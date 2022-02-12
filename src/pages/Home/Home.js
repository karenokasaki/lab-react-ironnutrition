import { Link } from 'react-router-dom'

import './Home.css'

function Home() {
    return (
        <div className='homepage'>
            <Link className='links' to="/foods">Calories Counter</Link>
            {/* <Link className='links' to="/bitcoin">BITCOIN Api</Link> */}

            {/* <Link className='links' to="/pets">Cats and Dogs Adoption</Link> */}
            <a className='links' href='https://karenokasaki.github.io/memory/'>Memory Game</a>
            <a className='links' href='https://www.linkedin.com/in/karen-okasaki/'>Linkedin</a>
            <a className='links' href='https://profiles.ironhack.com/karen-okasaki'>Curriculum</a>
            <a className='links' href='https://github.com/karenokasaki'>Github</a>
            <br />
            <p>This is a react app. Developed by Karen Okasaki</p>
        </div>
    );
}

export default Home;