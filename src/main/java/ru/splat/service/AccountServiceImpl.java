package ru.splat.service;


import org.springframework.beans.factory.annotation.Autowired;
import ru.splat.dao.AmountDAOPostgres;

public class AccountServiceImpl implements AccountService
{
    @Autowired
    AmountDAOPostgres amountDAOPostgres;

    @Override
    public Long getAmount(Long id)
    {
        return amountDAOPostgres.getAmmount(id);
    }

    @Override
    public void addAmount(Long id, Long value) throws Exception {

    }
}
