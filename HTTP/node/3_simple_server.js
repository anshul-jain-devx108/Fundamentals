const net = require("net");

const server = net.createServer((socket) => {
    socket.on("data", (buffer) => {
        const requestString = buffer.toString();

        // ---------------------------------------------------------
        // PROFESSOR'S NOTE: PARSING THE REQUEST
        // We need to extract "GET / HTTP/1.1" from the first line.
        // ---------------------------------------------------------

        // 1. Split the request into lines
        const lines = requestString.split("\r\n");
        const requestLine = lines[0]; // e.g., "GET /users HTTP/1.1"

        // 2. Split request line by spaces
        const parts = requestLine.split(" ");
        const method = parts[0]; // GET
        const path = parts[1];   // /users

        console.log(`🔎 Method: ${method}, Path: ${path}`);

        // ---------------------------------------------------------
        // ROUTING LOGIC (The "Backend")
        // ---------------------------------------------------------
        let body = "";
        let status = "200 OK";

        if (path === "/") {
            body = "<h1>🏠 Welcome to the Home Page</h1><p>Try going to <a href='/data'>/data</a></p>";
        }
        else if (path === "/data") {
            body = `{"message": "This is JSON data", "id": 123}`;
            // Note: In a real server, we would check Accept headers here!
        }
        else {
            status = "404 Not Found";
            body = "<h1>❌ 404 - Page Not Found</h1><p>The professor cannot find this assignment.</p>";
        }

        // 3. Construct Response
        const response = [
            `HTTP/1.1 ${status}`,
            "Content-Type: text/html; charset=utf-8",
            "Connection: close",
            "", // The Blank Line
            body
        ].join("\r\n");

        socket.write(response);
        socket.end();
    });
});

const PORT = 4221;
server.listen(PORT, () => {
    console.log(`\n🧭 The "Router" is active on http://localhost:${PORT}`);
});
