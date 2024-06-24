import React from 'react'


function Signup() {
  return (
    <div className='w-[310px] h-[410px] flex flex-col justify-between items-center bg-teal-800 rounded-lg border-2 border-white text-white shadow-lg shadow-lime-800/60'>
        <form className='h-52 w-full p-4 space-y-4'>
            <input type="text " placeholder='Username' className='inputClass' />
            <input type="text " placeholder='Email' className='inputClass' />
            <input type="text " placeholder='Password' className='inputClass' />

        </form>
        <button className='h-[38px] w-44 bg-white text-teal-800 font-bold rounded hover:bg-orange-300 hover:text-white '>Sign up</button>
        <p className='px-4 text-center text-sm'>Follow me on Youtube, Twitter and nstagram. Thank You!</p>
        <h3 className='w-full py-5 border-t-orange-400 border-t-[0.4px] text-sm font-bold text-center '>Already have an Account? Log in.</h3>
    </div>
  )
}

export default Signup