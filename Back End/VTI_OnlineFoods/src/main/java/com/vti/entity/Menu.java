/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.vti.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.*;

/**
 * 
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
@Entity
@Table(name="Menu")
public class Menu implements Serializable {
    @Column(name="menuid")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private short menuid;

    @Column(name = "menuname")
    private  String menuname;

    @Column(name = "price")
    private  BigDecimal price;

    @Column(name = "image")
    private  String image;

    @ManyToOne
    @JoinColumn (name="categoryid")
    private Category category;

    public Menu() {
    }

    public Menu(short menuid, String menuname, BigDecimal price, String image, Category category) {
        this.menuid = menuid;
        this.menuname = menuname;
        this.price = price;
        this.image = image;
        this.category = category;
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
