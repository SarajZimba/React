import { Box, Typography } from '@mui/material'
import React from 'react'

const FAQs = () => {
  return (
    <>
      <Box maxWidth={'lg'} backgroundColor={'success.light'}  mx={20} my={5} p={2}>
        <Typography variant='h3' color={'warning.light'} textAlign={'center'} sx={{ textDecoration: "underline" }}>FAQs</Typography>
        <Box p={3} border={3} borderColor={'gray'} borderRadius={3} backgroundColor={'skyblue'} 
          sx={
            {
              "&:hover":{
                boxShadow: '0 10px 5px -3px white',
                transform: 'translateY(-25px)',
                transition: '1s'
              }
            }
          }
        >
          <Typography variant='h4' color={'secondary'} border={3} >
            <b><u>Question: </u></b>: Lorem, ipsum dolor odi iste a eius quo omnis, aliquid itaque minus nostrum ducimus praesentium cum doloribus? Fugiat, totam dicta. Accusantium, officia quos. Excepturi c
            onsequatur quia iste amet cumque consectetur esse, laboriosa
            m minus voluptas.
          </Typography>
        </Box>
        <Box p={3} border={3} borderColor={'gray'} borderRadius={3} backgroundColor={'skyblue'}>
          <Typography variant='h4' color={'info.dark'} border={3} >
            <b><u>Answer: </u></b>: Lorem, ipsum dolor odi iste a eius quo omnis, aliquid itaque minus nostrum ducimus praesentium cum doloribus? Fugiat, totam dicta. Accusantium, officia quos. Excepturi c
            onsequatur quia iste amet cumque consectetur esse, laboriosa
            m minus voluptas.
          </Typography>
        </Box>
        <Box p={3} border={3} borderColor={'gray'} borderRadius={3} backgroundColor={'skyblue'}>
          <Typography variant='h4' color={'secondary'} border={3} >
            <b><u>Question: </u></b>: Lorem, ipsum dolor odi iste a eius quo omnis, aliquid itaque minus nostrum ducimus praesentium cum doloribus? Fugiat, totam dicta. Accusantium, officia quos. Excepturi c
            onsequatur quia iste amet cumque consectetur esse, laboriosa
            m minus voluptas.
          </Typography>
        </Box>
        <Box p={3} border={3} borderColor={'gray'} borderRadius={3} backgroundColor={'skyblue'}>
          <Typography variant='h4' color={'info.dark'} border={3} >
            <b><u>Answer: </u></b>: Lorem, ipsum dolor odi iste a eius quo omnis, aliquid itaque minus nostrum ducimus praesentium cum doloribus? Fugiat, totam dicta. Accusantium, officia quos. Excepturi c
            onsequatur quia iste amet cumque consectetur esse, laboriosa
            m minus voluptas.
          </Typography>
        </Box>

      </Box>

    </>
  )
}

export default FAQs