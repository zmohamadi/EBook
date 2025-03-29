/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.24-MariaDB : Database - ebook
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ebook` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `ebook`;

/*Table structure for table `base_cities` */

DROP TABLE IF EXISTS `base_cities`;

CREATE TABLE `base_cities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name_fa` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام',
  `province_id` int(11) DEFAULT NULL COMMENT 'شناسه استان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=449 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `base_cities` */

insert  into `base_cities`(`id`,`name_fa`,`province_id`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'آبادان',13,1,NULL,NULL,NULL),
(2,'آباده',17,1,NULL,NULL,NULL),
(3,'آبدانان',6,1,NULL,NULL,NULL),
(4,'آبیک',18,1,NULL,NULL,NULL),
(5,'آذرشهر',1,1,NULL,NULL,NULL),
(6,'آرادان',15,1,NULL,NULL,NULL),
(7,'آران وبیدگل',4,1,NULL,NULL,NULL),
(8,'آزادشهر',24,1,NULL,NULL,NULL),
(9,'آستارا',25,1,NULL,NULL,NULL),
(10,'آستانه اشرفیه',25,1,NULL,NULL,NULL),
(11,'آشتیان',28,1,NULL,NULL,NULL),
(12,'آغاجاری',13,1,NULL,NULL,NULL),
(13,'آق قلا',24,1,NULL,NULL,NULL),
(14,'آمل',27,1,NULL,NULL,NULL),
(15,'آوج',18,1,NULL,NULL,NULL),
(16,'ابرکوه',31,1,NULL,NULL,NULL),
(17,'ابوموسی',29,1,NULL,NULL,NULL),
(18,'ابهر',14,1,NULL,NULL,NULL),
(19,'اراک',28,1,NULL,NULL,NULL),
(20,'اردبیل',3,1,NULL,NULL,NULL),
(21,'اردستان',4,1,NULL,NULL,NULL),
(22,'اردکان',31,1,NULL,NULL,NULL),
(23,'اردل',9,1,NULL,NULL,NULL),
(24,'ارزوییه',21,1,NULL,NULL,NULL),
(25,'ارسنجان',17,1,NULL,NULL,NULL),
(26,'ارومیه',2,1,NULL,NULL,NULL),
(27,'ازنا',26,1,NULL,NULL,NULL),
(28,'استهبان',17,1,NULL,NULL,NULL),
(29,'اسدآباد',30,1,NULL,NULL,NULL),
(30,'اسفراین',12,1,NULL,NULL,NULL),
(31,'اسکو',1,1,NULL,NULL,NULL),
(32,'اسلام آبادغرب',22,1,NULL,NULL,NULL),
(33,'اسلامشهر',8,1,NULL,NULL,NULL),
(34,'اشتهارد',5,1,NULL,NULL,NULL),
(35,'اشکذر',31,1,NULL,NULL,NULL),
(36,'اشنویه',2,1,NULL,NULL,NULL),
(37,'اصفهان',4,1,NULL,NULL,NULL),
(38,'اصلاندوز',3,1,NULL,NULL,NULL),
(39,'اقلید',17,1,NULL,NULL,NULL),
(40,'البرز',18,1,NULL,NULL,NULL),
(41,'الیگودرز',26,1,NULL,NULL,NULL),
(42,'املش',25,1,NULL,NULL,NULL),
(43,'امیدیه',13,1,NULL,NULL,NULL),
(44,'انار',21,1,NULL,NULL,NULL),
(45,'اندیکا',13,1,NULL,NULL,NULL),
(46,'اندیمشک',13,1,NULL,NULL,NULL),
(47,'اوز',17,1,NULL,NULL,NULL),
(48,'اهر',1,1,NULL,NULL,NULL),
(49,'اهواز',13,1,NULL,NULL,NULL),
(50,'ایجرود',14,1,NULL,NULL,NULL),
(51,'ایذه',13,1,NULL,NULL,NULL),
(52,'ایرانشهر',16,1,NULL,NULL,NULL),
(53,'ایلام',6,1,NULL,NULL,NULL),
(54,'ایوان',6,1,NULL,NULL,NULL),
(55,'بابل',27,1,NULL,NULL,NULL),
(56,'بابلسر',27,1,NULL,NULL,NULL),
(57,'باخرز',11,1,NULL,NULL,NULL),
(58,'باشت',23,1,NULL,NULL,NULL),
(59,'باغ ملک',13,1,NULL,NULL,NULL),
(60,'بافت',21,1,NULL,NULL,NULL),
(61,'بافق',31,1,NULL,NULL,NULL),
(62,'بانه',20,1,NULL,NULL,NULL),
(63,'باوی',13,1,NULL,NULL,NULL),
(64,'بجستان',11,1,NULL,NULL,NULL),
(65,'بجنورد',12,1,NULL,NULL,NULL),
(66,'بختگان',17,1,NULL,NULL,NULL),
(67,'بدره',6,1,NULL,NULL,NULL),
(68,'برخوار',4,1,NULL,NULL,NULL),
(69,'بردسکن',11,1,NULL,NULL,NULL),
(70,'بردسیر',21,1,NULL,NULL,NULL),
(71,'بروجرد',26,1,NULL,NULL,NULL),
(72,'بروجن',9,1,NULL,NULL,NULL),
(73,'بستان آباد',1,1,NULL,NULL,NULL),
(74,'بستک',29,1,NULL,NULL,NULL),
(75,'بشاگرد',29,1,NULL,NULL,NULL),
(76,'بشرویه',10,1,NULL,NULL,NULL),
(77,'بم',21,1,NULL,NULL,NULL),
(78,'بمپور',16,1,NULL,NULL,NULL),
(79,'بن',9,1,NULL,NULL,NULL),
(80,'بناب',1,1,NULL,NULL,NULL),
(81,'بندرانزلی',25,1,NULL,NULL,NULL),
(82,'بندرعباس',29,1,NULL,NULL,NULL),
(83,'بندرگز',24,1,NULL,NULL,NULL),
(84,'بندرلنگه',29,1,NULL,NULL,NULL),
(85,'بندرماهشهر',13,1,NULL,NULL,NULL),
(86,'بو یین و میاندشت',4,1,NULL,NULL,NULL),
(87,'بوانات',17,1,NULL,NULL,NULL),
(88,'بوشهر',7,1,NULL,NULL,NULL),
(89,'بوکان',2,1,NULL,NULL,NULL),
(90,'بویراحمد',23,1,NULL,NULL,NULL),
(91,'بویین زهرا',18,1,NULL,NULL,NULL),
(92,'بهاباد',31,1,NULL,NULL,NULL),
(93,'بهار',30,1,NULL,NULL,NULL),
(94,'بهارستان',8,1,NULL,NULL,NULL),
(95,'بهبهان',13,1,NULL,NULL,NULL),
(96,'بهشهر',27,1,NULL,NULL,NULL),
(97,'بهمیی',23,1,NULL,NULL,NULL),
(98,'بیجار',20,1,NULL,NULL,NULL),
(99,'بیرجند',10,1,NULL,NULL,NULL),
(100,'بیضا',17,1,NULL,NULL,NULL),
(101,'بیله سوار',3,1,NULL,NULL,NULL),
(102,'بینالود',11,1,NULL,NULL,NULL),
(103,'پارس آباد',3,1,NULL,NULL,NULL),
(104,'پارسیان',29,1,NULL,NULL,NULL),
(105,'پاسارگاد',17,1,NULL,NULL,NULL),
(106,'پاکدشت',8,1,NULL,NULL,NULL),
(107,'پاوه',22,1,NULL,NULL,NULL),
(108,'پردیس',8,1,NULL,NULL,NULL),
(109,'پلدختر',26,1,NULL,NULL,NULL),
(110,'پلدشت',2,1,NULL,NULL,NULL),
(111,'پیرانشهر',2,1,NULL,NULL,NULL),
(112,'پیشوا',8,1,NULL,NULL,NULL),
(113,'تاکستان',18,1,NULL,NULL,NULL),
(114,'تایباد',11,1,NULL,NULL,NULL),
(115,'تبریز',1,1,NULL,NULL,NULL),
(116,'تربت جام',11,1,NULL,NULL,NULL),
(117,'تربت حیدریه',11,1,NULL,NULL,NULL),
(118,'ترکمن',24,1,NULL,NULL,NULL),
(119,'تفت',31,1,NULL,NULL,NULL),
(120,'تفتان',16,1,NULL,NULL,NULL),
(121,'تفرش',28,1,NULL,NULL,NULL),
(122,'تکاب',2,1,NULL,NULL,NULL),
(123,'تنکابن',27,1,NULL,NULL,NULL),
(124,'تنگستان',7,1,NULL,NULL,NULL),
(125,'تویسرکان',30,1,NULL,NULL,NULL),
(126,'تهران',8,1,NULL,NULL,NULL),
(127,'تیران وکرون',4,1,NULL,NULL,NULL),
(128,'ثلاث باباجانی',22,1,NULL,NULL,NULL),
(129,'جاجرم',12,1,NULL,NULL,NULL),
(130,'جاسک',29,1,NULL,NULL,NULL),
(131,'جغتای',11,1,NULL,NULL,NULL),
(132,'جلفا',1,1,NULL,NULL,NULL),
(133,'جم',7,1,NULL,NULL,NULL),
(134,'جوانرود',22,1,NULL,NULL,NULL),
(135,'جویبار',27,1,NULL,NULL,NULL),
(136,'جوین',11,1,NULL,NULL,NULL),
(137,'جهرم',17,1,NULL,NULL,NULL),
(138,'جیرفت',21,1,NULL,NULL,NULL),
(139,'چادگان',4,1,NULL,NULL,NULL),
(140,'چاراویماق',1,1,NULL,NULL,NULL),
(141,'چالدران',2,1,NULL,NULL,NULL),
(142,'چالوس',27,1,NULL,NULL,NULL),
(143,'چاه بهار',16,1,NULL,NULL,NULL),
(144,'چایپاره',2,1,NULL,NULL,NULL),
(145,'چرام',23,1,NULL,NULL,NULL),
(146,'چرداول',6,1,NULL,NULL,NULL),
(147,'چگنی',26,1,NULL,NULL,NULL),
(148,'چناران',11,1,NULL,NULL,NULL),
(149,'حاجی اباد',29,1,NULL,NULL,NULL),
(150,'حمیدیه',13,1,NULL,NULL,NULL),
(151,'خاتم',31,1,NULL,NULL,NULL),
(152,'خاش',16,1,NULL,NULL,NULL),
(153,'خانمیرزا',9,1,NULL,NULL,NULL),
(154,'خداآفرین',1,1,NULL,NULL,NULL),
(155,'خدابنده',14,1,NULL,NULL,NULL),
(156,'خرامه',17,1,NULL,NULL,NULL),
(157,'خرم آباد',26,1,NULL,NULL,NULL),
(158,'خرم بید',17,1,NULL,NULL,NULL),
(159,'خرمدره',14,1,NULL,NULL,NULL),
(160,'خرمشهر',13,1,NULL,NULL,NULL),
(161,'خفر',17,1,NULL,NULL,NULL),
(162,'خلخال',3,1,NULL,NULL,NULL),
(163,'خلیل آباد',11,1,NULL,NULL,NULL),
(164,'خمیر',29,1,NULL,NULL,NULL),
(165,'خمین',28,1,NULL,NULL,NULL),
(166,'خمینی شهر',4,1,NULL,NULL,NULL),
(167,'خنج',17,1,NULL,NULL,NULL),
(168,'خنداب',28,1,NULL,NULL,NULL),
(169,'خواف',11,1,NULL,NULL,NULL),
(170,'خوانسار',4,1,NULL,NULL,NULL),
(171,'خور و بیابانک',4,1,NULL,NULL,NULL),
(172,'خوسف',10,1,NULL,NULL,NULL),
(173,'خوشاب',11,1,NULL,NULL,NULL),
(174,'خوی',2,1,NULL,NULL,NULL),
(175,'داراب',17,1,NULL,NULL,NULL),
(176,'دالاهو',22,1,NULL,NULL,NULL),
(177,'دامغان',15,1,NULL,NULL,NULL),
(178,'داورزن',11,1,NULL,NULL,NULL),
(179,'درگز',11,1,NULL,NULL,NULL),
(180,'درگزین',30,1,NULL,NULL,NULL),
(181,'درمیان',10,1,NULL,NULL,NULL),
(182,'دره شهر',6,1,NULL,NULL,NULL),
(183,'دزفول',13,1,NULL,NULL,NULL),
(184,'دشت آزادگان',13,1,NULL,NULL,NULL),
(185,'دشتستان',7,1,NULL,NULL,NULL),
(186,'دشتی',7,1,NULL,NULL,NULL),
(187,'دشتیاری',16,1,NULL,NULL,NULL),
(188,'دلفان',26,1,NULL,NULL,NULL),
(189,'دلگان',16,1,NULL,NULL,NULL),
(190,'دلیجان',28,1,NULL,NULL,NULL),
(191,'دماوند',8,1,NULL,NULL,NULL),
(192,'دنا',23,1,NULL,NULL,NULL),
(193,'دورود',26,1,NULL,NULL,NULL),
(194,'دهاقان',4,1,NULL,NULL,NULL),
(195,'دهگلان',20,1,NULL,NULL,NULL),
(196,'دهلران',6,1,NULL,NULL,NULL),
(197,'دیر',7,1,NULL,NULL,NULL),
(198,'دیلم',7,1,NULL,NULL,NULL),
(199,'دیواندره',20,1,NULL,NULL,NULL),
(200,'رابر',21,1,NULL,NULL,NULL),
(201,'راز و جرگلان',12,1,NULL,NULL,NULL),
(202,'راسک',16,1,NULL,NULL,NULL),
(203,'رامسر',27,1,NULL,NULL,NULL),
(204,'رامشیر',13,1,NULL,NULL,NULL),
(205,'رامهرمز',13,1,NULL,NULL,NULL),
(206,'رامیان',24,1,NULL,NULL,NULL),
(207,'راور',21,1,NULL,NULL,NULL),
(208,'رباط کریم',8,1,NULL,NULL,NULL),
(209,'رزن',30,1,NULL,NULL,NULL),
(210,'رستم',17,1,NULL,NULL,NULL),
(211,'رشت',25,1,NULL,NULL,NULL),
(212,'رشتخوار',11,1,NULL,NULL,NULL),
(213,'رضوانشهر',25,1,NULL,NULL,NULL),
(214,'رفسنجان',21,1,NULL,NULL,NULL),
(215,'روانسر',22,1,NULL,NULL,NULL),
(216,'رودان',29,1,NULL,NULL,NULL),
(217,'رودبار',25,1,NULL,NULL,NULL),
(218,'رودبارجنوب',21,1,NULL,NULL,NULL),
(219,'رودسر',25,1,NULL,NULL,NULL),
(220,'رومشکان',26,1,NULL,NULL,NULL),
(221,'ری',8,1,NULL,NULL,NULL),
(222,'ریگان',21,1,NULL,NULL,NULL),
(223,'زابل',16,1,NULL,NULL,NULL),
(224,'زاوه',11,1,NULL,NULL,NULL),
(225,'زاهدان',16,1,NULL,NULL,NULL),
(226,'زرقان',17,1,NULL,NULL,NULL),
(227,'زرند',21,1,NULL,NULL,NULL),
(228,'زرندیه',28,1,NULL,NULL,NULL),
(229,'زرین دشت',17,1,NULL,NULL,NULL),
(230,'زنجان',14,1,NULL,NULL,NULL),
(231,'زهک',16,1,NULL,NULL,NULL),
(232,'زیرکوه',10,1,NULL,NULL,NULL),
(233,'ساری',27,1,NULL,NULL,NULL),
(234,'سامان',9,1,NULL,NULL,NULL),
(235,'ساوجبلاغ',5,1,NULL,NULL,NULL),
(236,'ساوه',28,1,NULL,NULL,NULL),
(237,'سبزوار',11,1,NULL,NULL,NULL),
(238,'سپیدان',17,1,NULL,NULL,NULL),
(239,'سراب',1,1,NULL,NULL,NULL),
(240,'سراوان',16,1,NULL,NULL,NULL),
(241,'سرایان',10,1,NULL,NULL,NULL),
(242,'سرباز',16,1,NULL,NULL,NULL),
(243,'سربیشه',10,1,NULL,NULL,NULL),
(244,'سرپل ذهاب',22,1,NULL,NULL,NULL),
(245,'سرچهان',17,1,NULL,NULL,NULL),
(246,'سرخس',11,1,NULL,NULL,NULL),
(247,'سرخه',15,1,NULL,NULL,NULL),
(248,'سردشت',2,1,NULL,NULL,NULL),
(249,'سرعین',3,1,NULL,NULL,NULL),
(250,'سروآباد',20,1,NULL,NULL,NULL),
(251,'سروستان',17,1,NULL,NULL,NULL),
(252,'سقز',20,1,NULL,NULL,NULL),
(253,'سلسله',26,1,NULL,NULL,NULL),
(254,'سلطانیه',14,1,NULL,NULL,NULL),
(255,'سلماس',2,1,NULL,NULL,NULL),
(256,'سمنان',15,1,NULL,NULL,NULL),
(257,'سمیرم',4,1,NULL,NULL,NULL),
(258,'سنقر',22,1,NULL,NULL,NULL),
(259,'سنندج',20,1,NULL,NULL,NULL),
(260,'سوادکوه',27,1,NULL,NULL,NULL),
(261,'سوادکوه شمالی',27,1,NULL,NULL,NULL),
(262,'سیاهکل',25,1,NULL,NULL,NULL),
(263,'سیب و سوران',16,1,NULL,NULL,NULL),
(264,'سیرجان',21,1,NULL,NULL,NULL),
(265,'سیروان',6,1,NULL,NULL,NULL),
(266,'سیریک',29,1,NULL,NULL,NULL),
(267,'سیمرغ',27,1,NULL,NULL,NULL),
(268,'شادگان',13,1,NULL,NULL,NULL),
(269,'شازند',28,1,NULL,NULL,NULL),
(270,'شاهرود',15,1,NULL,NULL,NULL),
(271,'شاهین دژ',2,1,NULL,NULL,NULL),
(272,'شاهین شهرومیمه',4,1,NULL,NULL,NULL),
(273,'شبستر',1,1,NULL,NULL,NULL),
(274,'شفت',25,1,NULL,NULL,NULL),
(275,'شمیرانات',8,1,NULL,NULL,NULL),
(276,'شوش',13,1,NULL,NULL,NULL),
(277,'شوشتر',13,1,NULL,NULL,NULL),
(278,'شوط',2,1,NULL,NULL,NULL),
(279,'شهربابک',21,1,NULL,NULL,NULL),
(280,'شهرضا',4,1,NULL,NULL,NULL),
(281,'شهرکرد',9,1,NULL,NULL,NULL),
(282,'شهریار',8,1,NULL,NULL,NULL),
(283,'شیراز',17,1,NULL,NULL,NULL),
(284,'شیروان',12,1,NULL,NULL,NULL),
(285,'صالح آباد',11,1,NULL,NULL,NULL),
(286,'صحنه',22,1,NULL,NULL,NULL),
(287,'صومعه سرا',25,1,NULL,NULL,NULL),
(288,'طارم',14,1,NULL,NULL,NULL),
(289,'طالقان',5,1,NULL,NULL,NULL),
(290,'طبس',10,1,NULL,NULL,NULL),
(291,'طوالش',25,1,NULL,NULL,NULL),
(292,'عباس آباد',27,1,NULL,NULL,NULL),
(293,'عجب شیر',1,1,NULL,NULL,NULL),
(294,'عسلویه',7,1,NULL,NULL,NULL),
(295,'علی آباد کتول',24,1,NULL,NULL,NULL),
(296,'عنبرآباد',21,1,NULL,NULL,NULL),
(297,'فارسان',9,1,NULL,NULL,NULL),
(298,'فاروج',12,1,NULL,NULL,NULL),
(299,'فاریاب',21,1,NULL,NULL,NULL),
(300,'فامنین',30,1,NULL,NULL,NULL),
(301,'فراشبند',17,1,NULL,NULL,NULL),
(302,'فراهان',28,1,NULL,NULL,NULL),
(303,'فردوس',10,1,NULL,NULL,NULL),
(304,'فردیس',5,1,NULL,NULL,NULL),
(305,'فریدن',4,1,NULL,NULL,NULL),
(306,'فریدونشهر',4,1,NULL,NULL,NULL),
(307,'فریدونکنار',27,1,NULL,NULL,NULL),
(308,'فریمان',11,1,NULL,NULL,NULL),
(309,'فسا',17,1,NULL,NULL,NULL),
(310,'فلاورجان',4,1,NULL,NULL,NULL),
(311,'فنوج',16,1,NULL,NULL,NULL),
(312,'فومن',25,1,NULL,NULL,NULL),
(313,'فهرج',21,1,NULL,NULL,NULL),
(314,'فیروزآباد',17,1,NULL,NULL,NULL),
(315,'فیروزکوه',8,1,NULL,NULL,NULL),
(316,'فیروزه',11,1,NULL,NULL,NULL),
(317,'قایم شهر',27,1,NULL,NULL,NULL),
(318,'قاینات',10,1,NULL,NULL,NULL),
(319,'قدس',8,1,NULL,NULL,NULL),
(320,'قرچک',8,1,NULL,NULL,NULL),
(321,'قروه',20,1,NULL,NULL,NULL),
(322,'قزوین',18,1,NULL,NULL,NULL),
(323,'قشم',29,1,NULL,NULL,NULL),
(324,'قصرشیرین',22,1,NULL,NULL,NULL),
(325,'قصرقند',16,1,NULL,NULL,NULL),
(326,'قلعه گنج',21,1,NULL,NULL,NULL),
(327,'قم',19,1,NULL,NULL,NULL),
(328,'قوچان',11,1,NULL,NULL,NULL),
(329,'قیروکارزین',17,1,NULL,NULL,NULL),
(330,'کارون',13,1,NULL,NULL,NULL),
(331,'کازرون',17,1,NULL,NULL,NULL),
(332,'کاشان',4,1,NULL,NULL,NULL),
(333,'کاشمر',11,1,NULL,NULL,NULL),
(334,'کامیاران',20,1,NULL,NULL,NULL),
(335,'کبودرآهنگ',30,1,NULL,NULL,NULL),
(336,'کرج',5,1,NULL,NULL,NULL),
(337,'کردکوی',24,1,NULL,NULL,NULL),
(338,'کرمان',21,1,NULL,NULL,NULL),
(339,'کرمانشاه',22,1,NULL,NULL,NULL),
(340,'کلات',11,1,NULL,NULL,NULL),
(341,'کلاردشت',27,1,NULL,NULL,NULL),
(342,'کلاله',24,1,NULL,NULL,NULL),
(343,'کلیبر',1,1,NULL,NULL,NULL),
(344,'کمیجان',28,1,NULL,NULL,NULL),
(345,'کنارک',16,1,NULL,NULL,NULL),
(346,'کنگان',7,1,NULL,NULL,NULL),
(347,'کنگاور',22,1,NULL,NULL,NULL),
(348,'کوار',17,1,NULL,NULL,NULL),
(349,'کوثر',3,1,NULL,NULL,NULL),
(350,'کوه چنار',17,1,NULL,NULL,NULL),
(351,'کوهبنان',21,1,NULL,NULL,NULL),
(352,'کوهدشت',26,1,NULL,NULL,NULL),
(353,'کوهرنگ',9,1,NULL,NULL,NULL),
(354,'کوهسرخ',11,1,NULL,NULL,NULL),
(355,'کهگیلویه',23,1,NULL,NULL,NULL),
(356,'کهنوج',21,1,NULL,NULL,NULL),
(357,'کیار',9,1,NULL,NULL,NULL),
(358,'گالیکش',24,1,NULL,NULL,NULL),
(359,'گتوند',13,1,NULL,NULL,NULL),
(360,'گچساران',23,1,NULL,NULL,NULL),
(361,'گراش',17,1,NULL,NULL,NULL),
(362,'گرگان',24,1,NULL,NULL,NULL),
(363,'گرمسار',15,1,NULL,NULL,NULL),
(364,'گرمه',12,1,NULL,NULL,NULL),
(365,'گرمی',3,1,NULL,NULL,NULL),
(366,'گلپایگان',4,1,NULL,NULL,NULL),
(367,'گلوگاه',27,1,NULL,NULL,NULL),
(368,'گمیشان',24,1,NULL,NULL,NULL),
(369,'گناباد',11,1,NULL,NULL,NULL),
(370,'گناوه',7,1,NULL,NULL,NULL),
(371,'گنبدکاووس',24,1,NULL,NULL,NULL),
(372,'گیلانغرب',22,1,NULL,NULL,NULL),
(373,'لارستان',17,1,NULL,NULL,NULL),
(374,'لالی',13,1,NULL,NULL,NULL),
(375,'لامرد',17,1,NULL,NULL,NULL),
(376,'لاهیجان',25,1,NULL,NULL,NULL),
(377,'لردگان',9,1,NULL,NULL,NULL),
(378,'لنجان',4,1,NULL,NULL,NULL),
(379,'لنده',23,1,NULL,NULL,NULL),
(380,'لنگرود',25,1,NULL,NULL,NULL),
(381,'مارگون',23,1,NULL,NULL,NULL),
(382,'ماسال',25,1,NULL,NULL,NULL),
(383,'ماکو',2,1,NULL,NULL,NULL),
(384,'مانه وسملقان',12,1,NULL,NULL,NULL),
(385,'ماهنشان',14,1,NULL,NULL,NULL),
(386,'مبارکه',4,1,NULL,NULL,NULL),
(387,'محلات',28,1,NULL,NULL,NULL),
(388,'محمودآباد',27,1,NULL,NULL,NULL),
(389,'مراغه',1,1,NULL,NULL,NULL),
(390,'مراوه تپه',24,1,NULL,NULL,NULL),
(391,'مرند',1,1,NULL,NULL,NULL),
(392,'مرودشت',17,1,NULL,NULL,NULL),
(393,'مریوان',20,1,NULL,NULL,NULL),
(394,'مسجدسلیمان',13,1,NULL,NULL,NULL),
(395,'مشگین شهر',3,1,NULL,NULL,NULL),
(396,'مشهد',11,1,NULL,NULL,NULL),
(397,'ملارد',8,1,NULL,NULL,NULL),
(398,'ملایر',30,1,NULL,NULL,NULL),
(399,'ملکان',1,1,NULL,NULL,NULL),
(400,'ملکشاهی',6,1,NULL,NULL,NULL),
(401,'ممسنی',17,1,NULL,NULL,NULL),
(402,'منوجان',21,1,NULL,NULL,NULL),
(403,'مه ولات',11,1,NULL,NULL,NULL),
(404,'مهاباد',2,1,NULL,NULL,NULL),
(405,'مهدی شهر',15,1,NULL,NULL,NULL),
(406,'مهر',17,1,NULL,NULL,NULL),
(407,'مهران',6,1,NULL,NULL,NULL),
(408,'مهرستان',16,1,NULL,NULL,NULL),
(409,'مهریز',31,1,NULL,NULL,NULL),
(410,'میامی',15,1,NULL,NULL,NULL),
(411,'میاندوآب',2,1,NULL,NULL,NULL),
(412,'میاندورود',27,1,NULL,NULL,NULL),
(413,'میانه',1,1,NULL,NULL,NULL),
(414,'میبد',31,1,NULL,NULL,NULL),
(415,'میرجاوه',16,1,NULL,NULL,NULL),
(416,'میناب',29,1,NULL,NULL,NULL),
(417,'مینودشت',24,1,NULL,NULL,NULL),
(418,'نایین',4,1,NULL,NULL,NULL),
(419,'نجف آباد',4,1,NULL,NULL,NULL),
(420,'نرماشیر',21,1,NULL,NULL,NULL),
(421,'نطنز',4,1,NULL,NULL,NULL),
(422,'نظرآباد',5,1,NULL,NULL,NULL),
(423,'نقده',2,1,NULL,NULL,NULL),
(424,'نکا',27,1,NULL,NULL,NULL),
(425,'نمین',3,1,NULL,NULL,NULL),
(426,'نور',27,1,NULL,NULL,NULL),
(427,'نوشهر',27,1,NULL,NULL,NULL),
(428,'نهاوند',30,1,NULL,NULL,NULL),
(429,'نهبندان',10,1,NULL,NULL,NULL),
(430,'نی ریز',17,1,NULL,NULL,NULL),
(431,'نیر',3,1,NULL,NULL,NULL),
(432,'نیشابور',11,1,NULL,NULL,NULL),
(433,'نیک شهر',16,1,NULL,NULL,NULL),
(434,'نیمروز',16,1,NULL,NULL,NULL),
(435,'ورامین',8,1,NULL,NULL,NULL),
(436,'ورزقان',1,1,NULL,NULL,NULL),
(437,'هامون',16,1,NULL,NULL,NULL),
(438,'هرسین',22,1,NULL,NULL,NULL),
(439,'هریس',1,1,NULL,NULL,NULL),
(440,'هشترود',1,1,NULL,NULL,NULL),
(441,'هفتکل',13,1,NULL,NULL,NULL),
(442,'هلیلان',6,1,NULL,NULL,NULL),
(443,'همدان',30,1,NULL,NULL,NULL),
(444,'هندیجان',13,1,NULL,NULL,NULL),
(445,'هوراند',1,1,NULL,NULL,NULL),
(446,'هویزه',13,1,NULL,NULL,NULL),
(447,'هیرمند',16,1,NULL,NULL,NULL),
(448,'یزد',31,1,NULL,NULL,NULL);

/*Table structure for table `base_countries` */

DROP TABLE IF EXISTS `base_countries`;

CREATE TABLE `base_countries` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name_en` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nationality_en` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'ملیت به انگلیسی',
  `name_fa` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'نام فارسی',
  `nationality_fa` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'ملیت به فارسی',
  `name_ar` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'نام عربی',
  `nationality_ar` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'ملیت به عربی',
  `icon` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phonecode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT ' وضعیت فعالیت فعالیت ',
  `description_fa` text COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT ' توضیح انگلیسی',
  `description_en` text COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT ' توضیح فارسی ',
  `description_ar` text COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT ' توضیح عربی',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `zone_id` int(11) DEFAULT NULL COMMENT 'شناسه زون',
  `iso3` char(3) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `numeric_code` char(3) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iso2` char(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `capital` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_symbol` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tld` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `native` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `region` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subregion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timezones` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `translations` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `emojiU` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `flag` tinyint(1) NOT NULL DEFAULT 1,
  `wikiDataId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Rapid API GeoDB Cities',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=255 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `base_countries` */

insert  into `base_countries`(`id`,`name_en`,`nationality_en`,`name_fa`,`nationality_fa`,`name_ar`,`nationality_ar`,`icon`,`phonecode`,`status_id`,`description_fa`,`description_en`,`description_ar`,`deleted_at`,`created_at`,`updated_at`,`zone_id`,`iso3`,`numeric_code`,`iso2`,`capital`,`currency`,`currency_name`,`currency_symbol`,`tld`,`native`,`region`,`subregion`,`timezones`,`translations`,`latitude`,`longitude`,`emojiU`,`flag`,`wikiDataId`) values 
(251,NULL,NULL,'ایران','ایرانی',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,'2025-03-17 13:02:44',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL),
(252,NULL,NULL,'عراق','عرافی',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,'2025-03-17 13:03:32',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL),
(253,NULL,NULL,'افغانستان','افغانستانی',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,'2025-03-17 13:03:21',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL),
(254,NULL,NULL,'انگلیس','انگلیسی',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'2025-03-17 09:38:05',NULL,'2025-03-17 09:38:05',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL);

/*Table structure for table `base_languages` */

DROP TABLE IF EXISTS `base_languages`;

CREATE TABLE `base_languages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(10) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان',
  `symbol` varchar(5) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان اختصاری',
  `dir` varchar(3) COLLATE utf8_persian_ci NOT NULL DEFAULT 'rtl' COMMENT 'چینش',
  `icon` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'آیکون',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `base_languages` */

insert  into `base_languages`(`id`,`title`,`symbol`,`dir`,`icon`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'فارسی','fa','rtl','fa.png',1,NULL,'2024-07-06 18:52:35','2024-07-06 18:52:35'),
(2,'English','en','ltr','en.png',0,NULL,'2024-07-06 18:52:35','2024-07-06 18:52:35'),
(3,'عربی','ar','rtl','ar.png',0,NULL,'2024-07-06 18:52:35','2024-07-06 18:52:35');

/*Table structure for table `base_provinces` */

DROP TABLE IF EXISTS `base_provinces`;

CREATE TABLE `base_provinces` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name_fa` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام',
  `name_en` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام',
  `name_ar` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام',
  `country_id` int(11) DEFAULT NULL COMMENT 'شناسه کشور',
  `icon` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'آیکون',
  `description_fa` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'توضیحات',
  `description_en` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'توضیحات',
  `description_ar` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'توضیحات',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `base_provinces` */

insert  into `base_provinces`(`id`,`name_fa`,`name_en`,`name_ar`,`country_id`,`icon`,`description_fa`,`description_en`,`description_ar`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'آذربایجان شرقی','East Azerbaijan','آذربیجان الشرقیة',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(2,'آذربایجان غربی','West Azerbaijan','آذربیجان الغربیة',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(3,'اردبیل','Ardabil','أردبیل',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(4,'اصفهان','Isfahan','أصفهان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(5,'البرز','Alborz','ألبرز',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(6,'ایلام','Ilam','إیلام',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(7,'بوشهر','Bushehr','بوشهر',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(8,'تهران','Tehran','طهران',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(9,'چهارمحال و بختیاری','Chaharmahal and Bakhtiari','چهارمحال وبختیاری',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(10,'خراسان جنوبی','South Khorasan','خراسان الجنوبیة',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(11,'خراسان رضوی','Razavi Khorasan','خراسان الرضویة',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(12,'خراسان شمالی','North Khorasan','خراسان الشمالیة',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(13,'خوزستان','Khuzestan','خوزستان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(14,'زنجان','Zanjan','زنجان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(15,'سمنان','Semnan','سمنان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(16,'سیستان و بلوچستان','Sistan and Baluchestan','سیستان وبلوشستان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(17,'فارس','Fars','فارس',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(18,'قزوین','Qazvin','قزوین',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(19,'قم','Qom','قم',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(20,'کردستان','Kurdistan','کردستان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(21,'کرمان','Kerman','کرمان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(22,'کرمانشاه','Kermanshah','کرمانشاه',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(23,'کهگیلویه و بویراحمد','Kohgiluyeh and Boyer-Ahmad','کهکیلویه وبویر أحمد',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(24,'گلستان','Golestan','گلستان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(25,'گیلان','Gilan','گیلان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(26,'لرستان','Lorestan','لرستان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(27,'مازندران','Mazandaran','مازندران',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(28,'مرکزی','Markazi','المركزیة',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(29,'هرمزگان','Hormozgan','هرمزجان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(30,'همدان','Hamadan','همدان',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03'),
(31,'یزد','Yazd','یزد',1,NULL,NULL,NULL,NULL,1,NULL,'2024-11-26 18:06:03','2024-11-26 18:06:03');

/*Table structure for table `base_statuses` */

DROP TABLE IF EXISTS `base_statuses`;

CREATE TABLE `base_statuses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title_fa` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان فارسی',
  `title_en` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان عربی',
  `group_id` int(11) DEFAULT NULL COMMENT 'شناسه گروه وضعیت',
  `code` varchar(3) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'کد وضعیت',
  `color` varchar(20) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'رنگ',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `base_statuses` */

insert  into `base_statuses`(`id`,`title_fa`,`title_en`,`group_id`,`code`,`color`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'وضعیت فعالیت','وضعیت فعالیت',0,NULL,NULL,1,NULL,NULL,NULL),
(2,'فعال','فعال',1,'1',NULL,1,NULL,NULL,NULL),
(3,'غیرفعال','غیرفعال',1,'0',NULL,1,NULL,NULL,NULL),
(4,'وضعیت انتشار','وضعیت انتشار',0,NULL,NULL,1,NULL,NULL,NULL),
(5,'منتشر شده','منتشر شده',4,'1',NULL,1,NULL,NULL,NULL),
(6,'منتشر نشده','منتشر نشده',4,'0',NULL,1,NULL,NULL,NULL),
(7,'نوع فایل کتاب','نوع فایل کتاب',0,NULL,NULL,1,NULL,NULL,NULL),
(8,'PDF','PDF',7,'1',NULL,1,NULL,NULL,NULL),
(9,'EPUB','EPUB',7,'2',NULL,1,NULL,NULL,NULL);

/*Table structure for table `book_audiobook_files` */

DROP TABLE IF EXISTS `book_audiobook_files`;

CREATE TABLE `book_audiobook_files` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `book_id` bigint(20) unsigned NOT NULL,
  `file` varchar(255) COLLATE utf8_persian_ci NOT NULL COMMENT 'فایل صوتی',
  `duration` int(11) NOT NULL COMMENT 'زمان به ثانیه',
  `file_size` int(11) NOT NULL COMMENT 'حجم فایل به بایت',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'وضعیت فعال/غیرفعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `book_audiobook_files_book_id_foreign` (`book_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `book_audiobook_files` */

/*Table structure for table `book_categories` */

DROP TABLE IF EXISTS `book_categories`;

CREATE TABLE `book_categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_persian_ci NOT NULL COMMENT 'نام دسته‌بندی',
  `image` varchar(100) COLLATE utf8_persian_ci DEFAULT NULL,
  `book_count` int(11) DEFAULT 0,
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'وضعیت فعال/غیرفعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `book_categories` */

insert  into `book_categories`(`id`,`name`,`image`,`book_count`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'پژوهشی','01.png',0,'fa',1,NULL,'2025-03-29 14:49:10','2025-03-29 14:49:10'),
(2,'آموزشی','02.png',0,'fa',1,NULL,'2025-03-29 14:49:10','2025-03-29 14:49:10'),
(3,'فرهنگی - ترویجی','03.png',0,'fa',1,NULL,'2025-03-29 14:49:10','2025-03-29 14:49:10'),
(4,'مجموعه کتاب','04.png',0,'fa',1,NULL,'2025-03-29 14:49:10','2025-03-29 14:49:10'),
(5,'فرهنگی - ترویجی','01.png',0,'fa',1,NULL,'2025-03-29 14:49:10','2025-03-29 14:49:10'),
(6,'مجموعه کتاب','03.png',0,'fa',1,NULL,'2025-03-29 14:49:10','2025-03-29 14:49:10');

/*Table structure for table `book_category` */

DROP TABLE IF EXISTS `book_category`;

CREATE TABLE `book_category` (
  `book_id` bigint(20) unsigned NOT NULL,
  `category_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`book_id`,`category_id`),
  KEY `book_category_category_id_foreign` (`category_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `book_category` */

insert  into `book_category`(`book_id`,`category_id`) values 
(1,1),
(2,1),
(3,1),
(4,1),
(5,2),
(6,2),
(7,2),
(8,2),
(9,3),
(10,3),
(11,3),
(12,3);

/*Table structure for table `book_excerpts` */

DROP TABLE IF EXISTS `book_excerpts`;

CREATE TABLE `book_excerpts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `book_id` bigint(20) unsigned NOT NULL,
  `excerpt` text COLLATE utf8_persian_ci NOT NULL COMMENT 'بریده کتاب',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'وضعیت فعال/غیرفعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `book_excerpts_book_id_foreign` (`book_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `book_excerpts` */

insert  into `book_excerpts`(`id`,`book_id`,`excerpt`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,1,'همه بزرگ‌سالان ابتدا کودک بوده‌اند، اما تعداد کمی از آن‌ها این را به یاد می‌آورند.','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(2,2,'سال‌ها بعد، مقابل جوخه‌ی اعدام، سرهنگ آئورلیانو بوئندیا بعدازظهر دوردستی را به یاد می‌آورد که پدرش او را برای کشف یخ برد.','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(3,3,'ما اغلب فکر می‌کنیم که تصمیم‌هایمان منطقی هستند، اما در واقع تحت تأثیر خطاهای شناختی قرار داریم.','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(4,4,'جنگ صلح است، آزادی بردگی است، نادانی قدرت است.','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(5,5,'هر چیزی را می‌توان از انسان گرفت، به جز یک چیز: آزادی انتخاب نحوه برخورد با شرایط.','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13');

/*Table structure for table `book_publishers` */

DROP TABLE IF EXISTS `book_publishers`;

CREATE TABLE `book_publishers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_persian_ci NOT NULL COMMENT 'نام ناشر',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'وضعیت فعال/غیرفعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `book_publishers` */

insert  into `book_publishers`(`id`,`name`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'انتشارات امیرکبیر','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(2,'انتشارات چشمه','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(3,'انتشارات نیلوفر','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(4,'انتشارات ققنوس','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(5,'انتشارات کارنامه','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(6,'انتشارات هرمس','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(7,'انتشارات مرکز','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(8,'انتشارات علمی و فرهنگی','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(9,'انتشارات نگاه','fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(10,'انتشارات کتاب پارسه','fa',1,'2025-03-17 09:40:14','2025-03-16 09:29:13','2025-03-17 09:40:14'),
(11,'ثقفثقف','fa',1,'2025-03-17 09:42:30','2025-03-17 09:42:14','2025-03-17 09:42:30');

/*Table structure for table `book_reviews` */

DROP TABLE IF EXISTS `book_reviews`;

CREATE TABLE `book_reviews` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `book_id` int(11) unsigned NOT NULL,
  `comment` text COLLATE utf8_persian_ci NOT NULL COMMENT 'نظر کاربر',
  `rating` int(11) NOT NULL DEFAULT 1 COMMENT 'امتیاز از ۱ تا ۵',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'وضعیت فعال/غیرفعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `book_reviews_book_id_foreign` (`book_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `book_reviews` */

insert  into `book_reviews`(`id`,`user_id`,`book_id`,`comment`,`rating`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,NULL,1,'این کتاب بسیار تأثیرگذار بود و من را به فکر فرو برد.',5,'fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(2,NULL,2,'رمانی فوق‌العاده با داستانی پیچیده و جذاب.',4,'fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(3,NULL,3,'کتابی عالی برای درک بهتر خطاهای شناختی.',5,'fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(4,NULL,4,'کتابی ترسناک و در عین حال واقع‌گرایانه درباره آینده.',4,'fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13'),
(5,NULL,5,'این کتاب دیدگاه من را نسبت به زندگی کاملاً تغییر داد.',5,'fa',1,NULL,'2025-03-16 09:29:13','2025-03-16 09:29:13');

/*Table structure for table `book_user` */

DROP TABLE IF EXISTS `book_user`;

CREATE TABLE `book_user` (
  `book_id` int(11) unsigned NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `type` int(1) unsigned NOT NULL DEFAULT 1,
  PRIMARY KEY (`book_id`,`user_id`,`type`),
  KEY `book_user_creator_id_foreign` (`user_id`),
  KEY `book_user_type_foreign` (`type`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `book_user` */

insert  into `book_user`(`book_id`,`user_id`,`type`) values 
(1,8,1),
(2,9,1),
(3,5,1),
(3,7,1),
(3,8,1),
(4,4,1),
(4,5,1),
(4,9,1),
(5,4,1),
(5,5,1),
(5,6,1),
(5,8,1),
(6,4,1),
(7,5,1),
(7,8,1),
(8,5,1),
(9,8,1),
(10,7,1),
(11,8,1),
(12,4,1),
(12,6,1);

/*Table structure for table `books` */

DROP TABLE IF EXISTS `books`;

CREATE TABLE `books` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_persian_ci NOT NULL COMMENT 'عنوان کتاب',
  `publisher_id` int(11) unsigned NOT NULL,
  `publication_year` varchar(10) COLLATE utf8_persian_ci NOT NULL COMMENT 'سال انتشار',
  `original_price` decimal(10,2) NOT NULL COMMENT 'قیمت اصلی',
  `discounted_price` decimal(10,2) DEFAULT NULL COMMENT 'قیمت با تخفیف',
  `introduction` text COLLATE utf8_persian_ci NOT NULL COMMENT 'معرفی کتاب',
  `recommended_audience` text COLLATE utf8_persian_ci NOT NULL COMMENT 'پیشنهاد به چه کسانی',
  `excerpt` text COLLATE utf8_persian_ci NOT NULL COMMENT 'بخشی از متن کتاب',
  `sample_file` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'فایل نمونه',
  `file` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'فایل اصلی',
  `type` tinyint(1) NOT NULL DEFAULT 1 COMMENT 'نوع کتاب: متنی یا صوتی',
  `file_type` int(10) DEFAULT 1 COMMENT 'نوع فایل',
  `page_count` int(11) DEFAULT NULL COMMENT 'تعداد صفحات (برای کتاب‌های متنی)',
  `duration` int(11) DEFAULT NULL COMMENT 'زمان به ثانیه (برای کتاب‌های صوتی)',
  `file_size` int(11) DEFAULT NULL COMMENT 'حجم فایل به بایت',
  `publication_status` varchar(255) COLLATE utf8_persian_ci NOT NULL COMMENT 'وضعیت انتشار',
  `image` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'تصویر کتاب',
  `rating` decimal(3,2) NOT NULL DEFAULT 0.00 COMMENT 'میانگین امتیاز',
  `rating_count` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد امتیاز دهندگان',
  `view_count` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد بازدیدکنندگان',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'وضعیت فعال/غیرفعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `books_publisher_id_foreign` (`publisher_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `books` */

insert  into `books`(`id`,`title`,`publisher_id`,`publication_year`,`original_price`,`discounted_price`,`introduction`,`recommended_audience`,`excerpt`,`sample_file`,`file`,`type`,`file_type`,`page_count`,`duration`,`file_size`,`publication_status`,`image`,`rating`,`rating_count`,`view_count`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'کتاب مطالبه‌گری',1,'۱۴۰۱',45000.00,40000.00,'شازده کوچولو کتابی است که توسط آنتوان دو سنت اگزوپری نوشته شده و به مفاهیم عمیق انسانی می‌پردازد.','این کتاب برای تمام سنین، به ویژه علاقه‌مندان به ادبیات و فلسفه توصیه می‌شود.','همه بزرگ‌سالان ابتدا کودک بوده‌اند، اما تعداد کمی از آن‌ها این را به یاد می‌آورند.','http://example.com/sample1.pdf','http://example.com/book1.pdf',1,1,96,NULL,1024000,'published','مطالبه-گری.jpg',4.80,500,10000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(2,'کتاب وحدت و انسجام اجتماعی',2,'۱۴۰۰',60000.00,55000.00,'رمانی از گابریل گارسیا مارکز که به عنوان یکی از شاهکارهای ادبیات جهان شناخته می‌شود.','این کتاب برای علاقه‌مندان به رمان‌های کلاسیک و ادبیات آمریکای لاتین توصیه می‌شود.','سال‌ها بعد، مقابل جوخه‌ی اعدام، سرهنگ آئورلیانو بوئندیا بعدازظهر دوردستی را به یاد می‌آورد که پدرش او را برای کشف یخ برد.','http://example.com/sample2.pdf','http://example.com/book2.pdf',1,1,417,NULL,2048000,'published','وحدت-و-انسجام-اجتماعی.jpg',4.70,700,15000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(3,'کتاب درآمدی بر سیر تاریخی امر به معروف',3,'۱۴۰۲',70000.00,65000.00,'کتابی از رولف دوبلی که به بررسی خطاهای شناختی و نحوه تفکر شفاف می‌پردازد.','این کتاب برای علاقه‌مندان به روانشناسی و توسعه فردی توصیه می‌شود.','ما اغلب فکر می‌کنیم که تصمیم‌هایمان منطقی هستند، اما در واقع تحت تأثیر خطاهای شناختی قرار داریم.','http://example.com/sample3.mp3','http://example.com/book3.mp3',0,0,NULL,14400,512000,'published','درآمدی-بر-سیر-تاریخی-امر-به-معروف.jpg',4.60,300,8000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(4,'کتاب امر به معروف و نهی از منکر در اندیشه بزرگان- آیت الله خامنه‌ای',4,'۱۳۹۹',55000.00,50000.00,'رمانی از جورج اورول که به بررسی جامعه‌ای توتالیتر و کنترل‌شده می‌پردازد.','این کتاب برای علاقه‌مندان به ادبیات ضدآرمان‌شهری و فلسفه سیاسی توصیه می‌شود.','جنگ صلح است، آزادی بردگی است، نادانی قدرت است.','http://example.com/sample4.pdf','http://example.com/book4.pdf',1,1,328,NULL,1536000,'published','امر-به-معروف-و-نهی-از-منکر-در-اندیشه-بزرگان-آیت-الله-خامنه_ای-.jpg',4.90,1000,20000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(5,'کتاب آموزش ملی امر به معروف و نهی از منکر؛ کتاب دوم',5,'۱۴۰۱',48000.00,43000.00,'کتابی از ویکتور فرانکل که به تجربیات او در اردوگاه کار اجباری و معنای زندگی می‌پردازد.','این کتاب برای علاقه‌مندان به روانشناسی و فلسفه زندگی توصیه می‌شود.','هر چیزی را می‌توان از انسان گرفت، به جز یک چیز: آزادی انتخاب نحوه برخورد با شرایط.','http://example.com/sample5.pdf','http://example.com/book5.pdf',1,1,200,NULL,1024000,'published','آموزش-ملّی-امربه_معروف-و-نهی-از-منکر-تکمیلی.jpg',4.80,600,12000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(6,'کتاب اخلاق (متن آموزش اخلاق فردی و اجتماعی)',5,'۱۴۰۱',48000.00,43000.00,'کتابی از ویکتور فرانکل که به تجربیات او در اردوگاه کار اجباری و معنای زندگی می‌پردازد.','این کتاب برای علاقه‌مندان به روانشناسی و فلسفه زندگی توصیه می‌شود.','هر چیزی را می‌توان از انسان گرفت، به جز یک چیز: آزادی انتخاب نحوه برخورد با شرایط.','http://example.com/sample5.pdf','http://example.com/book5.pdf',1,1,200,NULL,1024000,'published','اخلاق-متن-آموزش-اخلاق-فردی-و-اجتماعی.jpg',4.80,600,12000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(7,'کتاب آموزش ملی امر به معروف و نهی از منکر؛ کتاب اول',5,'۱۴۰۱',48000.00,43000.00,'کتابی از ویکتور فرانکل که به تجربیات او در اردوگاه کار اجباری و معنای زندگی می‌پردازد.','این کتاب برای علاقه‌مندان به روانشناسی و فلسفه زندگی توصیه می‌شود.','هر چیزی را می‌توان از انسان گرفت، به جز یک چیز: آزادی انتخاب نحوه برخورد با شرایط.','http://example.com/sample5.pdf','http://example.com/book5.pdf',1,1,200,NULL,1024000,'published','کتاب-اول-آموزش-ملی-امر-به-معروف-و-نهی-از-منکر.jpg',4.80,600,12000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(8,'کتاب درسنامه پیشگیری از جرم',5,'۱۴۰۱',48000.00,43000.00,'کتابی از ویکتور فرانکل که به تجربیات او در اردوگاه کار اجباری و معنای زندگی می‌پردازد.','این کتاب برای علاقه‌مندان به روانشناسی و فلسفه زندگی توصیه می‌شود.','هر چیزی را می‌توان از انسان گرفت، به جز یک چیز: آزادی انتخاب نحوه برخورد با شرایط.','http://example.com/sample5.pdf','http://example.com/book5.pdf',1,1,200,NULL,1024000,'published','درسنامه-پیشگیری-از-جرم.jpg',4.80,600,12000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(9,'کتاب احکام لبنیات و فراورده‌های لبنی',5,'۱۴۰۱',48000.00,43000.00,'کتابی از ویکتور فرانکل که به تجربیات او در اردوگاه کار اجباری و معنای زندگی می‌پردازد.','این کتاب برای علاقه‌مندان به روانشناسی و فلسفه زندگی توصیه می‌شود.','هر چیزی را می‌توان از انسان گرفت، به جز یک چیز: آزادی انتخاب نحوه برخورد با شرایط.','http://example.com/sample5.pdf','http://example.com/book5.pdf',1,1,200,NULL,1024000,'published','لبنیات-و-فرآورده-های-لبنی.jpg',4.80,600,12000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(10,'کتاب احکام کشاورزی',5,'۱۴۰۱',70000.00,59500.00,'شناخت و شناساندن وظيفه الهي و ديني هر صنف و ابلاغ احکام صاحبان مشاغل گوناگون، از جمله وظايف مبلغين و محققین در حوزه دين و احکام ديني می‌باشد.\nپژوهشکده امربه‌معروف و نهی‌ازمنکر با بهره‌گیری از قرآن و سنت و فقه اهل‌بیت و اخلاق اسلامي و اصول مسلم عقلي به توليد و نشر مجموعه‌ای با عنوان (فقه و زندگي) فعاليت نموده است.','این کتاب برای علاقه‌مندان به روانشناسی و فلسفه زندگی توصیه می‌شود.','هر چیزی را می‌توان از انسان گرفت، به جز یک چیز: آزادی انتخاب نحوه برخورد با شرایط.','http://example.com/sample5.pdf','http://example.com/book5.pdf',1,1,200,NULL,1024000,'published','کشاورزی.jpg',4.80,600,12000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(11,'کتاب احکام قهوه خانه‌ها',5,'۱۴۰۱',55000.00,46750.00,'شناخت و شناساندن وظيفه الهي و ديني هر صنف و ابلاغ احکام صاحبان مشاغل گوناگون، از جمله وظايف مبلغين و محققین در حوزه دين و احکام ديني می‌باشد.\nپژوهشکده امربه‌معروف و نهی‌ازمنکر با بهره‌گیری از قرآن و سنت و فقه اهل‌بیت و اخلاق اسلامي و اصول مسلم عقلي به توليد و نشر مجموعه‌ای با عنوان (فقه و زندگي) فعاليت نموده است..','این کتاب برای علاقه‌مندان به روانشناسی و فلسفه زندگی توصیه می‌شود.','هر چیزی را می‌توان از انسان گرفت، به جز یک چیز: آزادی انتخاب نحوه برخورد با شرایط.','http://example.com/sample5.pdf','http://example.com/book5.pdf',1,1,200,NULL,1024000,'published','قهوه-خانه-ها.jpg',4.80,600,12000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33'),
(12,'کتاب احکام فرش و تابلوفرش',5,'۱۴۰۱',48000.00,40800.00,'شناخت و شناساندن وظيفه الهي و ديني هر صنف و ابلاغ احکام صاحبان مشاغل گوناگون، از جمله وظايف مبلغين و محققین در حوزه دين و احکام ديني می‌باشد.\nپژوهشکده امربه‌معروف و نهی‌ازمنکر با بهره‌گیری از قرآن و سنت و فقه اهل‌بیت و اخلاق اسلامي و اصول مسلم عقلي به توليد و نشر مجموعه‌ای با عنوان (فقه و زندگي) فعاليت نموده است..','این کتاب برای علاقه‌مندان به روانشناسی و فلسفه زندگی توصیه می‌شود.','هر چیزی را می‌توان از انسان گرفت، به جز یک چیز: آزادی انتخاب نحوه برخورد با شرایط.','http://example.com/sample5.pdf','http://example.com/book5.pdf',1,1,200,NULL,1024000,'published','فرش-و-تابلوفرش.jpg',4.80,600,12000,'fa',1,NULL,'2025-03-29 14:54:33','2025-03-29 14:54:33');

/*Table structure for table `cache` */

DROP TABLE IF EXISTS `cache`;

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `cache` */

/*Table structure for table `cache_locks` */

DROP TABLE IF EXISTS `cache_locks`;

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `cache_locks` */

/*Table structure for table `content_banner_positions` */

DROP TABLE IF EXISTS `content_banner_positions`;

CREATE TABLE `content_banner_positions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title_fa` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان فارسی',
  `title_en` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان عربی',
  `title_ar` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان انگلیسی',
  `code` varchar(2) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'کد موقعیت ',
  `dimensions` varchar(10) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'اندازه موقعیت',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_banner_positions` */

insert  into `content_banner_positions`(`id`,`title_fa`,`title_en`,`title_ar`,`code`,`dimensions`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'اسلایدر اصلی','slider main','اسلایدر اصلی','1','10*20',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16');

/*Table structure for table `content_banners` */

DROP TABLE IF EXISTS `content_banners`;

CREATE TABLE `content_banners` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان',
  `link` varchar(100) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'لینک',
  `image` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'تصویر',
  `position_id` int(11) DEFAULT NULL COMMENT 'شناسه موقعیت بنر',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'en' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_banners` */

insert  into `content_banners`(`id`,`title`,`link`,`image`,`position_id`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'معرفی قسمت ها','main.com','1.jpg',1,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16');

/*Table structure for table `content_blog_comments` */

DROP TABLE IF EXISTS `content_blog_comments`;

CREATE TABLE `content_blog_comments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `sender_name` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام فرستنده',
  `sender_email` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'ایمیل فرستنده',
  `blog_id` int(11) DEFAULT NULL COMMENT 'شناسه محتوا',
  `comment` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'اظهار نظر',
  `reply` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'پاسخ',
  `responder_id` int(11) DEFAULT NULL COMMENT 'شناسه کاربر پاسخ دهنده',
  `confirmer_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه پرسنل برای تأیید',
  `confirm_id` int(11) NOT NULL DEFAULT 0 COMMENT 'شناسه وضعیت تأیید، از جدول وضعیت ها',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'en' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_blog_comments` */

/*Table structure for table `content_blog_files` */

DROP TABLE IF EXISTS `content_blog_files`;

CREATE TABLE `content_blog_files` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `blog_id` int(11) DEFAULT NULL COMMENT 'شناسه مقاله',
  `file_type_id` int(11) DEFAULT NULL COMMENT 'شناسه نوع فایل از جدول انواع فایل',
  `file_category_id` int(11) DEFAULT NULL COMMENT 'شناسه دسته بندی',
  `name` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام فایل و پسوند',
  `url` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام فایل',
  `extension` varchar(5) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'پسوند',
  `size` varchar(5) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'سایز',
  `width` varchar(5) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عرض عکس',
  `height` varchar(5) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'ارتفاع عکس',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_blog_files` */

/*Table structure for table `content_blog_keyword` */

DROP TABLE IF EXISTS `content_blog_keyword`;

CREATE TABLE `content_blog_keyword` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `blog_id` int(11) DEFAULT NULL COMMENT 'شناسه مقاله',
  `keyword_id` int(11) DEFAULT NULL COMMENT 'شناسه کلمه کلیدی',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=68 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_blog_keyword` */

/*Table structure for table `content_blog_subjects` */

DROP TABLE IF EXISTS `content_blog_subjects`;

CREATE TABLE `content_blog_subjects` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title_fa` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان فارسی',
  `title_en` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان انگلیسی',
  `title_ar` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان عربی',
  `order` int(11) DEFAULT 1 COMMENT 'ترتیب',
  `count_blog` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد محتوا',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_blog_subjects` */

insert  into `content_blog_subjects`(`id`,`title_fa`,`title_en`,`title_ar`,`order`,`count_blog`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(4,'کتاب‌های صوتی','Audio Books','الكتب الصوتية',2,0,1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(5,'کتاب‌های الکترونیکی','E-Books','الكتب الإلكترونية',3,0,1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(6,'کتابخوانی','Reading','القراءة',4,0,1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16');

/*Table structure for table `content_blogs` */

DROP TABLE IF EXISTS `content_blogs`;

CREATE TABLE `content_blogs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان',
  `subject_id` int(11) DEFAULT NULL COMMENT 'شناسه موضوع محتوا',
  `creator_id` int(11) DEFAULT NULL COMMENT 'شناسه ثبت کننده',
  `editor_id` int(11) DEFAULT NULL COMMENT 'شناسه ویرایش کننده',
  `image` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'تصویر',
  `thumb` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'بند انگشتی',
  `conclusion` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نتیجه گیری',
  `summary` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'خلاصه',
  `text` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_persian_ci DEFAULT NULL COMMENT 'متن',
  `count_view` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد بازدید',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'en' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_blogs` */

insert  into `content_blogs`(`id`,`title`,`subject_id`,`creator_id`,`editor_id`,`image`,`thumb`,`conclusion`,`summary`,`text`,`count_view`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(12,'کتاب‌های صوتی: راهی برای مطالعه در دنیای پرمشغله',4,1,1,'09.jpg','15.jpg',NULL,'کتاب‌های صوتی بهترین راه برای مطالعه در دنیای پرمشغله امروز هستند.','در دنیای امروز که زمان به شدت محدود است، کتاب‌های صوتی به یکی از محبوب‌ترین روش‌های مطالعه تبدیل شده‌اند. این کتاب‌ها به شما امکان می‌دهند در حین انجام کارهای روزمره مانند رانندگی یا ورزش، به مطالعه بپردازید.',0,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(13,'چرا کتاب‌های الکترونیکی محبوب شده‌اند؟',5,1,1,'10.jpg','10.jpg',NULL,'کتاب‌های الکترونیکی به دلیل مزایای فراوان، محبوبیت زیادی پیدا کرده‌اند.','کتاب‌های الکترونیکی به دلیل قابلیت حمل آسان، دسترسی سریع و قیمت مناسب، جایگاه ویژه‌ای در میان علاقه‌مندان به کتاب پیدا کرده‌اند. این کتاب‌ها همچنین به حفظ محیط زیست کمک می‌کنند.',0,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(14,'فواید کتابخوانی برای کودکان',6,1,1,'11.jpg','08.jpg',NULL,'کتابخوانی نقش مهمی در رشد فکری و اجتماعی کودکان دارد.','کتابخوانی نه تنها به افزایش دایره لغات کودکان کمک می‌کند، بلکه باعث تقویت قوه تخیل و خلاقیت آن‌ها نیز می‌شود. خواندن کتاب‌های داستانی به کودکان کمک می‌کند تا با احساسات و موقعیت‌های مختلف آشنا شوند.',0,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(15,'تفاوت کتاب‌های صوتی و متنی',4,1,1,'12.jpg','12.jpg',NULL,'مقایسه کتاب‌های صوتی و متنی و مزایای هر کدام.','کتاب‌های صوتی برای افرادی که زمان کمی دارند یا ترجیح می‌دهند در حین انجام کارهای دیگر مطالعه کنند، گزینه مناسبی هستند. از طرفی، کتاب‌های متنی برای کسانی که به دنبال تمرکز بیشتر و درک عمیق‌تر مطالب هستند، مناسب‌ترند.',0,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(16,'تاثیر کتاب‌های الکترونیکی بر صنعت نشر',5,1,1,'13.jpg','13.jpg',NULL,'کتاب‌های الکترونیکی چگونه صنعت نشر را متحول کرده‌اند.','با ظهور کتاب‌های الکترونیکی، صنعت نشر دستخوش تغییرات بزرگی شده است. این کتاب‌ها هزینه‌های چاپ و توزیع را کاهش داده‌اند و دسترسی به کتاب‌ها را برای همه آسان‌تر کرده‌اند.',0,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(17,'کتاب‌های صوتی: راهی برای مطالعه در دنیای پرمشغله',2,1,1,'audio_books.jpg','audio_books_thumb.jpg',NULL,'کتاب‌های صوتی بهترین راه برای مطالعه در دنیای پرمشغله امروز هستند.','در دنیای امروز که زمان به شدت محدود است، کتاب‌های صوتی به یکی از محبوب‌ترین روش‌های مطالعه تبدیل شده‌اند. این کتاب‌ها به شما امکان می‌دهند در حین انجام کارهای روزمره مانند رانندگی یا ورزش، به مطالعه بپردازید.',0,'en',1,NULL,'2025-03-29 15:17:11','2025-03-29 15:17:11'),
(18,'چرا کتاب‌های الکترونیکی محبوب شده‌اند؟',3,1,1,'ebooks.jpg','ebooks_thumb.jpg',NULL,'کتاب‌های الکترونیکی به دلیل مزایای فراوان، محبوبیت زیادی پیدا کرده‌اند.','کتاب‌های الکترونیکی به دلیل قابلیت حمل آسان، دسترسی سریع و قیمت مناسب، جایگاه ویژه‌ای در میان علاقه‌مندان به کتاب پیدا کرده‌اند. این کتاب‌ها همچنین به حفظ محیط زیست کمک می‌کنند.',0,'en',1,NULL,'2025-03-29 15:17:11','2025-03-29 15:17:11'),
(19,'فواید کتابخوانی برای کودکان',4,1,1,'kids_reading.jpg','kids_reading_thumb.jpg',NULL,'کتابخوانی نقش مهمی در رشد فکری و اجتماعی کودکان دارد.','کتابخوانی نه تنها به افزایش دایره لغات کودکان کمک می‌کند، بلکه باعث تقویت قوه تخیل و خلاقیت آن‌ها نیز می‌شود. خواندن کتاب‌های داستانی به کودکان کمک می‌کند تا با احساسات و موقعیت‌های مختلف آشنا شوند.',0,'en',1,NULL,'2025-03-29 15:17:11','2025-03-29 15:17:11'),
(20,'تفاوت کتاب‌های صوتی و متنی',2,1,1,'audio_vs_text.jpg','audio_vs_text_thumb.jpg',NULL,'مقایسه کتاب‌های صوتی و متنی و مزایای هر کدام.','کتاب‌های صوتی برای افرادی که زمان کمی دارند یا ترجیح می‌دهند در حین انجام کارهای دیگر مطالعه کنند، گزینه مناسبی هستند. از طرفی، کتاب‌های متنی برای کسانی که به دنبال تمرکز بیشتر و درک عمیق‌تر مطالب هستند، مناسب‌ترند.',0,'en',1,NULL,'2025-03-29 15:17:11','2025-03-29 15:17:11'),
(21,'تاثیر کتاب‌های الکترونیکی بر صنعت نشر',3,1,1,'ebook_industry.jpg','ebook_industry_thumb.jpg',NULL,'کتاب‌های الکترونیکی چگونه صنعت نشر را متحول کرده‌اند.','با ظهور کتاب‌های الکترونیکی، صنعت نشر دستخوش تغییرات بزرگی شده است. این کتاب‌ها هزینه‌های چاپ و توزیع را کاهش داده‌اند و دسترسی به کتاب‌ها را برای همه آسان‌تر کرده‌اند.',0,'en',1,NULL,'2025-03-29 15:17:11','2025-03-29 15:17:11'),
(22,'ریاضیدان ایرانی متفکر برتر جهان شد.',3,1,1,'Untitled-1-4-750x430-190x109.jpg','Untitled-1-4-750x430-190x109.jpg',NULL,'کوچر بیرکار، ریاضی‌دان برجسته کُرد با کسب بیش از نیمی از آراء نظرسنجی مجله پراسپکت، به عنوان متفکر برتر جهان در سال ۲۰۱۹ شناخته شد.','با ظهور کتاب‌های الکترونیکی، صنعت نشر دستخوش تغییرات بزرگی شده است. این کتاب‌ها هزینه‌های چاپ و توزیع را کاهش داده‌اند و دسترسی به کتاب‌ها را برای همه آسان‌تر کرده‌اند.',0,'en',1,NULL,'2025-03-29 15:17:11','2025-03-29 15:17:11'),
(23,'راهکاری برای مطالعه‌ی پایدار',3,1,1,'mag-16-750x430-190x109.jpg','mag-16-750x430-190x109.jpg',NULL,' اگر می‌خواهید سخت درس بخوانید، باید سخت کار کنید. اما به چشمِ دویدن در یک مسابقه‌ی دو به آن نگاه کنید','با ظهور کتاب‌های الکترونیکی، صنعت نشر دستخوش تغییرات بزرگی شده است. این کتاب‌ها هزینه‌های چاپ و توزیع را کاهش داده‌اند و دسترسی به کتاب‌ها را برای همه آسان‌تر کرده‌اند.',0,'en',1,NULL,'2025-03-29 15:17:11','2025-03-29 15:17:11'),
(24,'چگونه وسواس مطالعاتی را کنار بگذاریم',3,1,1,'mag-25-750x430-190x109.jpg','mag-25-750x430-190x109.jpg',NULL,'برخی از دانش‌آموزان مدام نگران این هستند که برای مطالعه در طول روز وقت کم می‌آورند،','با ظهور کتاب‌های الکترونیکی، صنعت نشر دستخوش تغییرات بزرگی شده است. این کتاب‌ها هزینه‌های چاپ و توزیع را کاهش داده‌اند و دسترسی به کتاب‌ها را برای همه آسان‌تر کرده‌اند.',0,'en',1,NULL,'2025-03-29 15:17:11','2025-03-29 15:17:11'),
(25,'چاب کتاب امر به معروف در احادیث',3,1,1,'درآینه-احادیث-190x190.jpg','درآینه-احادیث-190x190.jpg',NULL,'برخی از دانش‌آموزان مدام نگران این هستند که برای مطالعه در طول روز وقت کم می‌آورند،','با ظهور کتاب‌های الکترونیکی، صنعت نشر دستخوش تغییرات بزرگی شده است. این کتاب‌ها هزینه‌های چاپ و توزیع را کاهش داده‌اند و دسترسی به کتاب‌ها را برای همه آسان‌تر کرده‌اند.',0,'en',1,NULL,'2025-03-29 15:17:11','2025-03-29 15:17:11');

/*Table structure for table `content_contactus` */

DROP TABLE IF EXISTS `content_contactus`;

CREATE TABLE `content_contactus` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `sender_name` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام فرستنده',
  `sender_email` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'ایمیل فرستنده',
  `responder_id` int(11) DEFAULT NULL COMMENT 'شناسه کاربر پاسخ دهنده',
  `subject` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'موضوع',
  `comment` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'اظهار نظر',
  `reply` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'پاسخ',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'en' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_contactus` */

insert  into `content_contactus`(`id`,`sender_name`,`sender_email`,`responder_id`,`subject`,`comment`,`reply`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(2,'علی رضایی','ali.rezaei@gmail.com',1,'مشکل در خرید کتاب','در هنگام خرید کتاب صوتی با خطای پرداخت مواجه شدم. لطفا راهنمایی کنید.','با سلام، لطفا از اتصال اینترنت خود اطمینان حاصل کنید و مجددا تلاش نمایید. در صورت بروز مشکل مجدد، با پشتیبانی تماس بگیرید.','fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(3,'فاطمه محمدی','fatemeh.mohammadi@gmail.com',1,'پیشنهاد کتاب','آیا امکان اضافه کردن کتاب‌های جدید به سایت وجود دارد؟','با سلام، بله. ما به طور مداوم کتاب‌های جدید را به مجموعه اضافه می‌کنیم. پیشنهادات شما نیز می‌تواند در این فرآیند موثر باشد.','fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(4,'محمد حسینی','mohammad.hosseini@gmail.com',1,'مشکل در دانلود کتاب','پس از خرید کتاب متنی، امکان دانلود آن وجود ندارد. لطفا بررسی کنید.','با سلام، لطفا از بخش کتابخانه خود اقدام به دانلود نمایید. در صورت بروز مشکل، با پشتیبانی تماس بگیرید.','fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(5,'زهرا کریمی','zahra.karimi@gmail.com',1,'نظرسنجی','آیا امکان اضافه کردن بخش نظرسنجی برای کتاب‌ها وجود دارد؟','با سلام، پیشنهاد شما ثبت شد و در آینده نزدیک این قابلیت به سایت اضافه خواهد شد.','fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(6,'رضا احمدی','reza.ahmadi@gmail.com',1,'اشتراک ماهانه','آیا امکان تمدید خودکار اشتراک ماهانه وجود دارد؟','با سلام، بله. شما می‌توانید در بخش تنظیمات حساب کاربری خود، تمدید خودکار اشتراک را فعال کنید.','fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16');

/*Table structure for table `content_faq_categories` */

DROP TABLE IF EXISTS `content_faq_categories`;

CREATE TABLE `content_faq_categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title_fa` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان فارسی',
  `title_en` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان انگلیسی',
  `title_ar` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان عربی',
  `order` int(11) DEFAULT 1 COMMENT 'ترتیب',
  `count_faq` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد سئوال',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_faq_categories` */

insert  into `content_faq_categories`(`id`,`title_fa`,`title_en`,`title_ar`,`order`,`count_faq`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(4,'درباره Book','About Book','عن Book',1,0,1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(5,'خرید و فروش','Purchase and Sales','الشراء والبيع',2,0,1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(6,'پشتیبانی','Support','الدعم',3,0,1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(7,'اشتراک‌گذاری','Sharing','المشاركة',4,0,1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16');

/*Table structure for table `content_faqs` */

DROP TABLE IF EXISTS `content_faqs`;

CREATE TABLE `content_faqs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `question` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'سوال',
  `answer` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'پاسخ',
  `category_id` int(11) DEFAULT NULL COMMENT 'شناسه دسته بندی',
  `order` int(11) DEFAULT 1 COMMENT 'ترتیب',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_faqs` */

insert  into `content_faqs`(`id`,`question`,`answer`,`category_id`,`order`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(57,'چگونه می‌توانم کتاب صوتی خریداری کنم؟','برای خرید کتاب صوتی، وارد حساب کاربری خود شوید، کتاب مورد نظر را انتخاب کرده و روی دکمه خرید کلیک کنید. پس از پرداخت موفق، کتاب صوتی در بخش کتابخانه شما قابل دسترسی خواهد بود.',2,1,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(58,'آیا امکان دانلود کتاب‌های متنی وجود دارد؟','بله، پس از خرید کتاب‌های متنی، می‌توانید آن‌ها را در قالب PDF یا EPUB دانلود کرده و در دستگاه‌های مختلف مطالعه کنید.',2,2,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(59,'چگونه می‌توانم کتاب‌های تصویری را مشاهده کنم؟','کتاب‌های تصویری پس از خرید در بخش کتابخانه شما قرار می‌گیرند و می‌توانید آن‌ها را به صورت آنلاین مشاهده کنید.',2,3,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(60,'آیا امکان بازگشت وجه برای کتاب‌های خریداری شده وجود دارد؟','در صورت بروز مشکل در فایل‌های خریداری شده، می‌توانید از طریق پشتیبانی سایت درخواست بازگشت وجه دهید. شرایط بازگشت وجه در صفحه قوانین سایت ذکر شده است.',3,1,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(61,'چگونه می‌توانم کتاب‌های خود را به اشتراک بگذارم؟','شما می‌توانید از طریق بخش کتابخانه، کتاب‌های خود را با دوستانتان به اشتراک بگذارید. این قابلیت در حال حاضر تنها برای کتاب‌های متنی فعال است.',4,1,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(62,'آیا امکان خرید اشتراک ماهانه وجود دارد؟','بله، شما می‌توانید از طریق بخش اشتراک‌ها، اشتراک ماهانه یا سالانه خریداری کنید و به تمام کتاب‌های سایت دسترسی داشته باشید.',2,4,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(63,'چگونه می‌توانم کتاب‌های صوتی را در دستگاه‌های مختلف گوش کنم؟','پس از خرید کتاب صوتی، می‌توانید آن را در دستگاه‌های مختلف مانند موبایل، تبلت یا کامپیوتر از طریق اپلیکیشن یا وب‌سایت ما گوش دهید.',2,5,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16');

/*Table structure for table `content_site_texts` */

DROP TABLE IF EXISTS `content_site_texts`;

CREATE TABLE `content_site_texts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `code` int(11) DEFAULT NULL COMMENT 'کد',
  `title_fa` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان فارسی',
  `title_ar` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان عربی',
  `title_en` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان به زبان انگلیسی',
  `text_fa` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'متن به زبان فارسی',
  `text_ar` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'متن به زبان عربی',
  `text_en` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'متن به زبان انگلیسی',
  `btn_text_fa` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'متن به زبان فارسی',
  `btn_text_en` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'متن به زبان انگلیسی',
  `btn_text_ar` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'متن به زبان عربی',
  `icon` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'آیکون',
  `image` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'تصویر',
  `link` varchar(100) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'لینک',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_site_texts` */

/*Table structure for table `content_sliders` */

DROP TABLE IF EXISTS `content_sliders`;

CREATE TABLE `content_sliders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان',
  `title2` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عنوان دوم',
  `mobile` int(11) NOT NULL DEFAULT 0 COMMENT 'اسلایدر موبایل مقدار 1 و اسلایدر سیستم مقدار 0',
  `order` int(11) DEFAULT 1 COMMENT 'ترتیب',
  `link` varchar(100) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'لینک',
  `image` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'تصویر',
  `text` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'متن',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'en' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_sliders` */

insert  into `content_sliders`(`id`,`title`,`title2`,`mobile`,`order`,`link`,`image`,`text`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(40,'اصلی','اصلی',1,1,'home.ir','addvertise.png','اصلی','fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16');

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`) values 
(1,'2025_03_15_090619_create_books_table',1),
(2,'2025_03_15_090645_create_publishers_table',1),
(3,'2025_03_15_090653_create_categories_table',1),
(4,'2025_03_15_090700_create_book_creator_table',1),
(5,'2025_03_15_090709_create_book_category_table',1),
(6,'2025_03_15_090717_create_reviews_table',1),
(7,'2025_03_15_091240_book_excerpts_table',1),
(8,'2025_03_15_091402_audiobook_files_table',1),
(9,'2024_03_20_1234567_create_users_table',2);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام',
  `lastname` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام خانوادگی',
  `mobile` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'شماره همراه',
  `biography` text COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'زندگی‌نامه',
  `birth_date` varchar(10) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'تاریخ تولد',
  `death_date` varchar(10) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'تاریخ درگذشت',
  `nationality` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'ملیت',
  `password` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'رمز عبور',
  `role_id` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'نقش کاربر',
  `narrator` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'آیا راوی است ؟',
  `author` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'آیا نویسنده است ؟',
  `translator` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'آیا مترجم است ؟',
  `photo` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'تصویر',
  `publishedBooks` int(11) DEFAULT NULL COMMENT 'تعداد کتابهایی که نوشته',
  `lang` varchar(2) COLLATE utf8_persian_ci NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_mobile_unique` (`mobile`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`firstname`,`lastname`,`mobile`,`biography`,`birth_date`,`death_date`,`nationality`,`password`,`role_id`,`narrator`,`author`,`translator`,`photo`,`publishedBooks`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'سایان','مدیر ارشد','09191964745',NULL,NULL,NULL,NULL,'$2y$12$hqhPu83TPFSagUrWfhnHC.laRyIVgSJSj7fCAE63KWMH9vpLFC8hO',1,0,0,0,'06.jpg',NULL,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(2,'علی','محمدی','09111111111',NULL,NULL,NULL,NULL,'$2y$12$R0HRI63hWkovJ3bla0ajsOmfBitOG7tZJC3nCxTreOUOpzEwNhgSi',0,0,0,0,'01.jpg',23,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(3,'فاطمه','رضایی','09111111112',NULL,NULL,NULL,NULL,'$2y$12$2ggE8SjJWYDYFJFIInqGz.CaNNPwAxfYBg/tf6p0v9lmobA2lrZ4O',0,0,0,0,'02.jpg',13,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(4,'محمد','فروغی','09122222222',NULL,NULL,NULL,NULL,'$2y$12$FmZLidjqyEXxtSdQ6ks/POuSlRRDJP4TVpy0z6a/LjO6zVv4RtoQ2',1,0,0,1,'03.jpg',4,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(5,'زهرا','اکبری','09122222223',NULL,NULL,NULL,NULL,'$2y$12$xM9V8otojl/c4FOoeKk6v.kblkXF.0aR/vJj19feHzMTX9yx7nHAa',1,0,0,1,'04.jpg',67,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(6,'حسین','مهدوی','09133333333',NULL,NULL,NULL,NULL,'$2y$12$6Ala1eDzBX0ZsGJX7VNvUeP0ZQKJ76BZbGTB1O4mppptrjUyCSbRi',1,1,0,0,'05.jpg',43,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(7,'نرگس','کریمی','09133333334',NULL,NULL,NULL,NULL,'$2y$12$kZA39JMqwYYhKdKfDQ00L.DNyw/iHVaDwwjx6zlAGcFVom7yPFOy6',1,1,0,0,'01.jpg',56,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(8,'صادق','هدایت','09144444444',NULL,NULL,NULL,NULL,'$2y$12$eE2Xm30KqGPCeY8uVcftSu9FEneVVwbs0nhWf6O12/80NDmRnELom',1,0,1,0,'02.jpg',7,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16'),
(9,'سیمین','بهبهانی','09144444445',NULL,NULL,NULL,NULL,'$2y$12$J960tCF8n6Nffiu/Py2fu.U2CGA4WfyH6L4Aqy9AGK8G6/QfkzIMy',1,0,1,0,'01.jpg',34,'fa',1,NULL,'2025-03-16 09:29:16','2025-03-16 09:29:16');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
