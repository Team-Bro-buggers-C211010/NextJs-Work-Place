const PageID = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const productId = (await params).productId;
  return <h1>Details about product {productId} </h1>;
};

export default PageID;
