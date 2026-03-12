class EmailSender {
    send(message) {
        console.log("Sending email:", message);
    }
}
class Notification {
    constructor() {
        this.sender = new EmailSender();
    }
    sendMessage(message) {
        this.sender.send(message);
    }
}
const notification = new Notification();
notification.sendMessage("Welcome, Mohamed!");