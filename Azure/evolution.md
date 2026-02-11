# Evolution of Cloud Computing

The Evolution of Hosting Models The journey began around 1995 with Dedicated Servers, where a business would purchase and maintain a physical machine dedicated solely to their use. While this offered high security, it was expensive and required managing hardware, real estate, and IT staff.

This evolved into Virtual Private Servers (VPS), which used virtualization to subdivide one physical machine into multiple sub-machines. This improved resource utilization and provided isolation between users, though it still required purchasing the underlying machine.

In the mid-2000s, Shared Hosting became popular (e.g., GoDaddy, HostGator). In this model, hundreds of businesses shared a single physical machine, often relying on folder-level permissions rather than true virtualization. This was very cheap but suffered from "noisy neighbor" issues where one user's heavy usage could crash the server for everyone else.

Cloud Hosting emerged as a form of distributed computing where multiple physical machines act as a single system abstracted into cloud services. This model combines the benefits of previous iterations—flexibility, scalability, security via virtual isolation, and cost-effectiveness—while abstracting the physical hardware away from the user.

# The Evolution of Compute Units Parallel to hosting, the fundamental unit of computing has also evolved to maximize efficiency and ease of management:

- **Dedicated Servers**: A physical server is wholly utilized by a single customer. You have full control (bare metal) but must guess your capacity needs upfront, leading to overpaying for underutilized servers or facing slow, expensive upgrades.

- **Virtual Machines (VMs)**: A hypervisor software runs multiple "machines" on one physical server. This allows multiple customers to share hardware costs. However, you are still limited by the guest operating system and must choose specific sizes, which can result in wasted space.

- **Containers**: Technologies like Docker allow you to run multiple containers within a VM. Containers share the same underlying OS, making them more lightweight and efficient than VMs. This maximizes the utility of available capacity and allows for running different OS environments flexibly.

- **Functions (Serverless)**: The most recent evolution breaks applications down into small pieces of code called functions. This is known as Serverless Compute. The cloud provider manages the execution environment completely; you simply upload code and pay only for the duration it runs (down to the microsecond). This eliminates the need to manage servers entirely, though it can introduce "cold start" latency when a function is first triggered.

