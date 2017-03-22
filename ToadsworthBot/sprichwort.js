var Utils = Java.type('io.github.toadsworthlp.toadsworthbot.Utils');
var sprichworte = [];

sprichworte = Utils.getContentFromURL("https://toadsworthlp.github.io/Files/sprichworte.txt", "Konnte die Sprichwort-Liste nicht abrufen.").match(/[^\r\n]+/g);
context.getMessage().getChannel().sendMessage(sprichworte[Utils.randomNumber(0, sprichworte.length-1)]);
