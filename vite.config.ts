import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite"; 

export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    // chokidar's fsevents backend never emits change events here
    watch: { useFsEvents: false },
  },
});
