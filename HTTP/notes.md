# HTTP Protocol — Detailed Notes

## 1. What is HTTP?

**HTTP (HyperText Transfer Protocol)** is an application-layer protocol used for communication between a client and a server on the web.

* It defines how requests are sent and how responses are returned.
* It is the foundation of data communication on the World Wide Web.

---

## 2. Position of HTTP in Network Stack

```
Application Layer → HTTP
Transport Layer   → TCP / QUIC
Internet Layer    → IP
Network Layer     → Ethernet / Wi-Fi
```

HTTP focuses only on **data format and rules**, not on data transmission reliability which are handled by the transport layer (TCP/QUIC). Therefore, HTTP is independent of data transmission reliability.

---

## 3. Client–Server Architecture

* **Client**: Browser, Mobile App, API client (Postman, curl)
* **Server**: Web server, API server, backend service

### Request–Response Model

1. Client sends HTTP request
2. Server processes it
3. Server sends HTTP response

---

## 4. Stateless Nature of HTTP

* Each HTTP request is independent
* Server does not remember previous requests

### Maintaining State Using:

* Cookies
* Sessions
* Tokens (JWT)
* Local Storage

---

## 5. HTTP Request Structure

```
GET /api/users HTTP/1.1
Host: example.com
User-Agent: Chrome
Accept: application/json
Authorization: Bearer <token>

<optional body>
```

### Components

* Request Line (Method, Path, Version)
* Headers (Metadata): HTTP Request Headers are key–value pairs sent by the client (browser/app) to the server along with the request.
    * They provide metadata about:
        * The client
        * The request
        * The data being sent
        * Authentication & preferences
    * Headers do NOT contain main data (that’s in the body), they describe the data.
* Body (Optional)

---

## 6. HTTP Methods

| Method  | Description         |
| ------- | ------------------- |
| GET     | Retrieve data       |
| POST    | Create new resource |
| PUT     | Replace resource    |
| PATCH   | Partial update      |
| DELETE  | Remove resource     |
| OPTIONS | Allowed methods     |
| HEAD    | Headers only (No message body)|
| TRACE   | Trace route to server |
| CONNECT | Establish tunnel    |

---

## 7. HTTP Response Structure

```
HTTP/1.1 200 OK
Content-Type: application/json

{ "message": "Success" }
```

### Components

* Status Line
* Headers
* Body

---

## 8. HTTP Status Codes

Status codes are 3-digit numbers that indicate the result of an HTTP request(what kind of response is it).

Range of Status Codes:
1xx -> 5xx
### Categories

| Range | Meaning       |
| ----- | ------------- |
| 1xx   | Informational |
| 2xx   | Success       |
| 3xx   | Redirection   |
| 4xx   | Client Error  |
| 5xx   | Server Error  |

### Common Codes

* 100 Continue
* 200 OK
* 201 Created
* 202 Accepted
* 204 No Content
* 301 Moved Permanently
* 307 Temporary Redirect
* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 500 Internal Server Error
* 504 Gateway Timeout

---

## 9. HTTP Headers

### Request Headers

* Authorization
* Accept
* User-Agent
* Cookie

### Response Headers

* Content-Type
* Set-Cookie
* Cache-Control
* Access-Control-Allow-Origin

---

## 10. MIME Types (Content-Type)

Specifies the format of the data sent.

Examples:

* text/html
* application/json
* image/png
* application/pdf

---

## 11. HTTP Versions

### HTTP/1.0

* One request per connection

### HTTP/1.1

* Persistent connections
* Sequential requests

### HTTP/2

* Multiplexing
* Header compression
* Faster performance

### HTTP/3

* Based on QUIC (UDP)
* Reduced latency
* Better performance on mobile networks

---

## 12. HTTPS (Secure HTTP)

* HTTP + TLS/SSL encryption
* Protects data from eavesdropping

### Provides

* Encryption
* Authentication
* Data Integrity

---

## 13. Role of HTTP in Web Development

HTTP enables:

* Web pages (HTML)
* REST APIs
* Authentication systems
* Frontend–Backend communication
* Microservices interaction

---

## 14. Example: HTTP Request in JavaScript

```js
fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 15. Summary

HTTP is a stateless, application-layer protocol that powers communication between clients and servers on the web using a request–response model. It is the backbone of modern web applications.
