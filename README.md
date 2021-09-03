My simple web server


Info: 

myWebserver service is dockerized and can be downloaded by docker image tag : nivedithamahendra/mywebserver:latest 

Currently image tag is hardcoded in kubernetes deployment manifest file 


To deploy an application use below command

Kubectl apply  -f deployment/.

Note:

service, deployment and ingress files are in deployment folder

test case is wriiten in test/test.js




