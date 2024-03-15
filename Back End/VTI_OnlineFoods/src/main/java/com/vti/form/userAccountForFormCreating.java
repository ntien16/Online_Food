/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.vti.form;

import com.vti.entity.UserRole;

import java.util.Date;
import javax.management.relation.Role;

/**
 * 
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class userAccountForFormCreating {
    private short userAccountId;
    private String username;
    private String password;
    private String fullname;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String country;
    private Date CreateDate;
    private UserRole role;
    private String picture;

    public userAccountForFormCreating() {
    }

    public userAccountForFormCreating(short userAccountId, String username, String password, String fullname, String email, String phone, String address, String city, String country, Date createDate, UserRole role, String picture) {
        this.userAccountId = userAccountId;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.country = country;
        CreateDate = createDate;
        this.role = role;
        this.picture = picture;
    }

    public short getUserAccountId() {
        return userAccountId;
    }

    public void setUserAccountId(short userAccountId) {
        this.userAccountId = userAccountId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Date getCreateDate() {
        return CreateDate;
    }

    public void setCreateDate(Date createDate) {
        CreateDate = createDate;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
