/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.vti.service;

import java.util.List;
import org.springframework.security.core.userdetails.UserDetailsService;
import com.vti.entity.UserAccount;
import com.vti.form.UserAccountUpdating;
import com.vti.form.userAccountForFormCreating;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public interface IUserAccountService  extends UserDetailsService  {

    public List<UserAccount> getAllAccount();

    public UserAccount getUserAccountByID(short id);

    public UserAccount creatNewAccount(userAccountForFormCreating userAccountForFormCreating);

    public void deleteAccountById(short id);

    public UserAccount updateAccount(short id, UserAccountUpdating userAccountUpdating);


    
}
