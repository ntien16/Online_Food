/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.vti.service;

import com.vti.entity.Category;
import com.vti.entity.Menu;
import com.vti.form.MenuFormCreating;
import com.vti.form.MenuUpdate;


import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public interface IMenuService {

//    public Page<Menu> getAllMenu(Pageable pageable);
    public List<Menu> getAllMenu1();
    public Menu getItemByID(short id);

    public Menu upDateItemMenu(short id, MenuUpdate menuUpdate);

    public Menu createNewItem(MenuFormCreating menuFormCreating);

    public void deleteItemMenu(short id);

   

   

   
    
}
