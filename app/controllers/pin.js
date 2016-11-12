import Pin from '../models/Pin';

export const getPins = (req, res) => {
    Pin.find((err, pins) => {
        if (err) {
            res.error('error');
        }

        res.send(pins);
    });
};

export const setPin = (req, res) => {
    let newPin = new Pin(req.body);

    newPin.save((err, done) => {
        if (err) {
            res.error('error');
        }

        res.send(done);
    });
};

export const deletePin = (req, res) => {
    Pin.findOneAndRemove(
        {
            _id: req.params.id
        },
        (err, done) => {
            if (err) {
                res.error('error');
            }

            res.send(done);
        }
    );
};