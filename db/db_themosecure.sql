-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 08, 2019 at 11:48 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_themosecure`
--

-- --------------------------------------------------------

--
-- Table structure for table `content_tbl`
--

DROP TABLE IF EXISTS `content_tbl`;
CREATE TABLE IF NOT EXISTS `content_tbl` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) COLLATE utf8_bin NOT NULL,
  `Description` text COLLATE utf8_bin NOT NULL,
  `URL` varchar(100) COLLATE utf8_bin NOT NULL,
  `Alt` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `content_tbl`
--

INSERT INTO `content_tbl` (`ID`, `Title`, `Description`, `URL`, `Alt`) VALUES
(1, 'Welcome to the newest smart home', 'This new, innovative system has AI capabilities that don’t exist elsewhere on the market today. This is the smartest, slickest, most secure system you can by. Not only are we the best, we are THE smart home.', 'images/smart_thermostat1.png', 'Smart Thermostat'),
(2, 'Come home to a warm house', 'We understand that you are very busy, and sometimes being busy can result in forgetful mornings. Don’t worry! Before you get home, you can set the temperature from your phone, smart watch or even computer!', '/images/smart_thermostat4.png', 'Smart Thermostat'),
(3, 'Your safety is in our hands', 'We know that keeping your family safe is your number one priority. We have proprietary technology to make sure there are no mistakes in our security surveillance. Keep an eye on your pets through your phone, get sensor notifications, or leave it up to us! We will dial 911 when there is a suspected break in.', '/images/smart_thermostat3.png', 'Smart Thermostat');

-- --------------------------------------------------------

--
-- Table structure for table `locations_tbl`
--

DROP TABLE IF EXISTS `locations_tbl`;
CREATE TABLE IF NOT EXISTS `locations_tbl` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `URL` varchar(100) COLLATE utf8_bin NOT NULL,
  `Alt` varchar(50) COLLATE utf8_bin NOT NULL,
  `IMGURL` varchar(100) COLLATE utf8_bin NOT NULL,
  `Name` varchar(10) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `locations_tbl`
--

INSERT INTO `locations_tbl` (`ID`, `URL`, `Alt`, `IMGURL`, `Name`) VALUES
(1, 'https://www.walmart.ca/en', 'Walmart Link', '/images/walmart.png', 'Walmart'),
(2, 'https://www.amazon.ca/', 'Amazon Link', '/images/amazon.png', 'Amazon'),
(3, 'https://www.bestbuy.ca/en-ca', 'Best Buy Link', '/images/bestbuy.png', 'Best Buy');

-- --------------------------------------------------------

--
-- Table structure for table `video_tbl`
--

DROP TABLE IF EXISTS `video_tbl`;
CREATE TABLE IF NOT EXISTS `video_tbl` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `URL` varchar(100) COLLATE utf8_bin NOT NULL,
  `Alt` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `video_tbl`
--

INSERT INTO `video_tbl` (`ID`, `URL`, `Alt`) VALUES
(1, '/video/smart_thermostat.mp4', 'Smart Thermostat Advertisement'),
(2, '/video/JAK(female).mp4', 'JAK Female Voice'),
(3, '/video/JAK(male).mp4', 'JAK Male Voice');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
