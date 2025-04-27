# Use an Python base image
FROM python:3.10-slim
# Set the working directory inside the container
WORKDIR /app
# Copy files into the container
COPY . .
# Install dependencies
RUN pip install -r requirements.txt
# Expose the port Flask runs on
EXPOSE 5000
# Set the default command
CMD ["python", "app.py"]