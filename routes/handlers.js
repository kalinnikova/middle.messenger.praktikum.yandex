const express = require('express');
const router = express.Router();

// Routing 
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        name: 'Esterling Accime',
        style:  'main.less',
        age: 5,
        isDisplayName: true,
        isAgeEnabled: true,
        people: [
            {firstName: "Yehuda", lastName: "Katz"},
            {firstName: "Carl", lastName: "Lerche"},
            {firstName: "Alan", lastName: "Johnson"}
        ]
    });
});

router.get('/login', (req, res) => {
    res.render('pages/login/login', {
        title: 'Login',
        style: 'login.css',
        login: 'Kalina',
        password:  'password',
    });
});

router.get('/registration', (req, res) => {
    res.render('pages/registration/registration', {
        title: 'Registration',
        style: 'registration.css',
        login: 'Kalina',
        password:  'password',
        first_name: 'Иван'
    });
});

router.get('/chat', (req, res) => {
    res.render('pages/chat/chat', {
        style: 'chat.css',
        message: 'Lol',
        dialogues: [
            {
                name: 'Андрей',
                lastMessage: 'Привет!',
                quantity: 2,
                time: '10:49'
            },

            {
                name: 'Андрей 2',
                lastMessage: 'Привет',
                time: '13:09'
            },

            {
                name: 'Котик',
                lastMessage: 'Как дела?',
                quantity: 1,
                time: '12:18'
            },

            {
                name: 'Гусь',
                lastMessage: '...',
                quantity: 1,
                time: 'Пн'
            },

            {
                name: 'Леха',
                lastMessage: 'Изображение',
                time: 'Пн'
            },

            {
                name: 'Подруга',
                lastMessage: 'Изображение',
                time: 'Пн'
            },

            {
                name: 'Друг',
                lastMessage: 'Изображение',
                time: 'Пн'
            },

            {
                name: 'Иван',
                lastMessage: 'Изображение',
                time: 'Вс'
            },

            {
                name: 'Инна А.',
                lastMessage: 'Изображение',
                time: 'Вс'
            }
        ]
    });
});

router.get('/profile', (req, res) => {
    res.render('pages/profile/profile', {
        title: 'Profile',
        style: 'profile.css',
        login: 'Kalina',
        password:  'password'
    });
});

router.get('/500', (req, res) => {
    res.render('pages/error-page/error-page', {
        title: '500',
        style: 'error-page.css',
        error: '500',
        text:  'Мы уже фиксим'
    });
});

router.get('/404', (req, res) => {
    res.render('pages/error-page/error-page', {
        title: '404',
        style: 'error-page.css',
        error: '404',
        text:  'Что-то пошло не так'
    });
});

module.exports = router;
