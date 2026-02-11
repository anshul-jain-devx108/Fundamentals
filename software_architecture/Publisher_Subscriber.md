# Publisher-Subscriber Pattern

The Publish-Subscribe (Pub/Sub) model is a messaging pattern designed to decouple components in a distributed system. It consists of four main entities: Publishers, Subscribers, Topics, and Messages.

## Core Concepts

- **The Topic as Intermediary**: unlike direct streaming where a client connects to a server, Publishers send data to a Topic. The Topic acts as a channel or a bidirectional database that stores the messages,.
- **Subscribers**: Clients "subscribe" to specific Topics. They do not communicate directly with the Publisher. This allows subscribers to listen to multiple topics or filter specific content (e.g., separating stock prices from news alerts),.
- **Persistence**: The model is built for system stability. If a Subscriber disconnects or a server fails, the Topic preserves the messages so they can be retrieved later,.

## Key Behaviors

- **At-Least-Once Delivery**: The system guarantees that subscribers will receive every message at least once. However, because of network retries, a subscriber might receive the same message multiple times.
- **Idempotency**: Because duplicates can occur, it is best practice to ensure operations are idempotent. This means performing the operation multiple times (like setting a status to "Active") has the same result as performing it once, whereas non-idempotent operations (like "increment counter") could lead to errors,.
- **Ordering**: Pub/Sub systems generally ensure messages are delivered to subscribers in the exact order they were received (First-In-First-Out), which is critical for applications like stock trading or chat history.
This pattern is often used in Event-Driven Architectures to decouple services.
