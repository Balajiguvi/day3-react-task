export function Cart({ cartList, removeCart }) {
    return (
        <ol className="list-group list-group-numbered">

            {cartList.map((item) => {
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-start" >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.title}</div>
                            {item.price}
                        </div>
                        <button onClick={() => removeCart(item)} className="badge bg-primary rounded-pill">Remove</button>
                    </li>
                )
            })}






        </ol>
    );
}