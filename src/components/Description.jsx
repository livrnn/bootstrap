import React from 'react'
import {motion, spring} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
      <div>

        <div><motion.p
             animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
             transition={{
                 duration: 5,
                 delay: 0.3,
                 ease: [0.5, 0.71, 1, 1.5],
             }}
             initial={{ opacity: 0, scale: 0.5 }}
             whileHover={{ scale: 1.2 }}
        >
            Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
        </motion.p></div>

        <motion.img
        width={'50%'}
        src='/img/5.jpg'
        alt=''
    
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 2 }}
        
        />

        <motion.img
        width={'50%'}
        src='/img/ball.jpg'
        alt=''
    
        drag="x" 
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, loop: Infinity }}
        
        />

    </div>
  )}


export default Description