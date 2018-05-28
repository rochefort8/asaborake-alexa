var tanka = require('./tanka');

var order = new Array(100);

/*
for (var i = 0; i < 10; i++) {
    order[i] = i+1 ;
}
*/
tanka.getRandomOrder(order);


for (var i = 1; i <= 100; i++) {
    console.log(tanka.getKaminokuVoiceFilename(i));
    console.log(tanka.getShimonokuVoiceFilename(i));
    console.log(tanka.getTankaVoiceFilename(i));    
//    console.log(tanka.getTanka(i));
}


/*
for (var i = 0; i < order.length; i++) {
    console.log(order[i]);
}
*/
