package ru.splat.service;

import java.util.List;

import ru.splat.model.Node;

public interface NodeService
{
    List<Node> getChildNodes(final long id);


    Node getRoot();


    long addNode(final Node node);


    boolean deleteNodes(final int id);


    boolean renameNode(final Node node);


    boolean moveNode(final long id, final long parentId);
}
