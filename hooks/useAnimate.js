import { useEffect, useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'

const useAnimate = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
  
    useEffect(() => {
      if(isInView) {
        controls.start("visible")
      }
    }, [isInView]);
  
    const variants = {
      hidden: {opacity: 0, y: 95},
      visible: {opacity: 1, y: 0}
    }

    const transition = {
      duration: 0.5, 
      delay: 0.25 
    }

    return { ref, variants, controls, transition }
}

export default useAnimate;