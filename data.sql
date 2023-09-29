-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2023 at 02:21 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `userinfo`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_image` varchar(255) DEFAULT NULL,
  `total_orders` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `last_logged_in` datetime NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`, `user_image`, `total_orders`, `created_at`, `last_logged_in`, `createdAt`, `updatedAt`) VALUES
(1, 'vishal', 'vishal@yopmail.com', '$2a$10$s4f4BrWylrvBDbEKTxSKBOoSQAuii7gKbVw.3ervbf1kSJO8C4QlC', '1695988237138-motivation.jpg', 1, '2023-09-29 11:50:37', '2023-09-29 11:50:37', '2023-09-29 11:50:37', '2023-09-29 11:50:37'),
(2, 'ankit', 'ankit@yopmail.com', '$2a$10$AgBip7qxOkWi27N8G97qyOkJFvNZaOOwOKzck5KoFNQUBdaUbs9YS', '1695988497903-motivation.jpg', 1, '2023-09-29 11:54:58', '2023-09-29 11:54:58', '2023-09-29 11:54:58', '2023-09-29 11:54:58'),
(3, 'vishal', 'vishal2@yopmail.com', '$2a$10$cJWWDbk/6dloBUCO.QPjMullwCFYFak.sgnbYjEPFh5CxnXMu4mcm', '1695988586152-motivation.jpg', 1, '2023-09-29 11:56:26', '2023-09-29 11:56:26', '2023-09-29 11:56:26', '2023-09-29 11:56:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
