import express from 'express';
import SideBar from '../controller/sidebar/getData';
const router = express.Router();

router.get('/getSidebarData', SideBar.getData);
router.post('/addSidebarData', SideBar.addData);
router.post('/removeSidebarData', SideBar.removeData);
router.post('/updateSidebarData', SideBar.updateData);

export default router;