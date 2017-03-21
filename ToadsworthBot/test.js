var msg = "Start!";
for (i = 1; i < 10; i++) { 
    msg += " " + i;
}
context.getMessage().getChannel().sendMessage(msg);
