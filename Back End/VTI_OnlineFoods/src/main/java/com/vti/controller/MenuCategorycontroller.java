package com.vti.controller;

import com.vti.dto.CategoryDto;
import com.vti.dto.MenuCategoryDto;
import com.vti.dto.MenuDto;
import com.vti.entity.Category;
import com.vti.entity.Menu;
import com.vti.entity.MenuCategory;
import com.vti.form.MenuCategoryFormCreating;
import com.vti.form.MenuFormCreating;
import com.vti.repository.IMenuCategoryRepository;
import com.vti.service.ICategoryService;
import com.vti.service.IMenuCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("/menucategories")
@CrossOrigin("*")
public class MenuCategorycontroller {
    @Autowired
    private IMenuCategoryService menuCategoryService;
    @GetMapping()
    public ResponseEntity<?> getAllCategory()
    {
        List<MenuCategory>listMenucategories=menuCategoryService.getAllmenucategory();
        List<MenuCategoryDto> listMenuCategoryDto=new ArrayList<>();
        for(MenuCategory listMenuCategory: listMenucategories)
        {
            MenuCategoryDto menuCategoryDto=new MenuCategoryDto();
            menuCategoryDto.setLinkid(listMenuCategory.getLinkid());
            menuCategoryDto.setMenuid(listMenuCategory.getMenu().getMenuid());
            menuCategoryDto.setCategoryid(listMenuCategory.getCategory().getCategoryid());
            listMenuCategoryDto.add(menuCategoryDto);
        }
        return new ResponseEntity<>(listMenuCategoryDto, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?>createNewItem(@RequestBody MenuCategoryFormCreating MenuCategoryFormCreating)
    {
        MenuCategory menuCategory=menuCategoryService.createNewItem(MenuCategoryFormCreating);
        MenuCategoryDto menuCategoryDto=new MenuCategoryDto();
        menuCategoryDto.setLinkid(MenuCategoryFormCreating.getLinkid());
        menuCategoryDto.setMenuid(MenuCategoryFormCreating.getMenuid().getMenuid());
        menuCategoryDto.setCategoryid(MenuCategoryFormCreating.getCategoryid().getCategoryid());



        return new ResponseEntity<>(menuCategoryDto,HttpStatus.OK);
    }
}
