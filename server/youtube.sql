-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2020 at 08:36 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `youtube`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `userName` varchar(20) COLLATE utf8_bin NOT NULL,
  `password` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `userName`, `password`) VALUES
(1, 'mor', 'mor'),
(2, 'sol', 'sol'),
(3, 'oz', 'oz'),
(4, 'dor', 'dor');

-- --------------------------------------------------------

--
-- Table structure for table `watch_history`
--

CREATE TABLE `watch_history` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `videoId` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `watch_history`
--

INSERT INTO `watch_history` (`id`, `userId`, `videoId`) VALUES
(1, 1, 'zg57h50FaJ8'),
(2, 1, 'X-euQU-WcJY'),
(3, 1, 'X-euQU-WcJY'),
(4, 1, 'RK-oQfFToVg'),
(5, 1, 'RK-oQfFToVg'),
(6, 1, 'RK-oQfFToVg'),
(7, 1, 'IJvRDU6X1k8'),
(8, 1, 'IJvRDU6X1k8'),
(9, 1, 'IJvRDU6X1k8'),
(10, 1, 'IJvRDU6X1k8'),
(11, 1, 'IJvRDU6X1k8'),
(12, 1, 'fuYR5rPADrA'),
(13, 1, 'fuYR5rPADrA'),
(14, 1, 'fuYR5rPADrA'),
(15, 1, 'fuYR5rPADrA'),
(16, 1, 'xyNypUMTsRg'),
(17, 1, 'xyNypUMTsRg'),
(18, 1, 'xyNypUMTsRg'),
(19, 1, 'xyNypUMTsRg'),
(20, 1, 'RK-oQfFToVg'),
(21, 1, 'RK-oQfFToVg'),
(22, 1, 'RK-oQfFToVg'),
(23, 1, 'RK-oQfFToVg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `watch_history`
--
ALTER TABLE `watch_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `watch_history`
--
ALTER TABLE `watch_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `watch_history`
--
ALTER TABLE `watch_history`
  ADD CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
