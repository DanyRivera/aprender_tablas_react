import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { random } from "../helpers";

const Learn = () => {

    const { tabla } = useParams();

    const [numerosRandom, setNumerosRandom] = useState([]);
    const [numeroRandom, setNumeroRandom] = useState(random(1, 10));
    const [numeroAmultiplicar, setNumeroAmultiplicar] = useState(numeroRandom);
    const [resultado, setResultado] = useState(0);
    const [numeroSeleccionado, setNumeroSeleccionado] = useState(0);
    const [resultadoCorrecto, setResultadoCorrecto] = useState(false);

    useEffect(() => {

        if (numerosRandom.length > 0) {

            //Si se repite lo agregas si NO buscar otro número
            if (!numerosRandom.includes(numeroRandom)) {
                setNumerosRandom([...numerosRandom, numeroRandom]);
                setNumeroAmultiplicar(numeroRandom);
                setResultado(0);
                setNumeroSeleccionado(0);

            } else {

                for (let i = 0; i <= numerosRandom.length; i++) {
                    setNumeroRandom(random(1, 10));

                    if (!numerosRandom.includes(numeroRandom)) {
                        setNumerosRandom([...numerosRandom, numeroRandom]);
                    }
                }


            }

        } else {
            setNumerosRandom([...numerosRandom, numeroRandom]);
        }


    }, [numeroRandom])

    useEffect(() => {

        //Una vez que carga
        if (resultado === 0 || numeroSeleccionado === 0) {
            //Saber el resultado
            setResultado(tabla * numeroAmultiplicar);
            return;
        }

        //Verificar el resultado y poner si esta bien o no en el state
        if (resultado === numeroSeleccionado) {
            setResultadoCorrecto(true);
        } else {
            setResultadoCorrecto(false);
        }

    }, [resultado, numeroSeleccionado])


    return (
        <div className="bg-secondary pt-16 md:pt-20 overflow-y-scroll overflow-x-hidden h-screen">
            <h1
                className='text-white text-center pt-20 text-6xl'
            >Vamos!</h1>

            <div className="text-center mt-36 text-8xl text-white font-bold">
                <p>{tabla} x {numeroAmultiplicar}</p>
            </div>

            <ul className="text-center md:flex justify-between mx-auto mt-20 md:mt-28  w-1/3">
                <li>
                    <button
                        className="px-10 mt-10 py-3 border-none outline-none bg-primary text-black text-2xl rounded-md tracking-widest transition-all duration-150 hover:cursor-pointer hover:bg-yellow-500 hover:font-bold"

                        onClick={e => {
                            setNumeroSeleccionado(Number(e.target.value));
                            setNumeroRandom(random(1, 10));
                        }}

                        value={resultado}
                    >
                        {resultado}
                    </button>
                </li>

                <li>
                    <button
                        className="px-10 mt-10 py-3 border-none outline-none bg-primary text-black text-2xl rounded-md tracking-widest transition-all duration-150 hover:cursor-pointer hover:bg-yellow-500 hover:font-bold"

                        onClick={e => {
                            setNumeroSeleccionado(Number(e.target.value));
                            setNumeroRandom(random(1, 10));
                        }}

                        value={resultado + 3}
                    >
                        {resultado + 3}
                    </button>
                </li>

                <li>
                    <button
                        className="px-10 mt-10 py-3 border-none outline-none bg-primary text-black text-2xl rounded-md tracking-widest transition-all duration-150 hover:cursor-pointer hover:bg-yellow-500 hover:font-bold"

                        onClick={e => {
                            setNumeroSeleccionado(Number(e.target.value));
                            setNumeroRandom(random(1, 10));
                        }}

                        value={resultado - 3}
                    >
                        {resultado - 3}
                    </button>
                </li>

            </ul>

        </div>
    )
}

export default Learn
