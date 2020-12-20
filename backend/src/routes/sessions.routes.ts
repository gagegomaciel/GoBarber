import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authenticateUser = new AuthenticateUserService();

  const response = await authenticateUser.execute({
    email,
    password
  });

  const user = {
    id: response.user.id,
    name: response.user.name,
    email: response.user.email,
    created_at: response.user.created_at,
    updated_at: response.user.updated_at,
  };

  const token = response.token;

  return res.status(201).json({ user, token });
});

export default sessionsRouter;
