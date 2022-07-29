CREATE TABLE `users` (
    `num` int(11) NOT NULL AUTO_INCREMENT,
    `id` varchar(100) NOT NULL,
    `password` varchar(25) NOT NULL,
    `address` varchar(20) NOT NULL,
    `phone` varchar(15) NOT NULL,
    PRIMARY KEY (num)
); 