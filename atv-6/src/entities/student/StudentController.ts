import { Request, Response } from "express";
import { IStudentRepository } from "./repositories/IStudentRepository";
import { StudentRepository } from "./repositories/StudentRepository";
import { CreateService } from "./services/create.service";
import { DeleteService } from "./services/delete.service";
import { IndexService } from "./services/index.service";
import { ShowService } from "./services/show.service";
import { UpdateService } from "./services/update.service";

class StudentController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const service = new IndexService(new StudentRepository());
      const students = await service.execute();
  
      return res.json(students);
    } catch (e: any) {
      return res.status(503).json({ error: e.message });
    }
  }
  
  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { matriculation } = req.params;

      const service = new ShowService(new StudentRepository());
      const student = await service.execute(matriculation);
  
      return res.json(student);
      } catch (e: any) {
      return res.status(400).json({ error: e.message });
    }
  }

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const {
        first_name,
        last_name,
        age,
        classroom,
        matriculation
      } = req.body;
  
      if (!first_name || !last_name || !age || !classroom || !matriculation) {
        return res.status(400).json({ error: 'Something is missing' })
      }
  
      const service = new CreateService(new StudentRepository());
      const student = await service.execute({
        first_name,
        last_name,
        age,
        classroom,
        matriculation
      });
  
      return res.status(201).json(student);
    } catch (e: any) {
      return res.status(400).json({ error: e.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const {
        first_name,
        last_name,
        age,
        classroom,
      } = req.body;

      const { matriculation } = req.params;
  
      if (!matriculation) {
        return res.status(400).json({ error: 'Something is missing' })
      }
  
      const service = new UpdateService(new StudentRepository());
      const student = await service.execute(matriculation, {
        first_name,
        last_name,
        age,
        classroom,
      });
  
      return res.status(202).json(student);
    } catch (e: any) {
      return res.status(400).json({ error: e.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { matriculation } = req.params;

      const service = new DeleteService(new StudentRepository());
      const students = await service.execute(matriculation);
  
      return res.status(202).json(students);
    } catch (e: any) {
      return res.status(400).json({ error: e.message });
    }
  }
}

export { StudentController };