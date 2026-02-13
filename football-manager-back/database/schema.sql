-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: football_manager
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coach`
--

DROP TABLE IF EXISTS `coach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coach` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `age` int DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `specialty` varchar(100) DEFAULT NULL,
  `team_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `team_id` (`team_id`),
  CONSTRAINT `coach_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coach`
--

LOCK TABLES `coach` WRITE;
/*!40000 ALTER TABLE `coach` DISABLE KEYS */;
INSERT INTO `coach` VALUES (1,'Pierre','Sage',45,'Français','Tactique',1),(2,'Álvaro','Arbeloa',42,'Espagnol','Formation',2),(3,'Arne','Slot',46,'Néerlandais','Gegenpressing',3),(4,'Luis','Enrique',54,'Espagnol','Possession',4),(5,'Vincent','Kompany',38,'Belge','Relance courte',5),(6,'Pep','Guardiola',54,'Espagnol','Tiki-taka',6),(7,'Hansi','Flick',60,'Allemand','Intensité',7),(8,'Rúben','Amorim',40,'Portugais','Transition',8),(9,'Roberto','De Zerbi',45,'Italien','Sortie de balle',9);
/*!40000 ALTER TABLE `coach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `number` int DEFAULT NULL,
  `team_id` int unsigned NOT NULL,
  `poste_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_player_team` (`team_id`),
  KEY `fk_player_poste` (`poste_id`),
  CONSTRAINT `fk_player_poste` FOREIGN KEY (`poste_id`) REFERENCES `poste` (`id`),
  CONSTRAINT `fk_player_team` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (1,'Lucas','Perri',1,1,1),(2,'Anthony','Lopes',30,1,1),(3,'Rémy','Descamps',40,1,1),(4,'Ainsley','Maitland-Niles',15,1,5),(5,'Saël','Kumbedi',20,1,5),(6,'Moussa','Niakhaté',19,1,2),(7,'Duje','Ćaleta-Car',55,1,2),(8,'Warmed','Omari',27,1,2),(9,'Nicolas','Tagliafico',3,1,6),(10,'Abner','Vinícius',20,1,6),(11,'Nemanja','Matic',31,1,9),(12,'Maxence','Caqueret',6,1,12),(13,'Corentin','Tolisso',8,1,12),(14,'Jordan','Veretout',7,1,12),(15,'Tanner','Tessmann',15,1,12),(16,'Malick','Fofana',11,1,19),(17,'Saïd','Benrahma',17,1,19),(18,'Ernest','Nuamah',37,1,18),(19,'Wilfried','Zaha',12,1,18),(20,'Alexandre','Lacazette',10,1,21),(21,'Gift','Orban',9,1,21),(22,'Enzo','Molebe',40,1,21),(23,'Endrick','Felipe',16,2,21),(24,'Lucas','Chevalier',1,4,1),(25,'Matvey','Safonov',39,4,1),(26,'Arnau','Tenas',80,4,1),(27,'Achraf','Hakimi',2,4,5),(28,'Yoram','Zague',42,4,5),(29,'Marquinhos','Aoás',5,4,2),(30,'Willian','Pacho',51,4,2),(31,'Lucas','Beraldo',35,4,4),(32,'Nuno','Mendes',25,4,6),(33,'Lucas','Hernandez',21,4,6),(34,'Vitinha','Ferreira',17,4,12),(35,'Warren','Zaïre-Emery',33,4,12),(36,'João','Neves',87,4,12),(37,'Fabian','Ruiz',8,4,12),(38,'Senny','Mayulu',24,4,15),(39,'Désiré','Doué',14,4,15),(40,'Ousmane','Dembélé',10,4,18),(41,'Bradley','Barcola',29,4,19),(42,'Kang-in','Lee',19,4,17),(43,'Gonçalo','Ramos',9,4,21),(44,'Thibaut','Courtois',1,2,1),(45,'Andriy','Lunin',13,2,1),(46,'Dani','Carvajal',2,2,5),(47,'Lucas','Vázquez',17,2,5),(48,'Éder','Militão',3,2,2),(49,'Antonio','Rüdiger',22,2,2),(50,'David','Alaba',4,2,2),(51,'Ferland','Mendy',23,2,6),(52,'Fran','García',20,2,6),(53,'Federico','Valverde',8,2,12),(54,'Aurelien','Tchouaméni',14,2,9),(55,'Eduardo','Camavinga',6,2,12),(56,'Jude','Bellingham',5,2,15),(57,'Arda','Güler',15,2,15),(58,'Brahim','Díaz',21,2,15),(59,'Vinícius','Júnior',7,2,19),(60,'Rodrygo','Goes',11,2,18),(61,'Kylian','Mbappé',9,2,21),(62,'Gianluigi','Donnarumma',1,6,1),(63,'Stefan','Ortega',18,6,1),(64,'Kyle','Walker',2,6,5),(65,'Rico','Lewis',82,6,5),(66,'Rúben','Dias',3,6,2),(67,'Manuel','Akanji',25,6,2),(68,'John','Stones',5,6,2),(69,'Nathan','Aké',6,6,4),(70,'Josko','Gvardiol',24,6,6),(71,'Rodri','Hernández',16,6,9),(72,'Mateo','Kovačić',15,6,12),(73,'Bernardo','Silva',20,6,12),(74,'Phil','Foden',47,6,15),(75,'Rayan','Cherki',10,6,15),(76,'Savinho','Moreira',26,6,18),(77,'Jeremy','Doku',11,6,19),(78,'Erling','Haaland',9,6,21);
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poste`
--

DROP TABLE IF EXISTS `poste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poste` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `label` varchar(50) NOT NULL,
  `abbr` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poste`
--

LOCK TABLES `poste` WRITE;
/*!40000 ALTER TABLE `poste` DISABLE KEYS */;
INSERT INTO `poste` VALUES (1,'Gardien de but','G'),(2,'Défenseur central','DC'),(3,'Défenseur central droit','DCD'),(4,'Défenseur central gauche','DCG'),(5,'Défenseur droit','DD'),(6,'Défenseur gauche','DG'),(7,'Piston droit','DLD'),(8,'Piston gauche','DLG'),(9,'Milieu défensif','MDC'),(10,'Milieu défensif droit','MDCD'),(11,'Milieu défensif gauche','MDCG'),(12,'Milieu central','MC'),(13,'Milieu droit','MD'),(14,'Milieu gauche','MG'),(15,'Milieu offensif central','MOC'),(16,'Milieu offensif droit','MOD'),(17,'Milieu offensif gauche','MOG'),(18,'Ailier droit','AD'),(19,'Ailier gauche','AG'),(20,'Attaquant de soutien','AT'),(21,'Buteur','BU'),(22,'Buteur','BU');
/*!40000 ALTER TABLE `poste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stadium`
--

DROP TABLE IF EXISTS `stadium`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stadium` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `capacity` int unsigned DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `established_year` int unsigned DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stadium`
--

LOCK TABLES `stadium` WRITE;
/*!40000 ALTER TABLE `stadium` DISABLE KEYS */;
INSERT INTO `stadium` VALUES (1,'Groupama Stadium',59186,'Décines-Charpieu',2016,'10 Avenue Simone Veil'),(2,'Santiago Bernabéu',81044,'Madrid',1947,'Av. de Concha Espina, 1'),(3,'Anfield',61276,'Liverpool',1884,'Anfield Rd, Anfield'),(4,'Parc des Princes',47929,'Paris',1972,'24 Rue du Commandant Guilbaud'),(5,'Allianz Arena',75024,'Munich',2005,'Werner-Heisenberg-Allee 25'),(6,'Etihad Stadium',53400,'Manchester',2003,'Ashton New Rd'),(7,'Spotify Camp Nou',99354,'Barcelone',1957,'C. d\'Arístides Maillol, 12'),(8,'Old Trafford',74310,'Manchester',1910,'Sir Matt Busby Way'),(9,'Orange Vélodrome',67394,'Marseille',1937,'3 Boulevard Michelet');
/*!40000 ALTER TABLE `stadium` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `established` int unsigned NOT NULL,
  `trophys` int unsigned DEFAULT '0',
  `user_id` int unsigned NOT NULL,
  `stadium_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_team_user` (`user_id`),
  KEY `fk_team_stadium` (`stadium_id`),
  CONSTRAINT `fk_team_stadium` FOREIGN KEY (`stadium_id`) REFERENCES `stadium` (`id`),
  CONSTRAINT `fk_team_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (1,'Olympique Lyonnais','Lyon','France',1950,22,1,1),(2,'Real Madrid','Madrid','Espagne',1902,100,1,2),(3,'Liverpool FC','Liverpool','Angleterre',1892,68,1,3),(4,'Paris Saint-Germain','Paris','France',1970,48,1,4),(5,'Bayern Munich','Munich','Allemagne',1900,83,1,5),(6,'Manchester City','Manchester','Angleterre',1880,34,1,6),(7,'Fc Barcelone','Barcelone','Espagne',1899,77,1,7),(8,'Manchester United','Manchester','Angleterre',1878,67,1,8),(9,'Olympique de Marseille','Marseille','France',1950,28,1,9);
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin@football.com','password123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-13 10:45:35
