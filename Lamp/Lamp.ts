class Lamp {
  private isOn: boolean;
  private hasBubble: boolean;

  public turnOn(): void {
    this.isOn = true;
  }
  public switch(): void {
    this.isOn = !this.isOn;
  }

  public turnOff(): void {
    this.isOn = false;
  }
}
