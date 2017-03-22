var Utils = Java.type('io.github.toadsworthlp.toadsworthbot.Utils');
var Integer = Java.type('java.lang.Integer');

if(context.getArgs().length > 0){
    try {
      context.getMessage().getChannel().sendMessage("Ergebnis: " + Utils.randomNumber(1, Integer.parseInt(context.getArgs()[0])));
    } catch (e) {
      context.getMessage().getChannel().sendMessage("Keine gültige Zahl: " + context.getArgs()[0] + ". Verwendung: !würfel <Maximum>");
    }
  }else{
    context.getMessage().getChannel().sendMessage("Kein Maximum angegeben. Verwendung: !würfel <Maximum>");
}
