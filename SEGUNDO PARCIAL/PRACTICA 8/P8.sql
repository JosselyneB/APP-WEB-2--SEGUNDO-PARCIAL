-- Crear la base de datos
CREATE DATABASE websocket_test;

-- Conectarse a la base de datos
\c websocket_test;

-- Crear la tabla partido
CREATE TABLE partido (
    id SERIAL PRIMARY KEY,
    id_torneo INTEGER NOT NULL,
    id_equipo1 INTEGER NOT NULL,
    id_equipo2 INTEGER NOT NULL,
    goles_equipo1 INTEGER NOT NULL,
    goles_equipo2 INTEGER NOT NULL,
    observacion TEXT,
    estado TEXT NOT NULL -- Nueva columna para el estado
);

-- Insertar datos de prueba
INSERT INTO partido (id_torneo, id_equipo1, id_equipo2, goles_equipo1, goles_equipo2, observacion, estado)
VALUES 
(1, 1, 2, 0, 0, 'Partido inicial', 'activo'),
(1, 2, 3, 2, 1, 'Partido emocionante', 'terminado'),
(2, 3, 4, 3, 3, 'Empate increíble', 'activo'),
(2, 1, 3, 1, 0, 'Victoria ajustada', 'terminado');


SELECT * FROM PARTIDO

DROP TABLE partido

