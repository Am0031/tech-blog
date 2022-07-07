const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const User = require("./User");

class Post extends Model {
  getPost() {
    return {
      id: this.id,
      title: this.title,
      text: this.postText,
    };
  }
}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "post",
};

Post.init(schema, options);

module.exports = Post;
