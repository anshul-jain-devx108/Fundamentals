# HTTP Request Headers 

## 1. What are HTTP Request Headers?

HTTP Request Headers are **key–value pairs** sent by the client to the server along with an HTTP request. They provide **metadata** about the request, the client, authentication, and the data being sent.

> Headers describe the request; they do not contain the main data (that is in the body).

---

## 2. Why HTTP Headers are Important

Request headers help the server to:

* Identify the client
* Authenticate and authorize users
* Decide response format
* Handle caching
* Apply security and CORS rules
* Compress and optimize responses

---

## 3. Structure of HTTP Request Headers

```
<HTTP Method> <Path> <Version>
Header-Name: Header-Value
Header-Name: Header-Value

<Optional Body>
```

Example:

```
GET /api/users HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json
```

---

## 4. Categories of HTTP Request Headers

### 4.1 General Headers

Apply to the entire HTTP message.

| Header        | Description         |
| ------------- | ------------------- |
| Cache-Control | Caching behavior    |
| Connection    | keep-alive or close |
| Date          | Time of request     |

---

### 4.2 Request Headers (Client Information)

| Header          | Purpose                       |
| --------------- | ----------------------------- |
| Host            | Target domain name            |
| User-Agent      | Client/browser information    |
| Accept          | Expected response format      |
| Accept-Language | Preferred language            |
| Accept-Encoding | Supported compression formats |

---

### 4.3 Entity / Content Headers

Describe the **request body**.

| Header         | Description          |
| -------------- | -------------------- |
| Content-Type   | Type of data sent    |
| Content-Length | Size of request body |

Example:

```
Content-Type: application/json
```

---

### 4.4 Authentication Headers

Used for user authentication and session management.

| Header        | Purpose              |
| ------------- | -------------------- |
| Authorization | Token or credentials |
| Cookie        | Session information  |

Example:

```
Authorization: Bearer <JWT>
```

---

### 4.5 Security & CORS Related Headers (Request Side)

| Header         | Purpose           |
| -------------- | ----------------- |
| Origin         | Request origin    |
| Referer        | Previous page URL |
| Sec-Fetch-Mode | Request context   |

---

## 5. Most Common HTTP Request Headers

### Host

Specifies the domain name of the server.

```
Host: api.example.com
```

### User-Agent

Identifies the client making the request.

```
User-Agent: Chrome/120 Windows
```

### Accept

Specifies the response format expected by the client.

```
Accept: application/json
```

### Content-Type

Specifies the format of the request body.

```
Content-Type: application/json
```

### Authorization

Used for secured APIs and authentication.

```
Authorization: Bearer <token>
```

### Cookie

Maintains session state.

```
Cookie: sessionId=abc123
```

---

## 6. Real-World Example (POST Request)

```
POST /login HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer token
User-Agent: Chrome

{
  "email": "user@mail.com",
  "password": "123456"
}
```

---

## 7. HTTP Headers in JavaScript (Fetch API)

```js
fetch('/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  },
  body: JSON.stringify({ name: 'Anshul' })
});
```

---

## 8. Important Notes (Interview Ready)

* Headers are **case-insensitive**
* Headers carry **metadata, not main data**
* `Content-Type` ≠ `Accept`
* Authorization is commonly handled via headers

---

## 9. Summary

HTTP Request Headers are essential components of an HTTP request that describe client details, authentication, data format, and request behavior. They enable efficient, secure, and structured communication between the client and server.
