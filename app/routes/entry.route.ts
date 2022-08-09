import EntryController from '@/controllers/EntryController';
import UserAuthenticator from '@common/middlewares/UserAuthenticator';
import TodoController from '@controllers/TodoController';
import { Router } from 'express';

const path = '/entry';
const EntryRouter = Router({ mergeParams: true });

EntryRouter.get(`${path}/live-data`, UserAuthenticator.isAdminAuthenticated(), EntryController.getAllLive);

EntryRouter.get(`${path}`, UserAuthenticator.isAdminAuthenticated(), TodoController.getAll);

EntryRouter.get(`${path}/:todoId`, UserAuthenticator.isAdminAuthenticated(), TodoController.getOne);

EntryRouter.patch(`${path}/:todoId`, UserAuthenticator.isAdminAuthenticated(), TodoController.update);

EntryRouter.delete(`${path}/:todoId`, UserAuthenticator.isAdminAuthenticated(), TodoController.delete);

EntryRouter.post(`${path}`, UserAuthenticator.isAdminAuthenticated(), TodoController.create);

export default EntryRouter;
