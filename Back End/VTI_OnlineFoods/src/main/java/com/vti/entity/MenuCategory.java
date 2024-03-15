package com.vti.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
@Table(name="menu_category")
public class MenuCategory {
    @Column(name="linkid")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private short linkid;
    
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "menuid",nullable = false)
    private Menu menu;
    
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "categoryid",nullable = false)
    private Category category;

    public MenuCategory() {
    }

    public MenuCategory(short linkid, Menu menu, Category category) {
        this.setLinkid(linkid);
        this.setMenu(menu);
        this.setCategory(category);
    }


    public short getLinkid() {
        return linkid;
    }

    public void setLinkid(short linkid) {
        this.linkid = linkid;
    }

    public Menu getMenu() {
        return menu;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
