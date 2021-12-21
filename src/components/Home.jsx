import { Link } from 'react-router-dom';
import Card from './Card';

const Home = () => {

    const numTablas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return (
        <div className='bg-secondary overflow-y-scroll overflow-x-hidden h-screen'>

            <h1
                className='text-white text-center pt-14 text-4xl'
            >¿Cuál tabla de multiplicar quieres aprender?</h1>

            <div className="container mx-auto my-20 px-5">

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

                    {numTablas.map(numero => (
                        <Link
                            to={`/learn/${numero}`}
                            key={numero}
                        >
                            <Card
                                numero={numero}
                            />
                        </Link>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Home
