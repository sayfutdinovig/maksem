package ru.splat.dao;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import ru.splat.model.Node;

import java.util.Collections;
import java.util.List;


public class NodeDAOPostgres implements NodeDAO
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    final RowMapper<Node> rm = (rs, rowNum) ->
    {
        Node node = new Node();
        node.setId(rs.getLong("id"));
        node.setName(rs.getString("name"));
        node.setParentId(rs.getLong("parent_id"));
        return node;
    };


    @Override
    public List<Node> getChildNodes(final long id)
    {
        final String sql = "SELECT * FROM node WHERE id = ?";

        return jdbcTemplate.query(sql, rm, Collections.singleton(id).toArray());
    }


    @Override
    public Node getRoot()
    {
        final String sql = "SELECT * FROM node WHERE parent_id = 0";

        return jdbcTemplate.query(sql, rm).get(0);
    }


    @Override
    public boolean addNode(Node node)
    {
        final String sql = "INSERT INTO node (name, parent_id) VALUES (?, ?) ";

        return (jdbcTemplate.update(sql, node.getName(), node.getParentId()) > 0);
    }
}
