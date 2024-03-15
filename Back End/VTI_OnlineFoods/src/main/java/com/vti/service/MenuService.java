/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.vti.service;

import com.vti.entity.Category;
import com.vti.entity.Menu;
import com.vti.entity.MenuCategory;
import com.vti.form.MenuFormCreating;
import com.vti.form.MenuUpdate;
import com.vti.repository.ICategoryRepository;
import com.vti.repository.IMenuCategoryRepository;
import com.vti.repository.IMenuRepository;
import java.util.HashSet;

import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
@Service
public class MenuService implements IMenuService {

    @Autowired
    IMenuRepository menuRepository;

    @Autowired
    ICategoryRepository categoryRepository;

    @Override
    public List<Menu> getAllMenu1() {
        List<Menu> menulist=menuRepository.findAll();
        return menulist;
    }

    @Override
    public Menu getItemByID(short id) {
        return menuRepository.getById(id);
    }

    @Override
    public Menu upDateItemMenu(short id, MenuUpdate menuUpdate) {
        Menu menu = menuRepository.getById(id);
        //Tìm Category theo ID
        Category category = categoryRepository.getById(menuUpdate.getCategoryID());

       menu.setMenuname(menuUpdate.getMenuName());
        menu.setPrice(menuUpdate.getPrice());
        menu.setImage(menuUpdate.getImage());
        menu.setCategory(category);
//        Set<String> menucategoryNames = new HashSet<>();
//        for (MenuCategory menucategoryname : menuUpdateNewMenu.getMenucategory()) {
//            Category category = menucategoryname.getCategory();
//            menucategoryNames.add(category.getCategoryname());
//        }
        Menu productUpdateProduct = menuRepository.save(menu);
        return productUpdateProduct;
    }

    @Override
    public Menu createNewItem(MenuFormCreating menuFormCreating) {
        //Tìm Category Theo ID
        Category category = categoryRepository.getById(menuFormCreating.getCategoryID());

        Menu menu=new Menu();
//        menu.setMenuid(menuFormCreating.getMenuid());
        menu.setMenuname(menuFormCreating.getMenuname());
        menu.setPrice(menuFormCreating.getPrice());
        menu.setImage(menuFormCreating.getImage());
        menu.setCategory(category);

        Menu menuNew=menuRepository.save(menu);
        return menuNew;
    }

    @Override
    public void deleteItemMenu(short id) {
        menuRepository.deleteById(id);
    }
}
