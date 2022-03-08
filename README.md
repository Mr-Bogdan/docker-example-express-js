#Docker Demo für Express.js Server:

## Schritte:

### (0. Docker installieren) 
=> hier installieren https://docs.docker.com/get-docker/

### 1. Docker Image aus dockerfile erstellen
`docker build -t students-app:1 .`

### 2. Docker Image aus dockerfile erstellen
`docker run -d --name students-app -p 3000:3000 students-app:1`

### 3. Docker Image aus dockerfile erstellen
`docker stop students-app && docker rm students-app`

### 4. Shell im Workingdirectory des Containers öffnen 
`docker exec -it students-app sh`

### 5. Dateien im Verzeichnis auflisten
`ls`
