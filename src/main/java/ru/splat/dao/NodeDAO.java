package ru.splat.dao;


import ru.splat.model.Node;

import java.util.List;

public interface NodeDAO
{
    List<Node> getChildNodes(final long id);


    Node getRoot();


    boolean addNode(final Node node);
}
