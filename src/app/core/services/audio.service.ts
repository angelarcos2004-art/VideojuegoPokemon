import { Injectable } from '@angular/core';

export interface AudioSettings {
  menuMusic: boolean;
  battleMusic: boolean;
  effects: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private bgMusic: HTMLAudioElement | null = null;
  private damageSounds: HTMLAudioElement[] = [];
  private currentDamageSoundIndex = 0;
  
  public settings: AudioSettings = {
    menuMusic: true,
    battleMusic: true,
    effects: true
  };

  constructor() {
    const saved = localStorage.getItem('pk_audio_settings');
    if (saved) {
      try {
        this.settings = JSON.parse(saved);
      } catch(e) {}
    }
    // Preload damage sounds
    this.damageSounds = [
      new Audio('/assets/soundtrack/sonido_daño_1.mp3'),
      new Audio('/assets/soundtrack/sonido_daño_2.mp3')
    ];
  }

  saveSettings() {
    localStorage.setItem('pk_audio_settings', JSON.stringify(this.settings));
    this.applyMusicSettings();
  }

  private applyMusicSettings() {
    if (this.bgMusic) {
      const isMenu = this.bgMusic.src.includes('menu');
      const isBattle = this.bgMusic.src.includes('batalla');
      
      if ((isMenu && !this.settings.menuMusic) || (isBattle && !this.settings.battleMusic)) {
        this.bgMusic.pause();
      } else if (this.bgMusic.paused) {
        if ((isMenu && this.settings.menuMusic) || (isBattle && this.settings.battleMusic)) {
          this.bgMusic.play().catch(e => console.error("Error applying music settings", e));
        }
      }
    }
  }

  playMenuMusic() {
    if (!this.settings.menuMusic) {
      this.stopMusic();
      return;
    }
    this.playBackgroundMusic('/assets/soundtrack/soundtrack_menu.mp3');
  }

  playBattleMusic() {
    if (!this.settings.battleMusic) {
      this.stopMusic();
      return;
    }
    this.playBackgroundMusic('/assets/soundtrack/soundtrack_batalla.mp3');
  }

  stopMusic() {
    if (this.bgMusic) {
      this.bgMusic.pause();
      this.bgMusic.currentTime = 0;
    }
  }

  playDamageSound() {
    if (!this.settings.effects) return;
    const sound = this.damageSounds[this.currentDamageSoundIndex];
    sound.currentTime = 0; // Reset in case it's already playing
    sound.play().catch(e => console.error("Error playing sound", e));
    
    // Alternar sonido para la próxima vez
    this.currentDamageSoundIndex = (this.currentDamageSoundIndex + 1) % this.damageSounds.length;
  }

  playPoisonSound() {
    this.playSoundEffect('/assets/soundtrack/sonido_veneno.mp3');
  }

  playLoseSound() {
    this.playSoundEffect('/assets/soundtrack/sonido_perder.mp3');
  }

  playWinSound() {
    this.playSoundEffect('/assets/soundtrack/sonido_ganar.mp3');
  }

  playEvolutionSound() {
    this.playSoundEffect('/assets/soundtrack/sonido_evolucion.mp3');
  }

  playHealSound() {
    this.playSoundEffect('/assets/soundtrack/sonido_curacion.mp3');
  }

  playFieldSound() {
    this.playSoundEffect('/assets/soundtrack/sonido_campo.mp3');
  }

  private playSoundEffect(src: string) {
    if (!this.settings.effects) return;
    const sound = new Audio(src);
    sound.play().catch(e => console.error("Error playing sound effect", e));
  }

  private playBackgroundMusic(src: string) {
    if (this.bgMusic && this.bgMusic.src.endsWith(src)) {
      if (!this.bgMusic.paused) return; // Ya está sonando esta música
    }

    if (this.bgMusic) {
      this.bgMusic.pause();
    }

    this.bgMusic = new Audio(src);
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.5; // Un volumen moderado por defecto
    this.bgMusic.play().catch(e => console.error("Error playing background music", e));
  }
}
