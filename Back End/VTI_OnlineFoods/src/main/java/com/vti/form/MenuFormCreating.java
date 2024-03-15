/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.vti.form;

import com.vti.entity.MenuCategory;
import java.math.BigDecimal;
import java.util.Set;

/**
 * 
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class MenuFormCreating {
    private short menuid;
    private String menuname;
    private BigDecimal price;
    private String image;
    private short  categoryID;
//    private Set<MenuCategory> menucategory;


    public MenuFormCreating() {
    }

//    public MenuFormCreating(Short menuid, String menuname, BigDecimal price, String image, Set<MenuCategory> menucategory) {
//        this.menuid = menuid;
//        this.menuname = menuname;
//        this.price = price;
//        this.image = image;
//        this.menucategory = menucategory;
//    }


    public MenuFormCreating(short menuid, String menuname, BigDecimal price, String image, short categoryID) {
        this.menuid = menuid;
        this.menuname = menuname;
        this.price = price;
        this.image = image;
        this.categoryID = categoryID;
    }

    public short getMenuid() {
        return menuid;
    }

    public void setMenuid(short menuid) {
        this.menuid = menuid;
    }

    /**
     * @return the menuname
     */
    public String getMenuname() {
        return menuname;
    }

    /**
     * @param menuname the menuname to set
     */
    public void setMenuname(String menuname) {
        this.menuname = menuname;
    }

    /**
     * @return the price
     */
    public BigDecimal getPrice() {
        return price;
    }

    /**
     * @param price the price to set
     */
    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    /**
     * @return the image
     */
    public String getImage() {
        return image;
    }

    /**
     * @param image the image to set
     */
    public void setImage(String image) {
        this.image = image;
    }

    public short getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(short categoryID) {
        this.categoryID = categoryID;
    }
//    /**
//     * @return the menucategory
//     */
//    public Set<MenuCategory> getMenucategory() {
//        return menucategory;
//    }
//
//    /**
//     * @param menucategory the menucategory to set
//     */
//    public void setMenucategory(Set<MenuCategory> menucategory) {
//        this.menucategory = menucategory;
//    }



}
