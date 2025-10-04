FROM node:20

# Create group and user
RUN groupadd -r app && useradd -r -g app app

# Set work directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the files
COPY . .

# Change ownership
RUN chown -R app:app /app

# Switch to app user
USER app

# Expose port for Vite
EXPOSE 5173

# Command to run app in dev mode
CMD ["npm", "run", "dev"]
