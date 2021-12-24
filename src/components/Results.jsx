import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { obtenerPorcentaje } from "../helpers";

const Results = ({ puntos, setPuntos }) => {

    const navigate = useNavigate();

    const [calificacion, setCalificacion] = useState(0);

    useEffect(() => {

        //"Proteger" la ruta
        // if (puntos == 0) {
        //     navigate('/');
        //     return;
        // }

        //Deshabilitar el btn back en el Navegador
        window.location.hash = "no-back-button";
        window.location.hash = "Again-No-back-button";
        window.onhashchange = function () { window.location.hash = "no-back-button"; }

        //Logica de sumar todos los puntos y sacar el porcentaje
        const sumaPuntos = puntos.reduce((total, punto) => punto + total, 0);
        setCalificacion(obtenerPorcentaje(sumaPuntos, 10, 0));

        setPuntos([]);
    }, [])

    return (

        <div className="bg-secondary pt-40 md:pt-16 text-center lg:pt-20 overflow-y-scroll overflow-x-hidden h-screen">
            <div className="mt-10">
                <h2 className="text-5xl md:text-8xl text-white font-bold">Calificación</h2>
                <div className="text-center">
                    <p
                        className={`text-7xl md:text-8xl mt-14 md:mt-20 font-bold ${calificacion > 60 ? 'text-[#89fc00]' : 'text-wrong'}`}

                    >{calificacion}%</p>

                    {calificacion > 60 ? (

                        <p className="mt-12 text-4xl md:text-5xl font-bold text-[#89fc00]" >Bien Hecho !</p>

                    ) : (

                        <p className="mt-12 text-4xl md:text-5xl font-bold text-wrong" >Puedes Mejorar !</p>

                    )}
                </div>

                <div>
                    <Link
                        to="/"
                    >
                        <button
                            className="px-14 md:px-16 py-4 md:py-5 mt-16 md:mt-24 border-none outline-none bg-primary text-white text-lg md:text-2xl rounded-md tracking-widest transition-all ease-out duration-300 hover:cursor-pointer hover:bg-yellow-500 uppercase font-bold shadow-2xl"
                        >
                            Continuar
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Results;
