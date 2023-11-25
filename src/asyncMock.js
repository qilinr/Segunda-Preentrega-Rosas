const products = [
    {
        id:'1',
        name: 'iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_931249-MLA69226781037_052023-O.webp',
        stock: '25',
        description: 'descripcion iphone 12'
    },
    {id:'2', name: 'samsung s21', price: '900', category: 'celular', img: 'https://m.media-amazon.com/images/I/61jYjeuNUnL._AC_SL1000_.jpg', stock: '20', description: 'description samsung s21'},
    {id:'3', name: 'ipad 8va gen', price: '1200', category: 'tablet', img: 'https://www.eagletechnology.com.ar/wp-content/uploads/2021/09/6162WMQWhVL._SL1500_.jpg', stock: '15', description: 'ipad'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
    },500)
})
}