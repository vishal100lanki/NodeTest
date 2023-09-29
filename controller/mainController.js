import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default {
  async create(req, res) {
    try {
      let request = req.body;
      console.log(request);
      request.user_image = req.file.filename;
      console.log("file:",req.file)
      let data = await User.findAll({
        where: { user_email: request.user_email },
      });
      if (data.length != 0) {
        return res.json({ message: "user_email already exist" });
      }
      request.user_password = bcrypt.hashSync(request.user_password);

      let user = await User.create(request);

      const payload = {
        user: {
          id: user.user_id,
        },
      };

      let token = jwt.sign(payload, "thisismyprivatekeyforUsertoverify", {
        expiresIn: "1h",
      });
      return res.status(200).send({message:"User inserted successfully",token:token})
    } catch (error) {
        console.log(error)
      return res.json({ status: 400, error: "Failed to create user" });
    }
  },

  async userGet(req, res) {
    try {
      const userId = req.params.userId;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json({ status: 200, userDetail: user });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Error while fetching user details" });
    }
  },

  async update(req, res) {
    try {
      const userId = req.params.userId;

      let data = req.body;
      data.user_image = req?.file?.filename;
     
      await User.update(data, { where: { user_id: userId } });
 
      return res.json({ status: 200, message: "User updated successfully" });
    } catch (error) {
        console.log(error);
      return res.status(500).json({ error: "Error while updating user" });
    }
  },

  async getImage(req, res) {
    try {
      const userId = req.params.userId;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.json({ user_image: user.user_image });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async deleteUser(req, res) {
    try {
      const userId = req.params.userId;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      await user.destroy();
      return res.json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error while deleting user" });
    }
  },
};
