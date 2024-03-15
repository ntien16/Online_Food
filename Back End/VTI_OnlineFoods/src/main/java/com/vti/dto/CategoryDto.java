package com.vti.dto;

import com.vti.entity.MenuCategory;

import java.util.Set;

public class CategoryDto {

    private short categoryid;
    private String categoryName;
//    private Set<MenuCategory> menucategory;

    public CategoryDto() {
    }

//    public CategoryDto(short categoryid, String categoryname, Set<MenuCategory> menucategory) {
//        this.setCategoryid(categoryid);
//        this.setCategoryname(categoryname);
//        this.setMenucategory(menucategory);
//    }


    public CategoryDto(short categoryid, String categoryName) {
        this.categoryid = categoryid;
        this.categoryName = categoryName;
    }

    public short getCategoryid() {
        return categoryid;
    }

    public void setCategoryid(short categoryid) {
        this.categoryid = categoryid;
    }

    public String getCategoryname() {
        return categoryName;
    }

    public void setCategoryname(String categoryname) {
        this.categoryName = categoryname;
    }

//    public Set<MenuCategory> getMenucategory() {
//        return menucategory;
//    }
//
//    public void setMenucategory(Set<MenuCategory> menucategory) {
//        this.menucategory = menucategory;
//    }

}
