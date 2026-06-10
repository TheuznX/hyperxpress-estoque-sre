CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    estoque INT NOT NULL,
    status VARCHAR(20) NOT NULL
);

INSERT INTO produtos (nome, categoria, estoque, status) VALUES 
('Processador Ryzen 7 5700X', 'Processadores', 14, 'Disponivel'),
('Placa-Mae Asus TUF B550M Plus', 'Placas-Mae', 8, 'Disponivel'),
('Mouse Rapoo VT7 Max Wireless', 'Perifericos', 25, 'Disponivel'),
('Teclado Magnetico Aula Hero 68 HE', 'Perifericos', 3, 'Baixo Estoque');