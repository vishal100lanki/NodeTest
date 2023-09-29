import express from "express";
import mainController from "../controller/mainController.js";
import authenticateUser from "../middleware/auth.js"; ``
import multer from "multer";
import bodyParser from 'body-parser';


const Router = express.Router();

Router.use(bodyParser.json());

// image upload  using multer
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads');
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
   }
});
var upload = multer({ storage: storage });




Router.post('/insert', upload.single('user_image'), mainController.create);
Router.get('/details/:userId',mainController.userGet ); // userDetails
Router.get('/image/:userId',mainController.getImage ); // userImage
Router.put('/update/:userId',authenticateUser,mainController.update );
Router.delete('/delete/:userId',mainController.deleteUser );




export default Router;