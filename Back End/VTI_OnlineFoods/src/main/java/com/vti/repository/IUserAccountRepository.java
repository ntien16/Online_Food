/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.vti.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vti.entity.UserAccount;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public interface IUserAccountRepository  extends JpaRepository<UserAccount, Short>{

    public UserAccount findByUsername(String username);
    
}
