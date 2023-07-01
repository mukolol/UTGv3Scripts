// Tüm metin kutularının metinlerini değiştirir
var textboxes = document.querySelectorAll('input[type="text"]');
for (var i = 0; i < textboxes.length; i++) {
  textboxes[i].value = "BY THT";
}

// Tüm düğmelerin metinlerini değiştirir
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].innerHTML = "BY THT";
}

// Tüm etiketlerin metinlerini değiştirir
var labels = document.querySelectorAll('label');
for (var i = 0; i < labels.length; i++) {
  labels[i].innerHTML = "BY THT";
}
