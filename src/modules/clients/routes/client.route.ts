//@ts-nocheck
import { Router} from "express"; // Certifique-se de importar Request e Response
import ClientController from "../controllers/ClientController";
import { authenticateToken } from "../../auth/auth.middleware";

const clientRouter = Router();

clientRouter.get('/', authenticateToken ,ClientController.list);
clientRouter.get('/:id',authenticateToken ,ClientController.show);
clientRouter.post('/', authenticateToken,ClientController.create);
clientRouter.put('/:id', authenticateToken ,ClientController.update);
clientRouter.delete('/:id', authenticateToken ,ClientController.delete);

export default clientRouter;
