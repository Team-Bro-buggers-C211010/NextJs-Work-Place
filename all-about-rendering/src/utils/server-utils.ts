import "server-only";

export const serverSideFunction = () => {
    console.log(
        `user multiple libraries,
        use environmental variables,
        interact with a database,
        process confidential information`
    );
    return "Server-side function executed";
}