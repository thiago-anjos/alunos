import Sequelize, { Model } from 'sequelize';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          notEmpty: {
            msg: 'Campo não pode ser vázio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          notEmpty: {
            msg: 'Campo não pode ser vázio',
          },
        },
      },
    }, { sequelize, tableName: 'photos' });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
