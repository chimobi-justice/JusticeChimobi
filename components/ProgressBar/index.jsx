"use client"

import Box from '@mui/material/Box'
import { 
  motion, 
  useScroll, 
  useTransform 
} from 'framer-motion'

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        width: '100%',
        zIndex: 9999,
        backgroundColor: 'transparent',
      }}
    >
      <motion.div
        style={{
          height: '100%',
          width,
          background: "linear-gradient(90deg, #008000 0%, #9D8FC0 100%)",
        }}
      />
    </Box>
  );
};

export default ProgressBar;
