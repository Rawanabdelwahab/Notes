import { Router } from "express";
import { get, post ,edit,deleteOne} from "../controllers/note.js";
const router =new Router()
router.get('/note',get)
router.post('/note',post)
router.put('/note/:id',edit)
router.delete('/note/:id',deleteOne)
export default router