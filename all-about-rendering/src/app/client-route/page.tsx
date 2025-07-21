"use client";

import { ImageSlider } from "@/components/ImageSlider";
import { useTheme } from "@/components/theme-provider";
import { ClientSideFunction } from "@/utils/client-utils";

export default function ClientRoute() {

    const theme = useTheme();
    const result = ClientSideFunction();
    // const result = serverSideFunction();
    return (
        <div>
            <h1 style={{ color: theme.colors.primary }}>Client Route {result}</h1>
            <ImageSlider />
        </div>
    );
}