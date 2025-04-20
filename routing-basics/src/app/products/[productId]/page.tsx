import { Metadata } from 'next';
type Props = {
  params: { productId: string },
}

export const generateMetadata = async ({
  params,
}: Props) : Promise<Metadata> => {
  const productId = params.productId;
  return {
    title: `Product ${productId} Details`,
    description: `Details about product ${productId}`,
  };
};

const PageID = async ({ params }: { params: { productId: string } }) => {
  const productId = params.productId;
  return <h1>Details about product {productId} </h1>;
};

export default PageID;
