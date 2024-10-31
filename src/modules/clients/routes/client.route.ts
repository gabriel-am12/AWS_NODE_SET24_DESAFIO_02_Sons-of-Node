//@ts-nocheck
import { Router} from "express"; // Certifique-se de importar Request e Response
import ClientController from "../controllers/ClientController";

const clientRouter = Router();

clientRouter.get('/', ClientController.list);
clientRouter.get('/:id', ClientController.show);
clientRouter.post('/', ClientController.create);
clientRouter.put('/:id', ClientController.update);
clientRouter.delete('/:id', ClientController.delete);

export default clientRouter;
