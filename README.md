## Schritte:

### (0. Docker installieren) 
=> hier installieren https://docs.docker.com/get-docker/

### 1. Docker Image aus dockerfile erstellen
`docker build -t students-app:1 .`

### 2. Docker Container aus Image erstellen und starten
`docker run -d --name students-app -p 3000:3000 students-app:1`
<br/><br/>

#### 2.1 Shell im Working-directory des Containers öffnen
`docker exec -it students-app sh`

#### 2.2. Dateien im Verzeichnis auflisten
`ls`
<br/><br/>
### 3. Docker Container stoppen und löschen
`docker stop students-app && docker rm students-app`
