import * as ftp from "basic-ftp";

async function explore() {
    const client = new ftp.Client();
    client.ftp.verbose = false;

    try {
        await client.access({
            host: "45.132.157.159",
            user: "u253625720.Rodri",
            password: "15492102Rr!",
            secure: false
        });

        console.log("Starting Dir:", await client.pwd());

        await client.cd("/");
        console.log("Now at:", await client.pwd());

        const list = await client.list();
        console.log("Contents of / :");
        list.forEach(item => {
            console.log(`- [${item.isDirectory ? 'DIR' : 'FILE'}] ${item.name}`);
        });

    } catch (err) {
        console.error("Explore failed:", err);
    }

    client.close();
}

explore();
