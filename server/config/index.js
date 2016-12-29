export default {
    secret: {
        client_id: '44524381264c4804888e067a8f4bfea9',
        client_secret: 'a2824848290f4aeaa598be162144a4ea'
    },
    redirect_uri: 'http://127.0.0.1:3000/api/handleauth',

    db: {
        production: "mongodb://localhost:27017/pins",
        development: "mongodb://localhost:27017/pins",
        test: "mongodb://localhost:27017/pins"
    },
    server: {
        port: 8080
    }
};
