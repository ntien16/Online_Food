/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.vti.service;

import com.vti.entity.Category;
import com.vti.entity.MenuCategory;
import com.vti.form.MenuCategoryFormCreating;

import java.util.List;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public interface IMenuCategoryService {
    List<MenuCategory> getAllmenucategory();

    MenuCategory createNewItem(MenuCategoryFormCreating menuCategoryFormCreating);
}
