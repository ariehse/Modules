import { create } from './printers/paper';

const print = (message) => {

    create();
    return message + "-print";
};

export { print };