const item = ({id, name, img, precio, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: ${stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">Ver detalle</button>
            </footer>
        </article>
    )    
}
export default item