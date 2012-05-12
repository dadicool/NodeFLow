

var NodeFlowServer = require('../lib/nodeflow-server.js').NodeFlowServer;

var NodeFlowServer = new NodeFlowServer();

//NodeFlowServer.start("0.0.0.0", "6633");
NodeFlowServer.start("0.0.0.0", process.env.C9_PORT || 6633);
