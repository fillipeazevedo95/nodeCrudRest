import Sequelize, { Model } from "sequelize";

class customer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      },
      {
        sequelize,
      }
    );
  }
}

export default Customer;
