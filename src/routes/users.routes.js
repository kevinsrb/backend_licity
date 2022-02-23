
import { Router } from 'express'
const router = Router();
// import { validacionesJurados } from '../middleware/jurados.middelware';
import { 
    signup, 
    signin
} from '../controllers/users.controller'


router.post('/signup', signup);
router.post('/signin', signin);

export default router;
