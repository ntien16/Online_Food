package com.vti.dto;

public class MenuCategoryDto {
    private short linkid;
    private short menuid;
    private short categoryid;

    public MenuCategoryDto() {
    }

    public MenuCategoryDto(short linkid, short menuid, short categoryid) {
        this.setLinkid(linkid);
        this.setMenuid(menuid);
        this.setCategoryid(categoryid);
    }

    public short getLinkid() {
        return linkid;
    }

    public void setLinkid(short linkid) {
        this.linkid = linkid;
    }

    public short getMenuid() {
        return menuid;
    }

    public void setMenuid(short menuid) {
        this.menuid = menuid;
    }

    public short getCategoryid() {
        return categoryid;
    }

    public void setCategoryid(short categoryid) {
        this.categoryid = categoryid;
    }
}
