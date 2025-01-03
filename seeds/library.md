# Semilla para la sección de bibliteca

```SQL
-- Insert authors
INSERT INTO author (id, name) VALUES
  ('6f1a319d-911d-4b2d-9ec5-4dd9e3c954c9', 'Brandon Sanderson'),
  ('abe472ae-6b74-4be6-a7cc-d969d3fc08f6', 'J. K. Rowling'),
  ('b5bc0b16-a1cd-488c-a37d-4e77b7a56ec9', 'J. R. R. Tolkien');

-- Insert saga books
INSERT INTO saga_book (id, name) VALUES
  ('289ea712-3b4c-4c18-b365-95f9e77c7f1d', 'Nacidos de la Bruma'),
  ('0bb2af36-c355-4460-8f69-38f655fecaa9', 'El Archivo de las Tormentas'),
  ('cdb40229-7756-4da5-9637-59cfbddd7a52', 'Harry Potter'),
  ('1574a63f-c700-45c7-84b1-b3b40cea2e59', 'El Señor de los Anillos');

-- Insert books for Brandon Sanderson
INSERT INTO book (id, title, url_image, author_id, saga_book_id) VALUES
  ('206a962c-e658-4c75-ba19-6955bcafa796', 'El Imperio Final', '', '6f1a319d-911d-4b2d-9ec5-4dd9e3c954c9', '289ea712-3b4c-4c18-b365-95f9e77c7f1d'),
  ('56395000-ad70-46fc-beaf-885600f71e66', 'El Pozo de la Ascensión', '', '6f1a319d-911d-4b2d-9ec5-4dd9e3c954c9', '289ea712-3b4c-4c18-b365-95f9e77c7f1d'),
  ('f2fb6d22-9e23-4ded-a10c-ac2ad3e044fd', 'El Héroe de las Eras', '', '6f1a319d-911d-4b2d-9ec5-4dd9e3c954c9', '289ea712-3b4c-4c18-b365-95f9e77c7f1d'),
  ('5fd2e228-e24b-4652-a0b1-62f867d4e827', 'El Camino de los Reyes', '', '6f1a319d-911d-4b2d-9ec5-4dd9e3c954c9', '0bb2af36-c355-4460-8f69-38f655fecaa9'),
  ('a8ec0ff1-097b-4a28-85d0-6f614b36d791', 'Palabras Radiantes', '', '6f1a319d-911d-4b2d-9ec5-4dd9e3c954c9', '0bb2af36-c355-4460-8f69-38f655fecaa9'),
  ('c2d05920-8e00-4f06-a50f-59cd782dc1be', 'Juramentada', '', '6f1a319d-911d-4b2d-9ec5-4dd9e3c954c9', '0bb2af36-c355-4460-8f69-38f655fecaa9'),
  ('34f8ab47-11c6-48cc-b969-bc092a6e3ae7', 'El Ritmo de la Guerra', '', '6f1a319d-911d-4b2d-9ec5-4dd9e3c954c9', '0bb2af36-c355-4460-8f69-38f655fecaa9');

-- Insert books for J. K. Rowling
INSERT INTO book (id, title, url_image, author_id, saga_book_id) VALUES
  ('61600250-21a6-4233-b8c5-da09234de191', 'Harry Potter y la piedra filosofal', '', 'abe472ae-6b74-4be6-a7cc-d969d3fc08f6', 'cdb40229-7756-4da5-9637-59cfbddd7a52'),
  ('1a64bc27-b997-4e5b-9fc8-46ce002d2f3f', 'Harry Potter y la cámara secreta', '', 'abe472ae-6b74-4be6-a7cc-d969d3fc08f6', 'cdb40229-7756-4da5-9637-59cfbddd7a52'),
  ('7c8bec16-9870-4475-bc25-e1b967d11411', 'Harry Potter y el prisionero de Azkaban', '', 'abe472ae-6b74-4be6-a7cc-d969d3fc08f6', 'cdb40229-7756-4da5-9637-59cfbddd7a52'),
  ('a15c2429-4d87-4e00-b7d1-ef2ae044e8ff', 'Harry Potter y el cáliz de fuego', '', 'abe472ae-6b74-4be6-a7cc-d969d3fc08f6', 'cdb40229-7756-4da5-9637-59cfbddd7a52'),
  ('2c5e10b2-e0cb-49fd-9ebd-80400bf6f0c6', 'Harry Potter y la Orden del Fénix', '', 'abe472ae-6b74-4be6-a7cc-d969d3fc08f6', 'cdb40229-7756-4da5-9637-59cfbddd7a52'),
  ('4b7c3b70-c3f2-439a-a0d7-cc5a4ce064ae', 'Harry Potter y el misterio del príncipe', '', 'abe472ae-6b74-4be6-a7cc-d969d3fc08f6', 'cdb40229-7756-4da5-9637-59cfbddd7a52'),
  ('4635fe16-b672-4a8c-b18f-5f240c306266', 'Harry Potter y las reliquias de la Muerte', '', 'abe472ae-6b74-4be6-a7cc-d969d3fc08f6', 'cdb40229-7756-4da5-9637-59cfbddd7a52');

-- Insert books for J. R. R. Tolkien
INSERT INTO book (id, title, url_image, author_id, saga_book_id) VALUES
  ('78ea84d9-03b1-4fff-9e88-281df4c976cd', 'La Comunidad del Anillo', '', 'b5bc0b16-a1cd-488c-a37d-4e77b7a56ec9', '1574a63f-c700-45c7-84b1-b3b40cea2e59'),
  ('29e2fc6f-d164-4afa-9cf0-3166fbdfab35', 'Las Dos Torres', '', 'b5bc0b16-a1cd-488c-a37d-4e77b7a56ec9', '1574a63f-c700-45c7-84b1-b3b40cea2e59'),
  ('14212090-3da7-4dcf-a2c6-73dedcf32d34', 'El Retorno del Rey', '', 'b5bc0b16-a1cd-488c-a37d-4e77b7a56ec9', '1574a63f-c700-45c7-84b1-b3b40cea2e59');
```
