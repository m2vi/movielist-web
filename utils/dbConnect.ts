// import { MongoClient } from 'mongodb';

// async function dbConnect() {
//   const uri = process.env.MONGO_URI;
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   client.connect((err) => {
//     const collection = client.db('test').collection('devices');
//     // perform actions on the collection object
//     client.close();
//   });
// }

// export default dbConnect;

import mongoose from 'mongoose';

interface connection {
  isConnnect: number;
}

const connection = {
  isConnected: 0,
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;

  console.log(connection.isConnected, process.env.MONGO_URI);
}

export default dbConnect;
