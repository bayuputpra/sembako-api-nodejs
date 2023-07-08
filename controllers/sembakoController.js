import Sembako from '../models/sembako.js';
import { sembakoSchema } from '../validator/sembakoValidator.js';
import {response, success, error }from '../helper/responses.js';

export const getSembakoo = async (req, res, next) => {
  try {
    const [sembakoo] = await Sembako.getAll();
    //res.json(response(200, "Ok",books));
    success(res, "Ok", sembakoo)
    
  } catch (err) {
    next(err);
  }
};

export const getSembakoById = async (req, res, next) => {
  try {
    const [books] = await Sembako.getById(req.params.id);
    response.success
    res.json({
      code: 200,
      message: "Ok",
      data: sembakoo[0]
    }
      );
  } catch (err) {
    console.log("terjadi error: " + err.message)
    next(err);
  }
};

export const createSembako = async (req, res, next) => {
  try {
    const value = await sembakoSchema.validateAsync(req.body);
    const [result] = await Sembako.create(value);
    res.json({ message: 'Sembako created successfully!', sembakoId: result.insertId });
  } catch (err) {
    next(err);
  }
};

export const updateSembako = async (req, res, next) => {
  try {
    const value = await sembakoSchema.validateAsync(req.body);
    await Sembako.update(req.params.id, value);
    res.json({ message: 'Sembako updated successfully!' });
  } catch (err) {
    next(err);
  }
};

export const deleteSembako = async (req, res, next) => {
  try {
    await Sembako.delete(req.params.id);
    res.json({ message: 'Sembako deleted successfully!' });
  } catch (err) {
    next(err);
  }
};