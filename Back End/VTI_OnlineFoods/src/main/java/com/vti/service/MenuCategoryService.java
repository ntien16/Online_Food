/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.vti.service;

import com.vti.entity.Category;
import com.vti.entity.Menu;
import com.vti.entity.MenuCategory;
import com.vti.form.MenuCategoryFormCreating;
import com.vti.form.MenuFormCreating;
import com.vti.repository.IMenuCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
@Service
public class MenuCategoryService implements IMenuCategoryService{
    @Autowired
    IMenuCategoryRepository menuCategoryRepository;


    @Override
    public List<MenuCategory> getAllmenucategory() {
        return menuCategoryRepository.findAll();
    }

    @Override
    public MenuCategory createNewItem(MenuCategoryFormCreating menuCategoryFormCreating) {
        MenuCategory menuCategory=new MenuCategory();
        menuCategory.setLinkid(menuCategoryFormCreating.getLinkid());
        menuCategory.setMenu(menuCategoryFormCreating.getMenuid());
        menuCategory.setCategory(menuCategoryFormCreating.getCategoryid());
        MenuCategory menuItemNewCategory=menuCategoryRepository.save(menuCategory);
        return menuItemNewCategory;
    }

}
