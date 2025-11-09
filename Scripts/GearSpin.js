const Gear = document.getElementById("Gear");
let Rotation = 0;
let Time = 0;
let AnimationPhase = 0;
setInterval(() => {
  if (AnimationPhase == 0) {
    Gear.style.transform = `rotate(${Rotation}deg)`;
    Rotation += 1;
    if (
      Rotation == 90 ||
      Rotation == 180 ||
      Rotation == 270 ||
      Rotation == 360
    ) {
      AnimationPhase = 1;
    }
  } else if (AnimationPhase == 1) {
    Gear.style.transform = `rotate(${Rotation}deg)`;
    Rotation += 0.5;
    if (
      Rotation == 95 ||
      Rotation == 185 ||
      Rotation == 275 ||
      Rotation == 365
    ) {
      AnimationPhase = 2;
    }
  } else if (AnimationPhase == 2) {
    Gear.style.transform = `rotate(${Rotation}deg)`;
    Rotation -= 0.25;
    if (
      Rotation == 90 ||
      Rotation == 180 ||
      Rotation == 270 ||
      Rotation == 360
    ) {
      AnimationPhase = 3;
    }
  } else if (AnimationPhase == 3) {
    Time += 1;
    if (Time == 30) {
      if (Rotation == 360) {
        Rotation = 0;
      }
      Time = 0;
      AnimationPhase = 0;
    }
  }
}, 10);
