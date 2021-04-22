// idea based on http://heygirl.io/ (+used their images)

const { Plugin } = require('powercord/entities');

module.exports = class HeyCory extends Plugin {
  constructor () {
    super();

    this.URLs = [
	    "https://static.wikia.nocookie.net/joke-battles/images/a/ad/Solosyourverse.jpg",
      "https://cdn.discordapp.com/attachments/702226739107201025/834882000477356032/Cory_in_the_Clown.png",
      "https://cdn.discordapp.com/attachments/702226739107201025/834879262695751711/Cory_in_the_Case.png",
      "https://cdn.discordapp.com/attachments/702226739107201025/834876583499792394/Cory_in_the_Mug.png",
      "https://cdn.discordapp.com/attachments/702226739107201025/834873892316381205/Z.png",
      "https://cdn.discordapp.com/attachments/702226739107201025/834873776474423296/OgStEZx.png",
      "https://cdn.discordapp.com/attachments/702226739107201025/834873665236893726/tumblr_plwi0oGEx11sonipe_1280.jpg",
      "https://cdn.discordapp.com/attachments/702226739107201025/834868640750895174/Cory_On_The_Phone.png",
      "https://cdn.discordapp.com/attachments/702226739107201025/834866806463660092/unknown.png",
      "https://cdn.discordapp.com/attachments/702226739107201025/834865974246768650/image0.jpg"
	];
  }

  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'heycory',
      description: 'Replaces every image with a random image of the best anime character',
      usage: '{c}',
      executor: this.heycory.bind(this)
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('heycory');
  }

  getRandomURL () {
    return this.URLs[Math.floor(Math.random() * this.URLs.length)];
  }

  heycory () {
    document.querySelectorAll('[style*="background-image"]')
      .forEach(({ style }) => (
        style.backgroundImage = `url("${this.getRandomURL()}")`
      ));

    document.querySelectorAll('img')
      .forEach(image => (
        image.src = this.getRandomURL()
      ));
  }
};
