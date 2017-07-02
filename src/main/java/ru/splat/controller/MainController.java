package ru.splat.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.splat.model.Node;
import ru.splat.service.NodeService;

import java.util.List;


@Controller
@RequestMapping
public class MainController {

    @Autowired
    NodeService nodeService;


    @GetMapping(value = "/")
    public String getMainPage(Model model)
    {
        model.addAttribute("root", nodeService.getRoot());
        return "index";
    }

    @GetMapping(value = "/root")
    public @ResponseBody Node getRoot()
    {
        return nodeService.getRoot();
    }

    @GetMapping("/node/{id}")
    public @ResponseBody List<Node> getChildNodes(@PathVariable("id") final long id)
    {
        return nodeService.getChildNodes(id);
    }


    @PostMapping("/node")
    public @ResponseBody Boolean addNode(@RequestBody final Node node)
    {
        System.out.println(node);
       // return nodeService.addNode(node);
        return true;
    }
}
