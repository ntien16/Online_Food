/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.vti.form;

import com.vti.entity.Category;

import java.math.BigDecimal;

/**
 * 
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class MenuUpdate {
    private String menuName;
    private BigDecimal price;
    private String image;
//    private Set<String> categoryIds;
    private short categoryID;

//    public MenuUpdate(String name, BigDecimal price, String image, Set<String> categoryIds) {
//        this.name = name;
//        this.price = price;
//        this.image = image;
//        this.categoryIds = categoryIds;
//    }


    public MenuUpdate(String menuName, BigDecimal price, String image, short categoryID) {
        this.menuName = menuName;
        this.price = price;
        this.image = image;
        this.categoryID = categoryID;
    }

    public MenuUpdate() {
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public short getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(short categoryID) {
        this.categoryID = categoryID;
    }

    //    public Set<String> getCategoryIds() {
//        return categoryIds;
//    }
//
//    public void setCategoryIds(Set<String> categoryIds) {
//        this.categoryIds = categoryIds;
//    }



}
