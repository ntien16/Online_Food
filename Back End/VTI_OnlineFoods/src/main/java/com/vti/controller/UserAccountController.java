/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.vti.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;
import com.vti.dto.UserAccountDto;
import com.vti.entity.UserAccount;
import com.vti.form.UserAccountUpdating;
import com.vti.form.userAccountForFormCreating;
import com.vti.service.IUserAccountService;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */

@RestController
@RequestMapping(value = "/useraccounts")
@CrossOrigin("*")
public class UserAccountController {

    @Autowired
    IUserAccountService userAccountService;

    @GetMapping()
    public ResponseEntity<?> getAllAccount() {
        List<UserAccount> listUserAccount = userAccountService.getAllAccount();
        List<UserAccountDto> listUserAccountDto = listUserAccount.stream()
                .map(account -> {
                    UserAccountDto userAccountDto = new UserAccountDto();
                    userAccountDto.setAccountId(account.getAccountId());
                    userAccountDto.setUsername(account.getUsername());
                    userAccountDto.setPassword(account.getPassword());
                    userAccountDto.setFullname(account.getFullname());
                    userAccountDto.setEmail(account.getEmail());
                    userAccountDto.setPhone(account.getPhone());
                    userAccountDto.setAddress(account.getAddress());
                    userAccountDto.setCreateDate(account.getCreateDate());
                    userAccountDto.setCity(account.getCity());
                    userAccountDto.setCountry(account.getCountry());
//                    userAccountDto.setRole(account.getRole().toString());
                    userAccountDto.setPicture(account.getPicture());

                    // Sao chép các thuộc tính khác của Account vào AccountDto
                    return userAccountDto;
                })
                .collect(Collectors.toList());

        return new ResponseEntity<>(listUserAccountDto, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getAccountByID(@PathVariable(name = "id") short id) {
        UserAccount useraccount = userAccountService.getUserAccountByID(id);
        UserAccountDto userAccountDto = new UserAccountDto();
        userAccountDto.setAccountId(useraccount.getAccountId());
        userAccountDto.setUsername(useraccount.getUsername());
        userAccountDto.setPassword(useraccount.getPassword());
        userAccountDto.setFullname(useraccount.getFullname());
        userAccountDto.setEmail(useraccount.getEmail());
        userAccountDto.setPhone(useraccount.getPhone());
        userAccountDto.setAddress(useraccount.getAddress());
        userAccountDto.setCreateDate(useraccount.getCreateDate());
        userAccountDto.setCity(useraccount.getCity());
        userAccountDto.setCountry(useraccount.getCountry());
//        userAccountDto.setRole(useraccount.getRole().toString());
        userAccountDto.setPicture(useraccount.getPicture());
        return new ResponseEntity<>(userAccountDto, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> creatNewAccount(@RequestBody userAccountForFormCreating userAccountForFormCreating) {

        UserAccount useraccount = userAccountService.creatNewAccount(userAccountForFormCreating);

        UserAccountDto userAccountDto = new UserAccountDto();
        userAccountDto.setAccountId(useraccount.getAccountId());
        userAccountDto.setUsername(useraccount.getUsername());
        userAccountDto.setPassword(useraccount.getPassword());
        userAccountDto.setFullname(useraccount.getFullname());
        userAccountDto.setEmail(useraccount.getEmail());
        userAccountDto.setPhone(useraccount.getPhone());
        userAccountDto.setAddress(useraccount.getAddress());
        userAccountDto.setCreateDate(useraccount.getCreateDate());
        userAccountDto.setCity(useraccount.getCity());
        userAccountDto.setCountry(useraccount.getCountry());
//        userAccountDto.setRole(useraccount.getRole().toString());
        userAccountDto.setPicture(useraccount.getPicture());
        return new ResponseEntity<>(userAccountDto, HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateAccount(@PathVariable(name = "id") short id,
            @RequestBody UserAccountUpdating userAccountUpdating) {
        UserAccount useraccount = userAccountService.updateAccount(id, userAccountUpdating);

        UserAccountDto userAccountDto = new UserAccountDto();
//        userAccountDto.setAccountId(useraccount.getAccountId());
        userAccountDto.setUsername(useraccount.getUsername());
        userAccountDto.setPassword(useraccount.getPassword());
        userAccountDto.setFullname(useraccount.getFullname());
        userAccountDto.setEmail(useraccount.getEmail());
        userAccountDto.setPhone(useraccount.getPhone());
        userAccountDto.setAddress(useraccount.getAddress());
        userAccountDto.setCreateDate(useraccount.getCreateDate());
        userAccountDto.setCity(useraccount.getCity());
        userAccountDto.setCountry(useraccount.getCountry());
//        userAccountDto.setRole(useraccount.getRole().toString());
        userAccountDto.setPicture(useraccount.getPicture());
        return new ResponseEntity<>(userAccountDto, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteAccountById(@PathVariable(name = "id") short id) {
        userAccountService.deleteAccountById(id);
        return new ResponseEntity<>("Delete Sucess", HttpStatus.OK);

    }
}
