function CartStatus() {
  const items = ["item1", "item2"];

  return (
    <h2>
      {items.length > 0
        ? `You have ${items.length} items`
        : "Cart is empty"}
    </h2>
  );
}

export default CartStatus;