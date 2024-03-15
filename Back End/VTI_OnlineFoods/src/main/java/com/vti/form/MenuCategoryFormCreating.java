package com.vti.form;

import com.vti.entity.Category;
import com.vti.entity.Menu;

public class MenuCategoryFormCreating {
    private short linkid;
    private Menu menuid;
    private Category categoryid;

    public MenuCategoryFormCreating() {
    }

    public MenuCategoryFormCreating(short linkid, Menu menuid, Category categoryid) {
        this.linkid = linkid;
        this.menuid = menuid;
        this.categoryid = categoryid;
    }

    public short getLinkid() {
        return linkid;
    }

    public void setLinkid(short linkid) {
        this.linkid = linkid;
    }

    public Menu getMenuid() {
        return menuid;
    }

    public void setMenuid(Menu menuid) {
        this.menuid = menuid;
    }

    public Category getCategoryid() {
        return categoryid;
    }

    public void setCategoryid(Category categoryid) {
        this.categoryid = categoryid;
    }
}
