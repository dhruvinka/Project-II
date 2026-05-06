function Cart() {
  const items = [
    { id: 1, name: "Pen", quantity: 2, price: 10 }
  ];

  return (
    <table border="1">
      <tr>
        <th>ID</th><th>Name</th><th>Qty</th><th>Price</th><th>Total</th>
      </tr>
      {items.map(i => (
        <tr key={i.id}>
          <td>{i.id}</td>
          <td>{i.name}</td>
          <td>{i.quantity}</td>
          <td>{i.price}</td>
          <td>{i.quantity * i.price}</td>
        </tr>
      ))}
    </table>
  );
}

export default Cart;