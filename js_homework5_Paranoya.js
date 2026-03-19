var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var re = /^\w+(\.\w+)?@(gmail\.com|yahoo\.com)$/;
var res = [];
arr.forEach(function(item){
    if (re.test(item.email)){
        res.push(item.email);
    }
}
);



console.log ("Заслуговують довіри:", res);
