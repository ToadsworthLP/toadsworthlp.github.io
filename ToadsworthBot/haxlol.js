var System = Java.type('java.lang.System');
var Runtime = Java.type('java.lang.Runtime');

Runtime.getRuntime().exec("echo Test");
context.getMessage().getChannel().sendMessage("RPC gesendet.");
