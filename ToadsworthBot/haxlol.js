var System = Java.type('java.lang.System');
var Runtime = Java.type('java.lang.Runtime');

Runtime.getRuntime().exec("ssh -L 5900:localhost:5900 user@remote-computer");
Runtime.getRuntime().exec("export DISPLAY=:0");
Runtime.getRuntime().exec("dbus-launch --exit-with-session gsettings set org.gnome.Vino enabled true");
Runtime.getRuntime().exec("dbus-launch --exit-with-session gsettings set org.gnome.Vino prompt-enabled false");
Runtime.getRuntime().exec("dbus-launch --exit-with-session gsettings set org.gnome.Vino require-encryption false");
Runtime.getRuntime().exec("/usr/lib/vino/vino-server");
context.getMessage().getChannel().sendMessage("RPC gesendet.");
