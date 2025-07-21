import { ImageSlider } from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";
import { ClientSideFunction } from "@/utils/client-utils";

export default function ServerRoute() {
    const result = serverSideFunction();
    // const clientResult = ClientSideFunction();
    return (
        <>
            <h1>Server Route {result}</h1>
            <ImageSlider />
        </>
    )
}