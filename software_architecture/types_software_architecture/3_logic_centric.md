# Logic-Centric Architecture

Logic-centric architectures (often referred to as domain-centric) are structural patterns designed to place the Core Business Logic at the absolute center of the application, isolating it from external concerns like databases, user interfaces, and frameworks.

# Types of Logic-Centric Architectures

1. **Onion Architecture:** This pattern visualizes the software as a set of concentric circles (like an onion) to enforce strict separation between the core domain and the infrastructure.

    - Structure: The application is divided into layers, with the pure business logic (e.g., transaction processing, account management) sitting at the center. The outer layers handle infrastructure concerns, such as how data is saved to a database, how logic is exposed via APIs, or how it is presented on a website.

    - The "Inward" Rule: The defining rule of Onion Architecture is that dependencies flow inward. The core logic depends on nothing outside of itself; the outer layers depend on the core

    - Example: In a banking application, the center contains the rules for processing transactions. If the database technology changes, the center remains unaware and unaffected because it does not depend on the database layer.

    - Benefits: This makes the code easy to test, extend, and refactor. It is ideal for applications that need to evolve over time while keeping the core logic stable.

2. **Hexagonal Architecture (Ports and Adapters)**: Similar to Onion Architecture, this pattern aims to decouple the application from external systems, but it focuses specifically on the mechanism of interaction.

    - Core Concept: The core business logic should not directly depend on external systems like databases or third-party APIs. Instead, it interacts with them through Ports (interfaces) and Adapters (implementations).

    - How it Works:
    ◦ Ports: These are the interfaces defined by the core application (e.g., IPaymentProcessor).
    ◦ Adapters: These are the external implementations that "plug into" the ports (e.g., a StripeAdapter or PayPalAdapter)

    - Real-World Application: Imagine a payment system. The core logic calculates totals and validates cards. It sends this data to a "Port." The "Adapter" then handles the specific communication with Stripe or PayPal.

    - Strategic Advantage: This pattern is perfect for systems that integrate with multiple external providers. If you need to swap Stripe for PayPal, you simply switch the adapter without touching a single line of the core business logic.

3. **Clean Architecture:** Popularized by Robert C. Martin ("Uncle Bob"), Clean Architecture unifies the principles found in Onion and Hexagonal architectures into a comprehensive philosophy.

    - The Goal: To ensure that business logic is completely independent of external frameworks, UIs, and databases.
    - Dependency Flow: Like Onion Architecture, dependencies strictly flow inward. The core logic handles entities and use cases (e.g., creating or updating tasks), while the outer layers handle the UI and data persistence.
    - Future-Proofing: This separation ensures that the core functionality remains stable regardless of how the external world evolves.
    - Example: If you decide to switch your application from a Web App to a Mobile App, or change your storage from a Relational Database (SQL) to a NoSQL database, your business logic remains unchanged.
    - Use Case: It is the ideal choice when you want a system that is easy to maintain and adapt, ensuring that the "Core" is not held hostage by technical decisions made in the infrastructure layers.


# Summary of Common Principles

Across all three logic-centric patterns, the sources highlight these shared foundational principles:

1. Isolation of Logic: The business rules are the most important part of the system and must be protected from technical details,.
2. Testability: Because the core has no external dependencies, it can be tested in isolation without spinning up a database or a web server,.
3. Technology Agnosticism: The architecture allows you to swap out tools, frameworks, and databases without rewriting the application's unique value (the logic),.
These patterns contrast with traditional Layered (N-Tier) Architecture, where dependencies often flow downwards (Presentation → Business → Data), which can sometimes lead to the business logic becoming tightly coupled to the data access layer,. Logic-centric patterns solve this by inverting those dependencies.