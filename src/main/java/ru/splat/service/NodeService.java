package ru.splat.service;


import ru.splat.model.Node;

import java.util.List;

public interface NodeService
{
    List<Node> getChildNodes(final long id);


    Node getRoot();


    long addNode(final Node node);


    boolean deleteNodes(final int id);


    boolean renameNode(final Node node);


    boolean moveNode(final long id, final long parentId);
}
