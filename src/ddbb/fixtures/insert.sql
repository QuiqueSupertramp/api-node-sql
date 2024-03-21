USE bxwgsicfhw36ozdstxlt;

INSERT INTO seasons (season)
	VALUES ('2022-2023'),('2023-2024'),('2024-2025');

INSERT INTO roles (role) 
	VALUES ('user'), ('admin'), ('editor');

INSERT INTO users (id, name,firstname,lastname,email, phone, birthdate) VALUES
(UUID_TO_BIN('6387a220-7c18-11ee-a042-cecd02c24f20'),'quique', 'lópez', 'millán','quique@mail.com', '665444333', '1984-08-02'),
(UUID_TO_BIN('90494149-7c2d-11ee-a042-cecd02c24f20'),'modesto', 'lópez', 'millán','modesto@mail.com', '665222111','1984-08-02'),
(UUID_TO_BIN('aa9a25a1-7c2d-11ee-a042-cecd02c24f20'),'george', 'lópez', 'millán','george@mail.com', '665777666','1984-08-02')
;

INSERT INTO users_roles (user_id, role_id)
	VALUES 
        (UUID_TO_BIN('6387a220-7c18-11ee-a042-cecd02c24f20'), 2), 
        (UUID_TO_BIN('6387a220-7c18-11ee-a042-cecd02c24f20'), 1), 
        (UUID_TO_BIN('6387a220-7c18-11ee-a042-cecd02c24f20'), 3), 
		(UUID_TO_BIN('90494149-7c2d-11ee-a042-cecd02c24f20'), 3), 
        (UUID_TO_BIN('90494149-7c2d-11ee-a042-cecd02c24f20'), 1),
		(UUID_TO_BIN('aa9a25a1-7c2d-11ee-a042-cecd02c24f20'), 3),
        (UUID_TO_BIN('aa9a25a1-7c2d-11ee-a042-cecd02c24f20'), 1)
;

INSERT INTO teams (name, season_id)
	VALUES ('cadete A', 1), ('cadete A', 2);