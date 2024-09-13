import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            themeName: "DinDini",
            accountThemeImplementation: "none",
            keycloakVersionTargets: {
                "21-and-below": false,
                "22-and-above": "keycloak-theme-DinDini.jar"
            }
        })
    ]
});
