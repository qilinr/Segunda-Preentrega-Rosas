import item from '../item/item'

const ItemList = ({products }) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <item key={prod.id} {...prod} />)}
        </div>
    )
}
export default ItemList