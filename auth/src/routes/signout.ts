import express from 'express';

const router = express.Router();

router.post('/api/users/signout',(req, res)=> {
  res.send('Sign Out: Hello there junkhead!')
});

export { router as signoutRouter };