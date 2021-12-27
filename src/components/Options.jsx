
const Options = ({
    resultado,
    varianteResultado,
    resultadoCorrecto,
    setNumeroSeleccionado,
    numerosRandom,
    setNumerosReferencia
}) => {

    return (
        <>
            <li>
                <button
                    className={`px-10 mt-10 py-3 border-none outline-none bg-primary text-black text-2xl rounded-md tracking-widest transition-all ease-out duration-300 hover:cursor-pointer hover:bg-yellow-500  ${resultadoCorrecto && 'focus:bg-good focus:text-white focus:scale-125 focus:font-bold'} ${resultadoCorrecto == false && 'focus:bg-wrong focus:text-white focus:scale-125 focus:font-bold'}`}

                    onClick={e => {
                        setNumeroSeleccionado(Number(e.target.value));
                        setNumerosReferencia(numerosRandom);
                    }}

                    value={varianteResultado < 3 ? resultado : resultado + varianteResultado}
                >
                    {varianteResultado < 3 ? resultado : resultado + varianteResultado}
                </button>
            </li>
            <li>
                <button
                    className={`px-10 mt-10 py-3 border-none outline-none bg-primary text-black text-2xl rounded-md tracking-widest transition-all ease-out duration-300 hover:cursor-pointer hover:bg-yellow-500  ${resultadoCorrecto && 'focus:bg-good focus:text-white focus:scale-125 focus:font-bold'} ${resultadoCorrecto == false && 'focus:bg-wrong focus:text-white focus:scale-125 focus:font-bold'}`}

                    onClick={e => {
                        setNumeroSeleccionado(Number(e.target.value));
                        setNumerosReferencia(numerosRandom);
                    }}

                    value={varianteResultado == 3 ? resultado : resultado - varianteResultado + 3}
                >
                    {varianteResultado == 3 ? resultado : resultado - varianteResultado + 3}
                </button>
            </li>
            <li>
                <button
                    className={`px-10 mt-10 py-3 border-none outline-none bg-primary text-black text-2xl rounded-md tracking-widest transition-all ease-out duration-300 hover:cursor-pointer hover:bg-yellow-500  ${resultadoCorrecto && 'focus:bg-good focus:text-white focus:scale-125 focus:font-bold'} ${resultadoCorrecto == false && 'focus:bg-wrong focus:text-white focus:scale-125 focus:font-bold'}`}

                    onClick={e => {
                        setNumeroSeleccionado(Number(e.target.value));
                        setNumerosReferencia(numerosRandom);
                    }}

                    value={varianteResultado > 3 ? resultado : resultado - varianteResultado}
                >
                    {varianteResultado > 3 ? resultado : resultado - varianteResultado}
                </button>
            </li>
        </>



    )
}

export default Options
