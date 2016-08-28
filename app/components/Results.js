import React, {PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import Search from './Search';

const Result = () => {
    return (
        <div>
            <Button bsStyle="primary"
                    bsSize="large">
                Add Location
            </Button>
            <Search/>
        </div>
    );
};

Result.propTypes = {
    title: PropTypes.string
};

export default Result;
