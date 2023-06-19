export class Player {
  constructor(name, imageUrl) {
    this.score = 0,
      this.name = name,
      this.imgUrl = imageUrl

  }

  get PlayerInfo() {
    let info = `New player is ${this.name}, they have ${this.score} points.`
    return info
  }

  get PlayerCardTemplate() {
    return `
        <div class="col-12 col-md-6">
            div>
            <img class="img-fluid player-img"
                src="${this.imgUrl}"
                alt="${this.name}">
            <p>${this.name}</p>
            <p>Score: ${this.score}</p>
            <div>
                <button onclick="app.PlayersController.increasePlayerScore('${this.name}')">Increase Score</button>
            </div>
            </div>
        </div>
        `
  }

}