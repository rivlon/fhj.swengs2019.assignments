package at.fh.ima.swengs.moviedbv3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    @MessageMapping("/new-message")
    @SendTo("/message")
    public Message message(Message message) {
        return message;
    }

}
