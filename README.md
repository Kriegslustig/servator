# Servator - A FOSS Monitoring Tool for this Decade

Servator is a light weight Monitoring tool for your servers and application.

## Design

Servator has two parts; a server and an agent. The server listenes for incomming messages on a UDP Port. The agent and the server listen to 3042/upd. Information is transmitted as single packets.

```
some app    crond
       \   /
        \ /
     UDP Socket
         |
       Agent
         |
         |
      Network
         |
         |
     UDP Socket
         |
       Server
         |
     Cassandra


```

