/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.vti.dto;

import com.vti.entity.MenuCategory;

import java.math.BigDecimal;
import java.util.Set;

/**
 * 
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class MenuDto {
 private short menuid;
    private String menuname;
    private BigDecimal price;
    private String image;
//    private
//    Set<String> menucategory;
    private String categoryName;

    public MenuDto() {
    }

//    public MenuDto(short menuid, String menuname, BigDecimal price, String image, Set<String> menucategory) {
//        this.menuid = menuid;
//        this.menuname = menuname;
//        this.price = price;
//        this.image = image;
//        this.menucategory = menucategory;
//    }


    public MenuDto(short menuid, String menuname, BigDecimal price, String image, String categoryName) {
        this.menuid = menuid;
        this.menuname = menuname;
        this.price = price;
        this.image = image;
        this.categoryName = categoryName;
    }

    public short getMenuid() {
        return menuid;
    }

    public void setMenuid(short menuid) {
        this.menuid = menuid;
    }

    public String getMenuname() {
        return menuname;
    }

    public void setMenuname(String menuname) {
        this.menuname = menuname;
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

//    public Set<String> getMenucategory() {
//        return menucategory;
//    }
//
//    public void setMenucategory(Set<String> menucategory) {
//        this.menucategory = menucategory;
//    }


    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
