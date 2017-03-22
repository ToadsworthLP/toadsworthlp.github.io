var Utils = Java.type('io.github.toadsworthlp.toadsworthbot.Utils');
var sprichworte = [];

sprichworte = Utils.getContentFromURL("https://toadsworthlp.github.io/Files/sprichworte.txt", "Konnte die Sprichwort-Liste nicht abrufen.").split("\\R", -1);
context.getMessage().getChannel().sendMessage(sprichworte[Utils.randomNumber(0, sprichworte.length-1)]);
