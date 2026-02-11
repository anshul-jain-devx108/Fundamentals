const net = require("net");

// 1. Create a raw TCP server
const server = net.createServer((socket) => {
  console.log("-----------------------------------------");
  console.log("✨ A Client Connected!");
  console.log("-----------------------------------------\n");

  // 2. Listen for 'data' events
  // This is the raw buffer of bytes coming from the client (browser)
  socket.on("data", (buffer) => {
    console.log("📩 RECEIVED DATA:");
    console.log("=========================================");
    // Convert bytes to text so we can read it
    console.log(buffer.toString());
    console.log("=========================================\n");
  });

  // 3. Handle disconnection
  socket.on("end", () => {
    console.log("❌ Client Disconnected");
  });
});

// 4. Start listening on port 4221
const PORT = 4221;
server.listen(PORT, () => {
  console.log(`\n🎓 Professor's Server is listening on port ${PORT}`);
  console.log(`👉 Go to http://localhost:${PORT} in your browser to test it!\n`);
});
