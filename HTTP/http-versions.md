# HTTP Versions


## HTTP/0.9
-   **Simple**: No persistent connections.
-   **Stateless**: No session management.
-   **No Pipelining**: Only one request per connection.
-   Only supported GET
-   Only returned HTML
- One request → one response → connection closed
- No status codes, no headers(metadata), not scalable


## HTTP/1.0(1996)
-   **Simple**: No persistent connections.
-   **Stateless**: No session management.
-   **No Pipelining**: Only one request per connection.
- Headers introduced
- Status codes introduced
- Multiple content types introduced(HTML,images,text.)


![API Image](./images/HTTP-1.png)
![API Image](./images/HTTP-1(b).png)


## HTTP/1.1(1999)
-   **Persistent Connections**: Can reuse connections(One connection → multiple requests).
    ![API Image](./images/HTTP-1.1.png)
-   **Stateful**: Can maintain session state.

-   **Pipelining**: 
    ![API Image](./images/HTTP-1.1(b).png)
    - Can send multiple requests per connection without waiting.
    - But responses must come in order.
    
    ![API Image](./images/HTTP-1.1(f).png)
-  **Chunked transfer encoding**: Send data in pieces (streaming).
    ![API Image](./images/HTTP-1.1(c).png)
    
- **Better caching & host support**: Host header allows multiple websites on one server
    ![API Image](./images/HTTP-1.1(d).png)
    ![API Image](./images/HTTP-1.1(e).png)
- If request 1 is slow → request 2 waits
    



## HTTP/2(2015)
-   **Binary Protocol**: Uses binary instead of text(faster parsing).
    
![API Image](./images/HTTP2(a).png)
![API Image](./images/HTTP2(b).png)

- **Header Compression**: Reduces header size.
       ![API Image](./images/HTTP2(e).png)

-   **Multiplexing**: 
    - Multiple requests & responses at the same time
    - No waiting for order
-   **Server Push**: Server can push resources to client before client requests them.
    ![API Image](./images/HTTP2(d).png)
- Single TCP connection( Efficient & Fast)
![API Image](./images/HTTP2(c).png)

##  HTTP/3(2018)
-   **QUIC Protocol**: Uses QUIC instead of TCP, because TCP has:
    - Slow Handshake
    - Head-of-line blocking at transport level
    - QUIC uses UDP + encryption.
    ![API Image](./images/HTTP3(a).png)
    ![API Image](./images/HTTP3(b).png)
    
- **Header Compression**: Reduces header size.
- **Multiplexing**: Can send multiple requests per connection.
- Faster connection setup
- No transport-level head-of-line blocking
- Better for mobile & unstable networks
- Encryption is mandatory

![API Image](./images/HTTP3(c).png)
![API Image](./images/HTTP3(d).png)
    

