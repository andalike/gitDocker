# gitDocker

cd /home/ubuntu
echo 'Deploying/Updating Ubuntu'
sudo apt-get update
sudo apt-get install -y docker.io

echo 'Cloning The Repo'
rm -rf autodeploy
git clone https://github.com/ushacta/autodeploy.git
cd autodeploy

sudo docker build -t image1 .

echo 'Stopping the container'
sudo docker stop $(sudo docker ps -a -q)
sudo docker rm $(sudo docker ps -a -q)

sudo docker run -p 8080:8080 -d image1
