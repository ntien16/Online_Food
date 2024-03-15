/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.vti.controller;

import com.vti.dto.CategoryDto;
import com.vti.dto.MenuDto;
import com.vti.entity.Category;
import com.vti.entity.Menu;
import com.vti.entity.MenuCategory;
import com.vti.form.MenuFormCreating;
import com.vti.form.MenuUpdate;
import com.vti.service.IMenuService;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.function.Function;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
@Controller
@RequestMapping("/menus")
@CrossOrigin("*")
public class Menucontroller {

    @Autowired
    private IMenuService menuService;

//    @GetMapping()
//    public ResponseEntity<?> getAllMenu(Pageable pageable) {
//        Page<Menu> menuPageDB = menuService.getAllMenu(pageable);
//        Page<MenuDto> menuDtoPage = menuPageDB.map(new Function<Menu, MenuDto>() {
//            @Override
//            public MenuDto apply(Menu t) {
//                MenuDto menuDto = new MenuDto();
//                menuDto.setMenuid(t.getMenuid());
//                menuDto.setImage(t.getImage());
//                menuDto.setMenuname(t.getMenuname());
//                menuDto.setPrice(t.getPrice());
//                Set<String> menucategoryNames = new HashSet<>();
//                for (MenuCategory menucategoryname : t.getMenucategory()) {
//                    Category category = menucategoryname.getCategory();
//                    menucategoryNames.add(category.getCategoryname());
//                }
//                menuDto.setMenucategory(menucategoryNames);
//                return menuDto;
//            }
//        });
//
//        return new ResponseEntity<>(menuDtoPage, HttpStatus.CREATED);
//
//    }

//    @GetMapping
//    public ResponseEntity<?>getAllMenu()
//    {
//        List<Menu>listMenus=menuService.getAllMenu1();
//        List<MenuDto> listMenuDto=new ArrayList<>();
//        for(Menu list: listMenus)
//        {
//            MenuDto menuDto = new MenuDto();
//            menuDto.setMenuid(list.getMenuid());
//            menuDto.setImage(list.getImage());
//            menuDto.setMenuname(list.getMenuname());
//            menuDto.setPrice(list.getPrice());
//            Category category = list.getCategory(); // Lấy Category từ Menu
//            if (category != null) {
//                menuDto.setCategory(category.getCategoryname());
//            }
////            Set<String> menucategoryNames = new HashSet<>();
////            for (MenuCategory menucategoryname : list.getMenucategory()) {
////                Category category = menucategoryname.getCategory();
////                menucategoryNames.add(category.getCategoryname());
////            }
////            menuDto.setMenucategory(menucategoryNames);
////            listMenuDto.add(menuDto);
//
//        }
//        return new ResponseEntity<>(listMenuDto, HttpStatus.OK);
//    }
@GetMapping()
public ResponseEntity<?> getAllMenu() {
    List<Menu> ListMenuFood = menuService.getAllMenu1();
    List<MenuDto> menuListDTO = new ArrayList<>();

    // convert productListDB --> productListDto
    for (Menu menuDB : ListMenuFood) {
        MenuDto menuDto = new MenuDto();
        menuDto.setMenuid(menuDB.getMenuid());
        menuDto.setMenuname(menuDB.getMenuname());
        menuDto.setPrice(menuDB.getPrice());
        menuDto.setImage(menuDB.getImage());
        menuDto.setCategoryName(menuDB.getCategory().getCategoryname());

//            menuDto.setRatingStar(productDB.getRatingStar());
//            menuDto.setImageName(productDB.getImageName());
//            menuDto.setManufacturerName(productDB.getManufacturer().getName().toString());
//            menuDto.setCategoryName(productDB.getCategory().getName());

        menuListDTO.add(menuDto);
    }

    return new ResponseEntity<>(menuListDTO, HttpStatus.OK);
}

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getItemByID(@PathVariable(name = "id") short id) {
        Menu menuItem = menuService.getItemByID(id);
        MenuDto menuDto = new MenuDto();
        menuDto.setMenuid(menuItem.getMenuid());
        menuDto.setImage(menuItem.getImage());
        menuDto.setMenuname(menuItem.getMenuname());
        menuDto.setPrice(menuItem.getPrice());
        menuDto.setCategoryName(menuItem.getCategory().getCategoryname().toString());
//        Set<String> menucategoryNames = new HashSet<>();
//        for (MenuCategory menucategoryname : menuItem.getMenucategory()) {
//            Category category = menucategoryname.getCategory();
//            menucategoryNames.add(category.getCategoryname());
//        }
//        menuDto.setMenucategory(menucategoryNames);

        return new ResponseEntity<>(menuDto, HttpStatus.CREATED);

    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?>upDateItemMenu(@PathVariable(name = "id") short id,
                                           @RequestBody MenuUpdate menuUpdate)
    {
        try {
            Menu menuUpdateMenu=menuService.upDateItemMenu(id,menuUpdate);
            MenuDto menuUpdateDto=new MenuDto();
            menuUpdateDto.setMenuid(menuUpdateMenu.getMenuid());
            menuUpdateDto.setMenuname(menuUpdateMenu.getMenuname());
            menuUpdateDto.setImage(menuUpdateMenu.getImage());
            menuUpdateDto.setPrice(menuUpdateMenu.getPrice());
            menuUpdateDto.setCategoryName(menuUpdateMenu.getCategory().getCategoryname().toString());
//        Set<String> menucategoryNames = new HashSet<>();
//        for (MenuCategory menucategoryname : menuUpdateMenu.getMenucategory()) {
//            Category category = menucategoryname.getCategory();
//            menucategoryNames.add(category.getCategoryname());
//        }
//        menuUpdateDto.setMenucategory(menucategoryNames);
            return new ResponseEntity<>(menuUpdateDto, HttpStatus.OK);
        }catch (Exception e) {
            // Log thông tin lỗi
            e.printStackTrace();
            // Hoặc có thể trả về một ResponseEntity với thông tin lỗi
            return new ResponseEntity<>("Error occurred during item creation", HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }
    
//    @PostMapping()
//    public ResponseEntity<?>createNewItem(@RequestBody MenuFormCreating menuFormCreating)
//    {
//      Menu menuCreating=menuService.createNewItem(menuFormCreating);
//      MenuDto menuNewDto=new MenuDto();
//        menuNewDto.setMenuid(menuCreating.getMenuid());
//        menuNewDto.setMenuname(menuCreating.getMenuname());
//        menuNewDto.setImage(menuCreating.getImage());
//        menuNewDto.setPrice(menuCreating.getPrice());
//        menuNewDto.setImage(menuCreating.getImage());
//        menuNewDto.setCategoryName(menuCreating.getCategory().getCategoryname());
//
////        Set<String> menucategoryNames = new HashSet<>();
////        for (MenuCategory menucategoryname : menuCreating.getMenucategory()) {
////            Category category = menucategoryname.getCategory();
////            menucategoryNames.add(category.getCategoryname());
////        }
////        menuNewDto.setMenucategory(menucategoryNames);
//
//        return new ResponseEntity<>(menuNewDto,HttpStatus.OK);
//    }
    @PostMapping
    public ResponseEntity<?>createNewItem(@RequestBody MenuFormCreating menuFormCreating)
    {
        try
        {
            Menu menuNewItem=menuService.createNewItem(menuFormCreating);
            MenuDto menuDtonew=new MenuDto();
            menuDtonew.setMenuid(menuNewItem.getMenuid());
            menuDtonew.setMenuname(menuNewItem.getMenuname());
            menuDtonew.setPrice(menuNewItem.getPrice());
            menuDtonew.setImage(menuNewItem.getImage());
            menuDtonew.setCategoryName(menuNewItem.getCategory().getCategoryname().toString());
            return new ResponseEntity<>(menuDtonew,HttpStatus.OK);
        }catch (Exception e) {
            // Log thông tin lỗi
            e.printStackTrace();
            // Hoặc có thể trả về một ResponseEntity với thông tin lỗi
            return new ResponseEntity<>("Error occurred during item creation", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    @DeleteMapping (value = "/{id}")
    public ResponseEntity<?>deleteItemMenu(@PathVariable(name   ="id")short id)
    {
        menuService.deleteItemMenu(id);
        return new ResponseEntity<>("Delete successfully",HttpStatus.OK);
        
    }
}
