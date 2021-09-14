var serverData = [
{
    name: 'LAN Cable',
    imageUrl: './images/card1.jpeg',
    price: '350'
},
{
    name: 'Battery',
    imageUrl: './images/card2.jpeg',
    price: '500'
},
{
    name: 'Xbox',
    imageUrl: './images/card3.jpeg',
    price: '49900'
},
{
    name: 'Game',
    imageUrl: './images/card4.jpeg',
    price: '2200'
}
]

var rowHTML = document.getElementById('product-section');

for(var i =0;i<serverData.length; i++){
    var htmlCard = `<div class="col-md-3">
                    <div class="custom-card">
                        <img src="${serverData[i].imageUrl}" class="prd-img"/>
                        <p class="text-muted prd-name">${serverData[i].name}</p>
                        <h6>₹ ${serverData[i].price}</h6>
                        <button class="btn btn-primary btn-small">Add to Cart</button>
                    </div>
                  </div>`

    rowHTML.insertAdjacentHTML('beforeend', htmlCard)
}


console.log(serverData);