import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 sm:flex flex-row'>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-200 text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-10 text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis eius suscipit, 
                facere id dolorum consequuntur sequi assumenda, nam cumque, 
                ducimus consectetur sapiente animi reiciendis quam velit iusto minus sit? 
                Similique deserunt ducimus fugiat fugit labore sit. 
                Suscipit provident placeat, molestiae debitis rem soluta obcaecati, et dicta odio delectus quos.
            </p>
            <br />
            <p className='text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Aspernatur, suscipit saepe? Eos fugiat sit dignissimos atque vero? 
               Nostrum, recusandae ut! Ut commodi voluptatibus natus quis laborum nostrum? 
               Earum debitis corrupti, provident delectus est ipsa vitae. 
               Temporibus odit, doloribus repudiandae minima eligendi illo dolorum facere minus soluta ipsam. 
               Alias, obcaecati minima.
            </p>
        </div>
    </div>
  )
}

export default About