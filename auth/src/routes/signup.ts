import express from 'express';

const router = express.Router();

router.post('/api/users/signup',(req, res)=> {
  res.send('Sign up: Hello there junkhead!')
});

export { router as signupRouter };