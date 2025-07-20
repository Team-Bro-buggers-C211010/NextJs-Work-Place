"use client";

import { useState } from "react";

export default function Dashboard() {
    const [name, setName] = useState("");

    console.log("Dashboard client page rendered");
    return (
        <div>
            <h1>Dashboard</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Your name is: {name}</p>
        </div>
    );
}