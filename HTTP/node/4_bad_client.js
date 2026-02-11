const net = require("net");

const client = net.createConnection({ port: 4221 }, () => {
    console.log("🔌 Connected to server via TCP!");
    console.log("🚚 TCP Layer says: 'Connection is reliable and ready.'");

    // PROFESSOR'S NOTE:
    // We are sending data that breaks HTTP Rules.
    // But TCP will deliver it perfectly.
    const garbageData = "HEY SERVER HOW ARE YOU?";

    console.log(`\n📤 Sending: "${garbageData}"`);
    client.write(garbageData);
});

client.on("data", (data) => {
    console.log("\n📥 Server Responded:");
    console.log(data.toString());
    client.end();
});

client.on("end", () => {
    console.log("\n❌ Disconnected");
});
