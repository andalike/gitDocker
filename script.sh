cd /home/ubuntu
git clone https://github.com/andalike/dockerImageNode.git
cd dockerImageNode
sudo docker build -t andalike/node-web-app .
sudo docker run -p 49160:8080 -d andalike/node-web-app