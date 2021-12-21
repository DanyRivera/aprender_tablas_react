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

            if (!numerosRandom.includes(numeroRandom)) {
                setNumerosRandom([...numerosRandom, numeroRandom]);
            }

            numerosRandom.forEach(numero => {
                setNumeroAmultiplicar(numero);
                setResultado(0);
            })
    

        } else {
            setNumerosRandom([...numerosRandom, numeroRandom]);
        }


    }, [numeroRandom])

    useEffect(() => {

        if (resultado === 0 || numeroSeleccionado === 0) {
            setResultado(tabla * numeroAmultiplicar);
            return;
        }

        if (resultado === numeroSeleccionado) {
            setResultadoCorrecto(true);
        } else {
            setResultadoCorrecto(false);
        }


    }, [resultado, numeroSeleccionado])


    return (
        <div className="bg-secondary overflow-y-scroll overflow-x-hidden h-screen">
            <h1
                className='text-white text-center pt-20 text-6xl'
            >Vamos!</h1>

            {/* <button
                onClick={() => )}
            >
                xd
            </button> */}

            <div className="text-center mt-36 text-8xl text-white font-bold">
                <p>{tabla} x {numeroAmultiplicar}</p>
            </div>

            <ul className="flex justify-between mx-auto mt-40 w-1/3">
                <li
                    className="px-10 py-3 bg-primary text-black text-2xl rounded-md tracking-widest transition-all duration-150 hover:cursor-pointer hover:bg-yellow-500 hover:font-bold"
                    onClick={e => {
                        setNumeroSeleccionado(e.target.value);
                        setNumeroRandom(random(1, 10));
                    }}
                    value={resultado}
                >
                    {resultado}
                </li>

                <li
                    className="px-10 py-3 bg-primary text-black text-2xl rounded-md tracking-widest transition-all duration-150 hover:cursor-pointer hover:bg-yellow-500 hover:font-bold"
                    onClick={e => {
                        setNumeroSeleccionado(e.target.value);
                        setNumeroRandom(random(1, 10));
                    }}
                    value={resultado + 3}
                >
                    {resultado + 3}
                </li>

                <li
                    className="px-10 py-3 bg-primary text-black text-2xl rounded-md tracking-widest transition-all duration-150 hover:cursor-pointer hover:bg-yellow-500 hover:font-bold"
                    onClick={e => {
                        setNumeroSeleccionado(e.target.value);
                        setNumeroRandom(random(1, 10));
                    }}
                    value={resultado - 3}
                >
                    {resultado - 3}
                </li>

            </ul>

        </div>
    )
}

export default Learn
