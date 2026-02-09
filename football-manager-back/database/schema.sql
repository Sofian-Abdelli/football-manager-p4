-- On désactive temporairement les vérifications pour éviter les blocages
SET foreign_key_checks = 0;

-- On nettoie les tables dans l'ordre inverse de création
DROP TABLE IF EXISTS player;
DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS poste;
DROP TABLE IF EXISTS user;

-- On réactive les vérifications
SET foreign_key_checks = 1;

-- 1. Table utilisateur
CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- 2. Table poste (nécessaire pour la table player)
CREATE TABLE poste (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(50) NOT NULL,
  abbr VARCHAR(10) NOT NULL -- AJOUTÉ pour correspondre à ton PosteSeeder
);

-- 3. Table équipe (nécessaire pour la table player)
CREATE TABLE team (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  established INT UNSIGNED NOT NULL, 
  trophys INT UNSIGNED DEFAULT 0,
  stadium VARCHAR(255) NOT NULL,
  user_id INT UNSIGNED NOT NULL, 
  CONSTRAINT fk_team_user FOREIGN KEY (user_id) REFERENCES user(id)
);

-- 4. Table joueur (dépend de team ET poste)
CREATE TABLE player (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  number INT,
  team_id INT UNSIGNED NOT NULL,
  poste_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_player_team FOREIGN KEY (team_id) REFERENCES team(id),
  CONSTRAINT fk_player_poste FOREIGN KEY (poste_id) REFERENCES poste(id)
);