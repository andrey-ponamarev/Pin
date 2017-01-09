export default {
    db: {
        production: "mongodb://localhost:27017/pins",
        development: "mongodb://localhost:27017/pins",
        test: "mongodb://localhost:27017/pins"
    },

    api: {
        instagram: {
            client_id: '44524381264c4804888e067a8f4bfea9',
            client_secret: 'a2824848290f4aeaa598be162144a4ea',
            redirect_uri: 'http://localhost:8080/api/instagram/handleauth'
        }
    },
    server: {
        port: 8080
    }
};
