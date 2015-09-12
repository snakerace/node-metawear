
const MODULE_OPCODE = 0x01;

const STATE = 0x1;

var Switch = function(device) {
    this.device = device;
};

Switch.prototype.register = function() {
    var buffer = new Buffer(2);
    buffer[0] = MODULE_OPCODE;
    buffer[1] = STATE;
    buffer[2] = 1;

    this.device.send(buffer);
};

module.exports = Switch;
