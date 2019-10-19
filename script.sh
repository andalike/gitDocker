sudo docker stop $(sudo docker ps -a -q)
sudo docker rm $(sudo docker ps -a -q)
cd /home/ubuntu
rm -rf dockerImageNode
git clone https://github.com/andalike/dockerImageNode.git
cd dockerImageNode
sudo docker build -t andalike/node-web-app .
sudo docker run -p 49160:8080 -d andalike/node-web-app