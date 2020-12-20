import { Router } from 'express';
import multer from 'multer';

import updloadConfig from '../config/upload';
import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(updloadConfig);

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password
  });

  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return res.status(201).json(userWithoutPassword);
});

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (req, res) => {

  const updateUserAvatar = new UpdateUserAvatarService();

  const userData = await updateUserAvatar.execute({
    user_id: req.user.id,
    avatarFileName: req.file.filename,
  });

  const user = {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    avatar: userData.avatar,
    created_at: userData.created_at,
    updated_at: userData.updated_at
  }

  return res.json(user);
});

export default usersRouter;
