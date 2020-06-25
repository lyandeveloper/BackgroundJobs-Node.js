import { Request, Response } from 'express';

class User {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password
    }

    return res.json(user);
  }

}

export default new User();