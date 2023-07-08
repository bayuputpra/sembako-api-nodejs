import Joi from 'joi';

export const sembakoSchema = Joi.object({
  kode_barang: Joi.number().integer().required(),
  nama_barang: Joi.string().min(1).required(),
  harga_beli: Joi.string().min(1).required(),
  harga_jual: Joi.string().min(1).required(),
  stok: Joi.string().min(1).required()
});