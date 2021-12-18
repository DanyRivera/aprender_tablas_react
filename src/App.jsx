import { useState } from 'react';

function App() {

  // const numTablas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numTablas = [1, 2, 3, 4, 5, 6];

  return (
    <div className='bg-secondary h-screen'>

      <h1
        className='text-white text-center pt-14 text-3xl'
      >Que tabla quieres aprender?</h1>

      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-3 gap-4">
          {numTablas.map(numTabla => (
            <div className='bg-primary'>
              <p>{numTabla}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default App
