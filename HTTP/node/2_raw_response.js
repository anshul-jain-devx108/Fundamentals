const net = require("net");

const server = net.createServer((socket) => {
    console.log("-----------------------------------------");
    console.log("✨ Client Connected!");

    socket.on("data", (buffer) => {
        console.log("📩 Received Request (ignoring content for now...)");

        // ---------------------------------------------------------
        // PROFESSOR'S NOTE:
        // To "speak" HTTP, we just write a specific string format.
        // ---------------------------------------------------------

        // 1. Status Line: Protocol Version + Status Code + Status Message
        const statusLine = "HTTP/1.1 200 OK";

        // 2. Headers: Metadata about the response
        const headers = [
            "Server: Professor-Node/1.0",
            "Content-Type: text/html; charset=utf-8", // Crucial! Tells browser it's HTML
            "Connection: close", // Close connection after response
        ].join("\r\n"); // Headers are separated by CRLF (\r\n)

        // 3. Body: The actual content
        const body = `
      <html>
        <head><title>Raw HTTP</title></head>
        <body style="font-family: sans-serif; background: #222; color: #fff; padding: 2rem;">
          <h1>🎓 Hello from the Raw Socket!</h1>
          <p>You just manually constructed a web page response.</p>
          <hr/>
          <p><i>We didn't use Express. We didn't use http module. We used STRINGS.</i></p>
        </body>
      </html>
    `;

        // 4. Construct the Full Response
        // IMPORTANT: The "Blank Line" (\r\n\r\n) separates Headers from Body
        const response = `${statusLine}\r\n${headers}\r\n\r\n${body}`;

        // 5. Write to socket and close
        socket.write(response);
        socket.end(); // We are done
    });
});

const PORT = 4221;
server.listen(PORT, () => {
    console.log(`\n🗣️  The "Speaker" is ready on http://localhost:${PORT}`);
});
