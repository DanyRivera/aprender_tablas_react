
const Card = ({numero}) => {
    return (
        <div
            className='mx-5 mb-5 sombra rounded-md bg-primary p-20 md:mx-0 md:mb-0 transition-all lg:hover:scale-110 lg:hover:rotate-12 hover:bg-orange-600 hover:cursor-pointer'
        >
            <p className='text-white text-8xl text-center transition-all font-bold hover:rotate-[-20deg]'>{numero}</p>
        </div>
    )
}

export default Card
