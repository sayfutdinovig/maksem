package ru.splat.controller;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import ru.splat.service.AccountService;
import ru.splat.service.AccountServiceImpl;

/**
 * Created by Vadim on 31.05.2017.
 */
@Controller
public class MainController {

    @Autowired
    AccountService accountService;

    public final static Logger logger = Logger.getLogger(MainController.class);


    @GetMapping(value = "/")
    public String main() {
        logger.info("Go");
        return "index";
    }

    @GetMapping("/{id}")
    public String getAmount(@PathVariable("id") final Long id, final Model model) throws Exception {
        final Long amount = accountService.getAmount(id);
        logger.info("Id = " + id +", amount = " + amount);
        model.addAttribute("amount", amount);
        return "index";
    }
}
