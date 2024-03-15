/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.vti.service;

import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.vti.entity.UserAccount;
import com.vti.form.UserAccountUpdating;
import com.vti.form.userAccountForFormCreating;
import com.vti.repository.IUserAccountRepository;
import org.springframework.stereotype.Service;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
@Service
public class UserAccountService implements IUserAccountService {

    @Autowired
    private IUserAccountRepository userAccountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<UserAccount> getAllAccount() {
        List<UserAccount> listUserAccounts = userAccountRepository.findAll();
        return listUserAccounts;
    }

    @Override
    public UserAccount getUserAccountByID(short id) {
        UserAccount userAccount = userAccountRepository.findById(id).get();
        return userAccount;
    }

    @Override
    public UserAccount creatNewAccount(userAccountForFormCreating userAccountForFormCreating) {
        UserAccount userAccount = new UserAccount();

        userAccount.setUsername(userAccountForFormCreating.getUsername());
        userAccount.setPassword(passwordEncoder.encode(userAccountForFormCreating.getPassword()));
        userAccount.setFullname(userAccountForFormCreating.getFullname());
        userAccount.setEmail(userAccountForFormCreating.getEmail());
        userAccount.setPhone(userAccountForFormCreating.getPhone());
        userAccount.setAddress(userAccountForFormCreating.getAddress());
        userAccount.setCreateDate(userAccountForFormCreating.getCreateDate());
        userAccount.setCity(userAccountForFormCreating.getCity());
        userAccount.setCountry(userAccountForFormCreating.getCountry());
//        userAccount.setRole(userAccountForFormCreating.getRole());
        userAccount.setPicture(userAccountForFormCreating.getPicture());
        UserAccount userAccountNew = userAccountRepository.save(userAccount);
        return userAccountNew;
    }

    @Override
    public void deleteAccountById(short id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public UserAccount updateAccount(short id, UserAccountUpdating userAccountUpdating) {
        UserAccount userAccount = userAccountRepository.getReferenceById(id);
        userAccount.setUsername(userAccountUpdating.getUsername());
        userAccount.setPassword(passwordEncoder.encode(userAccountUpdating.getPassword()));
        userAccount.setFullname(userAccountUpdating.getFullname());
        userAccount.setEmail(userAccountUpdating.getEmail());
        userAccount.setPhone(userAccountUpdating.getPhone());
        userAccount.setAddress(userAccountUpdating.getAddress());
        userAccount.setCreateDate(userAccountUpdating.getCreateDate());
        userAccount.setCity(userAccountUpdating.getCity());
        userAccount.setCountry(userAccountUpdating.getCountry());
        userAccount.setPicture(userAccountUpdating.getPicture());
        UserAccount userAccountUpdate = userAccountRepository.save(userAccount);
        return userAccountUpdate;
    }

//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        UserAccount userAccount=userAccountRepository.findByUsername(username);
//        if(userAccount==null)
//        {
//            throw new UsernameNotFoundException(username);
//        } 
//        return new User(userAccount.getUsername(), userAccount.getPassword(), 
//        AuthorityUtils.createAuthorityList("user"));
//
//    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		Tìm thông tin Account theo Username nhận được
        UserAccount userAccount = userAccountRepository.findByUsername(username);
        UserDetails userDetails=new User(userAccount.getUsername()
                ,userAccount.getPassword()
                ,AuthorityUtils.createAuthorityList("user"));
//		Kiểm tra xem có dữ liệu dưới DB?
//        if (userAccount != null) {
//            return new User(userAccount.getUsername(),
//                    userAccount.getPassword(),
//                    AuthorityUtils.createAuthorityList("user"));
//
//        } else {
//            throw new UsernameNotFoundException(username);
//
//        }
        return  userDetails;

    }



}
