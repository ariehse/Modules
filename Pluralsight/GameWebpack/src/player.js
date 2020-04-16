


    console.log("Create a player instance");

    var _playerName = null;

    const Log= ()=>  {

        if (_playerName)
            console.log("player Name is : " + _playerName);
        else
            console.log("No Player registered.");
    };

const GetName = () => { return _playerName; };
const SetName = (name) => { _playerName = name; };


export { Log, GetName, SetName };


     