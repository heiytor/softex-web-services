import { hash } from "bcryptjs";
import { Request, Response } from "express";
import isEmail from "validator/lib/isEmail";
import { model } from "./database/model";

class UserController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await model.user.findMany();

      return res.status(200).json(users);        
    } catch (e) {
      return res.status(500).json({
        msg: `Something is wrong.`
      });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { username } = req.params;

      const user = await model.user.findUnique({
        where: { username }
      });

      if (!user) throw new Error(`Maybe this user does not exist`);

      return res.status(200).json(user);
    } catch (e: any) {
      return res.status(404).json({
        msg: e.message
      })
    }
  }

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const { username, email, password} = req.body;

      if (!username || !email || !password) {
        throw new Error(`Something is missing.`);
      }

      if (!isEmail(email)) {
        throw new Error(`Send a valid Email.`);
      }

      const password_hash = await hash(password, 8);

      const user = await model.user.create({
        data: {
          email,
          username,
          password_hash,
        },
      });

      return res.status(201).json(user);
    } catch (e: any) {
      return res.status(400).json({ msg: e.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { username, email, password} = req.body;
      const findByUsername = req.params.username;

      if (email) {
        if (!isEmail(email)) throw new Error(`Send a valid Email.`);

        await model.user.update({
          where: { username : findByUsername},
          data: { email }
        });
      }

      if (password) {
        const password_hash = await hash(password, 8);

        await model.user.update({
          where: { username : findByUsername},
          data: { password_hash }
        });
      }

      if (username) {
        await model.user.update({
          where: { username : findByUsername},
          data: { username }
        });
      }

      const user = await model.user.findUnique({
        where: { username: findByUsername },
      });

      return res.status(202).json(user);
    } catch (e: any) {
      return res.status(400).json({ msg: e.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { username } = req.params;

      const user = await model.user.delete({
        where: { username }
      });

      if (!user) throw new Error(`Maybe this user does not exist`);

      return res.status(201).json(user);
    } catch (e: any) {
      return res.status(404).json({
        msg: e.message
      })
    }
  }
}

export { UserController };