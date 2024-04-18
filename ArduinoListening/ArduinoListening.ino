char pattern = 'A';
char strength = 'M';
int maxStrength = 255;
int midStrength = 191;
int lowStrength = 128;

int vibrationPin = 10;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(vibrationPin, OUTPUT);
}

void loop() {
  // Listening for communication
  if(Serial.available()){
    String settingRequest = Serial.readStringUntil('\n');
    if(settingRequest[0] == 'E'){
      soundEvent = true;
    } else {
      pattern = settingRequest[1];
      strength = settingRequest[2];
    }
  }
  // Detecting sound event
  if(soundEvent){
    if(pattern == 'A'){
      staccato(strength);
    } else {
      swing(strength)
    }
  }
  soundEvent = false;
}

// Eight note repeating pattern
void staccato(int strength){
  for(int i = 0; i < 15; i++){
    analogWrite(vibrationPin, strength);
    delay(50);
    analogWrite(vibrationPin, 0);
    delay(50);
  }
}

void swing(int strength){
  for(int i = 0; i < 5; i++){
    analogWrite(vibrationPin, strength);
    delay(50);
    analogWrite(vibrationPin, 0);
    delay(50);
    analogWrite(vibrationPin, strength);
    delay(150);
    analogWrite(vibrationPin, 0);
    delay(50);
  }
}