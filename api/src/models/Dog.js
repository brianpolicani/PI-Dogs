const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      heightMin: {
        type: DataTypes.INTEGER,
        get() {
          return this.getDataValue("heightMin") + " cm";
        },
        allowNull: false,
      },
      heightMax: {
        type: DataTypes.INTEGER,
        get() {
          return this.getDataValue("heightMax") + " cm";
        },
        allowNull: false,
      },
      weightMin: {
        type: DataTypes.INTEGER,
        get() {
          return this.getDataValue("weightMin") + " kg";
        },
        allowNull: false,
      },
      weightMax: {
        type: DataTypes.INTEGER,
        get() {
          return this.getDataValue("weightMax") + " kg";
        },
        allowNull: false,
      },
      yearsOfLifeMin: {
        type: DataTypes.INTEGER,
        get() {
          return this.getDataValue("yearsOfLifeMin") + " years";
        },
        allowNull: false,
      },
      yearsOfLifeMax: {
        type: DataTypes.INTEGER,
        get() {
          return this.getDataValue("yearsOfLifeMax") + " years";
        },
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      temperament:{
        type: DataTypes.STRING,
        allowNull: true,
      },   
      createInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
