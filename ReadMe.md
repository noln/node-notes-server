**Technologies Used**
* [Nodemon](https://nodemon.io/) to restart the server on changes
* [MongoDB](https://www.npmjs.com/package/mongodb) to connect up to the MongoDB server (check out Mlab for a free MongoDB instance to get started)
* [Express Framework](https://expressjs.com/)
* [Body-Parser](https://www.npmjs.com/package/body-parser)

**Set up MongoDB Credentials**
1. Create a collection
2. Create a file called `config/db.js` in the project directory, and populate it with the following info (if you're using Mlab, otherwise use whatever URL you use to access the instance):

```
module.exports = {
  url : mongodb://<dbuser>:<dbpassword>@<DEPLOYMENT ID>.mlab.com:13702/<DEPLOYMENT NAME>
};
```

**Running the Server**
1. Run this if you don't already have the above dependencies: `npm install --save express mongodb body-parser`
2. Then start the server with: `npm run dev`
