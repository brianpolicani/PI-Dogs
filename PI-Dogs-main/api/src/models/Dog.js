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
        allowNull: false,
        primaryKey: true,
      },
      name: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      height: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("height") + " cm";
        },
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("weight") + " kg";
        },
        allowNull: false,
      },
      yearsOfLife: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("yearsOfLife") + " years";
        },
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
