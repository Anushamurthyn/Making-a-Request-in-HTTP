//GET
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch(err => console.log(err))

//POST 
fetch('https://fakestoreapi.com/products',{
    method: 'POST',
    headers:{
        "content-type": "application/json"
    },
    body: JSON.stringify({
        category : "Womens clothing",
        description : "Your perfect clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 100
        
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

//UPDATE OR PUT
fetch('https://fakestoreapi.com/products/2',{
    method: 'PUT',
    headers:{
        "content-type": "application/json"
    },
    body: JSON.stringify({
        category : "Childres clothing",
        description : "Your kids perfect clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 1000
        
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

//DELETE
fetch('https://fakestoreapi.com/products/0',{
    method: 'DELETE'})
    .then(response => console.log('Delete successful', response))
    .catch(error => console.error('Delete failed', error))
