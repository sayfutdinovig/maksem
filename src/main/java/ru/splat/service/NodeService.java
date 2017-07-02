package ru.splat.service;


import ru.splat.model.Node;

import java.util.List;

public interface NodeService
{
    List<Node> getChildNodes(final long id);


    Node getRoot();


    boolean addNode(final Node node);
}
