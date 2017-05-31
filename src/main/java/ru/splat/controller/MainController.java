package ru.splat.controller;


import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Vadim on 31.05.2017.
 */
@Controller
public class MainController {

    Logger logger = Logger.getLogger(MainController.class);


    @GetMapping(value = "/")
    public String main() {
        logger.info("Go");
        return "index";
    }
}
