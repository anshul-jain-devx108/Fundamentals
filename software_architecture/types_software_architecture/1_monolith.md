# Monolith

Regardless of how the code is structured internally, a monolith is defined by having a single unit of deployment.

-  **Bundled Components**: All components of the application—including the user interface (presentation), business logic, and data access layers—are bundled together into a single codebase and executed as a single unit.
    
-  **Misconception**: It is a common misconception that monoliths are not "distributed." In reality, they often communicate with external systems or databases, but they remain monolithic because they are deployed as a whole.

- **Variations of Monoliths**:

    - **The Simple Monolith**: This is the standard approach where all layers (Presentation, Business, Data) are tightly integrated.

    - **Layered Architecture**: Internally, these are often organized using a Layered (N-Tier) pattern to promote separation of concerns (e.g., changes in the UI layer do not break the Data layer).

    - **The Modular Monolith**: This approach is a "middle ground" between a messy monolith and microservices. It retains the benefit of a single deployable unit but enforces strict modular boundaries within the codebase. It prevents the code from becoming a tangled mess, making maintenance easier and paving the way for a potential future transition to microservices if necessary

    - **Microkernel (Plug-in) Architecture**: This architecture separates the application into two main components: a core system (the kernel) and plug-in modules. The kernel provides the basic infrastructure and communication mechanisms, while the plug-ins provide specific functionalities. This allows for flexibility and extensibility, as new features can be added by simply creating a new plug-in without modifying the core system.

- **Why Choose a Monolith? (Advantages)**:

    You should not shy away from building a monolith. It is often the responsible business choice for the following reasons:


    - **Simplicity**: This is the primary criteria. Monoliths are simpler to design and build than distributed systems

    - **Cost and Efficiency**: They are less expensive to build and require less effort to maintain initially. You avoid the "network of stuff messed up together" that comes with distributed complexity.

    - **Ease of Refactoring**: Refactoring code (splitting classes or modules) is significantly easier within a monolith than splitting a database across a distributed system. 

- **Challenges and Trade-offs**:

    - **Deployment Rigidity**: You must deploy everything in sync. If you want to change one small part, you must redeploy the entire application. Upgrades often require a specific sequence to avoid breaking the system.

    - **The "House of Cards" Effect**: In highly coupled monoliths, changing one component might inadvertently break unrelated parts of the system. This fear of breaking things can reduce agility, as teams become hesitant to touch the code.

    - **Tight Coupling**: If not properly modularized, changes in one part of the code can break unrelated parts, leading to "spaghetti code."

    - **Scaling Limitations**: You cannot scale specific functions independently. If one module needs more resources, you must scale the entire application.


  - **Strategic Advice**
     The key point is that architecture should be a business decision, not a technical infatuation.

    - **Start with a Monolith**: Many successful platforms (like Netflix) began as monoliths or modular monoliths before transitioning to microservices.
    - **Don't Prematurely Optimize**: If your business does not require independent scaling or rapid independent deployment (agility), building a distributed system increases cost and risk with zero benefit.
    - **Pivot when Necessary**: If the monolith eventually limits business agility (e.g., teams waiting months for approvals because everything is coupled), that is the trigger to consider moving toward a distributed architecture like Microservices or Service-Based architecture
