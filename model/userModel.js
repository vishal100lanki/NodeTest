import Sequelize from "sequelize";
import sequelize from '../database/db.js';


 const User = sequelize.define("user", {

user_id: {allowNull: false,autoIncrement: true, primaryKey: true,type: Sequelize.INTEGER },
user_name: {type: Sequelize.STRING},
user_email: { type: Sequelize.STRING, unique: true },
user_password: {type: Sequelize.STRING},
user_image: {type: Sequelize.STRING},
total_orders: {type: Sequelize.INTEGER},
created_at: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  last_logged_in: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
});


 
await User.sync();
export default User;