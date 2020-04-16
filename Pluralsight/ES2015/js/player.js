


    console.log("Create a player instance");

    var _playerName = null;

    export  function Log() {

        if (_playerName)
            console.log("player Name is : " + _playerName);
        else
            console.log("No Player registered.");
    };


    export default  Name = Object.defineProperty(this, "Name", {
        get: function () { return _playerName; },
        set: function (name) { _playerName = name; },
        enumerable: true,
        configurable: true
    });


     