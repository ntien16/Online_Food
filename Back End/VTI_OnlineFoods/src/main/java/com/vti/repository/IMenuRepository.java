/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.vti.repository;

import com.vti.entity.Menu;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public interface IMenuRepository extends JpaRepository<Menu, Short> {

//    public Page<Menu> findAll(Pageable pageable);

    
    
}
