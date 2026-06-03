import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

app.use(express.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prac2'
});


// EJERCICIO 1
// POST /categorias
// Registrar categoría

app.post('/categorias', async (req, res) => {

    try {

        const { nombre, descripcion } = req.body;

        const [resultado] = await pool.query(
            'INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)',
            [nombre, descripcion]
        );

        res.status(201).json({
            mensaje: 'Categoría registrada correctamente',
            id: resultado.insertId
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al registrar categoría',
            error: error.message
        });

    }

});


// EJERCICIO 2
// GET /categorias
// Mostrar todas las categorías

app.get('/categorias', async (req, res) => {

    try {

        const [resultado] = await pool.query(
            'SELECT * FROM categorias'
        );

        res.status(200).json({
            mensaje: 'Categorías obtenidas correctamente',
            datos: resultado
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al obtener categorías',
            error: error.message
        });

    }

});


// EJERCICIO 3
// GET /categorias/:id
// Mostrar categoría y sus productos

app.get('/categorias/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const [resultado] = await pool.query(`
            SELECT
                c.id,
                c.nombre AS categoria,
                c.descripcion,
                p.id AS productoId,
                p.nombre AS producto,
                p.precio
            FROM categorias c
            LEFT JOIN productos p
            ON c.id = p.categoriaId
            WHERE c.id = ?
        `, [id]);

        if (resultado.length === 0) {

            return res.status(404).json({
                mensaje: 'Categoría no encontrada'
            });

        }

        res.status(200).json({
            mensaje: 'Categoría encontrada junto con sus productos',
            datos: resultado
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al buscar categoría',
            error: error.message
        });

    }

});


// EJERCICIO 4
// PATCH /categorias/:id
// Actualizar categoría

app.patch('/categorias/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const { nombre, descripcion } = req.body;

        const [resultado] = await pool.query(
            'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',
            [nombre, descripcion, id]
        );

        if (resultado.affectedRows === 0) {

            return res.status(404).json({
                mensaje: 'La categoría no existe'
            });

        }

        res.status(200).json({
            mensaje: 'Categoría actualizada correctamente'
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al actualizar categoría',
            error: error.message
        });

    }

});


// EJERCICIO 5
// DELETE /categorias/:id
// Eliminar categoría

app.delete('/categorias/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const [resultado] = await pool.query(
            'DELETE FROM categorias WHERE id = ?',
            [id]
        );

        if (resultado.affectedRows === 0) {

            return res.status(404).json({
                mensaje: 'La categoría no existe'
            });

        }

        res.status(200).json({
            mensaje: 'Categoría y productos eliminados correctamente'
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al eliminar categoría',
            error: error.message
        });

    }

});


// SERVIDOR

const PUERTO = 3001;

app.listen(PUERTO, () => {

    console.log(
        `Servidor ejecutándose en http://localhost:${PUERTO}`
    );

});