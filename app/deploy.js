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

        // We ensure we are in the correct directory. Often it is public_html
        await client.ensureDir("public_html");
        await client.clearWorkingDir(); // Remove old files first

        console.log("Uploading dist folder to public_html...");

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
