
const items = [
    {id:1,name:"product1" },
    {id:2,name:"product2" },
    {id:3,name:"product3" },
];

var index = (req,res)=>{
    res.render('index',{
        title: 'My Web Store'
    });
}

var listproducts = (req,res,next)=>{
    res.render('products',
    {
        title: 'LIst products',
        items: items
    }
    )
}
var newproducts = (req,res,next)=>{
    const product = req.body.newItem;
    const itemArray = {
        id: items.length +1,
        name:product
    }
    items.push(itemArray);
    res.redirect('/products');
}
//Se deben exportar las variables de las funciones de Expresion
module.exports ={
    index,
    listproducts,
    newproducts
}