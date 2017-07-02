package ru.splat.model;


import com.sun.istack.internal.NotNull;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.Size;


public class Node
{
    @NotNull
    private Long id;

    @NotNull
    private Long parentId;

    @NotBlank
    @Size(max = 255)
    private String name;


    public Long getId()
    {
        return id;
    }


    public void setId(final Long id)
    {
        this.id = id;
    }


    public Long getParentId()
    {
        return parentId;
    }


    public void setParentId(final Long parentId)
    {
        this.parentId = parentId;
    }


    public String getName()
    {
        return name;
    }


    public void setName(final String name)
    {
        this.name = name;
    }


    @Override
    public String toString()
    {
        return "Node{" +
                "id=" + id +
                ", parentId=" + parentId +
                ", name='" + name + '\'' +
                '}';
    }
}
