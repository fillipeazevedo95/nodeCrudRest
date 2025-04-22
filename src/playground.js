import { Op } from "sequelize";

import "./database";

import Customer from "./app/models/Customer";
import Contact from "./app/models/Contact";

class Playground {
  static async play() {
    /*
    const customers = await Customer.findByPk(1);
    */
    /*
    const customers = await Customer.findOne({
      attributes: { exclude: ["status"] },
    });
    */

    const customers = await Customer.findAll({
      //attributes: ["id", "name"], // selecionar atributos
      //attributes: { exclude: ["status"] }, // excluir atributos

      include: [
        {
          model: Contact,
          where: {
            status: "ACTIVE",
          },
          required: false,
        },
      ],
      where: {
        status: {
          [Op.eq]: "ACTIVE",
        },
        createdAt: {
          [Op.gte]: new Date(),
        },
      },
      order: ["name"],
    });

    console.log(JSON.stringify(customers, null, 2));
  }
}

Playground.play();
