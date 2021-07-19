To start app
npm run compile
npm run start
docker run  --name mongo-dockered -p 0.0.0.0:27017:27017 -v /my/own/datadir:/data/db -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password -d -v mongodbdata:/data/db  mongo
mongodb://admin:password@localhost:27017
