const unicodeToShreeMap = {
  'अ': 'A', 'आ': 'Am', 'इ': 'B', 'ई': 'B©', 'उ': 'C', 'ऊ': 'D', 'ऋ': 'F', 'ॠ': 'G', 'ए': 'E', 'ऐ': 'Eo',
  'ओ': 'Amo', 'औ': 'Am¡', 'अं': 'A§', 'अः': 'A…',

// मात्राएं (Vowel Signs)
 'ा': 'm', ' ि': '[', '₹': '<', 'ी': 'r', 'ृ': '¥',
 'ॄ': '¦',
  'े': 'o',
  'ै': '¡',
  'ो': 'mo',
  'ौ': 'm¡',
  'ं': '§',
  'ः': '…',
  '्': '²',
    'र् ें': ']', ' ि ': 'p', '  िं': 'q', 
' ी ': 's', ' ीं ': 't', 'र् ी ': 'u', 'र् ीं ': 'v', ' ु': 'w', 'ु': 'x', ' ू': 'y', ' ि': '{', ' ें': '|', 'र् े': '}', '·': '·',
' ्र': 'Œ', ' ़': '‹', ' ़': '', ' ्र': '—', ' š': 'š', 'Ÿ': 'Ÿ', ' ै': '¡', ' ैं': '¢', 'र् ै': '£', 'र् ैं': '¤', ' ंर्': '¨', 'र्': '©', 'र् र्ं': 'ª©', ' ्र': '«', ' ्रु': '®', ' ्रू': '¯', ' ॅ': '°', ' ँ': '±', ' ्र': '´', ' ़': 'µ', 'श्': 'û', ' ु': 'þ', ' ू': 'ÿ', 
 'क': 'H',
  'ख': 'I',
  'ग': 'J',
  'घ': 'K',
  'ङ': 'L',
  'च': 'M',
  'छ': 'N',
  'ज': 'O',
  'झ': 'P',
  'ञ': 'Äm',
  'ट': 'Q',
  'ठ': 'R',
  'ड': 'S',
  'ढ': 'T',
  'ण': 'U',
  'त': 'V',
  'थ': 'W',
  'द': 'X',
  'ध': 'Y',
  'न': 'Z',
  'प': 'n',
  'फ': '\$',
  'ब': '~',
  'भ': '^',
  'म': '_',
  'य': '`',
  'र': 'a',
  'ल': 'b',
  'व': 'd',
  'श': 'e',
  'ष': 'f',
  'स': 'g',
  'ह': 'h',

  // संख्याएँ (Numbers)
  '०': '0',
  '१': '1',
  '२': '2',
  '३': '3',
  '४': '4',
  '५': '5',
  '६': '6',
  '७': '7',
  '८': '8',
  '९': '9',

};

// Helper: Shift matras like 'ि' before the consonant
function reorderMatras(text) {
  return text.replace(/([क-ह]़?)(ि)/g, '$2$1');
}

function convertToShreeDev() {
  let input = document.getElementById("unicodeInput").value;
  input = reorderMatras(input);

  let output = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const nextChar = input[i + 1] || '';

    // Handle combined characters like क्ष, ज्ञ
    if ((char + nextChar) === 'क्ष' || (char + nextChar) === 'ज्ञ' || (char + nextChar) === 'श्र') {
      output += unicodeToShreeMap[char + nextChar];
      i++; // skip next char
    } else {
      output += unicodeToShreeMap[char] || char;
    }
  }

  document.getElementById("shreeDevInput").value = output;
}

function convertToUnicode() {
  // reverse mapping logic (basic)
  alert("Unicode to ShreeDev only supported in this demo.");
}

function clearText() {
  document.getElementById("unicodeInput").value = "";
  document.getElementById("shreeDevInput").value = "";
}
