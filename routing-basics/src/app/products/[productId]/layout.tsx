const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count) + 1; // get random number between 1 and count
};
export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
    // Simulating a random error for demonstration purposes
    // random error in layout can not be handle by same folder error boundary
    // it will be handled by the parent error boundary
    // so we can use the error boundary in the parent folder i.e. products/error.tsx
    // or we can use the error boundary in the root folder i.e. app/error.tsx
    
    const randomInt = getRandomInt(2);
    if (randomInt === 2) {
        throw new Error("Random Error for product details layout");
    }
    return (
        <div>
            {children}
        </div>
    );
}