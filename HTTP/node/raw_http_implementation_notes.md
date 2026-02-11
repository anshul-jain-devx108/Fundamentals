# 🎓 The "Metal" of HTTP: Raw Implementation Notes

These notes cover our deep dive into building an HTTP server from scratch using Node.js's `net` module (TCP sockets) instead of the `http` module.

---

## 1. The Core Concept
**HTTP is just formatted text sent over a reliable pipe (TCP).**

*   **TCP (`net`)**: The "Delivery System". Responsible for reliable connection and data transfer.
*   **HTTP**: The "Language". A set of rules on how to format the text sent via TCP.

---

## 2. Key Terminology

### 🔌 Socket (The Pipe)
*   A direct, reliable connection line between two computers.
*   It is bi-directional (you can read and write).
*   Code: `net.createServer()` gives us a `socket` object for each client.

### 📦 Buffer (The Data Box)
*   Computers transmit data as numbers (bytes), not text.
*   A `Buffer` is an array of raw bytes (e.g., `<48 65 6C 6C 6F>`).
*   We use `.toString()` to convert these bytes back into readable text (e.g., "Hello").

---

## 3. The Three Layers We Built

### Layer 1: The Raw Listener (`1_raw_logger.js`)
We simply opened a socket and logged what the browser sent.
**Observation**: The browser sends a large block of text called the **Request**.
```http
GET / HTTP/1.1
Host: localhost:4221
User-Agent: Chrome...
```

### Layer 2: The Raw Speaker (`2_raw_response.js`)
We manually constructed the response string to "trick" the browser into thinking we are a real web server.
**The Golden Rule**: You MUST separate Headers from the Body with a **Blank Line** (`\r\n\r\n`).
```http
HTTP/1.1 200 OK          <-- Status Line
Content-Type: text/html  <-- Header

<html>...</html>         <-- Body
```

### Layer 3: The Parser (`3_simple_server.js`)
We implemented "Routing" by parsing the first line of the request string.
*   If string has `"GET /"`, send Home Page.
*   If string has `"GET /data"`, send JSON.
*   Otherwise, send `404 Not Found`.

---

## 4. The "Reliability vs. Format" Experiment (`4_bad_client.js`)
We proved that **TCP delivers garbage flawlessly**.
1.  Allowed a client to send `"HEY SERVER HOW ARE YOU"`.
2.  **TCP Result**: Delivered the text perfectly (Reliable).
3.  **HTTP Result**: Server crashed/returned 404 because the text format violated HTTP rules (Format).

**Conclusion**: HTTP assumes reliability (provided by TCP) and purely focuses on the **Rules of the Language**.
