import { Request, Response } from "express";
import { model } from "../database/model";

class BookController {
  
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const books = await model.book.findMany();  
    
      return res.status(200).json(books);
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      
      const book = await model.book.findUnique({ where: { id: +id } });

      if (!book) return res.status(400).json({
        error: `Maybe this book does not exists.`
      });

      return res.status(200).json(book);
    } catch (e: any) {
      return res.status(400).json({ error: `Maybe this book does not exists.` });
    }
  }

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, author, ISBN, inventory } = req.body;

      if (!name || !author || !ISBN || !inventory) {
        return res.status(400).json({ error: `Something is missing` });
      }
  
      const book = await model.book.create({
        data: {
          name,
          author,
          ISBN,
          inventory: +inventory
        }
      });
  
      return res.status(201).json(book);
    } catch (e: any) {
      return res.status(500).json({ error: `Something is wrong.` });
    }

  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, author, inventory } = req.body;

      if (name) {
        await model.book.update({
          data: { name },
          where: { id: +id }
        });
      }

      if (author) {
        await model.book.update({
          data: { author },
          where: { id: +id }
        });
      }

      if (inventory) {
        await model.book.update({
          data: { inventory },
          where: { id: +id }
        });
      }

      const book = await model.book.findUnique({ where: { id: +id } });

      return res.status(202).json(book);
    } catch (e) {
      return res.status(400).json({ error: `Something is wrong` });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const book = await model.book.delete({ where: { id: +id }})

      if (!book) return res.status(400).json({
        error: `Maybe this book does not exists.`
      });

      return res.status(202).json({
        deleted: true,
        book
      })
    } catch (e) {
      return res.status(400).json({ error: `Maybe this book does not exists.` });
    }
  }
}

export { BookController };