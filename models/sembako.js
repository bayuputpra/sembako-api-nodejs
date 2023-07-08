import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sembako_api'
});

class Sembako {
    static getAll() {
        return pool.query('SELECT * FROM sembakoo');
    };

    static getById(id) {
        return pool.query('SELECT * FROM sembakoo WHERE id = ?', [id]);
      }
    
    static create({ kode_barang, nama_barang, harga_beli, harga_jual, stok }) {
        return pool.query('INSERT INTO sembakoo (kode_barang, nama_barang, harga_beli, harga_jual, stok) VALUES (?, ?, ?, ?, ?)', [kode_barang, nama_barang, harga_beli, harga_jual, stok]);
      }
    
      static update(id, { kode_barang, nama_barang, harga_beli, harga_jual, stok }) {
        return pool.query('UPDATE sembakoo SET kode_barang = ?, nama_barang = ?, harga_beli = ?, harga_jual = ?, stok = ? WHERE id = ?', [kode_barang, nama_barang, harga_beli, harga_jual, stok]);
      }
    
      static delete(id) {
        return pool.query('DELETE FROM sembakoo WHERE id = ?', [id]);
      }
}

export default Sembako;