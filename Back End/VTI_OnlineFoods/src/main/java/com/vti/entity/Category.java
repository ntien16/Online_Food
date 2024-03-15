package com.vti.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

/**
 * 
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
@Entity
@Table(name="category",catalog = "OrderOnlineFood")
public class Category implements Serializable {

    @Column(name = "CATEGORYID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private short categoryid;

    @Column(name = "CATEGORYNAME", length = 255,nullable = false)
    private String categoryname;

    @OneToMany(mappedBy = "category")
    private List<Menu> menus;

    public Category() {
        super();
    }

//    @OneToMany(mappedBy = "category")
//    private
//    Set<MenuCategory> menucategory;

//    public Category(short categoryid, String categoryname, Set<MenuCategory> menucategory) {
//        this.setCategoryid(categoryid);
//        this.setCategoryname(categoryname);
////        this.setMenucategory(menucategory);
//    }


//    public Category(short categoryid, String categoryname, List<Menu> menus) {
//        this.categoryid = categoryid;
//        this.categoryname = categoryname;
//        this.menus = menus;
//    }



//    public Set<MenuCategory> getMenucategory() {
//        return menucategory;
//    }
//
//    public void setMenucategory(Set<MenuCategory> menucategory) {
//        this.menucategory = menucategory;
//    }


    public short getCategoryid() {
        return categoryid;
    }

    public void setCategoryid(short categoryid) {
        this.categoryid = categoryid;
    }

    public String getCategoryname() {
        return categoryname;
    }

    public void setCategoryname(String categoryname) {
        this.categoryname = categoryname;
    }

    public List<Menu> getMenus() {
        return menus;
    }

    public void setMenus(List<Menu> menus) {
        this.menus = menus;
    }

    @Override
    public String toString() {
        return "Category{" +
                "categoryid=" + categoryid +
                ", categoryname='" + categoryname + '\'' +
                ", menus=" + menus +
                '}';
    }
}
