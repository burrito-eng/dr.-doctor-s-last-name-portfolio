FROM oven/bun:1

WORKDIR /app

# Install dependencies first so this layer is cached between code changes
COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

COPY . .

EXPOSE 8080

# Bind to 0.0.0.0 so the dev server is reachable from outside the container
CMD ["bun", "run", "dev", "--host", "0.0.0.0", "--port", "8080"]
