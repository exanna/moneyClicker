const clickBtn = document.querySelector('.click-me');
const score = document.querySelector('.main-score');
const scoreAdd = document.querySelector('.add-score');

const miniShop = document.querySelector('.miniShop');
const miniShopDesc = document.querySelector('.mini-shop-number');

const shop = document.querySelector('.shop');
const shopDesc = document.querySelector('.shop-number');

const carShop = document.querySelector('.car-shop');
const carShopDesc = document.querySelector('.car-shop-number');

const mall = document.querySelector('.mall');
const mallDesc = document.querySelector('.mall-number');

const bank = document.querySelector('.bank');
const bankDesc = document.querySelector('.bank-number');

let money = 0;
let updatePoints = 1;

let miniShopNumber = 0;
let shopNumber = 0;
let carShopNumber = 0;
let mallNumber = 0;
let bankNumber = 0;

function addPoints() {
    money = money + updatePoints;
    score.innerHTML = `Masz już: $${money}`;
    scoreAdd.innerHTML = `$${updatePoints} / click`;
    console.log('cos');
}

function buyMiniShop() {
    if (money >= 20) {
        money = money - 20;
        updatePoints = updatePoints + 1;
        miniShopNumber = miniShopNumber + 1;
        score.innerHTML = `Masz już: $${money}`;
        miniShopDesc.innerHTML = `Masz: ${miniShopNumber}`
        scoreAdd.innerHTML = `$${updatePoints} / click`;
    }
}

function buyShop() {
    if (money >= 200) {
        money = money - 200;
        updatePoints = updatePoints + 5;
        shopNumber = shopNumber + 1;
        score.innerHTML = `Masz już: $${money}`;
        shopDesc.innerHTML = `Masz: ${shopNumber}`
        scoreAdd.innerHTML = `$${updatePoints} / click`;
    }
}

function buyCarShop() {
    if (money >= 2000) {
        money = money - 2000;
        updatePoints = updatePoints + 10;
        shopNumber = shopNumber + 1;
        score.innerHTML = `Masz już: $${money}`;
        carShopDesc.innerHTML = `Masz: ${carShopNumber}`
        scoreAdd.innerHTML = `$${updatePoints} / click`;
    }
}

function buyMall() {
    if (money >= 10000) {
        money = money - 10000;
        updatePoints = updatePoints + 50;
        mallNumber = mallNumber + 1;
        score.innerHTML = `Masz już: $${money}`;
        mallDesc.innerHTML = `Masz: ${mallNumber}`
        scoreAdd.innerHTML = `$${updatePoints} / click`;
    }
}

function buyBank() {
    if (money >= 100000) {
        money = money - 100000;
        updatePoints = updatePoints + 100;
        bankNumber = bankNumber + 1;
        score.innerHTML = `Masz już: $${money}`;
        bankDesc.innerHTML = `Masz: ${bankNumber}`
        scoreAdd.innerHTML = `$${updatePoints} / click`;
    }
}