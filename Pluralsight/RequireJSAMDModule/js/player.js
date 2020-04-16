
define([], function () {

    console.log("Create a player instance");

    var _playerName = null;

    var PlayerLog = function () {

        if (_playerName)
            console.log("player Name is : " + _playerName);
        else
            console.log("No Player registered.");
    };


    var Name = Object.defineProperty(this, "Name", {
        get: function () { return _playerName; },
        set: function (name) { _playerName = name; },
        enumerable: true,
        configurable: true
    });




    return {

        Log: PlayerLog,
        Name: Name
    };

});