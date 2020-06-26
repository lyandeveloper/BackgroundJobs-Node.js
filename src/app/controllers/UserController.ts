import { Request, Response } from 'express';  
import Queue from '../lib/Queue';

class User {
  async store(req: Request, res: Response) : Promise<Response>{
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password
    }
    
    await Queue.add({ user })

    return res.json(user);
  }

}

export default new User();