import Joi from "joicolumnCollectionName";
import { getDB } from "../config/mongodb";

//define column collection
const columnCollectionName = "columns";
const columnCollectionSchema = Joi.object({
  boardId: Joi.string().required().min(3).max(20),
  cardOrder: Joi.array().items(Joi.string()).default([]),
  createAt: Joi.date().timestamp().default(Date.now()),
  updateAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false),
});

const validateSchema = async (data) => {
  return await columnCollectionSchema.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    const value = await validateSchema(data);
    const result = await getDB()
      .collection(columnCollectionName)
      .insertOne(value);

    return result.ops[0];

    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const columnModel = { createNew };
