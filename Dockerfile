# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the app dependencies
#RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
