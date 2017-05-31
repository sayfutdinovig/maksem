package ru.splat.dao;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class AmountDAOPostgres
{
    @Autowired
    JdbcTemplate jdbcTemplate;

    public Long getAmmount(final Long id)
    {
        final String sql = "SELECT amount FROM ballance where id = ?";
        return jdbcTemplate.queryForObject(sql, Long.class, id);
    }
}
