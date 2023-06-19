import { AppState } from "../AppState.js";





function _drawPlayers() {
    let players = AppState.players

    let template = ''

    players.forEach(player => template += player.PlayerCardTemplate)


    setHTML('players', template)
}



export class PlayersController {
    constructor() {
        console.log('Players Controller Loaded');
        console.log(AppState.players)
    }


    buttonClick() {
        console.log('Butt Click');
    }

    addPlayer(event) {
        event.preventDefault()

        const form = event.target

        const formData = getFormData(form)

        console.log('Got form data', formData)
    }





}