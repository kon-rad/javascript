// Completed 12/20/16


function decode(str) {
  var result = [],
      uppercase = false,
      alph = "abcdefghijklmnopqrstuvwxyz";


      for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() != str.charAt(i)) {
          uppercase = true;
        }
        else {
          uppercase = false;
        }
        var letter = str.charAt(i).toLowerCase();
        var position = alph.indexOf(letter);
        if (position < 0) {
          result.push(letter);
        } else {
          var newLetter = position + 13;
          if (newLetter > 25)
            newLetter = newLetter - 26;
          if (uppercase)
            result.push(alph.charAt(newLetter).toUpperCase());
          else
            result.push(alph.charAt(newLetter));
        }
      }

  return result.join('');
}

decode('"Qba\'g gel gb or yvxr Wnpxvr. Gurer vf bayl bar Wnpxvr. Fghql pbzchgref vafgrnq." - Wnpxvr Puna');
