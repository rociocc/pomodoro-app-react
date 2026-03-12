export class AudioSrv {

  private audio = new Audio("/sounds/bell-sound.mp3")

  playTaskComplete() {

    this.audio.currentTime = 0
    this.audio.play()

  }

}

export function getAudioSrv() {

  return new AudioSrv()

}