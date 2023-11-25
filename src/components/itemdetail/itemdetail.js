import	ItemCunt from '../itemcount/itemcount'

const itemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article className='carditem'>
            <header className='header'>
                <h2 className='itemheader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='itemimg' />
            </picture>
            <section>
                <p className='info'>
                categoria:{category}
                </p>
                <p className='info'>
                    descripción:{description}
                </p>
                <p className='info'>
                    precio: ${price}
                </p>
            </section>
            <footer className='itemfooter'>
                itemcount initial={1} stock{stock} onAdd={(quantity) => console.log('cantidad agregada')}
            </footer>
        </article>
            
            
    )
}
export default itemDetail