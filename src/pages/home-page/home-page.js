import React from 'react';
import { GameItem } from "../../components/game-item";
import "./home-page.css"

const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор'],
        price: 2343,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "На вас чекає нескінченний калейдоскоп пригод Horizon! Здійснюйте захоплюючі поїздки неймовірно красивим і самобутнім світом Мексики за кермом найбільших автомобілів в історії. Почніть свою пригоду Horizon вже сьогодні, додавши гру до свого списку бажань!",
    },
    {
        image: '/game-covers/battlefield_2042.jpeg',
        title: 'Battlefield 2042',
        genres: ['Екшен', 'Шутер', 'Війна'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2433,
        id: 2,
        description: 'Battlefield™ 2042 – це шутер від першої особи, в якому серія повертається до легендарних масштабних битв. У майбутньому, де панує хаос, адаптуйтеся і процвітайте на полях бою, що постійно змінюються, завдяки своєму загону та арсеналу новітніх технологій.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глибокий сюжет', 'Протагоністка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 3021,
        id: 3,
        description: 'Алекс Чень від усіх приховує своє "прокляття" - надприродну здатність зчитувати сильні емоції інших і впливати на них. Але коли її брат гине — нібито внаслідок нещасного випадку, Алекс використовує її, щоб дізнатися правду.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Екшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 789,
        id: 4,
        description: 'Grand Theft Auto V для PC дозволяє гравцям досліджувати знаменитий світ Лос-Сантоса та округу Блейн у роздільній здатності до 4К і вище з частотою 60 кадрів на секунду.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 982,
        id: 5,
        description: 'Tom Clanc`ys Rainbow Six Облога - це продовження гучного шутера від першої особи, розробленої студією Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.jpeg',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2863,
        id: 6,
        description: 'Assassin`s Creed Valhalla – мультиплатформенна комп`ютерна гра у жанрі action/RPG, розроблена студією Ubisoft Montreal під видавництвом компанії Ubisoft. Є дванадцятою грою у серії ігор Assassin Creed.'
    },
    {
        image: '/game-covers/fifa22.jpeg',
        title: 'FIFA 22',
        genres: ['Спорт'],
        video: 'https://www.youtube.com/embed/vLj-27T-SEQ',
        price: 4911,
        id: 7,
        description: 'Заряджений футболом. EA SPORTS™ FIFA 22 наближає гру до реальності з фундаментальними покращеннями ігрового процесу та інноваціями у всіх режимах.'
    },
    {
        image: '/game-covers/pes22.jpeg',
        title: 'eFootball 2022',
        genres: ['Спорт'],
        video: 'https://www.youtube.com/embed/mKak2Kk5eDI',
        price: 700,
        id: 8,
        description: 'Готуйтесь до почакту нової ери футболу з виходом eFootball™ 2022!'
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            {GAMES.map(game => <GameItem game={game} key={game.id} />)}
        </div>
    )
}
