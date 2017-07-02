package ru.splat.service;


import org.springframework.beans.factory.annotation.Autowired;
import ru.splat.dao.NodeDAO;
import ru.splat.model.Node;

import java.util.List;

public class NodeServiceImpl implements NodeService
{
    @Autowired
    NodeDAO nodeDAO;


    @Override
    public List<Node> getChildNodes(long id)
    {
        return nodeDAO.getChildNodes(id);
    }


    @Override
    public Node getRoot()
    {
        return nodeDAO.getRoot();
    }


    @Override
    public boolean addNode(Node node)
    {
        return nodeDAO.addNode(node);
    }
}
