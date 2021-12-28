import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { random } from "../helpers";
import Options from "./Options";

const Learn = ({ puntos, setPuntos }) => {

    const { tabla } = useParams();
    const navigate = useNavigate();
    let busqueda;

    const [numeroRandom, setNumeroRandom] = useState(random(1, 10));
    const [numeroAmultiplicar, setNumeroAmultiplicar] = useState(numeroRandom);
    const [numerosRandom, setNumerosRandom] = useState([]);
    const [numerosReferencia, setNumerosReferencia] = useState([]);
    const [resultado, setResultado] = useState(0);
    const [numeroSeleccionado, setNumeroSeleccionado] = useState(0);
    const [resultadoCorrecto, setResultadoCorrecto] = useState(null);

    //Options
    const [varianteResultado, setVarianteResultado] = useState(random(1, 5));

    useEffect(() => {

        //"Proteger" la ruta
        if (tabla > 10 || isNaN(tabla)) {
            navigate('/');
            return;
        }

        //Redireccionar una vez terminado
        if (numerosRandom.length === 10) {

            // navigate('/resultados');

        } else {

            busqueda = setInterval(() => {

                setNumeroRandom(random(1, 10));

            }, 3000);

            //Si se repite lo agregas si NO buscar otro número
            if (!numerosRandom.includes(numeroRandom)) {

                setNumerosRandom([...numerosRandom, numeroRandom]);
                setNumeroAmultiplicar(numeroRandom);
                setResultado(0);
                setNumeroSeleccionado(0);
                clearInterval(busqueda);

            } 
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

            if (puntos.length < numerosRandom.length) {
                setPuntos([...puntos, 1]);
            }

        } else {
            setResultadoCorrecto(false);
        }

        setNumeroSeleccionado(0);

        setTimeout(() => {
            setVarianteResultado(random(1, 5));
            setNumeroRandom(random(1, 10));
            setResultadoCorrecto(null);
        }, 750);


    }, [resultado, numeroSeleccionado])


    return (
        <div className="bg-secondary pt-16 md:pt-20 overflow-y-scroll overflow-x-hidden h-screen">
            <h1
                className='text-white text-center text-6xl'
            >Vamos!</h1>

            <div className="text-center mt-20 md:mt-36 text-8xl text-white font-bold">
                <p>{tabla} x {numeroAmultiplicar}</p>
            </div>

            <ul className="text-center md:flex justify-between mx-auto mt-20 md:mt-28 w-1/3">

                <Options
                    resultado={resultado}
                    resultadoCorrecto={resultadoCorrecto}
                    varianteResultado={varianteResultado}
                    numerosRandom={numerosRandom}
                    setNumeroSeleccionado={setNumeroSeleccionado}
                    setNumerosReferencia={setNumerosReferencia}
                />

            </ul>

        </div>
    )
}

export default Learn
