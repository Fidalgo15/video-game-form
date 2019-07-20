import React, { useState } from 'react';

function CreateGames(props) {

    const [title, setTitle] = useState('');
    const [console, setConsole] = useState('');
    const [players, setPlayers] = useState('');
    const [genre, setGenre] = useState('');
    const [discription, setDiscription] = useState('');

    return(
        <>
            <h1>List Your Favorite Video Game</h1>
            <form>
                <label for="titles">Title:</label>
                <input type="text" name="titles" value={title} onChange={e => setTitle(e.target.value)} required />

                <br />

                <label for="console">Console:</label>
                <input type="text" name="console" onChange={e => setConsole(e.target.value)} required />

                <br />

                <label for="players"># of Players:</label>
                <input type="number" name="players" onChange={e => setPlayers(e.target.value)} required />

                <br />

                <label for="genre">Genre:</label>
                <input type="text" name="genre" onChange={e => setGenre(e.target.value)} required />

                <br />

                <label for="discription">Discription:</label>
                <input type="text" name="discription" onChange={e => setDiscription(e.target.value)} required />
                
                <br />

                <input type="submit" value="Submit" />

                <br />

                <input type="image" id="image" alt='rainbow six siege' width="300" height="100" align="left"
                src="https://www.trzcacak.rs/myfile/detail/36-363664_a-rainbow-six-rainbow-six-siege-png.png" /> 
                <input type="image" id="image" alt='titanfall 2' width="300" height="100" align="right"
                src="http://www.sclance.com/pngs/titanfall-2-logo-png/titanfall_2_logo_png_1387361.png" /> 
                <input type="image" id="image" alt='gears of war' width="100" height="100" align="center"
                src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c2e0.png" />
            </form>
            <p>{title}</p>
            <p>{console}</p>
            <p>{players}</p>
            <p>{genre}</p>
            <p>{discription}</p>
        </>
    )
}

export default CreateGames