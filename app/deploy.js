import * as ftp from "basic-ftp";
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        await client.access({
            host: "45.132.157.159",
            user: "u253625720.Rodri",
            password: "15492102Rr!",
            secure: false
        });
        console.log("Connected to FTP server.");

        // Navigate to the absolute root where the legacy files were
        await client.cd("/");

        console.log("Removing legacy files from root...");
        const legacyFiles = ['index.html', 'style.css', 'script.js', 'sound.mp3', 'background.mp4', 'style.production.css'];
        for (const file of legacyFiles) {
            await client.remove(file).catch(() => { }); // Ignore if it doesn't exist anymore
        }

        console.log("Uploading dist folder to root...");

        // Ensure path resolution works correctly
        const distPath = path.join(__dirname, "dist");

        await client.uploadFromDir(distPath);
        console.log("Upload completed successfully!");

    } catch (err) {
        console.error("Deployment failed:", err);
    }

    client.close();
}

deploy();
