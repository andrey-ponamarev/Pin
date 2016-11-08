import Pin from '../models/Pin';

export const getPins = (req, res) => {
    Pin.find(function(err, pins) {
        if(err){
            res.error('error');
        }

        res.send(pins);
    });
};

export const setPin = (req, res) => {
    let newPin = new Pin({title: 'title'});

    newPin.save(function(err, done){
        if(err){
            res.error('error');
        }

        res.send(done);
    });
};
