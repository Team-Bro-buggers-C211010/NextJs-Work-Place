"use client";

import { ImageSlider } from "@/components/ImageSlider";
import { useTheme } from "@/components/theme-provider";

export default function ClientRoute() {

    const theme = useTheme();
    // const result = serverSideFunction();
    return (
        <div>
            <h1 style={{ color: theme.colors.primary }}>Client Route</h1>
            <ImageSlider />
        </div>
    );
}