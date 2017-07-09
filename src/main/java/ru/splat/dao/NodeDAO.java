package ru.splat.dao;

import java.util.List;

import ru.splat.model.Node;

public interface NodeDAO
{
    List<Node> getChildNodes(final long id);


    Node getRoot();


    long addNode(final Node node);


    boolean deleteNodes(final int id);


    boolean renameNode(final Node node);


    boolean moveNode(long id, long parentId);
}
