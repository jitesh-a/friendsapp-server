const getSQL = (dbName) => {
  return `-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql12.freemysqlhosting.net
-- Generation Time: Nov 02, 2020 at 07:14 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: ${dbName}
--

-- --------------------------------------------------------

--
-- Table structure for table friends
--

CREATE TABLE friends (
  id int(11) NOT NULL,
  userId int(11) NOT NULL,
  friendId int(11) NOT NULL,
  createdOn timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table friends
--

INSERT INTO friends (id, userId, friendId, createdOn) VALUES
(1, 0, 2, '2020-11-01 15:54:00'),
(2, 0, 2, '2020-11-01 15:54:01'),
(3, 0, 2, '2020-11-01 15:54:01'),
(4, 2, 4, '2020-11-01 16:05:46'),
(5, 2, 5, '2020-11-01 16:05:46'),
(6, 2, 6, '2020-11-01 16:05:46'),
(7, 2, 4, '2020-11-01 18:22:57'),
(8, 2, 6, '2020-11-01 18:22:58'),
(9, 2, 5, '2020-11-01 18:22:58'),
(10, 2, 4, '2020-11-01 18:23:02'),
(11, 2, 6, '2020-11-01 18:23:02'),
(12, 2, 5, '2020-11-01 18:23:02'),
(13, 2, 6, '2020-11-01 18:24:05'),
(14, 2, 5, '2020-11-01 18:24:05'),
(15, 2, 4, '2020-11-01 18:24:05'),
(16, 2, 5, '2020-11-01 18:24:48'),
(17, 2, 6, '2020-11-01 18:24:48'),
(18, 2, 4, '2020-11-01 18:24:48');

-- --------------------------------------------------------

--
-- Table structure for table users
--

CREATE TABLE users (
  id int(11) NOT NULL,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  avatar varchar(255) DEFAULT NULL,
  createdOn timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedOn timestamp NULL DEFAULT NULL,
  active tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table users
--

INSERT INTO users (id, firstName, lastName, avatar, createdOn, updatedOn, active) VALUES
(2, 'Gaurav', 'Kalekar', NULL, '2020-11-01 06:08:55', NULL, 0),
(3, 'Jitesh', 'Ahuja', NULL, '2020-11-01 06:17:22', NULL, 0),
(4, 'Gaurav', 'Kalekar', NULL, '2020-11-01 06:17:22', NULL, 0),
(5, 'Digvijay', 'Zite', NULL, '2020-11-01 06:17:22', NULL, 0),
(6, 'Jitesh', 'Ahuja', NULL, '2020-11-01 06:18:05', NULL, 0),
(7, 'Gaurav', 'Kalekar', NULL, '2020-11-01 06:18:05', NULL, 0),
(8, 'Digvijay', 'Zite', NULL, '2020-11-01 06:18:05', NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table friends
--
ALTER TABLE friends
  ADD PRIMARY KEY (id);

--
-- Indexes for table users
--
ALTER TABLE users
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table friends
--
ALTER TABLE friends
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table users
--
ALTER TABLE users
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;`

}

module.exports = getSQL;
