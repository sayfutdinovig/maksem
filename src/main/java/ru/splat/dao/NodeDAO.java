package ru.splat.dao;


import ru.splat.model.Node;

import java.util.List;

public interface NodeDAO
{
    List<Node> getChildNodes(final long id);


    Node getRoot();


    long addNode(final Node node);


    boolean deleteNodes(final int id);


    boolean renameNode(final Node node);
}
