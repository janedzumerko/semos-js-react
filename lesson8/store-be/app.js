var express = require('express')
var cors = require('cors')
var app = express()

const port = 8080;

app.use(cors());

const API =
{
    "products": [{
        "availableSizes": ["S", "XS"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "4 MSL",
        "id": 12,
        "pieces": 9,
        "isFreeShipping": true,
        "price": 10.9,
        "style": "Black with custom print",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg",
        "title": "Cat Tee Black T-Shirt"
    }, {
        "availableSizes": ["M"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "",
        "id": 13,
        "pieces": 5,
        "isFreeShipping": true,
        "price": 29.45,
        "style": "Front print and paisley print",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg",
        "title": "Dark Thug Blue-Navy T-Shirt"
    }, {
        "availableSizes": ["X", "L", "XL"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "GPX Poly 1",
        "id": 14,
        "pieces": 3,
        "isFreeShipping": true,
        "price": 9,
        "style": "Front tie dye print",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg",
        "title": "Sphynx Tie Dye Wine T-Shirt"
    }, {
        "availableSizes": ["X", "L", "XL", "XXL"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "Treino 2014",
        "id": 15,
        "pieces": 5,
        "isFreeShipping": true,
        "price": 14,
        "style": "Black T-Shirt with front print",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.84c82a5a.jpg",
        "title": "Skuul"
    }, {
        "availableSizes": ["X", "L"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "",
        "id": 11,
        "pieces": 3,
        "isFreeShipping": true,
        "price": 13.25,
        "style": "Wine",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610_1.a313534c.jpg",
        "title": "Wine Skul T-Shirt"
    }, {
        "availableSizes": ["X", "L", "XL", "XXL"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "14/15 s/nº",
        "id": 0,
        "pieces": 9,
        "isFreeShipping": true,
        "price": 10.9,
        "style": "Branco com listras pretas",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644_1.87b5353e.jpg",
        "title": "Cat Tee Black T-Shirt"
    }, {
        "availableSizes": ["X", "L", "XL", "XXL"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "14/15 s/nº",
        "id": 1,
        "pieces": 9,
        "isFreeShipping": true,
        "price": 10.9,
        "style": "Preta com listras brancas",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310_1.75f51cec.jpg",
        "title": "Sphynx Tie Dye Grey T-Shirt"
    }, {
        "availableSizes": ["X", "L"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "14/15 s/nº",
        "id": 2,
        "pieces": 7,
        "isFreeShipping": true,
        "price": 14.9,
        "style": "Branco com listras pretas",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.7faf6a31.jpg",
        "title": "Danger Knife Grey"
    }, {
        "availableSizes": ["X", "L"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "2014 s/nº",
        "id": 3,
        "pieces": 7,
        "isFreeShipping": true,
        "price": 14.9,
        "style": "Preto com listras brancas",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.df97d7c2.jpg",
        "title": "White DGK Script Tee"
    }, {
        "availableSizes": ["XL"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "14/15 s/nº - Jogador",
        "id": 4,
        "pieces": 12,
        "isFreeShipping": false,
        "price": 25.9,
        "style": "Branco com listras pretas",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676_1.59b64365.jpg",
        "title": "Born On The Streets"
    }, {
        "availableSizes": ["X", "L", "XL"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "14/15 + Camiseta 1º Mundial",
        "id": 5,
        "pieces": 9,
        "isFreeShipping": false,
        "price": 10.9,
        "style": "Preto",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888_1.54fbf816.jpg",
        "title": "Tso 3D Short Sleeve T-Shirt A"
    }, {
        "availableSizes": ["XL", "XXL"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "Goleiro 13/14",
        "id": 6,
        "pieces": 0,
        "isFreeShipping": true,
        "price": 49.9,
        "style": "Branco",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891_1.45a051e0.jpg",
        "title": "Man Tie Dye Cinza Grey T-Shirt"
    }, {
        "availableSizes": ["S"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "1977 Infantil",
        "id": 7,
        "pieces": 4,
        "isFreeShipping": true,
        "price": 22.5,
        "style": "Preto com listras brancas",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.d78e2790.jpg",
        "title": "Crazy Monkey Black T-Shirt"
    }, {
        "availableSizes": ["XL"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "",
        "id": 8,
        "pieces": 4,
        "isFreeShipping": false,
        "price": 18.7,
        "style": "Azul escuro",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316_1.843a4713.jpg",
        "title": "Tso 3D Black T-Shirt"
    }, {
        "availableSizes": ["L", "XL"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "",
        "id": 9,
        "pieces": 5,
        "isFreeShipping": true,
        "price": 134.9,
        "style": "",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164_1.06ec2c62.jpg",
        "title": "Crazy Monkey Grey"
    }, {
        "availableSizes": ["L", "XL"],
        "currencyFormat": "$",
        "currencyId": "USD",
        "description": "",
        "id": 10,
        "pieces": 9,
        "isFreeShipping": true,
        "price": 49,
        "style": "",
        "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.4c799bac.jpg",
        "title": "On The Streets Black T-Shirt"
    }]
}

function getProductById(id) {
    return API.products.find(element => element.id === id);
}

app.get('/', (req, res) => res.send("Se e ok"));

app.get('/products', (req, res) => res.send(API));

app.get('/products/:id', (req, res) => {
    console.log(req.params.id);
    const response = getProductById(parseInt(req.params.id));
    res.send(response);
})

app.listen(port, function () {
    console.log(`CORS-enabled web server listening on port ${port}`);
})

