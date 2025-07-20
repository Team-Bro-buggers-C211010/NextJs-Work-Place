export const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <h2>Product Component</h2>
    </div>
  );
};
