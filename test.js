const mongoose = require("mongoose");

mongoose.connect(
"mongodb://mhussainakhter:Shaddam%40123@ac-nmsw8zk-shard-00-00.78rwg7r.mongodb.net:27017,ac-nmsw8zk-shard-00-01.78rwg7r.mongodb.net:27017,ac-nmsw8zk-shard-00-02.78rwg7r.mongodb.net:27017/studentDB?ssl=true&replicaSet=atlas-4ljvmr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Hussain"
)
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log(err));