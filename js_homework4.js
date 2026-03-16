function minPrice (...arr){
    return Math.min (...arr)+ "грн"
}
var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",

price: function(){
    let total=0;
    for (let key in this){
        if (typeof this[key]==='string'){
            total+= parseFloat(this[key]);
        }
    }
    return total + "грн"
},
minPrice: function (){
    let prices = [];
    for (let key in this){
        if (typeof this [key] === 'string'){
                prices.push(parseFloat(this[key]));
        }
    }
    return minPrice (...prices);
},
maxPrice(){
    let max=0;
    for (let key in this){
        if (typeof this[key]==='string'){
            let currentPrice=parseFloat(this[key]);
            if (currentPrice>max){
                max=currentPrice;
            }
        }
    }
    return max + "грн";
}
};
services['Розбити скло'] = "200 грн";
services['Кава'] = "280.5 грн";

console.log ("Загальна вартість", services.price() );
console.log ("Мінімальна вартість", services.minPrice());
console.log ("Максимальна вартість", services.maxPrice());

